import React from "react";

/**
 * CatHappiness 组件
 * - 从 props 接收 catHappiness
 * - 只负责显示，不持有自己的状态
 */
export default function CatHappiness({ catHappiness }) {
  return (
    <section className="infoBox">
      <h3>Cat Happiness</h3>
      <div className="counterBox">
        <p className="counterValue">{catHappiness}</p>
      </div>
    </section>
  );
}
