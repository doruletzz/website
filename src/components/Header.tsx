import { ReactElement, useState } from "react";
import { IconType } from "react-icons";

import styles from "./Header.module.scss";

type HeaderProps = {
  content: string;
  icon: ReactElement<IconType>;
  sectionLink: string;
};

const Header = ({ content, icon, sectionLink }: HeaderProps) => {
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
