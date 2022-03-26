import "./styles.css";
import React from "react";
import Dashboard from "./components/Dashboard";
import useFetch from "./hooks/useFetch";

export default function App() {
  const { items } = useFetch(
    true,
    "https://jsonplaceholder.typicode.com/posts"
  );

  return (
    <div className="App">
      <h1>POSTS</h1>
      <Dashboard posts={items} />
    </div>
  );
}
