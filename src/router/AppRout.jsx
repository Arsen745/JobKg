import { Route, Routes} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Resume from '../pages/Resume'
import RegistrationPage from '../pages/RegistrationPage'
import LoginInPage from '../pages/LoginInPage'
import Employe from '../pages/Employe'
import Employes from '../pages/Employes'
import Profile from '../pages/Profile'

const rout = [
    {
        path: '/',
        component: <HomePage/>,
        key: 'home'
    },
    {
        path: '/resume',
        component: <Resume/>,
        key: 'resume'

    },
    {
        path: '/ReistrationPage',
        component: <RegistrationPage/>,
        key: 'registrationpage'
    },
    {
        path: '/login',
        component: <LoginInPage/>,
        key: 'login'
    },
    {
        path: '/employe',
        component: <Employe/>,
        key: 'employe'
    },
    {
        path: '/employes',
        component: <Employes/>,
        key: 'employes'
    },
    {
        path: '/profile',
        component: <Profile/>,
        key: 'profile'
    }
]
const AppRout = () => {
  return (
    <Routes>
        {rout.map(el => (
            <Route path={el.path} element={el.component} key={el.key}/>
        ))}
    </Routes>
  )
}

export default AppRout