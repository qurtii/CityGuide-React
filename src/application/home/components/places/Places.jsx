import styles from "./style.module.scss";

import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import redSquare from "../../../../assets/img/краснаяплощадь.png";
import cableway from "../../../../assets/img/канатнаядорога.png";
import vdnkh from "../../../../assets/img/вднх.png";
import alexanderGarden from "../../../../assets/img/александсад.png";
import oceanarium from "../../../../assets/img/океанариум.png";
import moscowCity from "../../../../assets/img/москва сити.png";
import gum from "../../../../assets/img/гум.png";
import zaryadyePark from "../../../../assets/img/парк зарядье.png";

export function Places() {
  const slideIndex = useRef(1);
  const slides = useRef(null);

  useEffect(() => {
    if (!slides.current) return;
    const slideElements = Array.from(slides.current.children);

    function showSlides(n) {
      if (n > slideElements.length) {
        slideIndex.current = 1;
      }
      if (n < 1) {
        slideIndex.current = slideElements.length;
      }

      for (let slide of slideElements) {
        slide.style.display = "none";
      }

      slideElements[slideIndex.current - 1].style.display = "block";
    }

    function nextSlide() {
      showSlides((slideIndex.current += 1));
    }

    function previousSlide() {
      showSlides((slideIndex.current -= 1));
    }

    showSlides(slideIndex.current);

    const nextButton = document.querySelector(
      `.${styles.third__sliderBtn}.next`,
    );
    const prevButton = document.querySelector(
      `.${styles.third__sliderBtn}.prev`,
    );

    if (nextButton && prevButton) {
      nextButton.addEventListener("click", nextSlide);
      prevButton.addEventListener("click", previousSlide);
    }

    return () => {
      if (nextButton && prevButton) {
        nextButton.removeEventListener("click", nextSlide);
        prevButton.removeEventListener("click", previousSlide);
      }
    };
  }, []);

  return (
    <>
      <div className={styles.third}>
        <div className={styles.container}>
          <div className={styles.third__title}>
            Интересные места для посещения
          </div>
          <div className={styles.third__cardWrapper}>
            {/* class animation */}
            <div className={styles.third__slider}>
              {/* class third__slider-btn  third__sliderPrevious*/}
              <a className={`${styles.third__sliderBtn} prev`}>&#10094;</a>
              <div ref={slides} className={styles.third__slider_row}>
                <Link to="/attractions" className={styles.third__cardLink}>
                  <img
                    src={redSquare}
                    alt="img"
                    className={styles.third__cardImg}
                  />
                </Link>
                <Link to="/attractions" className={styles.third__cardLink}>
                  <img
                    src={cableway}
                    alt="img"
                    className={styles.third__cardImg}
                  />
                </Link>
                <Link to="/attractions" className={styles.third__cardLink}>
                  <img
                    src={vdnkh}
                    alt="img"
                    className={styles.third__cardImg}
                  />
                </Link>
                <Link to="/attractions" className={styles.third__cardLink}>
                  <img
                    src={alexanderGarden}
                    alt="img"
                    className={styles.third__cardImg}
                  />
                </Link>
                <Link to="/attractions" className={styles.third__cardLink}>
                  <img
                    src={oceanarium}
                    alt="img"
                    className={styles.third__cardImg}
                  />
                </Link>
                <Link to="/attractions" className={styles.third__cardLink}>
                  <img
                    src={moscowCity}
                    alt="img"
                    className={styles.third__cardImg}
                  />
                </Link>
                <Link to="/attractions" className={styles.third__cardLink}>
                  <img src={gum} alt="img" className={styles.third__cardImg} />
                </Link>
                <Link to="/attractions" className={styles.third__cardLink}>
                  <img
                    src={zaryadyePark}
                    alt="img"
                    className={styles.third__cardImg}
                  />
                </Link>
              </div>

              {/* styles.third__slider-next */}
              <a className={`${styles.third__sliderBtn} next`}>&#10095;</a>
            </div>
          </div>
          <Link className={styles.third__btn} to="/attractions">
            Подробнее
          </Link>
        </div>
      </div>
    </>
  );
}
