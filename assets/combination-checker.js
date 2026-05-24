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
    "category": "ヒーターなし候補",
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
const form = document.getElementById("combo-form");
const result = document.getElementById("combo-result");

const fishMap = Object.fromEntries(FISH.map(f => [f.id, f]));

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




function selectedFish() {
  return Array.from(document.querySelectorAll('#combo-form input[type="checkbox"]:checked')).map(el => el.value);
}

function hasAny(ids, group) {
  return ids.some(id => group.includes(id));
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

function renderGearForCombination(ids, minTank, needsHeater) {
  const hasAngelfish = ids.includes("angelfish");
  const hasBetta = ids.includes("betta");
  const hasCory = ids.includes("corydoras");
  const hasShrimp = ids.includes("minami") || ids.includes("redcherry") || ids.includes("yamato");
  const hasSmallFish = ids.some(id => ["neon", "cardinal", "rasbora", "whitecloud", "medaka", "guppy", "platy"].includes(id));

  const items = [];

  if (hasBetta) {
    items.push(["ベタ用水槽セット", "ベタは単独飼育寄り。混泳より専用水槽を検討しやすいです。", "/comparison/?section=starter"]);
    items.push(["ベタ向けの隠れ家", "単独飼育でも隠れ場所があると落ち着きやすくなります。", "/comparison/?section=layout"]);
  } else if (hasAngelfish || minTank >= 60) {
    items.push(["60cm水槽セット", "大きめの魚や魚数が多い組み合わせは60cm以上から検討。", "/comparison/?section=starter"]);
  } else if (minTank >= 45) {
    items.push(["45cm水槽セット", "小型魚の混泳を少し余裕を持って始めやすいサイズ。", "/comparison/?section=starter"]);
  } else {
    items.push(["30cm水槽セット", "少数の小型魚・エビから始める場合に検討しやすいサイズ。", "/comparison/?section=starter"]);
  }

  if (hasAngelfish || minTank >= 45) {
    items.push(["40〜60cm向けフィルター", "魚数や水量に合わせて、ろ過に余裕を持ちたい組み合わせ。", "/comparison/?section=filter"]);
  } else {
    items.push(["小型水槽向けフィルター", "少数飼育でも水質を安定させるために用意したい用品。", "/comparison/?section=filter"]);
  }

  if (needsHeater) {
    items.push(["ヒーター", "熱帯魚を含む場合は保温が必要になりやすいです。", "/comparison/?section=heater"]);
  }

  items.push(["水温計・カルキ抜き", "水温確認と水道水処理は、どの組み合わせでも基本になります。", "/comparison/?section=care"]);

  if (hasCory) {
    items.push(["コリドラス用タブレット", "底ものには沈む餌があると食べさせやすいです。", "/comparison/?section=food"]);
    items.push(["水換え・底砂掃除用品", "底砂の汚れを掃除しやすい道具があると便利。", "/comparison/?section=care"]);
  } else if (hasShrimp) {
    items.push(["底もの・エビ向け餌", "エビや底ものに届きやすい沈む餌が便利です。", "/comparison/?section=food"]);
    items.push(["隠れ家・レイアウト", "エビや底ものが落ち着ける場所を作りたい場合に。", "/comparison/?section=layout"]);
    items.push(["LEDライト", "水草や隠れ家を入れるなら見た目も管理もしやすいです。", "/comparison/?section=light"]);
  } else if (hasSmallFish) {
    items.push(["熱帯魚の餌", "小型魚の口のサイズに合う餌を選びます。", "/comparison/?section=food"]);
  }

  return `
    <section class="gear-recommend-box">
      <h3>この組み合わせで確認したい用品</h3>
      <p>選んだ生体に合わせて、最初に見ておきたい用品を表示しています。</p>
      <div class="gear-recommend-grid">
        ${items.map(item => gearCard(item[0], item[1], item[2])).join("")}
      </div>
      <p class="gear-recommend-note">商品は必要グッズページで確認できます。最終的には生体数・水槽サイズ・水温条件に合わせて選んでください。</p>
    </section>
  `;
}


function renderSelectedFishGrid(ids) {
  return `
    <div class="combo-fish-grid">
      ${ids.map(id => {
        const fish = fishMap[id];
        const visual = fishVisual(id);
        return `
          <article class="combo-fish-card">
            <img class="combo-fish-media" src="${visual.src}" alt="${visual.alt}" loading="lazy">
            <strong>${fish.name}</strong>
          </article>
        `;
      }).join("")}
    </div>
  `;
}

function check() {
  const ids = selectedFish();

  if (!ids.length) {
    result.innerHTML = `<h2>チェック結果</h2><p>気になる魚を1つ以上選んでください。</p>`;
    return;
  }

  const names = ids.map(id => fishMap[id].name);
  const minTank = Math.max(...ids.map(id => fishMap[id].minTank));
  let status = "おすすめ";
  let badge = "good";
  const notes = [];

  const smallFish = ["neon", "cardinal", "rasbora", "whitecloud", "medaka"];
  const shrimps = ["minami", "redcherry", "yamato"];
  const livebearers = ["guppy", "platy"];

  if (ids.includes("betta") && ids.length > 1) {
    status = "注意";
    badge = "warn";
    notes.push("ベタは基本的に単独飼育向きです。混泳は個体差が大きく、ヒレをかじられる・攻撃する可能性があります。");
  }
  if (ids.includes("betta") && ids.includes("guppy")) {
    status = "非推奨寄り";
    badge = "danger";
    notes.push("ベタとグッピーは、ヒレの形や動きの相性が悪くなることがあるため初心者にはおすすめしにくい組み合わせです。");
  }
  if (ids.includes("angelfish")) {
    notes.push("エンゼルフィッシュは成長すると大きくなります。小型水槽ではなく60cm以上から検討したい魚です。");
  }
  if (ids.includes("angelfish") && hasAny(ids, smallFish)) {
    status = "非推奨寄り";
    badge = "danger";
    notes.push("エンゼルフィッシュと小型魚は、成長後に小型魚が食べられる可能性があります。初心者にはおすすめしにくい組み合わせです。");
  }
  if (ids.includes("angelfish") && hasAny(ids, shrimps)) {
    status = "非推奨寄り";
    badge = "danger";
    notes.push("エンゼルフィッシュとエビ類の混泳は、エビが食べられる可能性があるため避けるのが無難です。");
  }
  if (hasAny(ids, livebearers)) {
    notes.push("グッピーやプラティは増えやすいため、最初は少なめから始めるのがおすすめです。");
  }
  if (ids.includes("medaka") && hasAny(ids, ["neon", "cardinal", "guppy", "platy", "betta", "angelfish", "corydoras", "otocinclus", "rasbora"])) {
    status = status === "おすすめ" ? "注意" : status;
    badge = badge === "good" ? "warn" : badge;
    notes.push("メダカは熱帯魚ではないため、水温設定や飼育スタイルが熱帯魚とズレることがあります。混泳より専用水槽の方が管理しやすいです。");
  }
  if (hasAny(ids, shrimps) && hasAny(ids, smallFish.concat(livebearers))) {
    notes.push("小型魚とエビは混泳候補ですが、稚エビは食べられる可能性があります。繁殖を狙うなら隠れ家や水草を多めにしましょう。");
  }
  if (ids.includes("otocinclus")) {
    notes.push("オトシンクルスは水槽が安定してから迎える方が安心です。立ち上げ直後は餌不足に注意してください。");
  }
  if (ids.includes("corydoras")) {
    notes.push("コリドラスを入れるなら、角の尖りにくい底砂を選ぶと管理しやすいです。");
  }
  if (!notes.length) {
    notes.push("大きな相性問題は少なめです。ただし、実際の相性は個体差・水槽サイズ・隠れ家・入れる順番でも変わります。");
  }

  const tankLabel = minTank >= 60 ? "60cm以上推奨" : minTank >= 45 ? "45cm以上推奨" : "30cm前後から検討";
  const needsHeater = ids.some(id => fishMap[id].heater);

  result.innerHTML = `
    <h2>チェック結果</h2>
    <p><span class="badge ${badge}">${status}</span></p>
    <h3>選択した生体</h3>
    <p>${names.join("、")}</p>
    ${renderSelectedFishGrid(ids)}
    <div class="metric"><span>必要水槽サイズ目安</span><strong>${tankLabel}</strong></div>
    <div class="metric"><span>ヒーター</span><strong>${needsHeater ? "必要になりやすい" : "なし構成も候補"}</strong></div>
    <h3>注意点</h3>
    <ul class="check-list warning-list">
      ${notes.map(note => `<li>${note}</li>`).join("")}
    </ul>
    <h3>最低限ほしい環境</h3>
    <ul class="check-list">
      <li>水槽</li>
      <li>フィルター</li>
      ${needsHeater ? "<li>ヒーター</li>" : ""}
      <li>水温計</li>
      <li>カルキ抜き</li>
      <li>掃除ホース</li>
    </ul>

    ${renderGearForCombination(ids, minTank, needsHeater)}

    <div class="button-row">
      <a class="button" href="/fish-recommend-checker/">魚えらび診断へ</a>
      <a class="button secondary" href="/fish/">魚カードを見る</a>
      <a class="button secondary" href="/comparison/">必要グッズを見る</a>
    </div>
  `;
}

form.addEventListener("submit", event => {
  event.preventDefault();
  check();
});

check();
