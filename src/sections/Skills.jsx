import styles from './Skills.module.css'

function Skills() {
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Git e GitHub',
    'Responsividade',
  ]

  return (
    <section className={styles.skills}>
      <div className={styles.container}>
        <p className={styles.tag}>HABILIDADES</p>

        <h2 className={styles.title}>
          Tecnologias e competências
        </h2>

        <div className={styles.grid}>
          {skills.map((skill, index) => (
            <div className={styles.card} key={index}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills