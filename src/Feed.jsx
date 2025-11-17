import React, { useState, useEffect } from "react";
import Card from "./Card.jsx";
import NewStory from "./NewStory.jsx";

export default function Feed() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const addStory = async (text) => {
    try {
      const res = await fetch("http://localhost:3000/stories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error);
      }
      const newStory = await res.json();
      setStories((prev) => [...prev, newStory]);
    } catch (err) {
      console.log("失败了", err);
      alert(err);
    }
  };

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        setLoading(true);
        const res = await fetch("http://localhost:3000/stories");
        if (!res.ok) throw new Error("错误1");
        const data = await res.json();
        if (!cancelled) setStories(data);
      } catch (err) {
        console.log("失败了2");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) return <div>加载中ing....</div>;
  return (
    <div>
      <NewStory onAddstory={addStory} />
      {stories.map((s, i) => (
        <Card key={i} story={s} />
      ))}
    </div>
  );
}
