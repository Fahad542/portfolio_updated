import React from "react";
import { useEffect, useRef } from "react";
const Navbar = ({ timeline, ease }) => {
  let logo = useRef(null);
  let menu_item1 = useRef(null);
  let menu_item2 = useRef(null);
  let menu_item3 = useRef(null);
  let menu_item4 = useRef(null);
  let menu_item5 = useRef(null);

  useEffect(() => {
    timeline.from(logo, 1, { opacity: 0, y: "100" });
    timeline.from(
      [menu_item1, menu_item2, menu_item3, menu_item4, menu_item5],
      2,
      {
        opacity: 0,
        y: -200,
        stagger: {
          amount: 0.4,
        },
        ease: ease,
      }
    );
  }, [timeline, ease]);
  return (
    <div className="header sticky-top d-flex align-items-center">
      <p className="mylogo" ref={(el) => (logo = el)}>
        Fahad Shafiq
      </p>
  
      <div className="nav">
        <a className="link" href="" ref={(el) => (menu_item1 = el)}>
          Home
        </a>
        <a className="link" href="" ref={(el) => (menu_item2 = el)}>
          About
        </a>
        <a className="link" href="" ref={(el) => (menu_item3 = el)}>
          Contact
        </a>
        <a className="link" href="" ref={(el) => (menu_item4 = el)}>
          Projects
        </a>
        <a href="" className="link" ref={(el) => (menu_item5 = el)}>
  
        </a>
      </div>
    </div>
  );
};

export default Navbar;
