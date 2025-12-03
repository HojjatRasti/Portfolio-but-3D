const Button = (props) => {
  return (
    <a className={`${props.className ?? ''} cta-wrapper`}
      onClick={(e) => {
        e.preventDefault()

        const target = document.getElementById('counter')

        if(target && props.id){
          const offset = window.innerHeight * 0.15

          const top = target.getBoundingClientRect().top + window.scrollY - offset

          window.scrollTo({top, behavior: 'smooth'})
        }
      }}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{props.text}</p>
        <div className="arrow-wrapper">
          <img src="./images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  )
}

export default Button