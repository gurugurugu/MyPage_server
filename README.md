# 個人網頁後端

此專案為個人網頁的後端部分，主要負責與資料庫進行互動，提供前端所需的資料，並處理使用者透過 "聯絡我" 表單發送的留言。

## 功能

1. **個人照片 API**
   - 從資料庫獲取個人照片的相關資訊，並提供 API 供前端調用顯示照片。

2. **文章 API**
   - 從資料庫中獲取文章列表及詳細內容，前端可以使用此 API 獲取並展示文章。

3. **聯絡我功能**
   - 處理前端提交的聯絡表單，將訪客的姓名、聯繫方式與留言儲存到資料庫，方便後續查詢與回應。

## API 結構

### 1. 獲取個人照片
**GET** `/api/photos`
- 說明：返回所有個人照片的資料。
- 回應格式：
  ```json
  [
    {
      "id": 1,
      "url": "https://example.com/photo1.jpg",
      "description": "Photo description"
    },
    ...
  ]
  ```

### 2. 獲取文章列表
**GET** `/api/articles`
- 說明：返回文章的摘要列表。
- 回應格式：
  ```json
  [
    {
      "id": 1,
      "title": "文章標題",
      "summary": "文章摘要",
      "date": "2024-09-05"
    },
    ...
  ]
  ```

### 3. 獲取單篇文章
**GET** `/api/articles/{id}`
- 說明：返回指定文章的詳細內容。
- 回應格式：
  ```json
  {
    "id": 1,
    "title": "文章標題",
    "content": "完整的文章內容",
    "date": "2024-09-05"
  }
  ```

### 4. 提交聯絡表單
**POST** `/api/contact`
- 說明：接收前端提交的聯絡表單，並將留言儲存至資料庫。
- 請求格式：
  ```json
  {
    "name": "訪客姓名",
    "email": "訪客的聯繫方式",
    "message": "訪客的留言"
  }
  ```
- 回應格式：
  ```json
  {
    "status": "success",
    "message": "聯絡表單提交成功"
  }
  ```

## 安裝與運行

1. Clone 此專案到本地：
   ```bash
   git clone https://github.com/your-username/personal-website-backend.git
   ```

2. 安裝相依套件：
   ```bash
   npm install
   ```

3. 設置環境變數（如資料庫連線設定）。

4. 啟動伺服器：
   ```bash
   npm start
   ```

## 資料庫結構

1. **Photos** 表
   - `id`: 主鍵
   - `url`: 照片的URL
   - `description`: 照片的描述

2. **Articles** 表
   - `id`: 主鍵
   - `title`: 文章標題
   - `content`: 文章內容
   - `date`: 發佈日期

3. **ContactMessages** 表
   - `id`: 主鍵
   - `name`: 訪客姓名
   - `email`: 訪客的聯繫方式
   - `message`: 訪客的留言
   - `submitted_at`: 提交時間

## 未來規劃

- 增加更多個人作品展示。
- 增強留言通知功能，如發送通知郵件。
