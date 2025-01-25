import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
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
