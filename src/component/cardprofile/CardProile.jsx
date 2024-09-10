import React, { useState, useEffect } from 'react';
import './Card.css';
import Edit from '../edit/Edit';

const CardProfile = (props) => {
  const [modal, setModal] = useState(false);
  const [name2, setName] = useState('');
  const [surname2, setSurname] = useState('');
  const [email1, setEmail] = useState('');
  useEffect(() => {
    setName(props.name);
    setSurname(props.surname);
    setEmail(props.email);
  }, [props.name, props.surname, props.email]);
  function toggleModal() {
    setModal(!modal);
  }
  const { name, surname, email, age } = props;
  return (
    <div className='card-profile'>
      <div className="card-pro">
        <div className="icon">
          <i className="bi bi-person-circle"></i>
        </div>
        <div className="text-content">
          <h1><span>Имя: </span>{name}</h1>
          <h1><span>Фамилия: </span>{surname}</h1>
          <h1><span>Email: </span>{email}</h1>
          <h1><span>Возраст: </span>{age}</h1>
          <button onClick={toggleModal}>Изменить</button>
        </div>
      </div>
      <div className="edit">
        {modal && (
          <Edit
            name={name2}
            surname={surname2}
            email={email1}
            onChangeName={(e) => setName(e.target.value)}
            onChangeSurname={(e) => setSurname(e.target.value)}
            onChangeEmail={(e) => setEmail(e.target.value)}
          />
        )}
      </div>
    </div>
  );
}

export default CardProfile;
