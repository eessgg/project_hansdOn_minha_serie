import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Generos = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios
      .get('/api/genres')
      .then(res => {
        setData(res.data.data)
      })
  }, [])

  const deleteGenero = id => {
    axios
      .delete('/api/genres/' + id)
      .then(res => {
        const filtro = data.filter(item => item.id !== id)
        setData(filtro)
      })
  }

  const renderLinha = record => {
    return (
      <tr key={record.id}>
        <th scope='row'>{record.id}</th>
        <td>{record.name}</td>
        <td>
          <button className='btn btn-danger' onClick={() => deleteGenero(record.id)} > Remover </button>
          <Link className='btn btn-warning' to={'/generos/' + record.id}>Editar</Link>
        </td>
      </tr>
    )
  }

  if (data.length === 0) {
    return (
      <div className='container'>
        <h1>Gêneros</h1>
        <div>
          <Link to='/generos/novo' className='btn btn-primary'>Novo gênero</Link>
        </div>
        <div className='alert alert-warning' role='alert'>
          Nenhum gênero cadastrado!
        </div>
      </div>
    )
  }

  return (
    <div className='container'>
      <h1>Gêneros</h1>
      <div>
        <Link to='/generos/novo' className='btn btn-primary'> Novo gênero </Link>
      </div>
      <table className='table table-dark'>
        <thead>
          <tr>
            <th scope='col'>ID</th>
            <th scope='col'>Name</th>
            <th scope='col'>Açoes</th>
          </tr>
        </thead>
        <tbody>
          {data.map(renderLinha)}
        </tbody>
      </table>
    </div>
  )
}

export default Generos
