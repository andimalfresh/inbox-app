import React from "react";

const Toolbar = props => {
  return (
    <div className="toolbar-list">
      <ul>
        <li>
          <button onClick={props.handleClick}>CLICK IT</button>
        </li>
        <li>
          <button>CLICK IT</button>
        </li>
        <li>
          <button>CLICK IT</button>
        </li>
        <li>
          <button>CLICK IT</button>
        </li>
        <li>
          <button>Trash ICON</button>
        </li>
      </ul>
    </div>
  );
};

export default Toolbar;
