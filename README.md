# playwright-learn2

[playwright](https://www.npmjs.com/package/playwright)による
E2E テストの練習。

public/ の下にある静的なコンテンツをチェックする

## 準備と確認

```sh
# 準備
pnpm i
playwright init chromium  # とりあえず chromium だけあればOK
# 確認
pnpm start
playwright cr 127.0.0.1:8080
```

## Playwright によるテスト

```sh
pnpm run test
```

## GitHub Actions によるテスト

いまのところ手動。git push の後
ボタンまたは

```sh
gh workflow run e2e-test.yml
```

で実行
