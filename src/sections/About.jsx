import styles from './About.module.css'

function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.imageArea}>
          <img
            src="/profile/foto-perfil.png"
            alt="Foto de perfil"
            className={styles.image}
          />
        </div>

        <div className={styles.content}>
          <p className={styles.tag}>SOBRE MIM</p>

          <h2 className={styles.title}>
            Desenvolvedora em formação apaixonada por tecnologia
          </h2>

          {}
          <p className={styles.description}>
            Estudante de Ciência da Computação em transição para desenvolvimento de software, com foco em aplicações web. Conhecimentos em JavaScript, React, HTML, CSS, Tailwind e SQL, com desenvolvimento de projetos práticos utilizando APIs e GitHub. Experiência com análise de métricas e tomada de decisão orientada a dados. Buscando oportunidade de estágio em desenvolvimento.
          </p>

          <div className={styles.info}>
            <p>Email: tthamisgabriel@gmail.com</p>
            <p>São Paulo - SP</p>
            <p>GitHub: github.com/tthamisgabriel</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About