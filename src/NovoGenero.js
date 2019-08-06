import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const NovoGenero = () => {
  const [name, setNamne] = useState('')
  const [success, setSuccess] = useState(false)
  const onChange = evt => {
    setNamne(evt.target.value)
  }

  const save = () => {
    axios
      .post('/api/genres', { name })
      .then(res => {
        console.log(res)
      })
  }

  if (success) {
    return <Redirect to='/generos' />
  }

  return (
    <div className='container'>
      <h1>Novos Genêros</h1>
      <form>
        <div className='form-group'>
          <label htmlFor='name'> Email address </label>
          <input type='text' value={name} onChange={onChange} className='form-control' id='name' placeholder='Nome do Genêro' />
        </div>
        <button type='button' onClick={save} className='btn btn-primary'> Salvar </button>
      </form>
    </div>
  )
}

export default NovoGenero
