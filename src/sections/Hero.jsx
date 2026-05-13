import styles from './Hero.module.css'

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.tag}>PORTFÓLIO DEV</p>

        <h1 className={styles.title}>
          Thamires
          <br />
          Gabriel
        </h1>

        <p className={styles.description}>
          Desenvolvedora em formação com foco em projetos modernos,
          experiência do usuário e desenvolvimento front-end.
        </p>

          <div className={styles.buttons}>

          <a href="#about" className={styles.buttonSecondary}>
            Sobre Mim
          </a>

          <a href="#projects" className={styles.buttonSecondary}>
            Projetos
          </a>

          <a href="#skills" className={styles.buttonSecondary}>
            Habilidades
          </a>

          <a href="#contact" className={styles.buttonSecondary}>
            Contato
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero