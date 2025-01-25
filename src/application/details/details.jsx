import { useParams, Link } from "react-router-dom";
import axios from "axios";

import { Footer } from "../../components/footer/footer";
import { Header } from "./components/Header/Header.jsx";
import { Wrapper } from "./components/wrapper/Wrapper.jsx";
import { About } from "./components/About/Abous.jsx";
import { SendComment } from "./components/SendComment/SendComment.jsx";
import { Comments } from "./Comments/Comments.jsx";

import styles from "./style.module.scss";
import { useDetails } from "../../hooks/useDetails";
import { useState } from "react";

export function Details() {
  const { id } = useParams();
  const { data: card, isLoading } = useDetails(id);
  return (
    <>
      <Header />
      {isLoading ? (
        <div className={styles.loaderDiv}>
          <span className={styles.loader} />
        </div>
      ) : (
        <div className={styles.main}>
          <div className={styles.container}>
            <Link className={styles.main__back} to="/attractions">
              &larr; Назад
            </Link>

            <Wrapper data={card} />
            <hr />
            <About data={card} />
            <SendComment data={card} />
            <Comments data={card} />
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}
