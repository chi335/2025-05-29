import React from 'react';
import { Link, useParams } from 'react-router-dom';

export const Articles = () => {
  return (
    <ul>
      <li>
        <Link to="/articles/1">게시글1</Link>
      </li>
      <li>
        <Link to="/articles/2">게시글2</Link>
      </li>
      <li>
        <Link to="/articles/3">게시글3</Link>
      </li>
    </ul>
  );
};

export const Article = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>게시글 {id}</h2>
    </div>
  );
};

 export default Article;