import React from "react";
import { Card } from "react-bootstrap";
import { useAppSelector } from "../../features/app/hooks";
import { ThemeType } from "../../types/theme";

import styles from "./BlogPostCard.module.scss";

type BlogPostCardProps = {
  title: string;
  summary: string;
  date?: Date;
  time: string;
};

const BlogPostCard = ({ title, summary, date, time }: BlogPostCardProps) => {
  const theme = useAppSelector((state) => state.theme);

  return (
    <div className={styles[`theme__${ThemeType[theme.type]}`]}>
      <Card className={styles.blog_post_card}>
        <Card.Body>
          <Card.Title className={styles.title}>{title}</Card.Title>
          <Card.Subtitle className={styles.subtitle}>
            {date && new Date(date).toUTCString()} - {time}
          </Card.Subtitle>
          <Card.Text className={styles.content}>{summary}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BlogPostCard;
