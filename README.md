# 餐廳清單
管理個人餐廳資訊

# 環境建置與需求
````
"node.js": "v10.15.0" -執行環境
"express": "^4.17.1"-框架(framwork)
"body-parser": "^1.19.0"-中介軟體(middleware)
"express-handlebars": "^5.3.2"-模板引擎(template engine)
"method-override": "^3.0.0",-中介軟體(middleware)
"connect-flash": "^0.1.1",-訊息顯示(middleware)
"passport": "^0.4.1",-用戶驗證
"passport-facebook": "^3.0.0",-用戶驗證
"passport-local": "^1.0.0"-用戶驗證
"mongoose": "^5.12.7"-MongoDB ODM
"mongoDB": "v4.2.14"-資料庫
"bcryptjs": "^2.4.3",-明碼hash
"nodemon": "^2.0.7"-開發套件
"dotenv": "^9.0.2",
````
# 安裝與使用
### 下載專案
git clone https://github.com/zhihdd/restaurant-login.git
or
右上方 "code" 下載

### 安裝套件
```
npm install
```
### 使用
1. 終端機orCMD中執行下列指令，產生種子資料
```
npm run seed
```
```
第一位使用者：
email: user1@example.com
password: 12345678
擁有 #1, #2, #3, #4 號餐廳
第二位使用者：
email: user2@example.com
password: 12345678
擁有 #5, #6, #7, #8 號餐廳
```
2. 終端機orCMD中執行下列指令，執行程式 <br>
使用功能
```
npm start
```
3. 開發環境下使用功能
```
npm run dev
```

# 功能
新增個人帳戶    
使用facebook建立帳戶  
讀取個人管理餐廳資訊  
新增個人管理餐廳  
刪除個人管理餐廳  
編輯個人管理餐廳  
