# demo-openai-completion

## 実行環境変数

- python .python-version を参照
- node .node-version .nvmrc を参照

## 準備

- python

  ```
  python -m pip install -r requirements.txt
  ```

- typescript
  ```
  npm install
  ```

## .env ファイル定義

.env ファイルを作成して

```
API_KEY_OPENAI="OpenAIのAPIキーを定義"
```

## 実行方法

- python
  VSCode から直接ファイルを実行

- node
  npx ts-node chat.ts を実行

## パラメーター

```
// ランダム性の制御下げるとランダム性の補完が少なくなる
// 「0.0-1.0」1だと完全にランダム
temperature=0.4,
// 生成するトークンの最大数
max_tokens=64,
// サンプリングによる多様性の制御
// 「0.0-1.0」0.1だと確立の高い上位10%の候補から選択される
// 大きくすると様々な単語から選ぶようになる
top_p=0.0-1.0,
// これまでのテキストでの既存の頻度に基づいて新しいトークンにどれだけのペナルティを課す
// [0.0-2.0]出てきた回数が多いほどペナルティを課す、タイミングは使った回数に応じて
frequency_penalty=0.0, # 周波数制御[0-2]：高いと同じ話題を繰り返さなくなる
// 既に出てきた単語をもう一度使うかどうかを指定
// [0.0-2.0]一度でも使ったかどうかに対してペナルティを加える
presence_penalty=0.0
```
