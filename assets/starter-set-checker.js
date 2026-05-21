
(function () {
  const DATA = window.AQUA_RAKUTEN_RECIPES || { recipes: {}, plans: {} };
  const TIER_LABELS = { low: '最小セット', standard: '標準セット', premium: '余裕セット' };
  const TIER_SUMMARIES = {
    low: 'まず始めるために必要な役割を絞った構成。足りない快適用品は後から追加。',
    standard: '初心者が後悔しにくいバランス型。管理用品・水温確認まで含める。',
    premium: '買い直しを減らし、見た目・管理のしやすさまで最初から整える。'
  };
  const DESIRED_TO_PLAN = {
    unknown: 'shoal', betta: 'betta', shoal: 'shoal', colorful: 'guppy', shrimp: 'shrimp', noheater: 'medaka', big: 'community60'
  };
  const SORT_LABELS = { balanced: 'レビュー件数重視', price: '安い順', rating: '高評価順' };

  const form = document.getElementById('starter-form');
  const result = document.getElementById('starter-result');
  if (!form || !result) return;

  function valueOf(name) {
    return new FormData(form).get(name);
  }

  function pickPlanId(values) {
    if (values.heater === 'no' && values.desired !== 'betta' && values.desired !== 'shrimp') return 'medaka';
    if (values.space === 'roomy' && values.desired === 'unknown') return 'community60';
    return DESIRED_TO_PLAN[values.desired] || 'shoal';
  }

  function pickTier(values) {
    if (values.budget === 'low') return 'low';
    if (values.budget === 'premium') return 'premium';
    return 'standard';
  }

  function roleCard(roleId) {
    const r = DATA.recipes[roleId];
    if (!r) return '';
    return `<li class="role-pill" data-role="${roleId}"><strong>${escapeHtml(r.label)}</strong><span>${escapeHtml(r.category)}</span></li>`;
  }

  function escapeHtml(s) {
    return String(s || '').replace(/[&<>'"]/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  }

  function yen(n) {
    return Number(n || 0).toLocaleString('ja-JP');
  }

  function buildResult(values) {
    const planId = pickPlanId(values);
    const tier = pickTier(values);
    const plan = DATA.plans[planId];
    const roles = plan.tiers[tier] || [];
    const altTiers = ['low', 'standard', 'premium'].filter((t) => t !== tier);
    const params = new URLSearchParams(values);
    params.set('plan', planId); params.set('tier', tier);
    const saveUrl = `${location.origin}${location.pathname}?${params.toString()}`;

    result.innerHTML = `
      <div class="result-head with-fish">
        <div>
          <p class="eyebrow">あなたへのおすすめ</p>
          <h2>${escapeHtml(plan.title)}：${TIER_LABELS[tier]}</h2>
          <p>${escapeHtml(plan.subtitle)}</p>
        </div>
        <img class="result-fish" src="${escapeHtml(plan.fishImage)}" alt="${escapeHtml(plan.title)}のイメージ" loading="lazy">
      </div>
      <div class="algorithm-box">
        <h3>このセットの選定ロジック</h3>
        <ol>
          <li>飼いたい魚・ヒーター可否・置き場所から、水槽プランを先に決定。</li>
          <li>予算感に応じて「最小・標準・余裕」の1案を最上部に表示。</li>
          <li>水槽セット商品ではなく、原則として役割ごとに単品候補を出して重複購入を避ける。</li>
          <li>楽天APIから価格・画像・レビュー付きの商品候補を取得し、除外キーワードと価格帯でノイズを落とす。</li>
        </ol>
      </div>
      ${plan.warnings.map((w) => `<p class="notice-line">⚠️ ${escapeHtml(w)}</p>`).join('')}
      <section class="tier-primary">
        <h3>${TIER_LABELS[tier]}</h3>
        <p>${TIER_SUMMARIES[tier]}</p>
        <ul class="role-list">${roles.map(roleCard).join('')}</ul>
        <div class="product-toolbar">
          <label>商品の並び：
            <select id="sort-mode">
              <option value="balanced">レビュー件数重視</option>
              <option value="price">安い順</option>
              <option value="rating">高評価順</option>
            </select>
          </label>
          <button class="button" id="load-products" type="button">楽天APIで候補を取得</button>
        </div>
        <div class="api-note">API未設定でも設計確認はできます。Cloudflareに環境変数を入れると、楽天アフィリURL付き候補が表示されます。</div>
        <div class="product-results" id="product-results"></div>
      </section>
      <section class="life-section">
        <h3>生体候補</h3>
        <p class="small-note">生体は水槽立ち上げ後、少数ずつ迎える前提です。配送条件・死着保証は販売ページで確認してください。</p>
        <div class="fish-product-grid" id="fish-product-grid"></div>
        <button class="ghost-button" id="load-fish-products" type="button">生体候補も楽天APIで見る</button>
      </section>
      <details class="compare-tiers">
        <summary>他の価格帯も比較する</summary>
        ${altTiers.map((t) => `
          <div class="alt-tier">
            <h4>${TIER_LABELS[t]}</h4>
            <p>${TIER_SUMMARIES[t]}</p>
            <ul class="role-list compact">${(plan.tiers[t] || []).map(roleCard).join('')}</ul>
            <a class="text-link" href="?${new URLSearchParams({...values, budget: t === 'low' ? 'low' : t === 'premium' ? 'premium' : 'standard'}).toString()}">${TIER_LABELS[t]}をメイン表示にする</a>
          </div>`).join('')}
      </details>
      <div class="save-box">
        <p><strong>この診断結果を保存</strong></p>
        <input readonly value="${escapeHtml(saveUrl)}" id="save-url">
        <button class="ghost-button" id="copy-url" type="button">URLをコピー</button>
      </div>
    `;

    document.getElementById('load-products')?.addEventListener('click', () => loadProducts(roles, 'product-results', document.getElementById('sort-mode')?.value || 'balanced'));
    document.getElementById('sort-mode')?.addEventListener('change', (e) => loadProducts(roles, 'product-results', e.target.value));
    document.getElementById('load-fish-products')?.addEventListener('click', () => loadProducts(plan.fishIds || [], 'fish-product-grid', 'review'));
    document.getElementById('copy-url')?.addEventListener('click', async () => {
      const input = document.getElementById('save-url');
      try { await navigator.clipboard.writeText(input.value); alert('診断結果URLをコピーしました'); } catch { input.select(); document.execCommand('copy'); }
    });
    // Load primary products automatically; keep fish products manual to avoid too many API calls.
    loadProducts(roles, 'product-results', 'balanced');
  }

  async function loadProducts(roleIds, targetId, mode) {
    const target = document.getElementById(targetId);
    if (!target || !roleIds.length) return;
    target.innerHTML = `<p class="loading-line">楽天APIから候補を取得中…</p>`;
    const url = `/api/rakuten-products?recipeIds=${encodeURIComponent(roleIds.join(','))}&mode=${encodeURIComponent(mode)}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      target.innerHTML = (data.results || []).map(renderRecipeResult).join('') || `<p class="small-note">候補が見つかりませんでした。</p>`;
    } catch (err) {
      target.innerHTML = `<p class="notice-line">商品候補の取得に失敗しました。Cloudflare Functionsの設定を確認してください。</p>`;
    }
  }

  function renderRecipeResult(result) {
    const r = result.recipe || DATA.recipes[result.recipeId] || { label: result.recipeId, category: '' };
    if (result.setupRequired) {
      return `<article class="recipe-result setup-required">
        <h4>${escapeHtml(r.label)}</h4>
        <p>${escapeHtml(result.message || '楽天APIの環境変数が未設定です。')}</p>
        <a class="button ghost" target="_blank" rel="nofollow sponsored noopener" href="${escapeHtml(result.fallbackSearchUrl || '#')}">楽天検索で確認</a>
      </article>`;
    }
    if (!result.ok) {
      return `<article class="recipe-result"><h4>${escapeHtml(r.label)}</h4><p class="notice-line">取得エラー：${escapeHtml(result.error || result.status || 'unknown')}</p></article>`;
    }
    const cards = (result.items || []).map(renderProductCard).join('') || `<p class="small-note">条件に合う候補が見つかりませんでした。検索レシピの価格帯・除外語を調整してください。</p>`;
    return `<article class="recipe-result">
      <div class="recipe-head"><h4>${escapeHtml(r.label)}</h4><span>${escapeHtml(r.category || '')}</span></div>
      <p class="selection-reason"><strong>なぜ必要？</strong> ${escapeHtml(r.why || '')}</p>
      <p class="small-note"><strong>確認：</strong>${escapeHtml(r.check || '')}</p>
      <div class="product-grid">${cards}</div>
    </article>`;
  }

  function renderProductCard(item) {
    const img = item.imageUrl ? `<img src="${escapeHtml(item.imageUrl)}" alt="" loading="lazy">` : '';
    const review = item.reviewCount ? `レビュー ${yen(item.reviewCount)}件 / ${item.reviewAverage || '-'}点` : 'レビュー情報なし';
    const shipping = item.postageFlag ? '送料無料' : '送料確認';
    return `<article class="api-product-card">
      <a href="${escapeHtml(item.affiliateUrl || item.itemUrl)}" target="_blank" rel="nofollow sponsored noopener">${img}</a>
      <div class="api-product-body">
        <h5><a href="${escapeHtml(item.affiliateUrl || item.itemUrl)}" target="_blank" rel="nofollow sponsored noopener">${escapeHtml(item.itemName)}</a></h5>
        <p class="price">${yen(item.itemPrice)}円</p>
        <p class="meta">${escapeHtml(item.shopName)} / ${review} / ${shipping}</p>
        <a class="button small" href="${escapeHtml(item.affiliateUrl || item.itemUrl)}" target="_blank" rel="nofollow sponsored noopener">楽天で見る</a>
      </div>
    </article>`;
  }

  function submitFromForm(event) {
    if (event) event.preventDefault();
    const values = Object.fromEntries(new FormData(form).entries());
    buildResult(values);
    history.replaceState(null, '', `${location.pathname}?${new URLSearchParams(values).toString()}`);
  }

  function hydrateFromQuery() {
    const qs = new URLSearchParams(location.search);
    let has = false;
    ['desired', 'budget', 'space', 'care', 'heater'].forEach((name) => {
      const value = qs.get(name);
      if (value) {
        const input = form.querySelector(`[name="${name}"][value="${CSS.escape(value)}"]`);
        if (input) { input.checked = true; has = true; }
      }
    });
    if (has) submitFromForm();
  }

  form.addEventListener('submit', submitFromForm);
  hydrateFromQuery();
})();
