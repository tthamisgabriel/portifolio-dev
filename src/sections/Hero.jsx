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

        <a href="#projects" className={styles.button}>
          Ver Projetos
        </a>
      </div>
    </section>
  )
}

export default Hero
