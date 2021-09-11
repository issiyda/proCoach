import React, { FC, ReactNode, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '@/utils/context';
import axios from 'axios';
import { RequestLogin } from '@/types/api';
import { firebaseAuth, getUserEmail } from '@/utils/firebase';

const initialState = {
  user: {
    id: '',
    name: '',
    email: '',
    password: '',
    createdAt: null,
    updatedAt: null,
  },
};

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  useEffect(() => {
    if (getUserEmail) router.push('/admin');
  }, []);
  const router = useRouter();
  const [user, setUser] = useState(initialState.user);

  const login = async (loginData: RequestLogin): Promise<void> => {
    try {
      await firebaseAuth(loginData.email, loginData.password);
      router.push('/admin');
    } catch (error) {
      alert(error);
    }
  };

  const logout = async () => {
    setUser(initialState.user);
    router.push('/admin/login');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
