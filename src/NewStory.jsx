import React, { useState } from "react";

//这个组件作用是
//有一个输入框和一个按钮，用户输入文字后点击保存发布
//调用来自feedonAddstory
export default function NewStory({ onAddstory }) {
  const [text, setText] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    onAddstory(text);
    setText("");
  };

  return (
    <form
      onSubmit={handlesubmit}
      style={{ margin: "16px", textAlign: "center" }}
    >
      <input
        placeholder="说点什么吧"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ padding: "16px", border: "solid 1px", width: "60%" }}
      />

      <button
        type="submit"
        style={{
          cursor: "pointer",
          backgroundColor: "#66ccff",
          padding: "16px 8px",
        }}
      >
        发布
      </button>
    </form>
  );
}
