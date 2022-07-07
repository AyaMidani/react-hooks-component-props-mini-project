import React from "react";
import Article from "./Article";

function ArticleList({posts}) {
    const postsarray=posts.map((post)=>(
        <Article
        key={post.id}
        title={post.title}
        date={post.date}
        preview={post.preview}
        minutes={post.minutes}
      />

    ))
    return (
        <main>
        {postsarray}
      </main>
    );
  }
  
  export default ArticleList;