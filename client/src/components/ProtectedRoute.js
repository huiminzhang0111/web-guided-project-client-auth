import React from 'react';
import { Route } from 'react-router-dom';

const ProtectedRoute = (props)=> {
    return <Route {...props} render={()=> {
        return <div>Protected</div>
    }}/>
}

export default ProtectedRoute;