import styles from '../css/Mapa.module.css'

function Mapa(){
    return(
    <>
<iframe className={styles.mapa} src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d1769.7316596878904!2d-46.72045989316787!3d-23.60015958800795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x94ce56c31b1fe649%3A0x7d134f4dfc6618c2!2sPra%C3%A7a%20Roberto%20Gomes%20Pedrosa%2C%201%20-%20Morumbi%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005653-070!3m2!1d-23.600162299999997!2d-46.720168099999995!5e0!3m2!1spt-BR!2sbr!4v1728920827170!5m2!1spt-BR!2sbr" width="100%" height="400px"></iframe>     

    </>
    )
}

export default Mapa