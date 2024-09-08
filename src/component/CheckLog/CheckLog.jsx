import React from 'react'
import '../Check/Check.css'
import {NavLink} from 'react-router-dom'

const CheckLog = () => {
    return (
        <div className='container-check'>
            <div className="check1">
                <NavLink to='/loginemployer' className='navlink'>
                    <div className="icon"><i class="bi bi-newspaper"></i></div>
                    <button>Ищу Работу</button>
                </NavLink>
            </div>
            <div className="check1">
                <NavLink to='/loginemploye' className='navlink'>
                    <div className="icon"><i class="bi bi-person-fill"></i></div>
                    <button>сотрудник</button>
                </NavLink>
                
            </div>
        </div>
    )
}

export default CheckLog