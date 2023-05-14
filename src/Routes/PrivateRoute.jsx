import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <div>Loading...</div>
    }

    if(user?.email){
        return children;
    }

    return <Navigate to="/login" replace></Navigate>

};

export default PrivateRoute;