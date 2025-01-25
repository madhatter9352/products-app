import { authApi } from "../auth/api/productApi";
import { User } from "../auth/interface/user";

export interface AuthResponse {
    token: string;
}

const returnUserToken = ({token}: AuthResponse) => {
    const user: User = {
        id: '1',
        email: 'eve.holt@reqres.in',
        fullName: 'Eve Holt',
        isActive: true,
        roles: ['admin']
    }

    return { user, token };
}

export const authLogin = async (email: string, password: string) => {
    email = email.toLowerCase();
    console.log(email);
    console.log(password);

    try {
        const {data} = await authApi.post('/auth/login', { 
            username: email, 
            password 
        });

        console.log(data);

        return returnUserToken(data);
    } catch (error) {
        console.error(error);
        // throw new Error('Invalid email or password');
        return null;
    }
}

export const authCheck = async () => {
    try {
        const {data} = await authApi.get('');

        return returnUserToken(data);
    } catch (error) {
        console.error(error);
        // throw new Error('Invalid token');
        return null;
    }
}