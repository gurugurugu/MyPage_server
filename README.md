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
  
