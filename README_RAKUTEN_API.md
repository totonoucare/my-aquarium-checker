# 楽天API直繋ぎ版メモ

このZIPは、もしも簡単リンクの手貼り前提をやめて、楽天市場商品検索APIで候補商品を取得する実験版です。

## 重要：ZIPをダッシュボードにドラッグ&ドロップするだけではAPI部分は動かない可能性があります

楽天APIキーをフロントHTML/JSに書くのは危険なので、`/functions/api/rakuten-products.js` という Cloudflare Pages Functions 経由にしています。

Cloudflare公式ドキュメントでは、Pages Functions のデプロイは Git 連携または Wrangler で行う案内になっており、ダッシュボードからの Direct Upload は Functions 非対応とされています。

そのため、静的ページだけを確認するならZIP直置きでOKですが、楽天API候補表示まで動かすなら Wrangler か Git 連携でデプロイしてください。

## 追加した主なもの

- `/starter-set-checker/`：診断結果から、推奨1セットを最上部に表示
- `/comparison/`：検索レシピごとの楽天API比較ページ
- `/assets/rakuten-recipes.js`：フロント表示用の検索レシピ・セット構成
- `/functions/api/rakuten-products.js`：Cloudflare Pages Functions用の楽天APIプロキシ
- `package.json` / `wrangler.toml`：Wranglerデプロイ用の仮設定

## Cloudflareに設定する環境変数

Cloudflare Pages の Settings → Environment variables か Wrangler secrets に設定します。

- `RAKUTEN_APPLICATION_ID`
- `RAKUTEN_ACCESS_KEY`
- `RAKUTEN_AFFILIATE_ID` 任意。ただし成果計測するなら必須

2026-04-01版の楽天市場商品検索APIは `applicationId` と `accessKey` が必要です。`affiliateId` を指定すると、レスポンスに `affiliateUrl` が返ります。

## Wranglerでの概略

```bash
npm install
npx wrangler login
npx wrangler pages secret put RAKUTEN_APPLICATION_ID --project-name=my-aquarium-checker
npx wrangler pages secret put RAKUTEN_ACCESS_KEY --project-name=my-aquarium-checker
npx wrangler pages secret put RAKUTEN_AFFILIATE_ID --project-name=my-aquarium-checker
npm run deploy
```

プロジェクト名が違う場合は `package.json` の `--project-name=` を変更してください。

## 設計方針

- 水槽スターターセット商品は主役にしない
- 原則として「水槽」「フィルター」「ヒーター」など役割ごとに単品候補を出す
- 楽天APIで候補取得
- 検索レシピJSONで検索語・除外語・価格帯を管理
- API未設定時は楽天検索へのフォールバックを出す

## 注意

APIだけで商品妥当性は保証できません。検索レシピは実際の表示結果を見ながら、除外語・価格帯・検索語を調整してください。
