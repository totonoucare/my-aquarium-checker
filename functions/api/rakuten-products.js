const RECIPES = {
  tank_20: { label: '小型水槽 20cm前後', category: '水槽', query: 'ガラス水槽 20cm アクアリウム', ng: '中古 訳あり 金魚鉢 メダカ鉢 プラケース 虫かご', minPrice: 900, maxPrice: 6500, why: 'かなり省スペースで始めたい人向け。水量が少ないので飼育数は控えめに。', check: '実水量・フタの有無・設置できる奥行きを確認。' },
  tank_30: { label: '水槽 30cm前後', category: '水槽', query: '30cm 水槽 ガラス アクアリウム', ng: '中古 訳あり 金魚鉢 メダカ鉢 セット フィルター付き', minPrice: 1500, maxPrice: 9000, why: 'ベタ・小型魚少数・エビ水槽の入門で扱いやすい標準サイズ。', check: '水槽台・棚の耐荷重、フタの有無、実水量を確認。' },
  tank_45: { label: '水槽 45cm前後', category: '水槽', query: '45cm 水槽 ガラス アクアリウム', ng: '中古 訳あり 金魚鉢 メダカ鉢 セット フィルター付き', minPrice: 2500, maxPrice: 14000, why: '小型魚の群泳や混泳で、30cmより水量の余裕を取りたい人向け。', check: '重量が増えるため、置き場所と耐荷重を確認。' },
  tank_60: { label: '水槽 60cm前後', category: '水槽', query: '60cm 水槽 ガラス アクアリウム', ng: '中古 訳あり 金魚鉢 メダカ鉢 セット フィルター付き', minPrice: 4500, maxPrice: 22000, why: '魚数・水草・レイアウトの自由度を上げたい人向け。水量が安定しやすい。', check: '専用台レベルの耐荷重、設置スペース、メンテ動線を確認。' },
  filter_low_flow: { label: '弱水流フィルター', category: 'フィルター', query: 'ベタ 水流 弱い フィルター 水槽', ng: '中古 訳あり 交換用 ろ材のみ カートリッジのみ 部品', minPrice: 700, maxPrice: 5000, why: 'ベタや稚魚・エビなど、強い水流が苦手な構成で優先。', check: '対応水量と水流調整のしやすさを確認。' },
  filter_small: { label: '小型水槽フィルター', category: 'フィルター', query: '30cm 水槽 フィルター 外掛け 静音', ng: '中古 訳あり 交換用 ろ材のみ カートリッジのみ 部品', minPrice: 800, maxPrice: 6500, why: '30cm前後の水槽でろ過を確保する基本用品。', check: '対応水槽サイズ・交換ろ材・水流調整の有無を確認。' },
  filter_medium: { label: '45〜60cm向けフィルター', category: 'フィルター', query: '45cm 60cm 水槽 フィルター 外掛け 静音', ng: '中古 訳あり 交換用 ろ材のみ カートリッジのみ 部品', minPrice: 1200, maxPrice: 9000, why: '魚数が増える水槽で、ろ過能力を確保するための候補。', check: '対応水量、設置幅、交換ろ材の入手性を確認。' },
  heater_betta: { label: 'ベタ・小型水槽ヒーター', category: 'ヒーター', query: 'ベタ ヒーター 小型水槽 オートヒーター', ng: '中古 訳あり 爬虫類 部品 カバーのみ', minPrice: 900, maxPrice: 6500, why: 'ベタなど熱帯魚の水温管理に。冬場・室温低下がある部屋では重要。', check: '必ず対応水量・設定温度・空焚き防止を確認。' },
  heater_30: { label: '30cm水槽ヒーター', category: 'ヒーター', query: '30cm 水槽 ヒーター オートヒーター 熱帯魚', ng: '中古 訳あり 爬虫類 部品 カバーのみ', minPrice: 1200, maxPrice: 7000, why: '小型熱帯魚水槽の水温を安定させるための基本用品。', check: '対応水量・W数・安全機能を確認。' },
  heater_45_60: { label: '45〜60cm水槽ヒーター', category: 'ヒーター', query: '45cm 60cm 水槽 ヒーター 熱帯魚', ng: '中古 訳あり 爬虫類 部品 カバーのみ', minPrice: 1800, maxPrice: 9000, why: '水量のある水槽で水温を安定させる候補。', check: '水量に対してW数不足にならないか確認。' },
  thermometer: { label: '水温計', category: '水質・管理', query: '水槽 水温計 デジタル アクアリウム', ng: '中古 訳あり 業務用 部品', minPrice: 300, maxPrice: 2500, why: 'ヒーター有無に関わらず、水温確認の基本。', check: '見やすさ・電池式/貼付式・設置方法を確認。' },
  chlorine_remover: { label: 'カルキ抜き', category: '水質・管理', query: 'アクアリウム カルキ抜き 淡水 水槽', ng: '中古 訳あり 詰め替え 空容器', minPrice: 300, maxPrice: 2500, why: '水換え・立ち上げ時の基本用品。水道水を使うなら必要。', check: '淡水対応、使用量、容量を確認。' },
  bacteria: { label: 'バクテリア剤', category: '水質・管理', query: '水槽 バクテリア剤 立ち上げ 淡水', ng: '中古 訳あり 海水専用 詰め替え 空容器', minPrice: 500, maxPrice: 3000, why: '立ち上げ初期の不安を下げたい人向け。必須ではないが初心者には安心材料。', check: '淡水対応、使い方、開封後の保管を確認。' },
  cleaner_small: { label: '小型水槽 掃除用品', category: '掃除', query: '小型水槽 掃除 水換え ポンプ クリーナー', ng: '中古 訳あり 業務用 部品 交換用', minPrice: 500, maxPrice: 3500, why: '水換え・底の汚れ取りに使う基本用品。', check: '水槽サイズに対して大きすぎないか確認。' },
  net: { label: '魚用ネット', category: '掃除', query: '熱帯魚 ネット 小型 水槽', ng: '中古 訳あり 大型 錦鯉', minPrice: 200, maxPrice: 1500, why: '生体の移動やメンテであると便利。', check: '水槽サイズに合う小さめを選ぶ。' },
  led_small: { label: '小型水槽LED', category: 'ライト', query: '30cm 水槽 LEDライト アクアリウム', ng: '中古 訳あり 部品 交換用 爬虫類', minPrice: 1000, maxPrice: 7000, why: '観賞性を上げ、生活リズムも作りやすい。水草をやるなら優先度高め。', check: '対応水槽幅、明るさ、タイマー有無を確認。' },
  led_45_60: { label: '45〜60cm水槽LED', category: 'ライト', query: '45cm 60cm 水槽 LEDライト アクアリウム', ng: '中古 訳あり 部品 交換用 爬虫類', minPrice: 2500, maxPrice: 12000, why: '大きめ水槽や水草レイアウトで見た目を整えたい人向け。', check: '水槽幅への対応、光量、設置方法を確認。' },
  bottom_sand: { label: '底砂・ソイル', category: 'レイアウト', query: '水槽 底砂 ソイル 初心者 淡水', ng: '中古 訳あり 海水 サンゴ砂 メダカ鉢', minPrice: 600, maxPrice: 3500, why: '見た目と水草・生体の落ち着きに関わる。', check: '水質に影響するタイプか、必要量が水槽に合うか確認。' },
  hideout: { label: '隠れ家・シェルター', category: 'レイアウト', query: '水槽 隠れ家 シェルター ベタ エビ', ng: '中古 訳あり 爬虫類 大型', minPrice: 400, maxPrice: 2500, why: 'ベタ・エビ・小型魚のストレス軽減と見た目づくりに。', check: '角が鋭すぎないか、魚が挟まらないか確認。' },
  water_plants: { label: '初心者向け水草', category: 'レイアウト', query: '水草 初心者 アヌビアス ウィローモス 水槽', ng: '中古 訳あり 種子 タネ 海藻', minPrice: 500, maxPrice: 3500, why: 'エビ・小型魚の隠れ家にもなり、見た目を整えやすい。', check: '農薬・無農薬表記、育成難度、CO2不要か確認。' },
  food_tropical: { label: '小型熱帯魚の餌', category: '餌', query: '小型熱帯魚 餌 フード テトラ グッピー', ng: '中古 訳あり 大型魚 金魚 鯉 冷凍', minPrice: 250, maxPrice: 1800, why: 'ネオンテトラ・グッピー等の入門水槽に。', check: '粒サイズと対象魚を確認。' },
  food_betta: { label: 'ベタの餌', category: '餌', query: 'ベタ 餌 フード', ng: '中古 訳あり 大型魚 金魚 鯉 冷凍', minPrice: 250, maxPrice: 1800, why: 'ベタ専用またはベタ向けの粒サイズを優先。', check: '与えすぎ防止のため量と粒サイズを確認。' },
  food_medaka: { label: 'メダカの餌', category: '餌', query: 'メダカ 餌 室内 水槽', ng: '中古 訳あり 大型魚 鯉 冷凍', minPrice: 250, maxPrice: 1800, why: 'ヒーターなし候補のメダカ水槽向け。', check: '室内飼育・成魚/稚魚の対象を確認。' },
  food_shrimp: { label: 'エビの餌', category: '餌', query: 'ミナミヌマエビ 餌 シュリンプフード', ng: '中古 訳あり 大型魚 金魚 冷凍', minPrice: 300, maxPrice: 1800, why: 'エビ中心の水槽で不足しやすい栄養を補う候補。', check: 'ミナミヌマエビ等の対象を確認。' },
  live_betta: { label: '生体：ベタ', category: '生体', query: 'ベタ 生体 オス 熱帯魚', ng: '中古 訳あり 標本 フィギュア 餌 フード', minPrice: 800, maxPrice: 7000, why: '単独飼育で観賞しやすい人気種。', check: '配送条件・死着保証・到着後の水合わせを確認。' },
  live_neon: { label: '生体：ネオンテトラ', category: '生体', query: 'ネオンテトラ 生体 熱帯魚', ng: '中古 訳あり 標本 フィギュア 餌 フード', minPrice: 500, maxPrice: 5000, why: '小型魚の群泳を楽しみたい人向け。少数から導入。', check: '匹数・配送条件・水合わせを確認。' },
  live_guppy: { label: '生体：グッピー/プラティ', category: '生体', query: 'グッピー プラティ 生体 熱帯魚', ng: '中古 訳あり 標本 フィギュア 餌 フード', minPrice: 600, maxPrice: 6000, why: '色味を楽しみやすい入門候補。繁殖しやすい点に注意。', check: 'オスメス構成・増えやすさ・配送条件を確認。' },
  live_medaka: { label: '生体：メダカ', category: '生体', query: 'メダカ 生体 室内 水槽', ng: '中古 訳あり 標本 フィギュア 餌 フード', minPrice: 500, maxPrice: 6000, why: 'ヒーターなし候補。屋内外どちらも検討しやすい。', check: '品種・匹数・季節の配送条件を確認。' },
  live_minami: { label: '生体：ミナミヌマエビ', category: '生体', query: 'ミナミヌマエビ 生体', ng: '中古 訳あり 標本 フィギュア 餌 フード', minPrice: 500, maxPrice: 4000, why: 'コケ取り補助・水草水槽の入門候補。', check: '農薬付き水草との相性、配送条件を確認。' }
};

const ENDPOINT = 'https://openapi.rakuten.co.jp/ichibams/api/IchibaItem/Search/20260401';
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function jsonResponse(body, status = 200, headers = {}) {
  return new Response(JSON.stringify(body, null, 2), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'access-control-allow-origin': '*',
      ...headers,
    },
  });
}

function splitWords(value) {
  return String(value || '').split(/[\s　]+/).map((s) => s.trim()).filter(Boolean);
}

function normalizeItem(item) {
  const image = Array.isArray(item.mediumImageUrls) && item.mediumImageUrls[0]
    ? (typeof item.mediumImageUrls[0] === 'string' ? item.mediumImageUrls[0] : item.mediumImageUrls[0].imageUrl)
    : '';
  return {
    itemName: item.itemName || '',
    itemPrice: item.itemPrice || 0,
    itemUrl: item.itemUrl || '',
    affiliateUrl: item.affiliateUrl || item.itemUrl || '',
    itemCode: item.itemCode || '',
    shopName: item.shopName || '',
    reviewCount: item.reviewCount || 0,
    reviewAverage: item.reviewAverage || 0,
    postageFlag: item.postageFlag || 0,
    pointRate: item.pointRate || 1,
    imageUrl: image,
  };
}

function passesLocalRules(item, recipe) {
  const text = `${item.itemName || ''} ${item.shopName || ''}`.toLowerCase();
  const exclude = splitWords(recipe.ng).map((w) => w.toLowerCase());
  if (exclude.some((w) => text.includes(w))) return false;
  if (recipe.minPrice && item.itemPrice < recipe.minPrice) return false;
  if (recipe.maxPrice && item.itemPrice > recipe.maxPrice) return false;
  return true;
}

function modeToSort(mode) {
  if (mode === 'price') return '+itemPrice';
  if (mode === 'rating') return '-reviewAverage';
  if (mode === 'review') return '-reviewCount';
  return '-reviewCount';
}

function publicRecipe(id) {
  const r = RECIPES[id];
  if (!r) return null;
  return { id, label: r.label, category: r.category, why: r.why, check: r.check, query: r.query, minPrice: r.minPrice, maxPrice: r.maxPrice };
}

async function searchOne(recipeId, mode, env, request) {
  const recipe = RECIPES[recipeId];
  if (!recipe) return { recipeId, ok: false, error: 'unknown_recipe' };

  const applicationId = env.RAKUTEN_APPLICATION_ID;
  const accessKey = env.RAKUTEN_ACCESS_KEY;
  const affiliateId = env.RAKUTEN_AFFILIATE_ID;
  if (!applicationId || !accessKey) {
    return {
      recipeId,
      ok: false,
      setupRequired: true,
      recipe: publicRecipe(recipeId),
      message: 'RAKUTEN_APPLICATION_ID と RAKUTEN_ACCESS_KEY を Cloudflare の環境変数に設定してください。',
      fallbackSearchUrl: `https://search.rakuten.co.jp/search/mall/${encodeURIComponent(recipe.query)}/`,
    };
  }

  const params = new URLSearchParams();
  params.set('applicationId', applicationId);
  params.set('accessKey', accessKey);
  if (affiliateId) params.set('affiliateId', affiliateId);
  params.set('format', 'json');
  params.set('formatVersion', '2');
  params.set('keyword', recipe.query);
  params.set('NGKeyword', recipe.ng || '');
  params.set('sort', modeToSort(mode));
  params.set('hits', '8');
  params.set('availability', '1');
  params.set('imageFlag', '1');
  params.set('hasReviewFlag', mode === 'price' ? '0' : '1');
  if (recipe.minPrice) params.set('minPrice', String(recipe.minPrice));
  if (recipe.maxPrice) params.set('maxPrice', String(recipe.maxPrice));
  params.set('elements', 'itemName,itemPrice,itemUrl,affiliateUrl,itemCode,shopName,reviewCount,reviewAverage,mediumImageUrls,postageFlag,pointRate');

  const origin = new URL(request.url).origin;
  const referer = env.RAKUTEN_REFERER || `${origin}/`;
  const cacheKey = new Request(`${origin}/api/rakuten-products?recipeId=${recipeId}&mode=${mode}`, request);
  const cache = caches.default;
  const cached = await cache.match(cacheKey);
  if (cached) return await cached.json();

  const apiUrl = `${ENDPOINT}?${params.toString()}`;
  const res = await fetch(apiUrl, {
    headers: {
      accept: 'application/json',
      referer,
      origin,
      'user-agent': 'my-aquarium-checker/1.0',
    },
  });

  if (!res.ok) {
    const errorText = await res.text();
    return { recipeId, ok: false, status: res.status, recipe: publicRecipe(recipeId), error: errorText.slice(0, 500) };
  }

  const data = await res.json();
  const items = (data.items || [])
    .map(normalizeItem)
    .filter((item) => passesLocalRules(item, recipe))
    .slice(0, 4);

  const payload = { recipeId, ok: true, recipe: publicRecipe(recipeId), count: data.count || 0, items, mode };
  const response = jsonResponse(payload, 200, { 'cache-control': 'public, max-age=21600' });
  await cache.put(cacheKey, response.clone());
  return payload;
}

export async function onRequestGet(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const recipeIds = (url.searchParams.get('recipeIds') || url.searchParams.get('recipeId') || '')
    .split(',').map((s) => s.trim()).filter(Boolean).slice(0, 12);
  const mode = url.searchParams.get('mode') || 'balanced';

  if (!recipeIds.length) {
    return jsonResponse({ ok: false, error: 'recipeIds is required', availableRecipes: Object.keys(RECIPES).map(publicRecipe) }, 400);
  }

  const results = [];
  for (const id of recipeIds) {
    results.push(await searchOne(id, mode, env, request));
    if (recipeIds.length > 1) await sleep(1100);
  }

  return jsonResponse({ ok: true, mode, results, generatedAt: new Date().toISOString() });
}
