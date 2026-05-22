const BASE_REJECT = ['中古', '訳あり', 'ジャンク', '空容器', '標本', 'フィギュア', 'ぬいぐるみ', '犬', '猫', '爬虫類'];
const LIVE_REJECT = ['生体', '死着', '稚魚', '卵', 'メダカ', 'めだか', 'グッピー', 'プラティ', 'ネオンテトラ', 'ベタ', 'エビ', '貝'];
const EQUIPMENT_REJECT = ['餌', 'エサ', 'フード', '飼料', 'おやつ', '生体', '死着', '稚魚', '卵'];
const TANK_PART_REJECT = ['掃除', 'クリーナー', 'ブラシ', 'コケ取り', '水換え', 'ホース', 'ポンプ', 'パイプ', 'ネット', 'フタ', 'ふた', '蓋', 'ガラスフタ', 'カバー', 'マット', 'シート', '水槽台', '交換用', '交換', 'パーツ', '部品', '仕切り', 'バックスクリーン'];
const FOOD_CONFUSER_REJECT = ['PSB', 'バクテリア', 'カルキ抜き', '塩素中和', '中和剤', '水質調整', 'ろ材', '底砂', 'ソイル', '砂利', '生体', '死着', '稚魚', '卵'];

const R = (label, category, query, options) => ({ label, category, query, ...options });

const RECIPES = {
  tank_20: R('小型水槽 20cm前後', '水槽', '20cm 水槽 ガラス', {
    ng: [...BASE_REJECT, ...EQUIPMENT_REJECT, ...TANK_PART_REJECT, '金魚鉢', 'メダカ鉢', 'プラケース', '虫かご', 'ヒーター', 'ライト', 'フィルター', 'セット'].join(' '),
    queries: ['20cm 水槽', '小型 ガラス水槽', '20センチ 水槽 ガラス', 'フレームレス キューブ水槽'],
    mustGroups: [['水槽', 'ガラス水槽', 'オールガラス', 'アクアリウム', 'キューブ', 'フレームレス']],
    plus: ['20cm', '20センチ', 'ガラス', 'アクアリウム', 'フレームレス', 'キューブ'],
    minPrice: 900,
    maxPrice: 6500,
    why: 'かなり省スペースで始めたい人向け。水量が少ないので飼育数は控えめに。',
    check: '実水量・フタの有無・設置できる奥行きを確認。'
  }),
  tank_30: R('水槽 30cm前後', '水槽', '30cm 水槽 ガラス', {
    ng: [...BASE_REJECT, ...EQUIPMENT_REJECT, ...TANK_PART_REJECT, '金魚鉢', 'メダカ鉢', 'プラケース', '虫かご', 'ヒーター', 'ライト', 'フィルター', 'セット'].join(' '),
    queries: ['30cm 水槽', '30センチ 水槽 ガラス', '小型 ガラス水槽', 'フレームレス キューブ水槽'],
    mustGroups: [['水槽', 'ガラス水槽', 'オールガラス', 'アクアリウム', 'キューブ', 'フレームレス']],
    plus: ['30cm', '30センチ', 'ガラス', 'アクアリウム', 'フレームレス', 'キューブ'],
    minPrice: 1500,
    maxPrice: 9000,
    why: 'ベタ・小型魚少数・エビ水槽の入門で扱いやすい標準サイズ。',
    check: '水槽台・棚の耐荷重、フタの有無、実水量を確認。'
  }),
  tank_45: R('水槽 45cm前後', '水槽', '45cm 水槽 ガラス', {
    ng: [...BASE_REJECT, ...EQUIPMENT_REJECT, ...TANK_PART_REJECT, '金魚鉢', 'メダカ鉢', 'プラケース', '虫かご', 'ヒーター', 'ライト', 'フィルター', 'セット'].join(' '),
    queries: ['45cm 水槽', '45センチ 水槽 ガラス', '45cm ガラス水槽', 'オールガラス 水槽'],
    mustGroups: [['水槽', 'ガラス水槽', 'オールガラス', 'アクアリウム', 'キューブ', 'フレームレス']],
    plus: ['45cm', '45センチ', 'ガラス', 'アクアリウム', 'フレームレス', 'キューブ'],
    minPrice: 2500,
    maxPrice: 14000,
    why: '小型魚の群泳や混泳で、30cmより水量の余裕を取りたい人向け。',
    check: '重量が増えるため、置き場所と耐荷重を確認。'
  }),
  tank_60: R('水槽 60cm前後', '水槽', '60cm 水槽 ガラス', {
    ng: [...BASE_REJECT, ...EQUIPMENT_REJECT, ...TANK_PART_REJECT, '金魚鉢', 'メダカ鉢', 'プラケース', '虫かご', 'ヒーター', 'ライト', 'フィルター', 'セット'].join(' '),
    queries: ['60cm 水槽', '60センチ 水槽 ガラス', '60cm ガラス水槽', 'オールガラス 水槽'],
    mustGroups: [['水槽', 'ガラス水槽', 'オールガラス', 'アクアリウム', 'キューブ', 'フレームレス']],
    plus: ['60cm', '60センチ', 'ガラス', 'アクアリウム', 'フレームレス', 'キューブ'],
    minPrice: 4500,
    maxPrice: 22000,
    why: '魚数・水草・レイアウトの自由度を上げたい人向け。水量が安定しやすい。',
    check: '専用台レベルの耐荷重、設置スペース、メンテ動線を確認。'
  }),
  filter_low_flow: R('弱水流フィルター', 'フィルター', 'ベタ フィルター 水流調整', {
    ng: [...BASE_REJECT, ...EQUIPMENT_REJECT, '交換用', '交換', 'カートリッジのみ', 'ろ材のみ', 'ヒーター', 'ライト'].join(' '),
    queries: ['ベタ フィルター 水流調整', 'ベタ 水槽 フィルター 静音', '小型水槽 フィルター 水流調整', '小型水槽 投げ込みフィルター 静音'],
    mustGroups: [['フィルター', 'ろ過', 'ろ過器']],
    plus: ['外掛け', '投げ込み', '静音', '水流調整', 'ベタ', '小型'],
    minPrice: 700,
    maxPrice: 5000,
    why: 'ベタや稚魚・エビなど、強い水流が苦手な構成で優先。',
    check: '対応水量と水流調整のしやすさを確認。'
  }),
  filter_small: R('小型水槽フィルター', 'フィルター', '30cm 水槽 フィルター', {
    ng: [...BASE_REJECT, ...EQUIPMENT_REJECT, '交換用', '交換', 'カートリッジのみ', 'ろ材のみ', 'ヒーター', 'ライト'].join(' '),
    queries: ['30cm 水槽 フィルター', '小型水槽 フィルター 30cm', '30cm アクアリウム ろ過器'],
    mustGroups: [['フィルター', 'ろ過', 'ろ過器'], ['水槽', 'アクアリウム', '小型']],
    plus: ['30cm', '外掛け', '投げ込み', '静音', 'GEX', 'テトラ'],
    minPrice: 800,
    maxPrice: 6500,
    why: '30cm前後の水槽でろ過を確保する基本用品。',
    check: '対応水槽サイズ・交換ろ材・水流調整の有無を確認。'
  }),
  filter_medium: R('45〜60cm向けフィルター', 'フィルター', '60cm 水槽 フィルター', {
    ng: [...BASE_REJECT, ...EQUIPMENT_REJECT, '交換用', '交換', 'カートリッジのみ', 'ろ材のみ', 'ヒーター', 'ライト'].join(' '),
    queries: ['60cm 水槽 フィルター', '45cm 水槽 フィルター', '60cm アクアリウム ろ過器'],
    mustGroups: [['フィルター', 'ろ過', 'ろ過器', '外掛け', '上部フィルター', '外部フィルター'], ['水槽', 'アクアリウム']],
    plus: ['45cm', '60cm', '静音', 'GEX', 'テトラ', 'コトブキ'],
    minPrice: 1200,
    maxPrice: 12000,
    why: '魚数が増える水槽で、ろ過能力を確保するための候補。',
    check: '対応水量、設置幅、交換ろ材の入手性を確認。'
  }),
  heater_betta: R('ベタ・小型水槽ヒーター', 'ヒーター', 'ベタ 小型水槽 ヒーター', {
    ng: [...BASE_REJECT, '生体', '死着', '稚魚', '卵', '餌', 'エサ', 'フード', 'カバーのみ', '部品'].join(' '),
    mustGroups: [['ヒーター', 'オートヒーター'], ['ベタ', '小型水槽', '水槽']],
    plus: ['安全', '空焚き', '26℃', '温度固定'],
    minPrice: 900,
    maxPrice: 6500,
    why: 'ベタなど熱帯魚の水温管理に。冬場・室温低下がある部屋では重要。',
    check: '必ず対応水量・設定温度・空焚き防止を確認。'
  }),
  heater_30: R('30cm水槽ヒーター', 'ヒーター', '30cm 水槽 ヒーター', {
    ng: [...BASE_REJECT, ...EQUIPMENT_REJECT, 'カバーのみ', '部品', 'ライト', '水温計のみ'].join(' '),
    mustGroups: [['ヒーター', 'オートヒーター'], ['水槽', 'アクアリウム', '熱帯魚']],
    plus: ['30cm', '安全', '空焚き', '温度固定'],
    minPrice: 1200,
    maxPrice: 7000,
    why: '小型熱帯魚水槽の水温を安定させるための基本用品。',
    check: '対応水量・W数・安全機能を確認。'
  }),
  heater_45_60: R('45〜60cm水槽ヒーター', 'ヒーター', '60cm 水槽 ヒーター', {
    ng: [...BASE_REJECT, ...EQUIPMENT_REJECT, 'カバーのみ', '部品', 'ライト', '水温計のみ'].join(' '),
    mustGroups: [['ヒーター', 'オートヒーター'], ['水槽', 'アクアリウム', '熱帯魚']],
    plus: ['45cm', '60cm', '100W', '150W', '安全', '空焚き'],
    minPrice: 1800,
    maxPrice: 9000,
    why: '水量のある水槽で水温を安定させる候補。',
    check: '水量に対してW数不足にならないか確認。'
  }),
  thermometer: R('水温計', '水質・管理', '水槽 水温計 デジタル', {
    ng: [...BASE_REJECT, 'ヒーター', '生体', '餌', 'エサ', 'フード'].join(' '),
    mustGroups: [['水温計', '温度計'], ['水槽', 'アクアリウム', '熱帯魚']],
    plus: ['デジタル', 'LCD', 'サーモ', '貼る'],
    minPrice: 250,
    maxPrice: 2500,
    why: 'ヒーター有無に関わらず、水温確認の基本。',
    check: '見やすさ・電池式/貼付式・設置方法を確認。'
  }),
  chlorine_remover: R('カルキ抜き', '水質・管理', 'カルキ抜き 水槽 淡水', {
    ng: [...BASE_REJECT, ...LIVE_REJECT, '餌', 'エサ', 'フード', 'ろ材', '底砂', 'ソイル', 'ヒーター', 'ライト'].join(' '),
    mustGroups: [['カルキ抜き', '塩素中和', '中和剤', '塩素'], ['水槽', 'アクアリウム', '淡水', '観賞魚']],
    plus: ['テトラ', 'GEX', 'コトブキ', '水質調整'],
    minPrice: 250,
    maxPrice: 2500,
    why: '水換え・立ち上げ時の基本用品。水道水を使うなら必要。',
    check: '淡水対応、使用量、容量を確認。'
  }),
  bacteria: R('バクテリア剤', '水質・管理', '水槽 バクテリア剤 淡水', {
    ng: [...BASE_REJECT, ...LIVE_REJECT, '餌', 'エサ', 'フード', 'ろ材のみ', '海水専用'].join(' '),
    mustGroups: [['バクテリア', '硝化菌', 'PSB'], ['水槽', 'アクアリウム', '淡水']],
    plus: ['立ち上げ', '水質', 'ろ過'],
    minPrice: 400,
    maxPrice: 3500,
    why: '立ち上げ初期の不安を下げたい人向け。必須ではないが初心者には安心材料。',
    check: '淡水対応、使い方、開封後の保管を確認。'
  }),
  cleaner_small: R('小型水槽 掃除用品', '掃除', '小型水槽 掃除 クリーナー', {
    ng: [...BASE_REJECT, ...EQUIPMENT_REJECT, '業務用', '部品', '交換用'].join(' '),
    mustGroups: [['掃除', 'クリーナー', '水換え', 'ポンプ', 'サイフォン', 'スポイト'], ['水槽', 'アクアリウム']],
    plus: ['小型', '底砂', 'ホース'],
    minPrice: 400,
    maxPrice: 3500,
    why: '水換え・底の汚れ取りに使う基本用品。',
    check: '水槽サイズに対して大きすぎないか確認。'
  }),
  net: R('魚用ネット', '掃除', '熱帯魚 ネット 小型', {
    ng: [...BASE_REJECT, '大型', '錦鯉', '虫取り', '昆虫'].join(' '),
    mustGroups: [['ネット', '網'], ['熱帯魚', '観賞魚', '水槽', 'メダカ']],
    plus: ['小型', 'やわらかい'],
    minPrice: 150,
    maxPrice: 1500,
    why: '生体の移動やメンテであると便利。',
    check: '水槽サイズに合う小さめを選ぶ。'
  }),
  led_small: R('小型水槽LED', 'ライト', '30cm 水槽 LEDライト', {
    ng: [...BASE_REJECT, ...EQUIPMENT_REJECT, '電球のみ', '部品', '爬虫類'].join(' '),
    mustGroups: [['LED', 'ライト', '照明'], ['水槽', 'アクアリウム']],
    plus: ['30cm', '小型', '水草', 'タイマー'],
    minPrice: 900,
    maxPrice: 8000,
    why: '観賞性を上げ、生活リズムも作りやすい。水草をやるなら優先度高め。',
    check: '対応水槽幅、明るさ、タイマー有無を確認。'
  }),
  led_45_60: R('45〜60cm水槽LED', 'ライト', '60cm 水槽 LEDライト', {
    ng: [...BASE_REJECT, ...EQUIPMENT_REJECT, '電球のみ', '部品', '爬虫類'].join(' '),
    mustGroups: [['LED', 'ライト', '照明'], ['水槽', 'アクアリウム']],
    plus: ['45cm', '60cm', '水草', 'タイマー'],
    minPrice: 2000,
    maxPrice: 14000,
    why: '大きめ水槽や水草レイアウトで見た目を整えたい人向け。',
    check: '水槽幅への対応、光量、設置方法を確認。'
  }),
  bottom_sand: R('底砂・ソイル', 'レイアウト', '水槽 ソイル 底砂', {
    ng: [...BASE_REJECT, '生体', '死着', '餌', 'エサ', 'フード', 'フィルター', 'ヒーター', 'ライト', 'ろ材', 'サンゴ砂', '海水'].join(' '),
    mustGroups: [['底砂', 'ソイル', '砂利', 'サンド'], ['水槽', 'アクアリウム', '熱帯魚', 'メダカ']],
    plus: ['淡水', '水草', '低床', '立ち上げ'],
    minPrice: 500,
    maxPrice: 4500,
    why: '見た目と水草・生体の落ち着きに関わる。',
    check: '水質に影響するタイプか、必要量が水槽に合うか確認。'
  }),
  hideout: R('隠れ家・シェルター', 'レイアウト', '水槽 隠れ家 シェルター', {
    ng: [...BASE_REJECT, '生体', '死着', '餌', 'エサ', 'フード', '爬虫類', '大型'].join(' '),
    mustGroups: [['隠れ家', 'シェルター', '土管', 'ハウス'], ['水槽', 'アクアリウム', 'ベタ', 'エビ']],
    plus: ['小型', '陶器', 'レイアウト'],
    minPrice: 350,
    maxPrice: 3000,
    why: 'ベタ・エビ・小型魚のストレス軽減と見た目づくりに。',
    check: '角が鋭すぎないか、魚が挟まらないか確認。'
  }),
  water_plants: R('初心者向け水草', 'レイアウト', '水草 初心者 アヌビアス', {
    ng: [...BASE_REJECT, '種子', 'タネ', '種', '海藻', '造花', '人工'].join(' '),
    mustGroups: [['水草', 'アヌビアス', 'ウィローモス', 'マツモ', 'ミクロソリウム']],
    plus: ['初心者', 'CO2不要', '無農薬', '活着'],
    minPrice: 400,
    maxPrice: 4000,
    why: 'エビ・小型魚の隠れ家にもなり、見た目を整えやすい。',
    check: '農薬・無農薬表記、育成難度、CO2不要か確認。'
  }),
  food_tropical: R('小型熱帯魚の餌', '餌', '小型熱帯魚 餌 フード', {
    ng: [...BASE_REJECT, ...FOOD_CONFUSER_REJECT, '冷凍', '大型魚', '金魚', '鯉'].join(' '),
    queries: ['小型熱帯魚 餌 フード', '熱帯魚 フード 小型魚', 'グッピー テトラ 餌 フード'],
    mustGroups: [['餌', 'エサ', 'フード', '飼料'], ['熱帯魚', 'グッピー', 'テトラ', '小型魚']],
    plus: ['顆粒', 'フレーク', '浮上性'],
    minPrice: 200,
    maxPrice: 2000,
    why: 'ネオンテトラ・グッピー等の入門水槽に。',
    check: '粒サイズと対象魚を確認。'
  }),
  food_betta: R('ベタの餌', '餌', 'ベタ 餌 フード', {
    ng: [...BASE_REJECT, ...FOOD_CONFUSER_REJECT, '冷凍', '大型魚', '金魚', '鯉'].join(' '),
    queries: ['ベタ 餌 フード', 'ベタ フード 専用', 'ベタ 餌 顆粒'],
    mustGroups: [['餌', 'エサ', 'フード', '飼料'], ['ベタ']],
    plus: ['専用', '顆粒', '浮上性'],
    minPrice: 200,
    maxPrice: 2000,
    why: 'ベタ専用またはベタ向けの粒サイズを優先。',
    check: '与えすぎ防止のため量と粒サイズを確認。'
  }),
  food_medaka: R('メダカの餌', '餌', 'メダカ 餌', {
    ng: [...BASE_REJECT, ...FOOD_CONFUSER_REJECT, '冷凍', '大型魚', '鯉'].join(' '),
    queries: ['メダカ 餌', 'めだか 餌', 'メダカ フード', 'メダカ 飼料', 'メダカ 主食', 'メダカの餌'],
    mustGroups: [['餌', 'エサ', 'フード', '飼料', '主食'], ['メダカ', 'めだか']],
    plus: ['メダカ', 'めだか', '餌', 'エサ', 'フード', '飼料', '主食', '顆粒', '浮上性', '成魚'],
    minPrice: 200,
    maxPrice: 2000,
    why: 'ヒーターなし候補のメダカ水槽向け。',
    check: '室内飼育・成魚/稚魚の対象を確認。'
  }),
  food_shrimp: R('エビの餌', '餌', 'エビ 餌 シュリンプフード', {
    ng: [...BASE_REJECT, ...FOOD_CONFUSER_REJECT, '冷凍', '大型魚', '金魚'].join(' '),
    queries: ['エビ 餌 シュリンプフード', 'シュリンプ フード エビ', 'ミナミヌマエビ 餌', 'エビ タブレット 餌'],
    mustGroups: [['餌', 'エサ', 'フード', '飼料'], ['エビ', 'シュリンプ', 'ミナミヌマエビ']],
    plus: ['沈下性', 'タブレット', 'ヌマエビ'],
    minPrice: 250,
    maxPrice: 2000,
    why: 'エビ中心の水槽で不足しやすい栄養を補う候補。',
    check: 'ミナミヌマエビ等の対象を確認。'
  }),
  live_betta: R('生体：ベタ', '生体', 'ベタ 生体 熱帯魚', {
    ng: [...BASE_REJECT, '餌', 'エサ', 'フード', '水槽', 'ヒーター', 'ライト'].join(' '),
    mustGroups: [['ベタ'], ['生体', '販売', '熱帯魚']],
    plus: ['オス', 'メス', '死着保証'],
    minPrice: 800,
    maxPrice: 7000,
    why: '単独飼育で観賞しやすい人気種。',
    check: '配送条件・死着保証・到着後の水合わせを確認。'
  }),
  live_neon: R('生体：ネオンテトラ', '生体', 'ネオンテトラ 生体 熱帯魚', {
    ng: [...BASE_REJECT, '餌', 'エサ', 'フード', '水槽', 'ヒーター', 'ライト'].join(' '),
    mustGroups: [['ネオンテトラ'], ['生体', '販売', '熱帯魚']],
    plus: ['死着保証', '匹'],
    minPrice: 500,
    maxPrice: 5000,
    why: '小型魚の群泳を楽しみたい人向け。少数から導入。',
    check: '匹数・配送条件・水合わせを確認。'
  }),
  live_green_neon_tetra: R('生体：グリーンネオンテトラ', '生体', 'グリーンネオンテトラ 生体 熱帯魚', {
    ng: [...BASE_REJECT, '餌', 'エサ', 'フード', '水槽', 'ヒーター', 'ライト'].join(' '),
    mustGroups: [['グリーンネオンテトラ', 'グリーンネオン'], ['生体', '販売', '熱帯魚']],
    plus: ['死着保証', '匹', '群泳', '小型'],
    minPrice: 600,
    maxPrice: 7000,
    why: '青緑の発色を楽しめる小型カラシン。群泳向き。',
    check: '匹数・配送条件・水合わせを確認。'
  }),
  live_guppy: R('生体：グッピー/プラティ', '生体', 'グッピー プラティ 生体', {
    ng: [...BASE_REJECT, '餌', 'エサ', 'フード', '水槽', 'ヒーター', 'ライト'].join(' '),
    mustGroups: [['グッピー', 'プラティ'], ['生体', '販売', '熱帯魚']],
    plus: ['ミックス', '死着保証', '匹'],
    minPrice: 600,
    maxPrice: 6000,
    why: '色味を楽しみやすい入門候補。繁殖しやすい点に注意。',
    check: 'オスメス構成・増えやすさ・配送条件を確認。'
  }),
  live_medaka: R('生体：メダカ', '生体', 'メダカ 生体 室内', {
    ng: [...BASE_REJECT, '餌', 'エサ', 'フード', '水槽', 'カルキ抜き', 'ライト'].join(' '),
    mustGroups: [['メダカ', 'めだか'], ['生体', '販売']],
    plus: ['死着保証', '匹', '室内'],
    minPrice: 500,
    maxPrice: 6000,
    why: 'ヒーターなし候補。屋内外どちらも検討しやすい。',
    check: '品種・匹数・季節の配送条件を確認。'
  }),
  live_minami: R('生体：ミナミヌマエビ', '生体', 'ミナミヌマエビ 生体', {
    ng: [...BASE_REJECT, '餌', 'エサ', 'フード', '水槽', 'カルキ抜き', 'ライト'].join(' '),
    mustGroups: [['ミナミヌマエビ', 'ヌマエビ'], ['生体', '販売']],
    plus: ['死着保証', '匹'],
    minPrice: 500,
    maxPrice: 4000,
    why: 'コケ取り補助・水草水槽の入門候補。',
    check: '農薬付き水草との相性、配送条件を確認。'
  }),
  live_yamato: R('生体：ヤマトヌマエビ', '生体', 'ヤマトヌマエビ 生体', {
    ng: [...BASE_REJECT, '餌', 'エサ', 'フード', '水槽', 'カルキ抜き', 'ライト'].join(' '),
    mustGroups: [['ヤマトヌマエビ', 'ヤマト'], ['生体', '販売']],
    plus: ['死着保証', '匹'],
    minPrice: 700,
    maxPrice: 5000,
    why: 'コケ取り補助の役割生体として導入しやすい候補。',
    check: '混泳相性、脱走対策、配送条件を確認。'
  }),
  live_corydoras: R('生体：コリドラス', '生体', 'コリドラス 生体 熱帯魚', {
    ng: [...BASE_REJECT, '餌', 'エサ', 'フード', '水槽', 'ヒーター', 'ライト'].join(' '),
    mustGroups: [['コリドラス'], ['生体', '販売', '熱帯魚']],
    plus: ['パンダ', 'アエネウス', '死着保証'],
    minPrice: 700,
    maxPrice: 6000,
    why: '底層のにぎわい役として導入しやすい候補。',
    check: '底砂の角、沈下性餌、匹数構成を確認。'
  }),
  live_otocinclus: R('生体：オトシンクルス', '生体', 'オトシンクルス 生体 熱帯魚', {
    ng: [...BASE_REJECT, '餌', 'エサ', 'フード', '水槽', 'ヒーター', 'ライト'].join(' '),
    mustGroups: [['オトシンクルス', 'オトシン'], ['生体', '販売', '熱帯魚']],
    plus: ['死着保証', '匹'],
    minPrice: 800,
    maxPrice: 5000,
    why: 'コケ取り補助の役割生体として人気の候補。',
    check: '立ち上げ直後の導入回避、餓死対策の給餌を確認。'
  }),
  live_rasbora: R('生体：ラスボラ', '生体', 'ラスボラ 生体 熱帯魚', {
    ng: [...BASE_REJECT, '餌', 'エサ', 'フード', '水槽', 'ヒーター', 'ライト'].join(' '),
    mustGroups: [['ラスボラ'], ['生体', '販売', '熱帯魚']],
    plus: ['ヘテロモルファ', 'エスペイ', '死着保証'],
    minPrice: 700,
    maxPrice: 5000,
    why: '温和な群泳魚として初心者が選びやすい候補。',
    check: '匹数、混泳相性、配送条件を確認。'
  }),
  live_white_cloud: R('生体：アカヒレ', '生体', 'アカヒレ 生体', {
    ng: [...BASE_REJECT, '餌', 'エサ', 'フード', '水槽', 'ヒーター', 'ライト'].join(' '),
    mustGroups: [['アカヒレ', 'ホワイトクラウド'], ['生体', '販売']],
    plus: ['匹', '死着保証'],
    minPrice: 600,
    maxPrice: 5000,
    why: 'ヒーターなし候補にも組み込みやすい丈夫な小型魚。',
    check: '室温帯の適性、混泳相性、匹数を確認。'
  })
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

function words(value) {
  return String(value || '').split(/[\s　]+/).map((s) => s.trim()).filter(Boolean);
}

function norm(value) {
  return String(value || '').normalize('NFKC').toLowerCase().replace(/[\s　・_\-―ー]+/g, '');
}

function includesTerm(text, term) {
  return text.includes(norm(term));
}

function matchesAny(text, terms = []) {
  return terms.some((term) => includesTerm(text, term));
}

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

function pickImage(item) {
  const candidates = [item.mediumImageUrls, item.smallImageUrls, item.imageUrls].filter(Array.isArray);
  for (const list of candidates) {
    if (!list.length) continue;
    const first = list[0];
    if (typeof first === 'string') return first;
    if (first && typeof first === 'object') return first.imageUrl || first.url || '';
  }
  return '';
}

function normalizeItem(entry) {
  const item = entry && entry.Item ? entry.Item : entry;
  return {
    itemName: item?.itemName || '',
    itemPrice: Number(item?.itemPrice || 0),
    itemUrl: item?.itemUrl || '',
    affiliateUrl: item?.affiliateUrl || item?.itemUrl || '',
    itemCode: item?.itemCode || '',
    shopName: item?.shopName || '',
    reviewCount: Number(item?.reviewCount || 0),
    reviewAverage: Number(item?.reviewAverage || 0),
    postageFlag: Number(item?.postageFlag || 0),
    pointRate: Number(item?.pointRate || 1),
    imageUrl: pickImage(item || {}),
  };
}

function scoreItem(item, recipe) {
  const text = norm(`${item.itemName || ''} ${item.shopName || ''}`);
  const rejects = words(recipe.ng);
  if (rejects.some((term) => includesTerm(text, term))) return -999;
  if (recipe.minPrice && item.itemPrice < recipe.minPrice) return -999;
  if (recipe.maxPrice && item.itemPrice > recipe.maxPrice) return -999;

  let score = 0;
  for (const group of recipe.mustGroups || []) {
    if (!matchesAny(text, group)) return -999;
    score += 8;
  }
  for (const term of recipe.plus || []) {
    if (includesTerm(text, term)) score += 2;
  }
  score += Math.min(item.reviewCount || 0, 100) / 50;
  score += Math.max(0, (item.reviewAverage || 0) - 3) * 0.5;
  if (item.postageFlag === 0) score += 0.5;
  return score;
}

function scoreFoodMedaka(item) {
  const text = norm(`${item.itemName || ''} ${item.shopName || ''}`);
  const medakaTerms = ['メダカ', 'めだか'];
  const foodTerms = ['餌', 'エサ', 'フード', '飼料', '主食'];
  const rejectTerms = ['psb', 'バクテリア', 'カルキ抜き', '塩素中和', '中和剤', '水質調整', '生体', '死着', 'ソイル', '水草', '飼育セット', '水槽セット'];

  if (rejectTerms.some((term) => includesTerm(text, term))) return -999;
  if (!matchesAny(text, medakaTerms)) return -999;

  let score = 0;
  if (matchesAny(text, foodTerms)) score += 14;
  else score += 4;

  score += 8;
  if (includesTerm(text, 'メダカ')) score += 2;
  if (includesTerm(text, 'めだか')) score += 2;
  if (includesTerm(text, '稚魚')) score -= 6;
  if (includesTerm(text, '卵')) score -= 6;

  score += Math.min(item.reviewCount || 0, 150) / 40;
  score += Math.max(0, (item.reviewAverage || 0) - 3) * 0.7;
  if (item.postageFlag === 0) score += 0.4;
  return score;
}

function apiNgKeyword(recipeId, recipe) {
  if (['tank_20', 'tank_30', 'tank_45', 'tank_60'].includes(recipeId)) {
    return ['中古', '訳あり', 'ジャンク', '空容器', '標本', 'フィギュア', 'ぬいぐるみ', '金魚鉢', 'メダカ鉢', 'プラケース', '虫かご'].join(' ');
  }
  if (recipeId === 'food_medaka') {
    return ['中古', '訳あり', 'ジャンク', '空容器', '標本', 'PSB', 'バクテリア', 'カルキ抜き', '水質調整', '生体'].join(' ');
  }
  if (recipeId === 'filter_low_flow') {
    return ['中古', '訳あり', 'ジャンク', '空容器', '標本', '交換用', 'カートリッジのみ', 'ろ材のみ'].join(' ');
  }
  return recipe.ng || '';
}

function dedupeItems(items) {
  const seen = new Set();
  return items.filter((item) => {
    const key = item.itemCode || norm(item.itemName).slice(0, 80);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function modeToSort(mode) {
  if (mode === 'price') return 'standard';
  if (mode === 'rating') return 'standard';
  if (mode === 'review') return 'standard';
  return 'standard';
}

function sortLocally(items, mode) {
  const copy = [...items];
  if (mode === 'price') return copy.sort((a, b) => a.itemPrice - b.itemPrice);
  if (mode === 'rating') return copy.sort((a, b) => (b.reviewAverage - a.reviewAverage) || (b.reviewCount - a.reviewCount));
  if (mode === 'review') return copy.sort((a, b) => (b.reviewCount - a.reviewCount) || (b.reviewAverage - a.reviewAverage));
  return copy.sort((a, b) => (b._score - a._score) || (b.reviewCount - a.reviewCount));
}

function publicRecipe(id) {
  const r = RECIPES[id];
  if (!r) return null;
  return { id, label: r.label, category: r.category, why: r.why, check: r.check, query: r.query, minPrice: r.minPrice, maxPrice: r.maxPrice };
}

function getRawItems(data) {
  if (Array.isArray(data?.items)) return data.items;
  if (Array.isArray(data?.Items)) return data.Items;
  if (Array.isArray(data?.results)) return data.results;
  return [];
}

async function fetchRakutenItems(recipeId, recipe, query, mode, env, request, withReviewFlag = false) {
  const params = new URLSearchParams();
  params.set('applicationId', env.RAKUTEN_APPLICATION_ID);
  params.set('accessKey', env.RAKUTEN_ACCESS_KEY);
  if (env.RAKUTEN_AFFILIATE_ID) params.set('affiliateId', env.RAKUTEN_AFFILIATE_ID);
  params.set('format', 'json');
  params.set('formatVersion', '2');
  params.set('keyword', query);
  params.set('NGKeyword', apiNgKeyword(recipeId, recipe));
  params.set('sort', modeToSort(mode));
  params.set('hits', '30');
  params.set('availability', '1');
  params.set('imageFlag', '1');
  if (withReviewFlag) params.set('hasReviewFlag', '1');
  if (recipe.minPrice) params.set('minPrice', String(recipe.minPrice));
  if (recipe.maxPrice) params.set('maxPrice', String(recipe.maxPrice));
  params.set('elements', 'itemName,itemPrice,itemUrl,affiliateUrl,itemCode,shopName,reviewCount,reviewAverage,mediumImageUrls,smallImageUrls,postageFlag,pointRate');

  const origin = new URL(request.url).origin;
  const referer = env.RAKUTEN_REFERER || `${origin}/`;
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
    return { ok: false, status: res.status, error: errorText.slice(0, 500), items: [] };
  }

  const data = await res.json();
  return { ok: true, data, items: getRawItems(data).map(normalizeItem).filter((item) => item.itemName && item.itemUrl) };
}

function isTankRecipe(recipeId) {
  return ['tank_20', 'tank_30', 'tank_45', 'tank_60'].includes(recipeId);
}

function fallbackItems(normalizedItems, recipe, recipeId) {
  const rejects = words(recipe.ng);
  const relaxTerms = ['フタ', 'ふた', '蓋', 'ガラスフタ', 'マット', 'シート', '台', 'ラック'];
  const activeRejects = isTankRecipe(recipeId)
    ? rejects.filter((term) => !relaxTerms.includes(term))
    : rejects;
  return normalizedItems.filter((item) => {
    const text = norm(`${item.itemName || ''} ${item.shopName || ''}`);
    if (activeRejects.some((term) => includesTerm(text, term))) return false;
    if (recipe.minPrice && item.itemPrice < recipe.minPrice) return false;
    if (recipe.maxPrice && item.itemPrice > recipe.maxPrice) return false;
    return true;
  });
}

function fallbackFoodMedakaItems(normalizedItems, recipe) {
  return normalizedItems.filter((item) => {
    const text = norm(`${item.itemName || ''} ${item.shopName || ''}`);
    const hardRejects = ['psb', 'バクテリア', 'カルキ抜き', '塩素中和', '中和剤', '水質調整', '生体', '死着', 'ソイル', '水草', '飼育セット', '水槽セット'];
    if (hardRejects.some((term) => includesTerm(text, term))) return false;
    if (!matchesAny(text, ['メダカ', 'めだか'])) return false;
    if (recipe.minPrice && item.itemPrice < recipe.minPrice) return false;
    if (recipe.maxPrice && item.itemPrice > recipe.maxPrice) return false;
    return true;
  });
}

async function searchOne(recipeId, mode, env, request) {
  const recipe = RECIPES[recipeId];
  if (!recipe) return { recipeId, ok: false, error: 'unknown_recipe' };

  const applicationId = env.RAKUTEN_APPLICATION_ID;
  const accessKey = env.RAKUTEN_ACCESS_KEY;
  if (!applicationId || !accessKey) {
    return {
      recipeId,
      ok: false,
      setupRequired: true,
      recipe: publicRecipe(recipeId),
      message: '商品候補を表示する準備中です。',
      fallbackSearchUrl: `https://search.rakuten.co.jp/search/mall/${encodeURIComponent(recipe.query)}/`,
    };
  }

  const origin = new URL(request.url).origin;
  const cacheKey = new Request(`${origin}/api/rakuten-products?recipeId=${recipeId}&mode=${mode}&v=8-safe`, request);
  const cache = caches.default;
  const cached = await cache.match(cacheKey);
  if (cached) return await cached.json();

  const queryList = unique([recipe.query, ...(recipe.queries || [])]);
  const preScorer = recipeId === 'food_medaka'
    ? (item) => scoreFoodMedaka(item)
    : (item) => scoreItem(item, recipe);
  let normalizedItems = [];
  let firstError = null;
  let usedQueryCount = 0;

  for (const query of queryList) {
    const result = await fetchRakutenItems(recipeId, recipe, query, mode, env, request, false);
    usedQueryCount += 1;
    if (!result.ok) {
      firstError ||= result;
      if (result.status === 429) break;
    } else {
      normalizedItems = normalizedItems.concat(result.items);
      const enough = normalizedItems
        .map((item) => ({ ...item, _score: preScorer(item) }))
        .filter((item) => item._score > 0);
      if (dedupeItems(enough).length >= 4) break;
    }
    if (queryList.length > 1) await sleep(550);
  }

  if (!normalizedItems.length && firstError) {
    return { recipeId, ok: false, status: firstError.status, recipe: publicRecipe(recipeId), error: firstError.error };
  }

  const scorer = preScorer;
  const scoredItems = normalizedItems
    .map((item) => ({ ...item, _score: scorer(item) }))
    .filter((item) => item._score > 0);
  const softBaseItems = recipeId === 'food_medaka'
    ? fallbackFoodMedakaItems(normalizedItems, recipe)
    : fallbackItems(normalizedItems, recipe, recipeId);
  const softItems = softBaseItems
    .map((item) => ({ ...item, _score: Math.max(0.1, scorer(item)) }));
  const finalPool = scoredItems.length ? scoredItems : softItems;
  const finalItems = finalPool.length ? finalPool : normalizedItems.map((item) => ({ ...item, _score: 0.1 }));
  const items = sortLocally(dedupeItems(finalItems), mode).slice(0, 4).map(({ _score, ...item }) => item);

  const payload = {
    recipeId,
    ok: true,
    recipe: publicRecipe(recipeId),
    count: normalizedItems.length,
    rawCount: normalizedItems.length,
    filteredCount: scoredItems.length,
    usedRelaxedFilter: !scoredItems.length,
    usedQueryCount,
    items,
    mode,
  };
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
