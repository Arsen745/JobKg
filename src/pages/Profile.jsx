import React, { useEffect, useState } from 'react'
import Header from '../UI/header/Header'
import index from '../api/index'
import CardProile from '../component/cardprofile/CardProile'
import Cart from '../component/cart/Cart'

const Profile = () => {
    const [data, setData] = useState(null)
    const [id, setId] = useState(null)
    const [endpoint, setEndpoint] = useState(null)

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('data'));

        if (savedData === null) {
            window.location.href = '/ReistrationPage'; // Рекомендуется использовать href
        } else {
            setId(savedData.id);
            setEndpoint(savedData.endpoint);
            const fetchProf = async () => {
                try {
                    const response = await index.fetchProfile(savedData.endpoint, savedData.id);
                    console.log(savedData.id, savedData.endpoint);
                    console.log(response, '--------profile-----data');
                    setData(response);
                } catch (error) {
                    console.error('Error fetching profile data:', error);
                }
            };
            fetchProf();
        }
    }, []);

    if (data === null) {
        return (
            <div>
                <div className="spinner-grow text-primary" style={{
                    marginTop: 300,
                    marginLeft: 900,
                }} role="status">
                    <span className="sr-only" style={{ marginLeft: 50 }}>Loading...</span>
                </div>
            </div>
        )
    }

    return (
        <div>
            <Header />
            <div className="cart">
                <Cart/>
            </div>
            <div>
                <CardProile name={data.name} surname={data.surname} email={data.email} age={data.age}/>
            </div>
        </div>
    )
}

export default Profile;
