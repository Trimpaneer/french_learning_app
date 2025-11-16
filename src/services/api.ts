const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  email: string;
  password: string;
}

export interface User {
  id: number;
  email: string;
  created_at?: string;
}

export interface AuthResponse {
  message: string;
  token: string;
  user: User;
}

class ApiService {
  private getAuthToken(): string | null {
    return localStorage.getItem('token');
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    try {
      const token = this.getAuthToken();
      const headers: HeadersInit = {
        'Content-Type': 'application/json',
        ...options.headers,
      };

      if (token) {
        (headers as Record<string, string>)['Authorization'] = `Bearer ${token}`;
      }

      const response = await fetch(`${API_URL}${endpoint}`, {
        ...options,
        headers,
      });

      if (!response.ok) {
        const error = await response.json().catch(() => ({ 
          error: response.status === 0 || response.status >= 500 
            ? 'Server is not available. Please make sure the backend is running.' 
            : 'An error occurred' 
        }));
        throw new Error(error.error || `HTTP error! status: ${response.status}`);
      }

      return response.json();
    } catch (error) {
      if (error instanceof TypeError && error.message.includes('fetch')) {
        throw new Error('Cannot connect to server. Please make sure the backend is running on http://localhost:3001');
      }
      throw error;
    }
  }

  async register(credentials: RegisterCredentials): Promise<AuthResponse> {
    return this.request<AuthResponse>('/auth/register', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  }

  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    return this.request<AuthResponse>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  }

  async getCurrentUser(): Promise<{ user: User }> {
    return this.request<{ user: User }>('/auth/me');
  }

  async markTutorialComplete(tutorialId: number): Promise<{ message: string; stats: UserStats }> {
    return this.request<{ message: string; stats: UserStats }>(`/completions/tutorials/${tutorialId}/complete`, {
      method: 'POST',
    });
  }

  async markExerciseComplete(exerciseId: number): Promise<{ message: string; stats: UserStats }> {
    return this.request<{ message: string; stats: UserStats }>(`/completions/exercises/${exerciseId}/complete`, {
      method: 'POST',
    });
  }

  async checkTutorialStatus(tutorialId: number): Promise<{ completed: boolean }> {
    return this.request<{ completed: boolean }>(`/completions/tutorials/${tutorialId}/status`);
  }

  async checkExerciseStatus(exerciseId: number): Promise<{ completed: boolean }> {
    return this.request<{ completed: boolean }>(`/completions/exercises/${exerciseId}/status`);
  }

  async getUserStats(): Promise<{ stats: UserStats }> {
    return this.request<{ stats: UserStats }>('/completions/stats');
  }
}

export interface UserStats {
  tutorials_completed: number;
  exercises_completed: number;
}

export const apiService = new ApiService();

