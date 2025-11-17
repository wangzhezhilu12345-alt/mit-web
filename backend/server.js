const express = require("express");
const cors = require("cors");
const app = express(); //创建一个express对象
app.use(cors()); //允许所有来源的请求
app.use(express.json()); //

let stories = [
  { id: 1, text: "这是第一个帖子" },
  { id: 2, text: "这是第二个帖子" },
];

//get接口
app.get("/stories", (req, res) => {
  res.json(stories);
});

//post接口
app.post("/stories", (req, res) => {
  const { text } = req.body; //解构?
  if (!text) {
    return res.status(400).json({ error: "text only" });
  }
  const newStory = {
    id: stories.length ? stories[stories.length - 1].id + 1 : 1,
    text,
  }; //这个三目运算符在初始化哎
  stories.push(newStory);
  res.status(200).json(newStory); //这是一种链式调用，因为status自己返回的就是自己，所以可以再调用自己的东西
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("正在监听");
});
