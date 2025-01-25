import styles from "./style.module.scss";

export function Comments({ data }) {
  return (
    <>
      {data.reviews.map((review, index) => (
        <div className={styles.comments__comment} key={index}>
          <div className={styles.comments__header}>
            <h3>{review.name}</h3>
            <small>
              {" "}
              {new Date(review.createdAt).toLocaleString("ru-RU", {
                year: "numeric",
                month: "numeric",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
          <p>{review.text}</p>
        </div>
      ))}
    </>
  );
}
