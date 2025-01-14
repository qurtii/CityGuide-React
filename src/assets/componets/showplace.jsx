import { Footer } from "./footer";
import { Header } from "./header";
import styles from "../styles/showplace.module.scss"

export function Showplace() {
  return (
    <>
    
      <Header/>
      <div className={styles.details__imagesWrapper}>  {/* className={styles.details__images-wrapper} */}
        <div className={styles.details__images}> 
              {/*className={`${styles.details__slider-btn}  */}
            <p className={`${styles.details__sliderBtn} ${styles.details__previus}`} id='back'> &larr; </p>
            {/* src='${sight.images[0]}' */}
            {/*className ={styles.details__slider-img}  */}
            <img className ={styles.details__sliderImg} src='' alt='img'/>
            <p className={`${styles.details__sliderBtn} ${styles.details__next}`} id='next'> &rarr; </p>
        </div>
      </div>
      <Footer/>
    </>
  );
}
