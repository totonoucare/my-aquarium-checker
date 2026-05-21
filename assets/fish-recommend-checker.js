const FISH = [
  {
    "id": "neon",
    "name": "ネオンテトラ",
    "category": "小型群泳魚",
    "beginner": 4,
    "minTank": 30,
    "heater": true,
    "layer": "中層",
    "style": "群れで泳ぐ",
    "shrimp": "親エビは候補。稚エビは食べられる可能性あり",
    "note": "小型魚がまとまって泳ぐ水槽を作りたい人に向きます。",
    "tags": [
      "shoal",
      "smallColor",
      "peaceful",
      "heater",
      "beginner",
      "lowBreeding",
      "community"
    ],
    "avoid": []
  },
  {
    "id": "cardinal",
    "name": "カージナルテトラ",
    "category": "小型群泳魚",
    "beginner": 3,
    "minTank": 45,
    "heater": true,
    "layer": "中層",
    "style": "群れで泳ぐ",
    "shrimp": "親エビは候補。稚エビは食べられる可能性あり",
    "note": "ネオンテトラより赤いラインが目立つ、落ち着いた群泳魚です。",
    "tags": [
      "shoal",
      "smallColor",
      "peaceful",
      "heater",
      "lowBreeding",
      "community"
    ],
    "avoid": [
      "smallTank"
    ]
  },
  {
    "id": "guppy",
    "name": "グッピー",
    "category": "カラフル・繁殖系",
    "beginner": 4,
    "minTank": 30,
    "heater": true,
    "layer": "上〜中層",
    "style": "カラフルで繁殖しやすい",
    "shrimp": "混泳候補だが稚エビは食べられる可能性あり",
    "note": "華やかで増えやすい魚。増えすぎが困る人は注意。",
    "tags": [
      "colorful",
      "breeding",
      "heater",
      "beginner",
      "active",
      "community"
    ],
    "avoid": [
      "avoidBreeding"
    ]
  },
  {
    "id": "platy",
    "name": "プラティ",
    "category": "カラフル・繁殖系",
    "beginner": 4,
    "minTank": 45,
    "heater": true,
    "layer": "中層",
    "style": "丸みがありカラフル",
    "shrimp": "混泳候補だが稚エビは食べられる可能性あり",
    "note": "丈夫で明るい雰囲気の水槽にしやすい魚です。",
    "tags": [
      "colorful",
      "round",
      "breeding",
      "heater",
      "beginner",
      "active",
      "community"
    ],
    "avoid": [
      "avoidBreeding",
      "smallTank"
    ]
  },
  {
    "id": "betta",
    "name": "ベタ",
    "category": "主役系",
    "beginner": 3,
    "minTank": 20,
    "heater": true,
    "layer": "上〜中層",
    "style": "主役をじっくり眺める",
    "shrimp": "食べる可能性あり。個体差が大きい",
    "note": "基本は単独飼育向き。ヒレが美しく、主役感があります。",
    "tags": [
      "solo",
      "flowy",
      "heater",
      "smallTank",
      "lowBreeding",
      "visual"
    ],
    "avoid": [
      "community",
      "shrimp"
    ]
  },
  {
    "id": "angelfish",
    "name": "エンゼルフィッシュ",
    "category": "条件付き主役系",
    "beginner": 2,
    "minTank": 60,
    "heater": true,
    "layer": "中層",
    "style": "大きめの主役魚",
    "shrimp": "非推奨。食べられる可能性が高い",
    "note": "見た目は人気ですが、大きくなるため60cm以上から検討したい魚です。",
    "tags": [
      "solo",
      "flowy",
      "largeTank",
      "heater",
      "visual",
      "challenge"
    ],
    "avoid": [
      "smallTank",
      "shrimp",
      "easy"
    ]
  },
  {
    "id": "corydoras",
    "name": "コリドラス",
    "category": "底もの",
    "beginner": 4,
    "minTank": 30,
    "heater": true,
    "layer": "底層",
    "style": "底で動くかわいい魚",
    "shrimp": "親エビとは候補。餌の競合に注意",
    "note": "底をちょこちょこ泳ぐ人気魚。底砂は角の少ないものが無難です。",
    "tags": [
      "bottom",
      "peaceful",
      "heater",
      "beginner",
      "community",
      "cute"
    ],
    "avoid": []
  },
  {
    "id": "otocinclus",
    "name": "オトシンクルス",
    "category": "掃除役",
    "beginner": 3,
    "minTank": 45,
    "heater": true,
    "layer": "壁面・水草",
    "style": "コケ取り役",
    "shrimp": "比較的候補",
    "note": "コケ取り役として人気。水槽が安定してから迎える方が安心です。",
    "tags": [
      "cleaner",
      "plants",
      "peaceful",
      "heater",
      "community"
    ],
    "avoid": [
      "smallTank",
      "brandNewTank"
    ]
  },
  {
    "id": "whitecloud",
    "name": "アカヒレ",
    "category": "小型群泳魚",
    "beginner": 5,
    "minTank": 30,
    "heater": false,
    "layer": "中層",
    "style": "丈夫で始めやすい",
    "shrimp": "親エビは候補。稚エビは食べられる可能性あり",
    "note": "比較的丈夫で、ヒーターなし構成を検討したい人にも候補になります。",
    "tags": [
      "shoal",
      "easy",
      "noHeater",
      "beginner",
      "lowBreeding",
      "community",
      "smallTank"
    ],
    "avoid": []
  },
  {
    "id": "rasbora",
    "name": "ラスボラ",
    "category": "小型群泳魚",
    "beginner": 4,
    "minTank": 30,
    "heater": true,
    "layer": "中層",
    "style": "水草に合う小型魚",
    "shrimp": "親エビは候補。稚エビは食べられる可能性あり",
    "note": "水草やエビと合わせた自然系の水槽に向きます。",
    "tags": [
      "shoal",
      "plants",
      "smallColor",
      "peaceful",
      "heater",
      "beginner",
      "community",
      "lowBreeding"
    ],
    "avoid": []
  },
  {
    "id": "medaka",
    "name": "メダカ",
    "category": "ヒーターなしでも検討可",
    "beginner": 5,
    "minTank": 30,
    "heater": false,
    "layer": "上〜中層",
    "style": "丈夫で屋内外どちらも候補",
    "shrimp": "エビとの混泳候補。稚エビは食べられる可能性あり",
    "note": "熱帯魚ではありませんが、ヒーターなしで始めたい人には候補になります。",
    "tags": [
      "easy",
      "noHeater",
      "beginner",
      "smallTank",
      "breeding",
      "community"
    ],
    "avoid": []
  },
  {
    "id": "minami",
    "name": "ミナミヌマエビ",
    "category": "エビ",
    "beginner": 4,
    "minTank": 20,
    "heater": false,
    "layer": "底層・水草",
    "style": "自然系・掃除役",
    "shrimp": "エビ同士は候補。魚に稚エビが食べられる可能性あり",
    "note": "水草水槽や小型水槽で人気のエビ。水質の急変には注意。",
    "tags": [
      "shrimp",
      "plants",
      "cleaner",
      "noHeater",
      "smallTank",
      "breeding",
      "natural"
    ],
    "avoid": [
      "largeFish"
    ]
  },
  {
    "id": "redcherry",
    "name": "レッドチェリーシュリンプ",
    "category": "エビ",
    "beginner": 4,
    "minTank": 20,
    "heater": false,
    "layer": "底層・水草",
    "style": "赤く映えるエビ",
    "shrimp": "エビ同士は候補。魚に稚エビが食べられる可能性あり",
    "note": "赤色が映える初心者向けカラーエビ。エビ対応の水草や薬品選びが大切です。",
    "tags": [
      "shrimp",
      "plants",
      "colorful",
      "noHeater",
      "smallTank",
      "breeding",
      "natural",
      "visual"
    ],
    "avoid": [
      "largeFish"
    ]
  },
  {
    "id": "yamato",
    "name": "ヤマトヌマエビ",
    "category": "エビ",
    "beginner": 4,
    "minTank": 30,
    "heater": false,
    "layer": "底層・水草",
    "style": "コケ取り能力高め",
    "shrimp": "魚との混泳候補。繁殖は淡水では難しい",
    "note": "コケ取り役として人気。体が大きめなので小型エビより存在感があります。",
    "tags": [
      "shrimp",
      "cleaner",
      "plants",
      "noHeater",
      "lowBreeding",
      "natural"
    ],
    "avoid": [
      "largeFish"
    ]
  },
  {
    "id": "nerite",
    "name": "石巻貝",
    "category": "掃除役",
    "beginner": 4,
    "minTank": 20,
    "heater": false,
    "layer": "壁面・底",
    "style": "コケ取り役",
    "shrimp": "混泳候補",
    "note": "ガラス面のコケ対策として入れられることが多い貝です。",
    "tags": [
      "cleaner",
      "noHeater",
      "smallTank",
      "lowBreeding",
      "community"
    ],
    "avoid": []
  }
];


const FISH_VISUALS = {
  neon: { src: "/assets/media/fish/neon.webp", alt: "ネオンテトラの飼育イメージ" },
  cardinal: { src: "/assets/media/fish/cardinal.webp", alt: "カージナルテトラの飼育イメージ" },
  guppy: { src: "/assets/media/fish/guppy.webp", alt: "グッピーの飼育イメージ" },
  platy: { src: "/assets/media/fish/platy.webp", alt: "プラティの飼育イメージ" },
  betta: { src: "/assets/media/fish/betta.webp", alt: "ベタの飼育イメージ" },
  angelfish: { src: "/assets/media/fish/angelfish.webp", alt: "エンゼルフィッシュの飼育イメージ" },
  corydoras: { src: "/assets/media/fish/corydoras.webp", alt: "コリドラスの飼育イメージ" },
  otocinclus: { src: "/assets/media/fish/otocinclus.webp", alt: "オトシンクルスの飼育イメージ" },
  whitecloud: { src: "/assets/media/fish/whitecloud.webp", alt: "アカヒレの飼育イメージ" },
  rasbora: { src: "/assets/media/fish/rasbora.webp", alt: "ラスボラの飼育イメージ" },
  medaka: { src: "/assets/media/fish/medaka.webp", alt: "メダカの飼育イメージ" },
  minami: { src: "/assets/media/fish/minami.webp", alt: "ミナミヌマエビの飼育イメージ" },
  redcherry: { src: "/assets/media/fish/redcherry.webp", alt: "レッドチェリーシュリンプの飼育イメージ" },
  yamato: { src: "/assets/media/fish/yamato.webp", alt: "ヤマトヌマエビの飼育イメージ" },
  nerite: { src: "/assets/media/fish/nerite.webp", alt: "石巻貝の飼育イメージ" }
};

function fishVisual(id) {
  return FISH_VISUALS[id] || { src: "/assets/media/hero-fish.webp", alt: "水槽のイメージ" };
}

const FISH_SHOP_LINKS = {
  neon: "/comparison/?role=live_neon",
  cardinal: "/comparison/?role=live_neon",
  guppy: "/comparison/?role=live_guppy",
  platy: "/comparison/?role=live_guppy",
  betta: "/comparison/?role=live_betta",
  corydoras: "/comparison/?role=live_neon",
  otocinclus: "/comparison/?role=live_neon",
  whitecloud: "/comparison/?role=live_medaka",
  rasbora: "/comparison/?role=live_neon",
  angelfish: "/starter-set-checker/?desired=big&budget=standard&space=roomy&care=weekly&heater=yes",
  medaka: "/comparison/?role=live_medaka",
  minami: "/comparison/?role=live_minami",
  redcherry: "/comparison/?role=live_minami",
  yamato: "/comparison/?role=live_minami",
  nerite: "/starter-set-checker/?desired=shrimp&budget=standard&space=desk&care=easy&heater=unknown"
};

function renderFishShopLink(id, name) {
  const href = FISH_SHOP_LINKS[id];
  if (!href) return "";
  return `
    <div class="fish-shop-link-wrap">
      <a class="fish-shop-link" href="${href}">楽天APIで${name}候補を見る</a>
    </div>
  `;
}



const form = document.getElementById("recommend-form");
const result = document.getElementById("recommend-result");

function selected(name) {
  return document.querySelector(`input[name="${name}"]:checked`)?.value;
}

function hasTag(fish, tag) {
  return fish.tags.includes(tag);
}

function addReason(reasons, text) {
  if (!reasons.includes(text)) reasons.push(text);
}

function scoreFish(fish) {
  let score = 0;
  const reasons = [];
  const warnings = [];

  const priority = selected("priority");
  const look = selected("look");
  const tank = selected("tank");
  const heater = selected("heater");
  const breeding = selected("breeding");

  // Base beginner suitability
  score += fish.beginner;
  if (fish.beginner >= 4) addReason(reasons, "初心者向け度が高め");

  // Priority
  if (priority === "easy") {
    if (hasTag(fish, "easy") || hasTag(fish, "beginner")) { score += 4; addReason(reasons, "失敗しにくさ重視に合う"); }
    if (hasTag(fish, "challenge")) { score -= 4; warnings.push("初心者にはやや難しめ"); }
  }
  if (priority === "visual") {
    if (hasTag(fish, "visual") || hasTag(fish, "colorful") || hasTag(fish, "flowy")) { score += 4; addReason(reasons, "見た目の華やかさに合う"); }
  }
  if (priority === "community") {
    if (hasTag(fish, "community") || hasTag(fish, "peaceful")) { score += 4; addReason(reasons, "混泳候補にしやすい"); }
    if (fish.id === "betta" || fish.id === "angelfish") { score -= 3; warnings.push("混泳は注意が必要"); }
  }
  if (priority === "plants") {
    if (hasTag(fish, "plants") || hasTag(fish, "shrimp") || hasTag(fish, "natural")) { score += 4; addReason(reasons, "水草・自然系の雰囲気に合う"); }
  }

  // Look preference
  if (look === "shoal" && hasTag(fish, "shoal")) { score += 5; addReason(reasons, "群れで泳ぐ水槽に合う"); }
  if (look === "colorful" && (hasTag(fish, "colorful") || hasTag(fish, "smallColor"))) { score += 5; addReason(reasons, "色のある水槽に合う"); }
  if (look === "solo" && hasTag(fish, "solo")) { score += 5; addReason(reasons, "主役として楽しみやすい"); }
  if (look === "shrimp" && (hasTag(fish, "shrimp") || hasTag(fish, "cleaner") || hasTag(fish, "plants"))) { score += 5; addReason(reasons, "エビ・貝・水草の雰囲気に合う"); }

  // Tank size
  if (tank === "small") {
    if (fish.minTank <= 30) { score += 3; addReason(reasons, "30cm前後から検討しやすい"); }
    if (fish.minTank > 30) { score -= 3; warnings.push("小型水槽では狭くなりやすい"); }
    if (fish.minTank >= 60) { score -= 6; warnings.push("60cm以上から検討したい魚"); }
  }
  if (tank === "middle") {
    if (fish.minTank <= 45) { score += 2; addReason(reasons, "45cmまでの水槽に収まりやすい"); }
    if (fish.minTank > 45) { score -= 3; warnings.push("45cmでは狭い可能性あり"); }
  }
  if (tank === "large") {
    if (fish.minTank >= 45) { score += 2; addReason(reasons, "大きめ水槽で魅力を出しやすい"); }
  }

  // Heater
  if (heater === "no") {
    if (!fish.heater) { score += 5; addReason(reasons, "ヒーターなしでも検討可"); }
    if (fish.heater) { score -= 5; warnings.push("ヒーターが必要になりやすい"); }
  }
  if (heater === "yes" && fish.heater) {
    score += 1;
  }

  // Breeding
  if (breeding === "want") {
    if (hasTag(fish, "breeding")) { score += 3; addReason(reasons, "繁殖も楽しみやすい"); }
  }
  if (breeding === "avoid") {
    if (hasTag(fish, "lowBreeding")) { score += 3; addReason(reasons, "増えすぎにくい候補"); }
    if (hasTag(fish, "breeding")) { score -= 3; warnings.push("増えやすい可能性あり"); }
  }

  return { ...fish, score, reasons, warnings };
}

function minEnvironment(fish) {
  const items = ["水槽", "フィルター", "水温計", "カルキ抜き"];
  if (fish.heater) items.push("ヒーター");
  if (fish.tags.includes("plants") || fish.tags.includes("shrimp")) items.push("LEDライト", "水草");
  if (fish.id === "corydoras") items.push("角の少ない底砂");
  if (fish.id === "betta") items.push("フタ", "隠れ家");
  return items;
}



function gearIconForHref(href) {
  if (href.includes("#starter")) return "/assets/icons-svg/starter.svg";
  if (href.includes("#filter")) return "/assets/icons-svg/filter.svg";
  if (href.includes("#care")) return "/assets/icons-svg/care.svg";
  if (href.includes("#heater")) return "/assets/icons-svg/heater.svg";
  if (href.includes("#light")) return "/assets/icons-svg/light.svg";
  if (href.includes("#layout")) return "/assets/icons-svg/layout.svg";
  if (href.includes("#food")) return "/assets/icons-svg/food.svg";
  return "/assets/icons-svg/goods.svg";
}

function gearCard(title, note, href) {
  return `
    <a class="gear-recommend-card" href="${href}">
      <img class="mini-card-icon" src="${gearIconForHref(href)}" alt="" aria-hidden="true" loading="lazy">
      <strong>${title}</strong>
      <span>${note}</span>
    </a>
  `;
}

function renderGearForFish(fish) {
  const baseCare = [
    ["水温計・カルキ抜き", "どの魚でも最初に用意しておきたい基本用品。", "/tools/#care"]
  ];

  let items;
  if (fish.id === "betta") {
    items = [
      ["ベタ用水槽セット", "単独飼育で始めやすいセット。フタつきだと安心。", "/tools/#starter"],
      ["ヒーター", "ベタは保温が必要になりやすいため、対応水量を確認。", "/tools/#heater"],
      ["水流が強すぎないフィルター", "ベタは強い水流が苦手なことがあります。", "/tools/#filter"],
      ["隠れ家・レイアウト", "ベタが落ち着ける隠れ場所や見た目づくりに。", "/tools/#layout"]
    ].concat(baseCare);
  } else if (fish.id === "angelfish") {
    items = [
      ["60cm水槽セット", "成長後のサイズを考えると60cm以上から検討したい魚。", "/tools/#starter"],
      ["40〜60cm向けフィルター", "水量と魚の大きさに合わせてろ過に余裕を。", "/tools/#filter"],
      ["60cm向けLED", "大きめ水槽をきれいに見せたい場合に。", "/tools/#light"],
      ["熱帯魚の餌", "口のサイズや混泳相手に合わせて選びます。", "/tools/#food"]
    ].concat(baseCare);
  } else if (fish.id === "corydoras") {
    items = [
      ["45cm水槽セット", "底ものを入れるなら底面スペースに余裕を持ちたいです。", "/tools/#starter"],
      ["コリドラス用タブレット", "底に沈む餌があると食べさせやすいです。", "/tools/#food"],
      ["水換え・底砂掃除用品", "底砂に汚れがたまりやすいので掃除道具が便利。", "/tools/#care"],
      ["フィルター", "底ものを入れる水槽でも水質安定のために用意。", "/tools/#filter"]
    ].concat(baseCare);
  } else if (["minami", "redcherry", "yamato"].includes(fish.id)) {
    items = [
      ["30cm水槽セット", "エビ水槽を小さく始めたい人向け。", "/tools/#starter"],
      ["水作系フィルター", "稚エビの吸い込み対策を意識したい場合に。", "/tools/#filter"],
      ["LEDライト", "水草や隠れ家を楽しむならライトがあると便利。", "/tools/#light"],
      ["隠れ家・レイアウト", "エビや小型魚の隠れ場所づくりに。", "/tools/#layout"],
      ["底もの・エビ向け餌", "エビに届きやすい沈む餌が使いやすいです。", "/tools/#food"]
    ].concat(baseCare);
  } else if (["medaka", "whitecloud"].includes(fish.id)) {
    items = [
      ["30cm水槽セット", "ヒーターなし構成でも始めやすいサイズ。", "/tools/#starter"],
      ["フィルター", "シンプル飼育でも水を安定させやすくなります。", "/tools/#filter"],
      ["掃除用品", "水換えを楽にできると続けやすいです。", "/tools/#care"]
    ].concat(baseCare);
  } else {
    items = [
      ["30cm〜45cm水槽セット", "小型熱帯魚なら、魚数に合わせて30〜45cmを検討。", "/tools/#starter"],
      ["外掛けフィルター", "初心者でも扱いやすい定番のろ過用品。", "/tools/#filter"],
      ["ヒーター", "熱帯魚は保温が必要になりやすいです。", "/tools/#heater"],
      ["熱帯魚の餌", "魚の口のサイズに合う餌を選びます。", "/tools/#food"]
    ].concat(baseCare);
  }

  return `
    <section class="gear-recommend-box">
      <h3>${fish.name}を選ぶなら確認したい用品</h3>
      <p>1位候補に合わせて、最初に見ておきたい用品を表示しています。</p>
      <div class="gear-recommend-grid">
        ${items.map(item => gearCard(item[0], item[1], item[2])).join("")}
      </div>
      <p class="gear-recommend-note">商品は必要グッズページで確認できます。最終的には水槽サイズ・対応水量・飼育数に合わせて選んでください。</p>
    </section>
  `;
}


function starterPlanFromFish(fish) {
  const map = {
    betta: "betta",
    neon: "shoal", cardinal: "shoal", rasbora: "shoal", corydoras: "shoal",
    guppy: "colorful", platy: "colorful",
    minami: "shrimp", redcherry: "shrimp", yamato: "shrimp", nerite: "shrimp", otocinclus: "shrimp",
    medaka: "noheater", whitecloud: "noheater",
    angelfish: "big"
  };
  return map[fish.id] || "shoal";
}

function render() {
  const ranked = FISH.map(scoreFish).sort((a, b) => b.score - a.score).slice(0, 5);

  result.innerHTML = `
    <h2>あなたに合いやすい魚</h2>
    <p>回答内容に合いやすい生体を表示しています。最終的には水槽サイズ・相性・販売店での状態も確認してください。</p>
    ${ranked.map((fish, index) => `
      <article class="info-box result-fish-box" style="margin-top:14px;">
        <img class="result-fish-media" src="${fishVisual(fish.id).src}" alt="${fishVisual(fish.id).alt}" loading="lazy">
        <div>
          <div class="plan-title">
            <h3>${index + 1}位：${fish.name}</h3>
          </div>
          <p>${fish.note}</p>
        ${renderFishShopLink(fish.id, fish.name)}
        <p>
          <span class="badge info">${fish.category}</span>
          <span class="badge accent">${fish.minTank}cm〜</span>
          <span class="badge ${fish.heater ? "warn" : "good"}">${fish.heater ? "ヒーター推奨" : "ヒーターなしでも検討可"}</span>
        </p>
        <h4>合っている理由</h4>
        <ul class="check-list">
          ${(fish.reasons.length ? fish.reasons : ["回答条件に比較的合う候補です"]).map(r => `<li>${r}</li>`).join("")}
        </ul>
        <h4>最低限ほしい環境</h4>
        <ul class="check-list">
          ${minEnvironment(fish).map(item => `<li>${item}</li>`).join("")}
        </ul>
        ${fish.warnings.length ? `<h4>注意点</h4><ul class="check-list warning-list">${fish.warnings.map(w => `<li>${w}</li>`).join("")}</ul>` : ""}
        </div>
      </article>
    `).join("")}
    ${renderGearForFish(ranked[0])}

    <div class="button-row">
      <a class="button" href="/starter-set-checker/?plan=${starterPlanFromFish(ranked[0])}">1位候補のスターターセットを見る</a>
      <a class="button secondary" href="/fish-combination-checker/">混泳相性をチェック</a>
      <a class="button secondary" href="/fish/">魚カードを見る</a>
      <a class="button secondary" href="/tools/">必要グッズ一覧</a>
    </div>
  `;
}

form.addEventListener("submit", event => {
  event.preventDefault();
  render();
});

render();
