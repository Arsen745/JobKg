import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { NavLink } from 'react-router-dom'


const Buttons = () => {
    return (
        <div>
            <Stack direction="row" spacing={5}>

                <NavLink to='/'>
                    <Button style={{
                        fontSize: 16,
                        fontWeight: 600,
                    }}>Вакансии</Button>
                </NavLink>
                <NavLink to='/resume'>
                    <Button style={{
                        fontSize: 16,
                        fontWeight: 600,
                    }}>Резюме</Button>
                </NavLink>
                <NavLink to='/ReistrationPage'>
                    <Button style={{
                        fontSize: 16,
                        fontWeight: 600,
                    }}>Регистрация</Button>
                </NavLink>
                <NavLink to='/login'>
                    <Button style={{
                        fontSize: 16,
                        fontWeight: 600,
                    }}>Войти</Button>
                </NavLink>
                <NavLink to='/profile'>
                    <Button style={{
                        fontSize: 16,
                        fontWeight: 600,
                    }}>Профиль</Button>
                </NavLink>
            </Stack>

        </div>
    )
}

export default Buttons