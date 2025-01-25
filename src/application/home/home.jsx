import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { WelcomeSection } from "./components/welcomeSection/WelcomeSection";
import { About } from "./components/About/About";
import { Places } from "./components/places/Places";

import styles from "./style.module.scss";

export function Home() {
  return (
    <>
      <Header />
      <WelcomeSection />
      <About />
      <Places />
      <Footer />
    </>
  );
}
