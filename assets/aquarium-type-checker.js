const PLANS = {
  "shoal": {
    "title": "小型群泳タイプ",
    "summary": "小さな魚がまとまって泳ぐ、見ていて飽きにくい水槽が向いています。",
    "fish": [
      "ネオンテトラ",
      "ラスボラ",
      "カージナルテトラ",
      "コリドラス",
      "石巻貝"
    ],
    "tank": "最低30cmキューブ〜45cm水槽。できれば45cm以上だと管理しやすいです。",
    "environment": [
      "ヒーター",
      "フィルター",
      "LEDライト",
      "水温計",
      "カルキ抜き",
      "掃除ホース",
      "水換え用バケツ"
    ],
    "cautions": [
      "最初から入れすぎない",
      "群れで飼う魚は少なすぎると落ち着きにくい",
      "水槽立ち上げ直後に一気に生体を入れない"
    ]
  },
  "colorful": {
    "title": "カラフルにぎやかタイプ",
    "summary": "グッピーやプラティのような、色が明るく動きのある水槽が向いています。",
    "fish": [
      "グッピー",
      "プラティ",
      "石巻貝"
    ],
    "tank": "最低30cm〜45cm水槽。増えやすさを考えるなら45cm以上が安心です。",
    "environment": [
      "ヒーター",
      "フィルター",
      "LEDライト",
      "水温計",
      "カルキ抜き",
      "隔離ケース"
    ],
    "cautions": [
      "繁殖しやすいため増えすぎに注意",
      "オス・メス比率に注意",
      "混泳魚を増やしすぎない"
    ]
  },
  "solo": {
    "title": "主役じっくりタイプ",
    "summary": "たくさんの魚より、主役の魚をゆっくり観察する水槽が向いています。",
    "fish": [
      "ベタ",
      "条件付き：エンゼルフィッシュ"
    ],
    "tank": "ベタなら小型水槽から。エンゼルフィッシュは60cm以上推奨です。",
    "environment": [
      "ヒーター",
      "フィルター",
      "水温計",
      "カルキ抜き",
      "フタ",
      "隠れ家"
    ],
    "cautions": [
      "ベタは基本単独向き",
      "エンゼルフィッシュは小型魚・エビとの混泳注意",
      "主役魚は性格差が出やすい"
    ]
  },
  "shrimp": {
    "title": "水草とエビの自然系タイプ",
    "summary": "魚だけでなく、水草・エビ・貝がいる自然っぽい水槽が向いています。",
    "fish": [
      "レッドチェリーシュリンプ",
      "ミナミヌマエビ",
      "ラスボラ",
      "石巻貝"
    ],
    "tank": "最低20〜30cm水槽。魚も入れるなら30cmキューブ以上が安心です。",
    "environment": [
      "フィルター",
      "LEDライト",
      "エビ対応の水草",
      "底砂",
      "カルキ抜き",
      "水温計"
    ],
    "cautions": [
      "エビは水質の急変に注意",
      "農薬付き水草や銅を含む薬品に注意",
      "稚エビは魚に食べられる可能性あり"
    ]
  },
  "easy": {
    "title": "ラクに続けるシンプルタイプ",
    "summary": "管理のしやすさを優先し、丈夫な生体を少なめに飼うプランが向いています。",
    "fish": [
      "アカヒレ",
      "メダカ",
      "石巻貝",
      "ヤマトヌマエビ"
    ],
    "tank": "最低30cm前後。水量に余裕があるほど管理しやすいです。",
    "environment": [
      "フィルター",
      "水温計",
      "カルキ抜き",
      "掃除ホース",
      "水換え用バケツ"
    ],
    "cautions": [
      "ラク重視でも水換えは必要",
      "直射日光は避ける",
      "餌のあげすぎに注意"
    ]
  }
};


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



const PLAN_FISH_LOOKUP = {
  "ネオンテトラ": { id: "neon", note: "小型魚の群れを楽しみたい人向け" },
  "ラスボラ": { id: "rasbora", note: "水草とも合わせやすい小型群泳魚" },
  "カージナルテトラ": { id: "cardinal", note: "赤青ラインが映える群泳魚" },
  "コリドラス": { id: "corydoras", note: "底で動きが出る人気の底もの" },
  "石巻貝": { id: "nerite", note: "コケ対策の掃除役候補" },
  "グッピー": { id: "guppy", note: "にぎやかで華やかな代表格" },
  "プラティ": { id: "platy", note: "丈夫で明るい雰囲気にしやすい" },
  "ベタ": { id: "betta", note: "単独で主役を楽しみやすい" },
  "エンゼルフィッシュ": { id: "angelfish", note: "大きめ水槽で映える主役候補" },
  "レッドチェリーシュリンプ": { id: "redcherry", note: "赤色が映えるエビの人気種" },
  "ミナミヌマエビ": { id: "minami", note: "自然系レイアウトの定番エビ" },
  "アカヒレ": { id: "whitecloud", note: "丈夫で始めやすい小型魚" },
  "メダカ": { id: "medaka", note: "ヒーターなし構成も検討しやすい" },
  "ヤマトヌマエビ": { id: "yamato", note: "コケ取りにも期待しやすいエビ" }
};

function normalizePlanFishName(name) {
  return name.replace(/^条件付き：/, "").trim();
}

function renderPlanFishGrid(items) {
  return `
    <div class="plan-fish-grid">
      ${items.map(item => {
        const name = normalizePlanFishName(item);
        const data = PLAN_FISH_LOOKUP[name];
        if (!data) {
          return `<article class="plan-fish-card"><strong>${item}</strong><span>候補としてチェックしたい生体です。</span></article>`;
        }
        const visual = fishVisual(data.id);
        return `
          <article class="plan-fish-card">
            <img class="candidate-fish-media" src="${visual.src}" alt="${visual.alt}" loading="lazy">
            <strong>${item}</strong>
            <span>${data.note}</span>
            ${renderFishShopLink(data.id, item)}
          </article>
        `;
      }).join("")}
    </div>
  `;
}

const form = document.getElementById("type-form");
const result = document.getElementById("type-result");

function selected(name) {
  return document.querySelector(`input[name="${name}"]:checked`)?.value;
}

function addScore(scores, key, point) {
  scores[key] = (scores[key] || 0) + point;
}

function getPlanKey() {
  const scores = { shoal: 0, colorful: 0, solo: 0, shrimp: 0, easy: 0 };
  const vibe = selected("vibe");
  const care = selected("care");
  const size = selected("size");
  const look = selected("look");
  const breed = selected("breed");
  const heater = selected("heater");

  addScore(scores, vibe, 4);

  if (care === "easy") addScore(scores, "easy", 3);
  if (care === "weekly") addScore(scores, "shoal", 2);
  if (care === "deep") addScore(scores, "shrimp", 2);
  if (care === "safe") {
    addScore(scores, "easy", 2);
    addScore(scores, "shoal", 1);
  }

  if (size === "small") {
    addScore(scores, "solo", 1);
    addScore(scores, "shrimp", 2);
    addScore(scores, "easy", 1);
  }
  if (size === "middle") {
    addScore(scores, "shoal", 2);
    addScore(scores, "colorful", 1);
    addScore(scores, "shrimp", 1);
  }
  if (size === "large") {
    addScore(scores, "shoal", 1);
    addScore(scores, "solo", 2);
    addScore(scores, "colorful", 1);
  }

  if (look === "smallcolor") addScore(scores, "shoal", 3);
  if (look === "flowy") addScore(scores, "solo", 3);
  if (look === "round") addScore(scores, "colorful", 3);
  if (look === "natural") addScore(scores, "shrimp", 3);
  if (look === "plants") addScore(scores, "shrimp", 2);

  if (breed === "want") {
    addScore(scores, "colorful", 2);
    addScore(scores, "shrimp", 1);
  }
  if (breed === "avoid") {
    addScore(scores, "shoal", 1);
    addScore(scores, "solo", 1);
    addScore(scores, "easy", 1);
  }

  if (heater === "no") {
    addScore(scores, "easy", 4);
    addScore(scores, "shrimp", 1);
    scores.shoal -= 1;
    scores.colorful -= 1;
  }

  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  return sorted[0][0];
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

function renderGearForPlan(key) {
  const plans = {
    shoal: [
      ["30cm〜45cm水槽セット", "ネオンテトラ・ラスボラなどの小型群泳向け。余裕を見たいなら45cmも候補。", "/tools/#starter"],
      ["外掛けフィルター", "小型水槽でも使いやすく、初心者が管理しやすいタイプ。", "/tools/#filter"],
      ["水温計・カルキ抜き", "水温確認と水道水処理は最初から用意しておきたい基本用品。", "/tools/#care"],
      ["熱帯魚の餌", "小型魚向けのフードを選ぶと使いやすいです。", "/tools/#food"]
    ],
    colorful: [
      ["45cm水槽セット", "グッピー・プラティなどを少し余裕を持って飼いやすいサイズ。", "/tools/#starter"],
      ["40〜60cm向けフィルター", "魚数が増えやすいタイプは、ろ過に余裕を持つと安心。", "/tools/#filter"],
      ["水換え・掃除用品", "にぎやかな水槽ほど定期的な掃除が大事になります。", "/tools/#care"],
      ["熱帯魚の餌", "浮くタイプ・沈むタイプを生体に合わせて選びます。", "/tools/#food"]
    ],
    solo: [
      ["ベタ用水槽セット", "ベタを単独でじっくり楽しみたい人向け。フタつきだと安心。", "/tools/#starter"],
      ["水温計・カルキ抜き", "小型水槽ほど水温変化が出やすいので確認しやすく。", "/tools/#care"],
      ["ヒーター", "ベタは保温が必要になりやすいので、対応水量と安全機能を確認。", "/tools/#heater"],
      ["水作系フィルター", "水流が強すぎない構成を選びたいタイプ。", "/tools/#filter"],
      ["隠れ家・レイアウト", "ベタが落ち着ける隠れ場所や、見た目のアクセントに。", "/tools/#layout"]
    ],
    shrimp: [
      ["30cm水槽セット", "エビ・水草・小型魚を少なめに楽しむ入門サイズ。", "/tools/#starter"],
      ["水作系フィルター", "稚エビを吸い込みにくい構成を意識したい水槽向け。", "/tools/#filter"],
      ["LEDライト", "水草も楽しむならライトがあると見た目も管理もしやすいです。", "/tools/#light"],
      ["底もの・エビ向け餌", "エビや底ものに届きやすい沈む餌が便利です。", "/tools/#food"],
      ["隠れ家・レイアウト", "エビや小型魚の隠れ場所を作りたい場合に。", "/tools/#layout"]
    ],
    easy: [
      ["30cm水槽セット", "アカヒレ・メダカなど、シンプルに始めたい人向け。", "/tools/#starter"],
      ["カルキ抜き・水温計", "ヒーターなし構成でも水温確認と水道水処理は必要です。", "/tools/#care"],
      ["掃除用品", "水換えを楽にできる道具があると続けやすくなります。", "/tools/#care"],
      ["フィルター", "水を安定させるために、小型水槽でも用意しておきたい用品。", "/tools/#filter"]
    ]
  };

  const items = plans[key] || plans.shoal;
  return `
    <section class="gear-recommend-box">
      <h3>このタイプでそろえたい用品</h3>
      <p>診断結果に合わせて、最初に確認したい用品をまとめました。</p>
      <div class="gear-recommend-grid">
        ${items.map(item => gearCard(item[0], item[1], item[2])).join("")}
      </div>
      <p class="gear-recommend-note">商品は必要グッズページで確認できます。水槽サイズ・対応水量・設置場所に合うものを選んでください。</p>
    </section>
  `;
}

function renderPlan(key) {
  const plan = PLANS[key];
  const size = selected("size");
  const heater = selected("heater");

  const extraNotes = [];
  if (size === "small" && key === "solo") {
    extraNotes.push("小型水槽ならベタ単独プランが現実的です。エンゼルフィッシュは60cm以上から検討してください。");
  }
  if (heater === "no") {
    extraNotes.push("ヒーターを使いたくない場合、選択肢はアカヒレ・メダカ・一部のエビや貝が候補になりやすくなります。冬の室温が低い部屋では注意してください。");
  }
  if (key === "colorful") {
    extraNotes.push("グッピーやプラティは増えやすいため、最初は少なめから始めるのがおすすめです。");
  }

  result.innerHTML = `
    <h2>診断結果</h2>
    <p class="eyebrow">あなたに向いているのは</p>
    <h3>${plan.title}</h3>
    <p>${plan.summary}</p>

    <div class="info-box">
      <h3>最低限ほしい環境</h3>
      <p><strong>${plan.tank}</strong></p>
    </div>

    <h3>候補になる生体</h3>
    <p class="small-note">雰囲気が伝わりやすいように、候補の生体イメージも載せています。</p>
    ${renderPlanFishGrid(plan.fish)}

    <h3>必要になりやすいもの</h3>
    <ul class="check-list">
      ${plan.environment.map(item => `<li>${item}</li>`).join("")}
    </ul>

    <h3>注意点</h3>
    <ul class="check-list warning-list">
      ${plan.cautions.map(item => `<li>${item}</li>`).join("")}
      ${extraNotes.map(item => `<li>${item}</li>`).join("")}
    </ul>

    ${renderGearForPlan(key)}

    <div class="button-row">
      <a class="button" href="/starter-set-checker/?plan=${key}">このタイプのスターターセットを見る</a>
      <a class="button secondary" href="/fish-recommend-checker/">魚えらび診断へ</a>
      <a class="button secondary" href="/fish-combination-checker/">混泳相性を見る</a>
      <a class="button secondary" href="/tools/">必要グッズ一覧</a>
    </div>
  `;
}

form.addEventListener("submit", event => {
  event.preventDefault();
  renderPlan(getPlanKey());
});

renderPlan(getPlanKey());
