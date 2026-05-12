import styles from './About.module.css'

function About() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.imageArea}>
          <img
            src="https://placehold.co/400x400"
            alt="Foto de perfil"
            className={styles.image}
          />
        </div>

        <div className={styles.content}>
          <p className={styles.tag}>SOBRE MIM</p>

          <h2 className={styles.title}>
            Desenvolvedora em formação apaixonada por tecnologia
          </h2>

          {/* TROQUE ESTE TEXTO PELO SEU TEXTO SOBRE VOCÊ */}
          <p className={styles.description}>
            Atualmente estou desenvolvendo projetos com React,
            JavaScript e tecnologias front-end modernas.
            Busco criar interfaces organizadas, responsivas
            e com boa experiência para o usuário.
          </p>

          <div className={styles.info}>
            <p>Email: seuemail@email.com</p>
            <p>São Paulo - SP</p>
            <p>GitHub: github.com/seuusuario</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About