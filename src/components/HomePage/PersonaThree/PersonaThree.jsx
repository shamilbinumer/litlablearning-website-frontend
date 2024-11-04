import './PersonaThree.scss'

const PersonaThree = () => {
  return (
    <div className='personaThreeMainWrapper'>
       <div className="persona-one">
        <p className='persona-title' data-aos='fade-up'>Persona 3</p>
        <h1 className="person-one-heading">
        Students who Love <br />Quality Notes
        </h1>
        <p className="person-para">
        Our e-learning app provides meticulously crafted, high-quality notes that are clear, concise, and well-organized. Designed to simplify complex concepts, these notes help students study more efficiently and retain information better. Whether preparing for exams or deepening subject knowledge, students can rely on our comprehensive notes to guide them towards academic success.
        </p>
        <button>Get Started</button>
        <img src="/person-img1.png" alt="" className='card-imge' />
        <img src="/1ad2b98b2eb5dca32a42ab82c10fbd08.gif" className='card-imge gif-image' alt="" />
      </div>
    </div>
  )
}

export default PersonaThree
