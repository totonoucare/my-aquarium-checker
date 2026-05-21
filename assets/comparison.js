
(function () {
  const DATA = window.AQUA_RAKUTEN_RECIPES || { recipes: {} };
  const select = document.getElementById('recipe-select');
  const mode = document.getElementById('comparison-mode');
  const button = document.getElementById('comparison-load');
  const result = document.getElementById('comparison-result');
  if (!select || !button || !result) return;

  const groups = {};
  Object.entries(DATA.recipes).forEach(([id, r]) => {
    const cat = r.category || 'その他';
    groups[cat] = groups[cat] || [];
    groups[cat].push([id, r]);
  });
  select.innerHTML = Object.entries(groups).map(([cat, items]) => `<optgroup label="${escapeHtml(cat)}">${items.map(([id, r]) => `<option value="${id}">${escapeHtml(r.label)}</option>`).join('')}</optgroup>`).join('');

  const qs = new URLSearchParams(location.search);
  if (qs.get('role') && DATA.recipes[qs.get('role')]) select.value = qs.get('role');

  button.addEventListener('click', load);
  mode.addEventListener('change', load);
  load();

  async function load() {
    const role = select.value;
    const m = mode.value;
    history.replaceState(null, '', `${location.pathname}?role=${encodeURIComponent(role)}&mode=${encodeURIComponent(m)}`);
    result.innerHTML = `<p class="loading-line">楽天APIから候補を取得中…</p>`;
    try {
      const res = await fetch(`/api/rakuten-products?recipeIds=${encodeURIComponent(role)}&mode=${encodeURIComponent(m)}`);
      const data = await res.json();
      result.innerHTML = (data.results || []).map(renderRecipeResult).join('');
    } catch (e) {
      result.innerHTML = `<p class="notice-line">取得に失敗しました。Cloudflare Functionsと環境変数を確認してください。</p>`;
    }
  }

  function renderRecipeResult(result) {
    const r = result.recipe || DATA.recipes[result.recipeId] || {};
    if (result.setupRequired) {
      return `<article class="recipe-result setup-required"><h2>${escapeHtml(r.label || result.recipeId)}</h2><p>${escapeHtml(result.message)}</p><a class="button ghost" target="_blank" rel="nofollow sponsored noopener" href="${escapeHtml(result.fallbackSearchUrl || '#')}">楽天検索で確認</a></article>`;
    }
    const cards = (result.items || []).map(renderProductCard).join('') || '<p class="small-note">候補が見つかりませんでした。</p>';
    return `<article class="recipe-result"><div class="recipe-head"><h2>${escapeHtml(r.label || result.recipeId)}</h2><span>${escapeHtml(r.category || '')}</span></div><p><strong>検索語：</strong>${escapeHtml(r.query || '')}</p><p><strong>選定意図：</strong>${escapeHtml(r.why || '')}</p><p class="small-note"><strong>確認：</strong>${escapeHtml(r.check || '')}</p><div class="product-grid">${cards}</div></article>`;
  }
  function renderProductCard(item) {
    const url = item.affiliateUrl || item.itemUrl || '#';
    return `<article class="api-product-card"><a href="${escapeHtml(url)}" target="_blank" rel="nofollow sponsored noopener">${item.imageUrl ? `<img src="${escapeHtml(item.imageUrl)}" alt="" loading="lazy">` : ''}</a><div class="api-product-body"><h3><a href="${escapeHtml(url)}" target="_blank" rel="nofollow sponsored noopener">${escapeHtml(item.itemName)}</a></h3><p class="price">${Number(item.itemPrice || 0).toLocaleString('ja-JP')}円</p><p class="meta">${escapeHtml(item.shopName || '')} / レビュー ${Number(item.reviewCount || 0).toLocaleString('ja-JP')}件 / ${item.reviewAverage || '-'}点</p><a class="button small" href="${escapeHtml(url)}" target="_blank" rel="nofollow sponsored noopener">楽天で見る</a></div></article>`;
  }
  function escapeHtml(s) { return String(s || '').replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }
})();
