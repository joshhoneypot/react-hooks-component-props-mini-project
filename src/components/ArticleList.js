import React from 'react';
import Article from './Article';

function ArticleList() {
  const posts = [
    { id: 1, title: 'My First Post', content: 'Lorem ipsum dolor sit amet.' },
    { id: 2, title: 'My Second Post', content: 'Consectetur adipiscing elit.' },
    { id: 3, title: 'My Third Post', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  ];

  return (
    <main>
      {posts.map((post) => (
        <Article key={post.id} post={post} />
      ))}
    </main>
  );
}

export default ArticleList;
