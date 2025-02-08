import React from 'react'

export function Pagina() {
  return (
    <article className="pagina">
      <img className="img-pagina" src="/images/yo.jpg" alt="yo" />
      <div className="info"> 
        <p>
          ¡Hola Amigos! Soy Jaime un Ingeniero en Informática 💻 y desarrollador Full Stack que disfruta creando aplicaciones. <br />
          Fuera del código, me encanta andar en bici 🚴‍♀️, jugar videojuegos 🎮, tomarme una buena cerveza 🍺 y disfrutar del fútbol ⚽, el básquetbol 🏀 y la Fórmula 1 🏎️. <br /> 
          Soy colocolino de corazón y fanático de Ferrari. <br /><br />
          Si tienes un proyecto en mente o simplemente quieres hablar de tecnología o de la última carrera de F1, <a href="mailto:jaime.vergara.placencia@gmail.com" className="link-sin-estilo">¡Contáctame!</a> 
          <br /><br />
          <a href="https://jaimevergara.github.io/portafolio/" target="_blank" className="link-sin-estilo">Aquí</a> puedes ver algunos de mis proyectos y experiencias como desarrollador.
          <br /><br />
          Algunas de mis redes sociales: <br />
          <ul>
            <li> <a href="https://www.instagram.com/j41m3vergara/" target="_blank" className="link-sin-estilo">Instagram</a></li>
            <li>  <a href="https://x.com/j41m3vergara" target="_blank" className="link-sin-estilo">X</a></li>
          </ul>
        </p>
      </div>
    </article>
  )
}