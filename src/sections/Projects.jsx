import styles from './Projects.module.css'

function Projects() {
  const projects = [
    {
      title: 'Projeto Portfolio',
      description: 'Portfólio moderno desenvolvido em React.',
      image: 'https://placehold.co/600x400',
      link: '#',
    },

    {
      title: 'Dashboard de Dados',
      description: 'Dashboard com análise de métricas e gráficos.',
      image: 'https://placehold.co/600x400',
      link: '#',
    },

    {
      title: 'Landing Page',
      description: 'Página responsiva para apresentação de produto.',
      image: 'https://placehold.co/600x400',
      link: '#',
    },
  ]

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        <p className={styles.tag}>PROJETOS</p>

        <h2 className={styles.title}>
          Projetos em destaque
        </h2>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <article className={styles.card} key={index}>
              <img
                src={project.image}
                alt={project.title}
                className={styles.image}
              />

              <div className={styles.content}>
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <a href={project.link}>
                  Ver Projeto
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
