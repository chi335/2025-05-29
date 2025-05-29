import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Articles = () => {
  return (
    <div>
      <h2>게시글 목록</h2>
      <ul>
        <li>
          <Link to="/articles/1">게시글 1</Link>
        </li>
        <li>
          <Link to="/articles/2">게시글 2</Link>
        </li>
        <li>
          <Link to="/articles/3">게시글 3</Link>
        </li>
      </ul>

      {/* 중첩 라우트 출력 위치 */}
      <Outlet />
    </div>
  );
};

export default Articles;
