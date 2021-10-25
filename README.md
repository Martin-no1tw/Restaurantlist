我的餐廳清單
:此專案提供使用者新增、刪除、修改及檢視餐廳的資訊，例如:餐廳類別、地址、評分、描述等

功能列表
註冊帳號，註冊方式為輸入信箱及密碼，或是使用facebook第三方登入
依照餐廳名稱及餐廳類別搜尋
依照餐廳名稱、類別及地區排序
檢視餐廳詳細資訊包含類別、地址、電話、評分、圖片及簡介
點選Back返回首頁瀏覽全部餐廳資料
點選Edit編輯此筆餐廳資料
點選Delete刪除此筆餐廳資料
點選Create新增餐廳包含上傳圖片、評分、類別、地址等資訊

安裝
1.開啟終端機(Terminal)cd 到存放專案本機位置並執行: git clone https://github.com/Emily81926/restaurant_list.git

2.初始
cd restaurant_list  //切至專案資料夾
npm install  //安裝套件

3.產生預設使用者及餐廳資料至 MongoDB
npm run seed

4.開啟程式
npm run dev  //執行程式
終端顯示 express is listening on http://localhost:3000 mongodb connected! 即啟動完成，請至http://localhost:3000開始使用程式


使用工具
Visual Studio Code - 開發環境
Express - 應用程式架構
Express-Handlebars - 模板引擎
MongoDB - 資料庫
Mongoose - MongoDB 的 ODM 可以在程式中與資料庫溝通
