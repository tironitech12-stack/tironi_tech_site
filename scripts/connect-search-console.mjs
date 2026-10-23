import process from 'node:process';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { createServer } from 'node:http';
import { randomBytes } from 'node:crypto';
import { OAuth2Client, CodeChallengeMethod } from 'google-auth-library';

const [clientFile, destination] = process.argv.slice(2);
if (!clientFile || !destination) {
  console.error('Uso: node scripts/connect-search-console.mjs CAMINHO_CLIENTE_JSON CAMINHO_CREDENCIAIS_JSON');
  process.exit(1);
}
const clientConfig = JSON.parse(await readFile(resolve(clientFile), 'utf8')).installed;
if (!clientConfig?.client_id || !clientConfig.client_secret) throw new Error('Use um cliente OAuth do tipo Aplicativo para computador.');
const destinationPath = resolve(destination);
const state = randomBytes(32).toString('hex');
let oauth;
let verifier;
let complete = false;
const server = createServer(async (request, response) => {
  const url = new URL(request.url, 'http://127.0.0.1');
  response.setHeader('Cache-Control', 'no-store');
  response.setHeader('Content-Type', 'text/plain; charset=utf-8');
  if (url.pathname !== '/oauth2callback' || url.searchParams.get('state') !== state || complete) {
    response.writeHead(400); response.end('Retorno inválido.'); return;
  }
  complete = true;
  try {
    if (url.searchParams.has('error') || !url.searchParams.get('code')) throw new Error('Autorização recusada.');
    const { tokens } = await oauth.getToken({ code: url.searchParams.get('code'), codeVerifier: verifier });
    if (!tokens.refresh_token) throw new Error('Não foi recebido refresh token.');
    await mkdir(dirname(destinationPath), { recursive: true });
    await writeFile(destinationPath, JSON.stringify({
      type: 'authorized_user', client_id: clientConfig.client_id,
      client_secret: clientConfig.client_secret, refresh_token: tokens.refresh_token,
    }), { mode: 0o600, flag: 'wx' });
    response.end('Search Console autorizado. Você pode fechar esta aba.');
    console.log('Credenciais salvas no destino informado. Nenhum segredo foi exibido.');
  } catch {
    response.writeHead(400); response.end('Não foi possível concluir. Confira consentimento e destino do arquivo.');
    console.error('Conexão OAuth falhou; nenhum segredo foi exibido.'); process.exitCode = 1;
  } finally { clearTimeout(timer); server.close(); }
});
await new Promise((done) => server.listen(0, '127.0.0.1', done));
const redirectUri = `http://127.0.0.1:${server.address().port}/oauth2callback`;
oauth = new OAuth2Client(clientConfig.client_id, clientConfig.client_secret, redirectUri);
const pkce = await oauth.generateCodeVerifierAsync();
verifier = pkce.codeVerifier;
console.log(oauth.generateAuthUrl({
  access_type: 'offline', prompt: 'consent', state,
  scope: ['https://www.googleapis.com/auth/webmasters.readonly'],
  code_challenge: pkce.codeChallenge, code_challenge_method: CodeChallengeMethod.S256,
}));
const timer = setTimeout(() => { server.close(); process.exitCode = 1; console.error('Prazo de autorização expirado.'); }, 10 * 60 * 1000);
