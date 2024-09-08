import React, { useState } from 'react';
import './FormRegis.css';
import index from '../../api/index'

const FormRegis = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [endpoint, setEndPoint] = useState('/employes')

    const [errors, setErrors] = useState({});

    const handlePost = async () => {
        let newErrors = {};

        if (name.trim().length === 0) {
            newErrors.name = 'Имя обязательно для заполнения';
        }
        if (surname.trim().length === 0) {
            newErrors.surname = 'Фамилия обязательна для заполнения';
        }
        if (age.trim().length === 0 || isNaN(age) || age < 1) {
            newErrors.age = 'Введите корректный возраст';
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Некорректный email';
        }
        if (password.trim().length < 6) {
            newErrors.password = 'Пароль должен быть не менее 6 символов';
        }
        if (password !== confirmPassword) {
            newErrors.confirmPassword = 'Пароли не совпадают';
        }
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log('Все поля заполнены корректно, отправляем данные');
            const response = await index.fetchNew(name, surname, age, email, password, endpoint)
            console.log(response);
            

        }
    };

    return (
        <div className='container-form'>
            <form>
                <div className='form-row'>
                    <div className='col'>
                        <label>Имя<span>*</span></label>
                        <input
                            className={`form-control ${errors.name ? 'error' : ''}`}
                            type='text'
                            placeholder='Имя...'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        {errors.name && <small className="error-message">{errors.name}</small>}
                    </div>
                    <div className='col'>
                        <label>Фамилия<span>*</span></label>
                        <input
                            className={`form-control ${errors.surname ? 'error' : ''}`}
                            type='text'
                            placeholder='Фамилия...'
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}
                        />
                        {errors.surname && <small className="error-message">{errors.surname}</small>}
                    </div>
                    <div className='col'>
                        <label>Возраст<span>*</span></label>
                        <input
                            className={`form-control ${errors.age ? 'error' : ''}`}
                            type='number'
                            placeholder='Возраст...'
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                        {errors.age && <small className="error-message">{errors.age}</small>}
                    </div>
                    <div className='col'>
                        <label>Почта<span>*</span></label>
                        <input
                            className={`form-control ${errors.email ? 'error' : ''}`}
                            type='email'
                            placeholder='email...'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <small className="error-message">{errors.email}</small>}
                    </div>
                    <div className='col'>
                        <label>Пароль<span>*</span></label>
                        <input
                            className={`form-control ${errors.password ? 'error' : ''}`}
                            type='password'
                            placeholder='Пароль...'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password && <small className="error-message">{errors.password}</small>}
                    </div>
                    <div className='col'>
                        <label>Подтвердите пароль<span>*</span></label>
                        <input
                            className={`form-control ${errors.confirmPassword ? 'error' : ''}`}
                            type='password'
                            placeholder='Подтвердите пароль...'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        {errors.confirmPassword && <small className="error-message">{errors.confirmPassword}</small>}
                    </div>
                    <button type="button" className='btn btn-primary btn-lg' onClick={handlePost}>
                        Зарегистрироваться
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormRegis;
