import { useAuth } from '../contexts/Auth';

const IsInitialAuthenticated = () => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated;
};

export default IsInitialAuthenticated;