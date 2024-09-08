import React, { useState } from 'react'
import './FormRegis.css'
import index from '../../api/index'

const LoginEmp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [endpoint] = useState('employe')
    const [error, setError] = useState('')

    const fetchLog = async () => {
        if (email.trim() === '' || password.trim() === '') {
            setError('Пожалуйста, заполните все поля');
            return;
        }

        try {
            const response = await index.fetchLoginEmploye(endpoint, email, password);
            if (response && response.length > 0) {
                const id = response[0]?.id; // Получаем id пользователя
                const data = {
                    id: id,
                    endpoint: endpoint
                };
                localStorage.setItem('data', JSON.stringify(data));
                window.location.pathname = '/profile'; // Перенаправление на профиль
            } else {
                setError('Неправильный логин или пароль');
            }
        } catch (error) {
            console.error('Ошибка входа:', error);
            setError('Произошла ошибка при входе. Попробуйте снова.');
        }
    }

    return (
        <div className='container-form'>
            <form>
                <div className="form-row">
                    <div className="col">
                        <label>Почта<span>*</span></label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            type="email"
                            className="form-control"
                            placeholder="email..."
                        />
                    </div>
                    <div className="col">
                        <label>Пароль<span>*</span></label>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            type="password"
                            className="form-control"
                            placeholder="пароль..."
                        />
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    <button
                        onClick={(e) => {
                            e.preventDefault();  
                            fetchLog(); 
                        }}
                        type="button"
                        className="btn btn-primary btn-lg"
                    >
                        Войти
                    </button>
                </div>
            </form>
        </div>
    )
}

export default LoginEmp;
