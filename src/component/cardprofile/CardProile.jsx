import React from 'react'
import './Card.css'

const CardProile = (props) => {
  const { name, surname, email } = props
  return (
    <div className='card-profile'>
      <div className="card-pro">
        <div className="icon">
          <i class="bi bi-person-circle"></i>
        </div>
        <div className="text-content">

          <h1><span>Имя: </span>{name}</h1>
          <h1><span>Фамилия: </span>{surname}</h1>
          <h1><span>Email: </span>{email}</h1>
        </div>
      </div>

    </div>
  )
}

export default CardProile