import { authCheck, authLogin } from "@/core/actions/auth-actions";
import { User } from "@/core/auth/interface/user";
import { create } from "zustand";

export type AuthStatus = 'loading' | 'authenticated' | 'unauthenticated';

export interface AuthSAtate {
    status: AuthStatus;
    token?: string;
    user?: User;

    login: (email: string, password: string) => Promise<boolean>;
    checkAuth: () => Promise<void>;
    logout: () => Promise<void>;

    changeStatus: (token?: string, user?: User) => boolean;
}

export const useAuthStore = create<AuthSAtate>()((set, get) => ({
    status: 'loading',
    token: undefined,
    user: undefined,

    login: async (email: string, password: string) => {
        const resp = await authLogin(email, password);

        return get().changeStatus(resp?.token, resp?.user);
    },
    checkAuth: async () => {
        const resp = await authCheck();
        
        get().changeStatus(resp?.token, resp?.user);
    },
    logout: async () => {
        set({ 
            status: 'unauthenticated',
            token: undefined,
            user: undefined
        });
    },
    changeStatus: (token?: string, user?: User) => {
        if (!token || !user) {
            set({ 
                status: 'unauthenticated',
                token: undefined,
                user: undefined
            });

            return false;
        }

        set({
            status: 'authenticated',
            token: token,
            user: user
        });

        return true;
    }
}));