# 台科大 EMBA 拍照認人

手機拍照、臉部比對，帶出 EMBA 學長姐資料。

- `index.html`：前台（拍照認人、文字搜尋）
- `admin.html`：後台（新增／編輯／上傳照片，需密碼）
- `config.js`：Apps Script API 網址
- 後端是 Google Apps Script（不放在此 repo），資料存在 Google 試算表與雲端硬碟，本 repo 不含任何個人資料或密碼

臉部比對使用 face-api.js，在瀏覽器內完成。
