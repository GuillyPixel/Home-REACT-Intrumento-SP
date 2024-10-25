import styles from '../css/Footer.module.css'
import insta from '../../img/insta.png'
import face from '../../img/face.png'
import linkedin from '../../img/linkedin.png'


function Footer(){
    return(
    <>
    
    <footer>
      <div class={styles.footercontainer}>
        <p> 2024 Guilherme Martins Fernandes - Todos os direitos reservados.</p>
   

        <div className={styles.icones}>
        <a className={styles.insta} href="https://www.instagram.com/guii.fernandeess/profilecard/?igsh=bzV6aW9xc2QwZWhv"> <img src={insta} /></a>
        <a className={styles.face} href="https://www.facebook.com/guilly55?mibextid=LQQJ4d"> <img src={face} /></a>
        <a className={styles.linkedin} href="https://www.linkedin.com/in/guillherme-martins-fernandes-23a22432b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"> <img src={linkedin} /></a>

        </div>

      </div>
    </footer>
    
    
    
    
    </>
    )

}
export default Footer