import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name="My Blog" />
      <About image="https://example.com/my-blog-logo.png" about="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor." />
      <ArticleList />
    </div>
  );
}

export default App;