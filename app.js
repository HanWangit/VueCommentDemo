const express = require("express");
const mysql = require("mysql");
const app = express();

//数据库初始化
const conn = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "root",
  database: "vue_comment"
});

//静态资源托管
app.use(express.static("./public"));
app.use("/node_modules", express.static("./node_modules"));
app.use("/lib", express.static("./lib"));

//访问首页
app.get("/getAllData", (req, res) => {
  const sql = "select * from comment";
  conn.query(sql, (err, result) => {
    if (err) return res.send({ status: 400, msg: "获取数据失败" });
    res.send({
      status: 200,
      msg: "数据获取成功",
      data: result[0]
    });
  });
});

app.listen("8033", () => {
  console.log("http://127.0.0.1:8033/");
});
