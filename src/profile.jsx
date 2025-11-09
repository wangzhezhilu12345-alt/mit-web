import React, { useState } from "react";
import CatHappiness from "./CatHappiness";
import "./profile.css";
import avatar from "./头像.jpg";

/**
 * Profile 组件
 * - 自身拥有一个状态变量 catHappiness
 * - 将该状态通过 props 传递给子组件 CatHappiness
 */
export default function Profile() {
  const [catHappiness, setCatHappiness] = useState(0);

  const handle = () => {
    setCatHappiness(catHappiness + 1);
  };

  return (
    <div>
      {/* 头像 */}
      <img src={avatar} alt="me" className="avatar" onClick={handle} />

      {/* 名字 */}
      <h1 className="u-textCenter">broken</h1>
      <hr />

      {/* 三个信息区块 */}
      <div className="infoContainer">
        {/* 左边 */}
        <section className="infoBox u-textCenter">
          <h4>我最喜欢的歌手</h4>
          <p>Egoist</p>
        </section>

        {/* 中间 —— Happiness */}
        <CatHappiness catHappiness={catHappiness} />

        {/* 右边 */}
        <section className="infoBox u-textCenter">
          <h4>我最喜欢的动漫</h4>
          <p>罪恶王冠</p>
        </section>
      </div>
    </div>
  );
}
