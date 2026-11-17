# 頁外 Pageverse

繁體中文小說生成與閱讀網站，使用原生 HTML、CSS 與 JavaScript，不需要前端套件或建置指令，可直接部署到 Vercel。設定 OpenAI API 金鑰後，創作工坊會透過 Vercel Function 呼叫模型；沒有設定時則以本機故事模板產生可閱讀的草稿。

## 本機預覽

直接用瀏覽器開啟 `index.html` 即可。若想使用本機伺服器，可在此資料夾執行：

```bash
python -m http.server 8000
```

再開啟 `http://localhost:8000`。

## GitHub 與 Vercel 部署

1. 在 GitHub 建立空白 repository。
2. 在這個資料夾初始化 Git 並推送：

   ```bash
   git init
   git add .
   git commit -m "Build Pageverse novel reader"
   git branch -M main
   git remote add origin https://github.com/你的帳號/你的repository.git
   git push -u origin main
   ```

3. 在 Vercel 選擇 **Add New → Project**，匯入該 GitHub repository。
4. Framework Preset 選 **Other**；Build Command 留空，Output Directory 設為 `.`，然後部署。
5. 在 Vercel 專案 **Settings → Environment Variables** 加入 `OPENAI_API_KEY`。`OPENAI_MODEL` 可選填，預設為 `gpt-6.1-terra`。
6. 後續推送到 `main` 時，Vercel 會自動建立新的部署。

`OPENAI_API_KEY` 請只放在 Vercel 環境變數，不要填進前端檔案或提交到 GitHub。`.env.example` 只示範變數名稱，不含可用金鑰。

## 網站功能

- 內建 10 本完整小說；每次換一批即時產生 3 本新故事，保留更多不同推薦供探索。
- 題材與氛圍選擇、靈感提示，以及可重複生成完整三章的新故事。
- 推薦故事刷新、題材篩選與趨勢靈感。
- 每本小說都有標題、簡介、章節及可閱讀的內文。
- 閱讀器支援章節切換，底部閱讀列可在多本已開啟的小說間切換。
- 手機、平板與桌面版自適應排版。
- 會員展示流程、個人收藏庫與生成小說會保存在目前瀏覽器的 `localStorage`。

## 上線前的會員設定

會員與收藏目前只存在目前瀏覽器，無法跨裝置同步或驗證電子郵件。若要開放真實會員服務與雲端收藏，請接入 Supabase、Firebase 等身分驗證與資料庫服務。API 函式提供基本的單一執行個體 IP 限流；正式公開營運時，建議接上共享的持久化限流與會員用量管理。

