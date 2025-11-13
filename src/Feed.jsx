import React, { useState, useEffect } from "react";
import Card from "./Card.jsx";
import NewStory from "./NewStory.jsx";

export default function Feed() {
  const [stories, setStories] = useState([]);

  const addStory = async (text) => {
    const res = await fetch(
      "https://6912ea5a52a60f10c8233807.mockapi.io/stories",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      }
    );
    const newStory = await res.json();
    setStories((prev) => [...prev, newStory]);
  };

  useEffect(() => {
    fetch("https://6912ea5a52a60f10c8233807.mockapi.io/stories")
      .then((res) => res.json())
      .then((data) => setStories(data))
      .catch((err) => console.error("获取失败", err));
  }, []);

  return (
    <div>
      <NewStory onAddstory={addStory} />
      {stories.map((s, i) => (
        <Card key={i} story={s} />
      ))}
    </div>
  );
}
