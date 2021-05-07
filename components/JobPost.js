import React from "react";
import styles from "./JobPost.module.css";

export default function JobPost({ content }) {
  return (
    <div className={styles.job} dangerouslySetInnerHTML={{ __html: content }} />
  );
}
