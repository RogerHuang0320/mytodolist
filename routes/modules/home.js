const express = require('express')
const router = express.Router()
const Todo = require('../../models/todo')

router.get('/', (req, res) => {
  Todo.find() // 取出 Todo model 裡的所有資料
    .lean() // 把 Mongoose 的 Model 物件轉換成乾淨的 JavaScript 資料陣列
    .sort({ name: 'asc' }) //desc
    .then(todos => res.render('index', { todos })) // 將資料傳給 index 樣板, 後面這裡就是key跟value的代號都一樣,都是todos, 原樣為{todos: todos}
    .catch(error => console.log(error)) // 錯誤處理
})

module.exports = router