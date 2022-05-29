module.exports = {
  //直接把它做在匯出裡面
  authenticator: (req, res, next) => {
    if (req.isAuthenticated()) {    //Passport.js 提供的函式
      return next()
    }
    res.redirect('/users/login')
    //如果沒有進到if裡面, 就表示isAuthenticated沒有回傳true, 使用者沒有通過認證
  }
}

