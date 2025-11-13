import React from "react";
import Navbar from "./Navbar";
import Profile from "./profile";
import Feed from "./Feed";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NotFound from "./NotFound";

/**
 * App 组件是页面的入口
 * 负责渲染导航栏和个人档案(Profile)
 */
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* 页面内部导航按钮 */}
      <nav style={{ textAlign: "center", margin: "10px" }}>
        <Link to="/feed" style={{ margin: "0 10px" }}>
          动态区
        </Link>
        <Link to="/profile" style={{ margin: "0 10px" }}>
          个人资料
        </Link>
      </nav>
      <Routes>
        <Route path="/feed" element={<Feed />} />
        <Route path="/profile" element={<Profile />} />
        {/* 默认路径显示 Feed */}
        <Route path="/" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
