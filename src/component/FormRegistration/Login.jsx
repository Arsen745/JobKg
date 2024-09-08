import React from 'react'
import './FormRegis.css'
const Login = () => {
    return (
        <div className='container-form'>
            <form>
                <div class="form-row">
                    <div class="col">
                        <label>Почта<span>*</span></label>
                        <input type="email" class="form-control" placeholder="email..." />
                    </div>
                    <div class="col">
                        <label>Пароль<span>*</span></label>
                        <input type="password" class="form-control" placeholder="пароль..." />
                    </div>
                    <button type="button" class="btn btn-primary btn-lg">Войти</button>
                </div>
            </form>
        </div>
    )
}
export default Login