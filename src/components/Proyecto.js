import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { trabajos } from '../data/trabajos';

export const Proyecto = () => {

    const [proyectoState, setProyecto] = useState({});
    const params = useParams();

    useEffect(() => {
        let proyecto = trabajos.filter(trabajo => trabajo.id === params.id);
        setProyecto(proyecto[0])
        console.log(proyectoState)
    }, [])

  return (
    <div className='page page-work'>
      <h1 className='heading'>{proyectoState.nombre}</h1>
      <p>{proyectoState.tecnologias}</p>
      <p>{proyectoState.descripcion}</p>
      <a href={"https://"+proyectoState.url} target="_blank">Ir al proyecto</a>

    </div>
  )
}
