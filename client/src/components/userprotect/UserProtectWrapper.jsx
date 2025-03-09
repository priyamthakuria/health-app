import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const UserProtectWrapper = ({ children }) => {
    const { isAuthenticated, loading } = useAuth();
    const navigate = useNavigate();
    const [isCheckingAuth, setIsCheckingAuth] = useState(true);

    useEffect(() => {
        if (!loading) {
            if (!isAuthenticated) {
                navigate('/login');
            }
            setIsCheckingAuth(false);
        }
    }, [isAuthenticated, loading]);

    if (loading || isCheckingAuth) {
        return <div>Loading...</div>; // Show loading until authentication check is done
    }

    return <>{children}</>;
};

export default UserProtectWrapper;
