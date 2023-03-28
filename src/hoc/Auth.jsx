import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { endpoint } from '../utils/endpoint'
// import './AuthHoc.scss'

const AuthHoc = (props) => {
    const [auth, setAuth] = useState(null)
    const navigate = useNavigate()

    const _tk = localStorage.getItem("_tk")

    useEffect(() => {
        if (!_tk) {
            return navigate('/login')
        }

        const xhr = new XMLHttpRequest()
        xhr.open('get', endpoint)
        xhr.setRequestHeader("Authorization", "Bearer " + _tk)

        xhr.onload = function () {
            const data = JSON.parse(xhr.response)
            if (data.success) {
                setAuth(true)
            } else {
                setAuth(false)
                navigate('/login')
            }
        }
        xhr.onerror = function () {
            setAuth(false)
            navigate('/login')
        }
        xhr.ontimeout = function () {
            setAuth(false)
            navigate('/login')
        }

        xhr.send()

    }, [_tk])

    let loader = <div className="scaffold__loading">
        <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div>
    </div>;


    return <>{auth ? props.children : loader}</>

}

export default AuthHoc
