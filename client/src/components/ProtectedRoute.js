import React from 'react';
import { Route } from 'react-router-dom';

const ProtectedRoute = ({component, ...rest})=> {
    return <Route {...rest} render={()=> {
        return <div>Protected asdfa</div>
    }}/>
}

export default ProtectedRoute;