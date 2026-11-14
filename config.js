// Apps Script 網頁應用程式網址（資料存在 Google 試算表）
const API_URL = 'https://script.google.com/macros/s/AKfycbwbfDXvWQFsyK7k7qcphLOPc_x64tXX7B3xQvZYQ_lmJ2r-ATCGXhKcL7dnmPm4A44n/exec';

async function apiGet(params) {
  const u = new URL(API_URL);
  Object.entries(params).forEach(([k, v]) => u.searchParams.set(k, v));
  const j = await (await fetch(u)).json();
  if (!j.ok) throw new Error(j.error);
  return j.data;
}
async function apiPost(body) {
  const r = await fetch(API_URL, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(body) });
  const j = await r.json();
  if (!j.ok) throw new Error(j.error);
  return j.data;
}
function viewKey(force) {
  let k = localStorage.getItem('emba_key');
  if (!k || force) { k = (prompt('請輸入通關碼') || '').trim(); localStorage.setItem('emba_key', k); }
  return k;
}
