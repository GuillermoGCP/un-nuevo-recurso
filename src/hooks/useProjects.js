const useProjects = () => {
  const firstParaGraphText = (
    <>
      <p>
        Este proyecto busca generar abundancia compartiendo recursos ya
        existentes, evitando contribuir a la cadena de contaminación ambiental y
        creando una comunidad basada en la reciprocidad.
      </p>
      <p>
        <strong>
          La solución a la escasez no es donar; la solución es compartir.
        </strong>
      </p>
    </>
  )
  const secondParaGraphText = (
    <>
      <p>
        Fomentar valores sociales como la solidaridad, reciprocidad, altruismo,
        igualdad y el compartir, promoviendo una convivencia armoniosa y una
        vida en comunidad.
      </p>
      <p>
        <strong>
          La reciprocidad genera beneficios personales y sociales{' '}
        </strong>
        : fortalece relaciones, crea emociones positivas, construye redes de
        apoyo y fomenta la bondad en la sociedad.
      </p>
    </>
  )
  const thirdParaGraphText = (
    <>
      <p>
        Imagina entrar a una tienda, ver algo que necesitas o te gusta, y
        llevártelo sin pasar por caja. Todo de forma legal.
      </p>
      <ul>
        <li>
          <strong>Donar:</strong> Entregar objetos limpios, en buen estado y
          fáciles de transportar.
        </li>
        <li>
          <strong>Adquirir:</strong> Llevarse lo que necesites, sin dinero ni
          trueque.
        </li>
      </ul>
      <p>
        <strong>Productos aceptados:</strong> Ropa, calzado, bolsos, joyería,
        vajilla, pequeños muebles, libros, adornos, juguetes, peluches, etc.
      </p>
      <p>
        Este espacio busca fomentar el intercambio de regalos entre personas,
        sin dinero, monedas alternativas ni trueques.
      </p>
    </>
  )
  const fourthParaGraphText = (
    <>
      <p>
        Organizamos un mercadillo gratuito de segunda mano en el local de
        nuestra asociación
        <strong>dos veces al mes</strong>. Hasta ahora, hemos celebrado{' '}
        <strong>siete mercadillos</strong>, con tanto éxito que necesitamos más
        espacio.
      </p>
    </>
  )
  const fifthParaGraphText = (
    <>
      <p>
        Para mejorar el servicio y facilitar el proceso de donaciones y
        adquisiciones, buscamos establecernos como una tienda fija.
      </p>
      <ul>
        <li>
          <strong>Un local permanente</strong> para un funcionamiento continuo.
        </li>
        <li>
          <strong>Mobiliario:</strong> Percheros, perchas y mesas para organizar
          los objetos.
        </li>
        <li>
          <strong>Un furgón (opcional):</strong> Para transportar objetos
          grandes o realizar recolecciones.
        </li>
      </ul>
    </>
  )
  return {
    firstParaGraphText,
    secondParaGraphText,
    thirdParaGraphText,
    fourthParaGraphText,
    fifthParaGraphText,
  }
}
export default useProjects
