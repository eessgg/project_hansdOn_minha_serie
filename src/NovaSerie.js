import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const NovaSerie = () => {
  const [name, setName] = useState('')
  const [success, setSuccess] = useState(false)
  const [genres, setGenres] = useState([])
  const [genreId, setGenreId] = useState('')
  const [status, setStatus] = useState('')

  useEffect(() => {
    axios.get('/api/genres/').then(res => {
      setGenres(res.data.data)
    })
  })

  const onChange = evt => {
    setName(evt.target.value)
  }

  const onChangeGenre = evt => {
    setGenreId(evt.target.value)
  }

  const seleciona = value => () => {
    setStatus(value)
  }

  const save = () => {
    axios
      .post('/api/series', {
        name,
        genre_id: genreId,
        status
      })
      .then(res => {
        setSuccess(true)
      })
  }

  if (success) {
    return (
      <Redirect to='/series' />
    )
  }

  return (
    <div className='container'>

      <h1>Nova Série</h1>
      <form>
        <div className='form-group'>
          <label htmlFor='name'>Nome</label>
          <input type='text' value={name} onChange={onChange} className='form-control' id='name' placeholder='Nome da Série' />
        </div>
        <div className='form-group'>
          <label htmlFor='name'>Gênero</label>
          <select className='form-control' onChange={onChangeGenre} value={genreId}>
            {genres.map(genre => <option key={genre.id} value={genre.id}>{genre.name}</option>)}
          </select>
        </div>
        <div className='form-group'>
          <div className='form-check'>
            <input className='form-check-input' type='radio' name='status' id='assistido' value='ASSISTIDO' onClick={seleciona('ASSISTIDO')} />
            <label className='form-check-label' htmlFor='assistido'>Assistido</label>
          </div>
          <div className='form-check'>
            <input className='form-check-input' type='radio' name='status' id='paraAssistir' value='PARA_ASSISTIR' onClick={seleciona('PARA_ASSISTIR')} />
            <label className='form-check-label' htmlFor='paraAssistir'>Para assistir</label>
          </div>
        </div>
        <button type='button' onClick={save} className='btn btn-primary'>Salvar</button>
      </form>
    </div>
  )
}

export default NovaSerie
