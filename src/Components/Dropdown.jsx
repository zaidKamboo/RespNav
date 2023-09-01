import React, { useState } from "react";
import "./Dropdown.css";
import { Link } from "react-router-dom";
const Dropdown = () => {
  let MenuItems = [
    {
      title: "Marketing",
      path: "/marketing",
      cName: "dropdown-link",
    },
    {
      title: "Design",
      path: "/Design",
      cName: "dropdown-link",
    },
  ];

  const [click, setClick] = useState(false);
  const handlClick = () => setClick(!click);
  return (
    <>
      <ul
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
        onclick={handlClick}
      >
        {MenuItems.map((item, index) => {
          <li key={index}>
            <Link
              className={item.cName}
              to={item.path}
              onclick={() => setClick(false)}
            >
              {item.title}
            </Link>
          </li>;
        })}
      </ul>
    </>
  );
};

export default Dropdown;
