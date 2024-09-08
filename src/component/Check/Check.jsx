import React from 'react'
import { NavLink } from 'react-router-dom'
import './Check.css'

const Check = () => {
    return (
        <div className='container-check'>
            <div className="check1">
                <NavLink to='/employe' className='navlink'>
                    <div className="icon"><i class="bi bi-newspaper"></i></div>
                    <button>Ищу Работу</button>
                </NavLink>
            </div>
            <div className="check1">
                <NavLink to='/employes' className='navlink'>
                    <div className="icon"><i class="bi bi-person-fill"></i></div>
                    <button>Ищу сотрудник</button>
                </NavLink>
            </div>
        </div>
    )
}

export default Check