import styles from './Projects.module.css'

function Projects() {
  const projects = [
    {
      title: 'Diário de Bordo PWA',

      description:
        'Aplicação Web Progressiva (PWA) desenvolvida para registrar atividades diárias de forma simples e responsiva.',

      image: '/projects/diario-de-bordo.png',

      link: 'https://github.com/tthamisgabriel/diario-de-bordo-pwa',
    },

    {
      title: 'Portal de Viagens',

      description:
        'Projeto desenvolvido em Next.js com TypeScript, simulando um pequeno portal de viagens com listagem de destinos turísticos e páginas individuais de detalhes.',

      image: '/projects/projeto-portal-viagens.png',

      link: 'https://github.com/tthamisgabriel/projeto-portal-viagens',
    },

    {
      title: 'Todo React Avançado',

      description:
        'Aplicação de lista de tarefas (Todo List) desenvolvida com React, utilizando conceitos como Context API, Hooks customizados e memoização.',

      image: '/projects/todo-react-avancado.png',

      link: 'https://github.com/tthamisgabriel/todo-react-avancado',
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

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
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