import { Footer } from "./footer";
import { Header } from "./header";
import styles from "../styles/admin.module.scss";

export function Adminpage() {
  return (
    <>
      <Header />
      <div className={styles.div}>
        <form>
          <h2>Авторизация</h2>
        </form>
      </div>
      <Footer />
    </>
  );
}
