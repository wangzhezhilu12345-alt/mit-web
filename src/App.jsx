import React from "react";
import Navbar from "./Navbar";
import Profile from "./profile";
import Feed from "./Feed";

/**
 * App 组件是页面的入口
 * 负责渲染导航栏和个人档案(Profile)
 */
export default function App() {
  return (
    <div>
      <Feed />
      <Navbar />
      <Profile />
    </div>
  );
}
