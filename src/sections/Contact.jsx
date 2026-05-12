import styles from './Contact.module.css'

function Contact() {
  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <p className={styles.tag}>CONTATO</p>

        <h2 className={styles.title}>
          Vamos conversar?
        </h2>

        <p className={styles.description}>
          Entre em contato comigo ou acompanhe meus projetos pelas redes profissionais.
        </p>

        <div className={styles.links}>
          <a href="https://www.linkedin.com/" target="_blank">
            LinkedIn
          </a>

          <a href="https://github.com/" target="_blank">
            GitHub
          </a>

          <a href="mailto:seuemail@email.com">
            E-mail
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact