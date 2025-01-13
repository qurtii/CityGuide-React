import { Header } from "./header";
import { Link } from "react-router-dom";
import { Footer } from "./footer";

import styles from "../styles/home.module.scss";
import { useEffect, useRef } from "react";

import redSquare from "../img/краснаяплощадь.png";
import cableway from "../img/канатнаядорога.png";
import vdnkh from "../img/вднх.png";
import alexanderGarden from "../img/александсад.png";
import oceanarium from "../img/океанариум.png";
import moscowCity from "../img/москва сити.png";
import gum from "../img/гум.png";
import zaryadyePark from "../img/парк зарядье.png";

export function Home() {
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
      <Header />
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.main__title}>
            Москва - столица Российской Федерации
          </div>
        </div>
      </div>

      <div className={styles.second}>
        <div className={styles.container}>
          <div className={styles.second__title}>О Москве</div>
          <div className={`${styles.second__wrap} ${styles.animation}`}>
            <div className={styles.second__text}>
              <div className={styles.second__subtitle_one}>
                Москва - столица России и крупнейший город страны. Это огромный
                мегаполис, который является историческим, политическим и
                духовным сердцем Российской Федерации. Москва - крупнейшая
                столица Европы, наполненная достопримечательностями, памятниками
                истории и культуры, а также музеями мирового уровня. Это город
                невероятной динамики и размеров, который невозможно объять за
                одну поездку. 
              </div>
              <div className={styles.second__subtitle_two}>
                {" "}
                Москва - очаровательный современный город, имеющий огромное
                количество достопримечательностей и интересных мест: от древней
                крепости и грандиозных соборов до красивых парков и
                футуристических небоскребов. Столица России существует уже около
                девяти веков. На её улочках можно встретить старинные сакральные
                памятники и дворцы, которые соседствуют с монументальными
                зданиями советской архитектуры и ультрасовременными
                сооружениями. Но не только этим славится Москва. Столица имеет
                колоссальное количество театров, музеев, галерей, а также
                великолепных ресторанов, уютных кафе и модных клубов. Поэтому
                Москва способна надолго занять любого туриста. 
              </div>
            </div>
            {/* class map-1 */}
            <div className={`${styles.second__map} ${styles.map1}`}>
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A7a7ab50649f04b6106317791ec90613d4301d4191c67b57634649fb26b6fd2f5&amp;width=100%&amp;height=100%&amp;lang=ru_RU&amp;scroll=true"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Yandex Map"
              />
            </div>
          </div>
        </div>
      </div>

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

      <Footer />
    </>
  );
}
