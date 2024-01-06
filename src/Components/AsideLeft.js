import React from 'react';
import '../CSS/Aside.css'
const AsideLeft = () => {
  return (
    <aside className="aside">
      <div className="aside-content">
        <h2>Sidebar Title</h2>
        <p>This is the sidebar content.</p>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    </aside>
  );
};

export default AsideLeft;
