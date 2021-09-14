import React, { useEffect } from "react";
import axios from 'axios';
import axiosWithAuth from "../utils/axiosWithAuth";

const Logout = ()=> {
    useEffect(()=> {
        axiosWithAuth()
            .post('http://localhost:5000/api/logout')
            .then(resp => {
              localStorage.removeItem("token");
            }).catch(err=> {
                console.log(err);
            });
    }, []);


    return(<div></div>);
}

export default Logout;