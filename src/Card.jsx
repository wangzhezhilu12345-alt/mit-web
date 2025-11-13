import React from "react";
export default function Card({ story }) {
  return (
    <div style={{ padding: "16px", margin: "12px auto", width: "80%" }}>
      <p>{story.text}</p>
    </div>
  );
}
