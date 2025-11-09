import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"; // 导入你的顶层组件

// 如果你有全局样式文件，可以继续导入（可选）
// import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
