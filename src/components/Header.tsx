import { useState } from "react";

import styles from "./Header.module.scss";

// TODO: make appropriate prop types
const Header = ({ content, icon, sectionLink }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={styles.div}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <span>
        <h4 className={styles.text}>
          {content}{" "}
          {isHovered && (
            <a href={sectionLink} className={styles.icon}>
              {icon}
            </a>
          )}{" "}
        </h4>{" "}
      </span>
    </div>
  );
};

export default Header;
