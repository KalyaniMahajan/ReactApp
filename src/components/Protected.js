import React from 'react';
import { Redirect } from 'react-router-dom'

function Protected(props) {
    const CMP = props.cmp
    var auth = JSON.parse(localStorage.getItem('auth'))

    return <div> {auth ? <CMP /> : <Redirect to="login" ></Redirect> } </div>
}

export default Protected;
