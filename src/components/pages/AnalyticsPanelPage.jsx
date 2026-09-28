import { useCallback, useEffect, useMemo, useState } from 'react';
import { LogoMark } from '../layout/Navbar';
import '../../styles/panel.css';

const numberFormatter = new Intl.NumberFormat('pt-BR');
const percentFormatter = new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 1 });

function firstNumber(source, keys) {
  if (!source || typeof source !== 'object') return null;
  for (const key of keys) {
    const value = source[key];
    if (typeof value === 'number' && Number.isFinite(value)) return value;
    if (typeof value === 'string' && value.trim() !== '' && Number.isFinite(Number(value))) return Number(value);
  }
  for (const value of Object.values(source)) {
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      const match = firstNumber(value, keys);
      if (match !== null) return match;
    }
  }
  return null;
}

function rowsFrom(payload) {
  if (Array.isArray(payload)) return payload;
  if (!payload || typeof payload !== 'object') return [];
  for (const key of ['data', 'rows', 'results', 'items']) {
    if (Array.isArray(payload[key])) return payload[key];
    if (payload[key] && typeof payload[key] === 'object') {
      const nested = rowsFrom(payload[key]);
      if (nested.length) return nested;
    }
  }
  return [];
}

function labelFrom(row, keys) {
  for (const key of keys) if (typeof row?.[key] === 'string' && row[key]) return row[key];
  if (typeof row?.key === 'string') return row.key;
  if (typeof row?.dimension === 'string') return row.dimension;
  return 'Não identificado';
}

function countFrom(row) {
  return firstNumber(row, ['pageviews', 'views', 'visits', 'count', 'total', 'value']) || 0;
}

function formatCount(value) {
  return value === null ? '—' : numberFormatter.format(Math.round(value));
}

function formatPercent(value) {
  if (value === null) return '—';
  const normalized = value > 0 && value <= 1 ? value * 100 : value;
  return `${percentFormatter.format(normalized)}%`;
}

function MiniLineChart({ rows }) {
  const points = useMemo(() => {
    if (!rows.length) return '';
    const values = rows.map(countFrom);
    const max = Math.max(...values, 1);
    return values.map((value, index) => {
      const x = rows.length === 1 ? 50 : (index / (rows.length - 1)) * 100;
      const y = 88 - (value / max) * 72;
      return `${x},${y}`;
    }).join(' ');
  }, [rows]);

  if (!points) return <div className="tt-panel-chart-empty">Os dados diários aparecerão após a conexão.</div>;
  return (
    <svg className="tt-panel-chart" viewBox="0 0 100 100" preserveAspectRatio="none" role="img" aria-label="Evolução de acessos no período">
      <defs>
        <linearGradient id="panel-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#47c7ff" stopOpacity="0.38" />
          <stop offset="1" stopColor="#47c7ff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <line x1="0" y1="88" x2="100" y2="88" className="tt-panel-grid-line" />
      <polygon points={`0,88 ${points} 100,88`} fill="url(#panel-area)" />
      <polyline points={points} className="tt-panel-chart-line" />
    </svg>
  );
}

function Login({ onSuccess }) {
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  async function submit(event) {
    event.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      const response = await fetch('/api/panel-login', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ password }),
      });
      const body = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(body.message || 'Não foi possível entrar.');
      onSuccess();
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="tt-panel-login-shell">
      <section className="tt-panel-login-card" aria-labelledby="panel-login-title">
        <a className="tt-panel-brand" href="/" aria-label="Voltar para Tironi Tech"><LogoMark size={46} /><span><strong>TironiTech</strong><small>Intelligence</small></span></a>
        <p className="tt-panel-eyebrow">PAINEL PRIVADO</p>
        <h1 id="panel-login-title">Dados para melhorar cada página.</h1>
        <p className="tt-panel-login-copy">Acompanhe tráfego, artigos, retenção e gravações de experiência em um só lugar.</p>
        <form onSubmit={submit} className="tt-panel-login-form">
          <label htmlFor="panel-password">Senha de acesso</label>
          <input id="panel-password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} autoComplete="current-password" required autoFocus />
          <button type="submit" disabled={loading}>{loading ? 'Entrando…' : 'Entrar no painel'}<span aria-hidden="true">→</span></button>
          <p className="tt-panel-form-message" role="status" aria-live="polite">{message}</p>
        </form>
      </section>
    </main>
  );
}

function DataTable({ title, subtitle, rows, labelKeys, empty }) {
  const normalized = rows.map((row) => ({ label: labelFrom(row, labelKeys), count: countFrom(row) })).sort((a, b) => b.count - a.count);
  const max = Math.max(...normalized.map((row) => row.count), 1);
  return (
    <section className="tt-panel-card tt-panel-list-card">
      <header><div><h2>{title}</h2><p>{subtitle}</p></div></header>
      {normalized.length ? <ol className="tt-panel-ranking">{normalized.map((row, index) => (
        <li key={`${row.label}-${index}`}>
          <span className="tt-panel-rank">{String(index + 1).padStart(2, '0')}</span>
          <div><strong title={row.label}>{row.label}</strong><span style={{ '--panel-bar': `${Math.max(3, (row.count / max) * 100)}%` }} /></div>
          <b>{formatCount(row.count)}</b>
        </li>
      ))}</ol> : <p className="tt-panel-empty">{empty}</p>}
    </section>
  );
}

export default function AnalyticsPanelPage() {
  const [auth, setAuth] = useState('checking');
  const [days, setDays] = useState(30);
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.documentElement.lang = 'pt-BR';
    document.title = 'Painel de inteligência | Tironi Tech';
    let robots = document.head.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement('meta');
      robots.name = 'robots';
      document.head.appendChild(robots);
    }
    robots.content = 'noindex, nofollow, noarchive';
  }, []);

  const load = useCallback(async (selectedDays) => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`/api/panel-analytics?days=${selectedDays}`, { headers: { Accept: 'application/json' } });
      const body = await response.json().catch(() => ({}));
      if (response.status === 401) {
        setAuth('anonymous');
        setData(null);
        return;
      }
      setAuth('authenticated');
      if (!response.ok) throw new Error(body.message || 'Não foi possível carregar o painel.');
      setData(body);
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { load(days); }, [days, load]);

  async function logout() {
    await fetch('/api/panel-logout', { method: 'POST' }).catch(() => {});
    setAuth('anonymous');
    setData(null);
  }

  if (auth === 'checking') return <main className="tt-panel-loading" role="status"><LogoMark size={54} /><span>Preparando painel…</span></main>;
  if (auth === 'anonymous') return <Login onSuccess={() => { setAuth('checking'); load(days); }} />;

  const summary = data?.summary || {};
  const dailyRows = rowsFrom(data?.daily);
  const pageRows = rowsFrom(data?.pages).filter((row) => labelFrom(row, ['requestPath', 'path']).startsWith('/blog/'));
  const referrerRows = rowsFrom(data?.referrers);
  const deviceRows = rowsFrom(data?.devices);
  const views = firstNumber(summary, ['pageviews', 'views', 'visits', 'count', 'total']);
  const visitors = firstNumber(summary, ['visitors', 'uniqueVisitors', 'uniques']);
  const bounce = firstNumber(summary, ['bounceRate', 'bounce_rate', 'bounce']);
  const sessions = firstNumber(summary, ['sessions']);

  return (
    <main className="tt-panel-page">
      <header className="tt-panel-topbar">
        <a className="tt-panel-brand" href="/"><LogoMark size={40} /><span><strong>TironiTech</strong><small>Intelligence</small></span></a>
        <nav aria-label="Controles do painel">
          <div className="tt-panel-range" aria-label="Período analisado">{[7, 30, 90].map((range) => <button key={range} className={days === range ? 'is-active' : ''} onClick={() => setDays(range)}>{range} dias</button>)}</div>
          <button className="tt-panel-quiet-button" onClick={logout}>Sair</button>
        </nav>
      </header>

      <div className="tt-panel-content">
        <section className="tt-panel-heading">
          <div><p className="tt-panel-eyebrow">VISÃO GERAL</p><h1>Qualidade do site em números.</h1><p>Tráfego, conteúdo e comportamento para orientar as próximas melhorias.</p></div>
          <div className={`tt-panel-live${loading || error ? ' is-loading' : ''}`}><span />{loading ? 'Atualizando' : error ? 'Aguardando conexão' : 'Dados atualizados'}</div>
        </section>

        {error ? <section className="tt-panel-notice"><strong>Conexão pendente</strong><p>{error}</p><button onClick={() => load(days)}>Tentar novamente</button></section> : null}

        <section className="tt-panel-metrics" aria-label="Indicadores principais">
          <article><span>Acessos</span><strong>{formatCount(views)}</strong><small>visualizações no período</small></article>
          <article><span>Visitantes</span><strong>{formatCount(visitors)}</strong><small>pessoas únicas estimadas</small></article>
          <article><span>Taxa de rejeição</span><strong>{formatPercent(bounce)}</strong><small>sessões sem nova interação</small></article>
          <article><span>Sessões</span><strong>{formatCount(sessions)}</strong><small>jornadas iniciadas</small></article>
        </section>

        <section className="tt-panel-grid tt-panel-grid-overview">
          <article className="tt-panel-card tt-panel-trend-card">
            <header><div><h2>Evolução dos acessos</h2><p>Visualizações ao longo dos últimos {days} dias</p></div><strong>{formatCount(views)}</strong></header>
            <MiniLineChart rows={dailyRows} />
          </article>
          <article className="tt-panel-card tt-panel-recordings-card">
            <span className="tt-panel-record-icon" aria-hidden="true">●</span>
            <h2>Gravações de experiência</h2>
            <p>Veja navegação, cliques, rolagem e pontos de abandono das sessões que autorizaram Analytics.</p>
            {data?.recordingsUrl ? <a href={data.recordingsUrl} target="_blank" rel="noreferrer">Abrir gravações no Clarity <span>↗</span></a> : <span className="tt-panel-setup-label">Clarity aguardando configuração</span>}
          </article>
        </section>

        <section className="tt-panel-grid tt-panel-grid-lists">
          <DataTable title="Artigos mais vistos" subtitle="Conteúdos que mais atraíram leitura" rows={pageRows} labelKeys={['requestPath', 'path', 'route']} empty="Os artigos aparecerão assim que houver dados no período." />
          <DataTable title="Origens de tráfego" subtitle="De onde os visitantes chegaram" rows={referrerRows} labelKeys={['referrer', 'source']} empty="Nenhuma origem disponível no período." />
          <DataTable title="Dispositivos" subtitle="Como o público acessa o site" rows={deviceRows} labelKeys={['deviceType', 'device']} empty="Nenhum dispositivo disponível no período." />
        </section>

        <footer className="tt-panel-footer"><span>Dados agregados e privados.</span><span>{data?.generatedAt ? `Atualizado em ${new Date(data.generatedAt).toLocaleString('pt-BR')}` : 'Aguardando conexão com a fonte de dados.'}</span></footer>
      </div>
    </main>
  );
}
