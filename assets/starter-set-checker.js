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
  const ENTRY_LABELS = {
    species: '生体から逆算',
    space: '置き場所から逆算',
    style: '雰囲気・管理しやすさから逆算',
    none: 'おまかせ'
  };

  const form = document.getElementById('starter-form');
  const result = document.getElementById('starter-result');
  if (!form || !result) return;

  function pickPlanId(values) {
    if (values.entry === 'species') {
      return DESIRED_TO_PLAN[values.desired] || 'shoal';
    }
    if (values.heater === 'no' && values.desired !== 'betta' && values.desired !== 'shrimp') return 'medaka';
    if (values.space === 'roomy' && values.desired === 'unknown') return 'community60';
    return DESIRED_TO_PLAN[values.desired] || 'shoal';
  }

  function buildSpeciesAdvice(values) {
    const recommended = [];
    const avoid = [];

    if (values.heater === 'no') {
      recommended.push('アカヒレ', 'メダカ', 'ミナミヌマエビ');
      avoid.push('グリーンネオンテトラ（ヒーター前提）', 'ベタ（低温管理が難しい）');
    } else if (values.desired === 'betta') {
      recommended.push('ベタ単独飼育', '石巻貝（相性確認のうえ補助役）');
      avoid.push('追いかけ行動が出やすい小型魚との安易な混泳');
    } else if (values.desired === 'shoal') {
      recommended.push('ネオンテトラ', 'グリーンネオンテトラ', 'ラスボラ系');
      avoid.push('導入初期の過密投入');
    } else {
      recommended.push('アカヒレ', 'グッピー', 'コリドラス・ピグミー');
      avoid.push('管理頻度に対して過密な匹数設定');
    }

    if (values.care === 'easy') {
      recommended.push('石巻貝（コケ取り補助）');
      avoid.push('高難度な水草メインレイアウトの同時スタート');
    }

    return { recommended: [...new Set(recommended)], avoid: [...new Set(avoid)] };
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

  function resolveFishRoleIds(planId, plan) {
    if (!plan) return [];
    if (planId === 'betta') return ['live_betta'];

    const ids = [];
    const push = (id) => { if (id && !ids.includes(id)) ids.push(id); };
    (plan.fishIds || []).forEach(push);
    for (const categoryId of (plan.fishCategoryIds || [])) {
      const category = (DATA.fishCategories || {})[categoryId];
      (category?.fishIds || []).forEach(push);
    }
    return ids.slice(0, 3);
  }

  function buildResult(values) {
    const planId = pickPlanId(values);
    const tier = pickTier(values);
    const plan = DATA.plans[planId];
    const roles = plan.tiers[tier] || [];
    const altTiers = ['low', 'standard', 'premium'].filter((t) => t !== tier);
    const fishRoleIds = resolveFishRoleIds(planId, plan);
    const speciesAdvice = buildSpeciesAdvice(values);
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
        <h3>このセットの考え方</h3>
        <ol>
          <li>診断入口「${escapeHtml(ENTRY_LABELS[values.entry] || ENTRY_LABELS.none)}」に合わせて、生体候補と用品セットの提案バランスを調整しています。</li>
          <li>飼いたい魚・ヒーター可否・置き場所から、無理の少ない水槽プランを選びます。</li>
          <li>予算感に合わせて「最小・標準・余裕」のうち、今の条件に近い1案を先に表示します。</li>
          <li>水槽セットに同梱されがちな用品は、買う前に販売ページで重複がないか確認してください。</li>
          <li>価格やレビューは変動するため、購入前に販売ページの最新情報を確認してください。</li>
        </ol>
      </div>
      <section class="life-section">
        <h3>生体候補（理由つき）</h3>
        <p class="small-note">最初は少数導入を前提にしています。水槽の立ち上げ直後は特に保守的に運用してください。</p>
        <p><strong>この条件で飼いやすい候補：</strong>${speciesAdvice.recommended.map(escapeHtml).join(' / ')}</p>
        <p><strong>この条件では避けたい候補：</strong>${speciesAdvice.avoid.map(escapeHtml).join(' / ')}</p>
      </section>
      ${plan.warnings.map((w) => `<p class="notice-line">⚠️ ${escapeHtml(w)}</p>`).join('')}
      <div class="save-box">
        <p><strong>この診断結果を保存</strong></p>
        <input readonly value="${escapeHtml(saveUrl)}" id="save-url">
        <button class="ghost-button" id="copy-url" type="button">URLをコピー</button>
      </div>
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
          <button class="button" id="load-products" type="button">商品候補を更新</button>
        </div>
        <div class="api-note">候補は価格・在庫・レビューが変動します。購入前に販売ページで内容を確認してください。</div>
        <div class="product-results" id="product-results"></div>
      </section>
      <section class="life-section">
        <h3>生体候補</h3>
        <p class="small-note">生体は水槽立ち上げ後、少数ずつ迎える前提です。配送条件・死着保証は販売ページで確認してください。</p>
        <div class="fish-product-grid" id="fish-product-grid"></div>
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
    `;

    document.getElementById('load-products')?.addEventListener('click', () => loadProducts(roles, 'product-results', document.getElementById('sort-mode')?.value || 'balanced'));
    document.getElementById('sort-mode')?.addEventListener('change', (e) => loadProducts(roles, 'product-results', e.target.value));
    document.getElementById('copy-url')?.addEventListener('click', async () => {
      const input = document.getElementById('save-url');
      try { await navigator.clipboard.writeText(input.value); alert('診断結果URLをコピーしました'); } catch { input.select(); document.execCommand('copy'); }
    });
    loadProducts(roles, 'product-results', 'balanced');
    loadProducts(fishRoleIds, 'fish-product-grid', 'review');
  }

  async function loadProducts(roleIds, targetId, mode) {
    const target = document.getElementById(targetId);
    if (!target || !roleIds.length) return;
    target.innerHTML = `<p class="loading-line">商品候補を取得中…</p>`;
    const url = `/api/rakuten-products?recipeIds=${encodeURIComponent(roleIds.join(','))}&mode=${encodeURIComponent(mode)}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      target.innerHTML = (data.results || []).map(renderRecipeResult).join('') || `<p class="small-note">候補が見つかりませんでした。</p>`;
    } catch (err) {
      target.innerHTML = `<p class="notice-line">商品候補を取得できませんでした。時間をおいて再度お試しください。</p>`;
    }
  }

  function renderRecipeResult(result) {
    const r = result.recipe || DATA.recipes[result.recipeId] || { label: result.recipeId, category: '' };
    if (result.setupRequired) {
      return `<article class="recipe-result setup-required">
        <h4>${escapeHtml(r.label)}</h4>
        <p>${escapeHtml(result.message || '商品候補を準備中です。')}</p>
        <a class="button ghost" target="_blank" rel="nofollow sponsored noopener" href="${escapeHtml(result.fallbackSearchUrl || '#')}">楽天検索で確認</a>
      </article>`;
    }
    if (!result.ok) {
      return `<article class="recipe-result"><h4>${escapeHtml(r.label)}</h4><p class="notice-line">商品候補を取得できませんでした。時間をおいて再度お試しください。</p></article>`;
    }
    const cards = renderRecipeCards(result.items || []);
    return `<article class="recipe-result">
      <div class="recipe-head"><h4>${escapeHtml(r.label)}</h4><span>${escapeHtml(r.category || '')}</span></div>
      <p class="selection-reason"><strong>なぜ必要？</strong> ${escapeHtml(r.why || '')}</p>
      <p class="small-note"><strong>確認：</strong>${escapeHtml(r.check || '')}</p>
      <div class="product-grid">${cards}</div>
    </article>`;
  }

  function renderRecipeCards(items) {
    if (!items.length) return `<p class="small-note">条件に合う候補が見つかりませんでした。別の価格帯や条件でも確認してみてください。</p>`;
    const first = renderProductCard(items[0]);
    const rest = items.slice(1).map(renderProductCard).join('');
    if (!rest) return `<div class="product-grid">${first}</div>`;
    return `<div class="product-grid">${first}</div><details class="more-products"><summary>他${items.length - 1}件の候補を見る</summary><div class="product-grid">${rest}</div></details>`;
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
    if (event) {
      setTimeout(() => result.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
    }
  }

  function hydrateFromQuery() {
    const qs = new URLSearchParams(location.search);
    let has = false;
    ['entry', 'desired', 'budget', 'space', 'care', 'heater'].forEach((name) => {
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
