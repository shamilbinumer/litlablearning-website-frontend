import './PersonaOne.scss'

const PersonaOne = () => {
  return (
    <div className='personaOneMainWrapper'>
      <div className="persona-one">
        <p className='persona-title' data-aos='fade-up'>Persona 1</p>
        <h1 className="person-one-heading">
        Students who want to get <br /> Good grades
        </h1>
        <p className="person-para">
        Helping students excel academically. By providing well-structured study materials, interactive learning tools, and personalized guidance, we ensure students have everything they need to master their subjects and perform well in exams. Whether it's through clear notes, engaging lessons, or practical exercises, our platform is focused on helping students reach their full potential and achieve the grades they aspire to.
        </p>
        <a href="https://litlab.live/#login_page"><button>Get Started</button></a>
        <img src="/person-img1.png" className='card-imge' alt="" />
        <img src="/05b512bd997f383aec0906215705252a.gif" alt="" className='card-imge gif-image' />
      </div>
    </div>
  )
}

export default PersonaOne
