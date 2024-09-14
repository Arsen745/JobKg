import React, { useState } from 'react'
import './Edit.css'

const Edit = (props) => {
    const { name, surname, email, onChangeName, onChangeSurname, onChangeEmail, onSave } = props;
    const [namer, setNamer] = useState('')
    const [surnamer, setSurNamer] = useState('')
    const [emailer, setEmailer] = useState('')

    const soxranit = () => {
        let newErrors = {};

        if (name.trim().length === 0) {
            setNamer('error')

        } else {
            setNamer('')

        }
        if (surname.trim().length === 0) {
            setSurNamer('error')

        } else {
            setSurNamer('')
        }
        if (email.trim().length === 0) {
            setEmailer('error')

        } else {
            setEmailer('')
        }

        if (onSave) {
            onSave(name, surname, email); // Вызываем функцию сохранения из CardProfile
        }
    }
    return (
        <div>
            <input
                className={`form-control ${namer}`}
                value={name}
                placeholder='Имя'
                style={{
                    marginBottom: 10
                }}
                onChange={onChangeName}
            />
            <input
                className={`form-control ${surnamer}`} value={surname}
                placeholder='Фамилия'
                style={{
                    marginBottom: 10
                }}
                onChange={onChangeSurname}
            />
            <input
                className={`form-control ${emailer}`} value={email}
                placeholder='Email'
                onChange={onChangeEmail}
            />
            <button onClick={soxranit}>Сохранить</button>
        </div>
    )
}

export default Edit;
