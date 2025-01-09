import { Header } from "./header";
import { Link } from "react-router-dom";
import { Footer } from "./footer";


import styles from "../styles/home.module.scss";
import { useEffect } from "react";

export function Home() {


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
                              {/* добавить класс animation */}
          <div className={styles.second__wrap}> 
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
              <div className={styles.second__subtitle_two}> Москва - очаровательный современный город, имеющий огромное количество достопримечательностей и интересных мест: от древней крепости и грандиозных соборов до красивых парков и футуристических небоскребов. Столица России существует уже около девяти веков. На её улочках можно встретить старинные сакральные памятники и дворцы, которые соседствуют с монументальными зданиями советской архитектуры и ультрасовременными сооружениями. Но не только этим славится Москва. Столица имеет колоссальное количество театров, музеев, галерей, а также великолепных ресторанов, уютных кафе и модных клубов. Поэтому Москва способна надолго занять любого туриста. 
              </div>
            </div>
            {/* class map-1 */}
            <div className={styles.second__map}>
              <script type="text/javascript" charSet="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A7a7ab50649f04b6106317791ec90613d4301d4191c67b57634649fb26b6fd2f5&amp;width=100%&amp;height=100%&amp;lang=ru_RU&amp;scroll=true"></script>
            </div>
          </div>
        </div>
      </div>


      <div className={styles.third}>
        <div className={styles.container}>
          <div className={styles.third__title}>Интересные места для посещения</div>
          <div className={styles.third__cardWrapper}>
            {/* class animation */}
              <div className={styles.third__slider}>
                {/* class third__slider-btn  third__sliderPrevious*/}
                <a className={styles.third__sliderBtn}>&#10094;</a>
                <div className={styles.third__slider_row}>
                  <Link to="/attractions" className={styles.third__cardLink}><img src="../../../public/краснаяплощадь.png" alt="img" className={styles.third__cardImg}/></Link>
                  <Link to="/attractions" className={styles.third__cardLink}><img src="../../../public/канатнаядорога.png" alt="img" className={styles.third__cardImg}/></Link>
                  <Link to="/attractions" className={styles.third__cardLink}><img src="../../../public/вднх.png" alt="img" className={styles.third__cardImg}/></Link>
                  <Link to="/attractions" className={styles.third__cardLink}><img src="../../../public/александсад.png" alt="img" className={styles.third__cardImg}/></Link>
                  <Link to="/attractions" className={styles.third__cardLink}><img src="../../../public/океанариум.png" alt="img" className={styles.third__cardImg}/></Link>
                  <Link to="/attractions" className={styles.third__cardLink}><img src="../../../public/москва сити.png" alt="img" className={styles.third__cardImg}/></Link>
                  <Link to="/attractions" className={styles.third__cardLink}><img src="../../../public/гум.png" alt="img" className={styles.third__cardImg}/></Link>
                  <Link to="/attractions" className={styles.third__cardLink}><img src="../../../public/парк зарядье.png" alt="img" className={styles.third__cardImg}/></Link>
                </div>

                {/* styles.third__slider-next */}
                <a className={styles.third__sliderBtn}>&#10095;</a>
              </div>
          </div>
          <div>
            <Link className={styles.third__btn} to="/attractions">Подробнее</Link>
          </div>
        </div>
      </div>
      
      <Footer/>
    </>
  );
}
