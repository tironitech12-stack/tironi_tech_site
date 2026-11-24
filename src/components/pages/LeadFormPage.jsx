import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { getSiteText } from '../../content/siteContent';
import { INTEREST_OPTIONS, interestLabel } from '../../content/positioning';
import { getLeadAttribution } from '../../utils/leadAttribution';
import { applyPageMeta } from '../../utils/pageMeta';
import { trackFunnelEvent } from '../../utils/conversionTracking';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import CookieConsent from '../shared/CookieConsent';
import FloatingWhatsAppButton from '../ui/FloatingWhatsAppButton';
import '../../styles/theme.css';
import '../../styles/form.css';

const initialForm = { name: '', email: '', phone: '', company: '', interest: '', project: '', consent: false, website: '' };

export default function LeadFormPage() {
  const { languageOptions } = useLanguage();
  const t = getSiteText('pt');
  const formStarted = useRef(false);
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  useEffect(() => {
    document.documentElement.lang = 'pt-BR';
    const params = new URLSearchParams(window.location.search);
    const interest = interestLabel(params.get('interesse'));
    if (interest) setForm((current) => ({ ...current, interest }));
    applyPageMeta({
      title: 'Solicitar orçamento | Tironi Tech',
      description: 'Descreva o sistema, a integração ou o processo que sua empresa precisa melhorar e solicite um orçamento à Tironi Tech.',
      path: '/formulario',
      breadcrumbs: [
        { name: 'Início', path: '/' },
        { name: 'Diagnóstico', path: '/formulario' },
      ],
    });

  }, []);

  function updateField(event) {
    if (status === 'submitting') return;
    const { name, value, checked, type } = event.target;
    setForm((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }));
    if (status !== 'idle') {
      setStatus('idle');
      setMessage('');
    }
  }

  async function submit(event) {
    event.preventDefault();
    if (status === 'submitting') return;
    setStatus('submitting');
    setMessage('');
    try {
      const response = await fetch('/api/sendpulse-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, ...getLeadAttribution(), contactOrigin: new URLSearchParams(window.location.search).get('origem') || '' }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.message || 'Não foi possível enviar seus dados.');
      const origin = new URLSearchParams(window.location.search).get('origem') || 'direto';
      trackFunnelEvent('diagnostic_submit', { interest: form.interest, origem: origin });
      if (form.interest === 'Tironi Tech Club' || form.interest === 'Ferramentas da Tironi') {
        trackFunnelEvent('club_lead', { interest: form.interest });
      }
      if (form.interest === 'Desenvolvimento de um projeto específico') {
        trackFunnelEvent('development_lead', { interest: form.interest });
      }
      setStatus('success');
      setMessage('Recebemos seus dados. A equipe da Tironi Tech entrará em contato.');
      setForm(initialForm);
    } catch (error) {
      setStatus('error');
      setMessage(error.message || 'Ocorreu um erro. Tente novamente em alguns instantes.');
    }
  }

  return (
    <div className="tt2-page tt-lead-page">
      <div className="tt2-page-inner">
        <Navbar t={t} language="pt" setLanguage={() => {}} languageOptions={languageOptions} />
        <main className="tt-lead-main">
          <section className="tt-lead-intro" aria-labelledby="lead-page-title">
            <div className="tt-lead-intro-copy">
              <span className="tt-lead-kicker">CONTATO COMERCIAL</span>
              <h1 id="lead-page-title">Conte o que sua empresa precisa resolver</h1>
              <p>Descreva o processo, o sistema ou a integração. Vamos entender o cenário e indicar o próximo passo para avaliar o projeto.</p>
              <div className="tt-lead-expectations" aria-label="Próximas etapas">
                <article><strong>01</strong><span>Entendemos o cenário e a prioridade.</span></article>
                <article><strong>02</strong><span>Identificamos o primeiro recorte viável.</span></article>
                <article><strong>03</strong><span>Indicamos o próximo passo com clareza.</span></article>
              </div>
            </div>

            <form className="tt-lead-form" onSubmit={submit} onFocus={() => {
              if (!formStarted.current) {
                formStarted.current = true;
                trackFunnelEvent('lead_form_start', { interest: form.interest });
              }
            }}>
              <div className="tt-lead-form-head">
                <span>SEUS DADOS</span>
                <h2>Vamos conversar</h2>
                <p>Campos marcados são necessários para respondermos ao seu contato.</p>
              </div>

              <div className="tt-lead-fields">
                <label>
                  <span>Nome completo</span>
                  <input name="name" value={form.name} onChange={updateField} autoComplete="name" minLength="2" maxLength="100" required />
                </label>
                <label>
                  <span>E-mail profissional</span>
                  <input name="email" type="email" value={form.email} onChange={updateField} autoComplete="email" maxLength="160" required />
                </label>
                <label>
                  <span>Telefone / WhatsApp (opcional)</span>
                  <input name="phone" type="tel" value={form.phone} onChange={updateField} autoComplete="tel" inputMode="tel" minLength="8" maxLength="24" placeholder="+55 43 99999-9999" />
                </label>
                <label>
                  <span>Empresa</span>
                  <input name="company" value={form.company} onChange={updateField} autoComplete="organization" minLength="2" maxLength="120" required />
                </label>
                <label className="tt-lead-field-wide">
                  <span>Principal interesse</span>
                  <select name="interest" value={form.interest} onChange={updateField} required>
                    <option value="">Selecione uma opção</option>
                    {INTEREST_OPTIONS.map(([key, label]) => <option key={key} value={label}>{label}</option>)}
                  </select>
                </label>
                <label className="tt-lead-field-wide">
                  <span>O que sua empresa precisa resolver?</span>
                  <textarea name="project" value={form.project} onChange={updateField} rows="4" maxLength="900" placeholder="Ex.: conectar os pedidos do CRM ao ERP e acompanhar falhas." />
                </label>
                <label className="tt-lead-honeypot" aria-hidden="true">
                  <span>Website</span>
                  <input name="website" value={form.website} onChange={updateField} tabIndex="-1" autoComplete="off" />
                </label>
              </div>

              <label className="tt-lead-consent">
                <input name="consent" type="checkbox" checked={form.consent} onChange={updateField} required />
                <span>Autorizo a Tironi Tech a usar estes dados para responder meu contato e enviar comunicações relacionadas, conforme a <a href="/politica-privacidade">Política de Privacidade</a>.</span>
              </label>

              <button className="tt-lead-submit" type="submit" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Enviando…' : 'Enviar solicitação'}
                <span aria-hidden="true">→</span>
              </button>

              <div className={`tt-lead-status${status === 'success' ? ' is-success' : status === 'error' ? ' is-error' : ''}`} role="status" aria-live="polite">
                {message}
              </div>
            </form>
          </section>
        </main>
        <Footer t={t} contactEmail="tironi@tironitech.com" whatsappNumber="5543996676633" language="pt" setLanguage={() => {}} languageOptions={languageOptions} />
        <FloatingWhatsAppButton />
        <CookieConsent t={t} />
      </div>
    </div>
  );
}
