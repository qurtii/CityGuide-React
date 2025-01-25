import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import styles from "./style.module.scss";

export function SendComment({ data }) {
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");

  const sendCommentMutation = useMutation({
    mutationFn: (newComment) => {
      const newReview = {
        name: name,
        text: newComment,
        createdAt: new Date().toISOString(),
      };

      return axios.put(
        `https://672b185d976a834dd02595f5.mockapi.io/cards/${data.id}`,
        {
          ...data,
          reviews: [...data.reviews, newReview],
        },
      );
    },
    onSuccess: () => {
      setComment("");
      setName("");
    },
  });

  const handleSendComment = () => {
    sendCommentMutation.mutate(comment);
  };

  const handleCancel = () => {
    setComment("");
    setName("");
  };

  return (
    <>
      <h2 className={styles.main__reviews_title}>
        {data.reviews.length} комментариев
        <div className={styles.main__reviews_send}>
          <div className={styles.main__reviews_inputs}>
            <input
              className={styles.main__reviews_input}
              placeholder="Введите имя"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className={styles.main__reviews_input}
              placeholder="Введите комментарий"
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
        </div>
        <hr className={styles.main__reviews_line} />
        <div className={styles.main__reviews_buttons}>
          <button
            className={`${styles.main__reviews_cancel} ${styles.main__reviews_button}`}
            onClick={handleCancel}
          >
            Отмена
          </button>
          <button
            className={`${styles.main__reviews_send} ${styles.main__reviews_button}`}
            onClick={handleSendComment}
            disabled={sendCommentMutation.isPending}
          >
            {sendCommentMutation.isPending ? "Отправка..." : "Отправить"}
          </button>
        </div>
      </h2>
    </>
  );
}
