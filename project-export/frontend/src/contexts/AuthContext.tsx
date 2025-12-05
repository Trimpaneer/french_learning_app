import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { apiService, type User, type UserStats } from '../services/api';

interface AuthContextType {
  user: User | null;
  token: string | null;
  loading: boolean;
  stats: UserStats | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  refreshStats: () => Promise<void>;
  markTutorialComplete: (tutorialId: number) => Promise<void>;
  markExerciseComplete: (exerciseId: number) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<UserStats | null>(null);

  const fetchUser = async () => {
    try {
      const storedToken = localStorage.getItem('token');
      if (!storedToken) {
        setLoading(false);
        return;
      }

      const response = await apiService.getCurrentUser();
      setUser(response.user);
      await refreshStats();
    } catch (error) {
      console.error('Failed to fetch user:', error);
      // Token might be invalid, clear it
      localStorage.removeItem('token');
      setToken(null);
      setUser(null);
      setStats(null);
    } finally {
      setLoading(false);
    }
  };

  const refreshStats = async () => {
    try {
      const response = await apiService.getUserStats();
      setStats(response.stats);
    } catch (error) {
      console.error('Failed to fetch stats:', error);
    }
  };

  useEffect(() => {
    // Check if user is already logged in
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      fetchUser();
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await apiService.login({ email, password });
      localStorage.setItem('token', response.token);
      setToken(response.token);
      setUser(response.user);
      await refreshStats();
    } catch (error) {
      throw error;
    }
  };

  const register = async (email: string, password: string) => {
    try {
      const response = await apiService.register({ email, password });
      localStorage.setItem('token', response.token);
      setToken(response.token);
      setUser(response.user);
      await refreshStats();
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
    setStats(null);
  };

  const handleMarkTutorialComplete = async (tutorialId: number) => {
    try {
      const response = await apiService.markTutorialComplete(tutorialId);
      setStats(response.stats);
    } catch (error) {
      console.error('Failed to mark tutorial complete:', error);
      throw error;
    }
  };

  const handleMarkExerciseComplete = async (exerciseId: number) => {
    try {
      const response = await apiService.markExerciseComplete(exerciseId);
      setStats(response.stats);
    } catch (error) {
      console.error('Failed to mark exercise complete:', error);
      throw error;
    }
  };

  const value: AuthContextType = {
    user,
    token,
    loading,
    stats,
    login,
    register,
    logout,
    isAuthenticated: !!user && !!token,
    refreshStats,
    markTutorialComplete: handleMarkTutorialComplete,
    markExerciseComplete: handleMarkExerciseComplete,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

