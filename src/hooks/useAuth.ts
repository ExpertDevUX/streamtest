import { useState, useEffect } from 'react';
import { User } from '../types/stream';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate auth check
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (username: string, password: string) => {
    // Simulate login
    if (username && password) {
      const newUser = {
        id: Date.now().toString(),
        username,
        email: `${username}@example.com`
      };
      localStorage.setItem('user', JSON.stringify(newUser));
      setUser(newUser);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return { user, login, logout, loading };
};