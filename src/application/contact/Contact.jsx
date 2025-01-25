import { Header } from "../../components/header/header.jsx";
import { Footer } from "../../components/footer/footer.jsx";
import { Information } from "./components/infomation/infomation.jsx";
import { ModalWindow } from "./components/modalwindow/modalwindow.jsx";
import { Social } from "./components/social/social.jsx";

import styles from "./style.module.scss";

import { useState } from "react";

export function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Header />
      <Information openModal={() => setIsModalOpen(true)} />
      {isModalOpen && <ModalWindow closeModal={() => setIsModalOpen(false)} />}
      <Social />
      <Footer />
    </>
  );
}
