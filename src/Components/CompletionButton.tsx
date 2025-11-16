import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { FiCheck, FiCheckCircle } from 'react-icons/fi';
import { apiService } from '../services/api';

interface CompletionButtonProps {
  type: 'tutorial' | 'exercise';
  id: number;
  className?: string;
}

export default function CompletionButton({ type, id, className = '' }: CompletionButtonProps) {
  const { isAuthenticated, markTutorialComplete, markExerciseComplete } = useAuth();
  const [completed, setCompleted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    if (!isAuthenticated) {
      setChecking(false);
      return;
    }

    const checkStatus = async () => {
      try {
        const response = type === 'tutorial'
          ? await apiService.checkTutorialStatus(id)
          : await apiService.checkExerciseStatus(id);
        setCompleted(response.completed);
      } catch (error) {
        console.error('Error checking completion status:', error);
      } finally {
        setChecking(false);
      }
    };

    checkStatus();
  }, [isAuthenticated, type, id]);

  const handleComplete = async () => {
    if (completed || loading || !isAuthenticated) return;

    setLoading(true);
    try {
      if (type === 'tutorial') {
        await markTutorialComplete(id);
      } else {
        await markExerciseComplete(id);
      }
      setCompleted(true);
    } catch (error) {
      console.error('Error marking as complete:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthenticated) {
    return null;
  }

  if (checking) {
    return (
      <div className={`inline-flex items-center gap-2 text-slate-400 ${className}`}>
        <div className="w-4 h-4 border-2 border-slate-300 border-t-indigo-600 rounded-full animate-spin"></div>
        <span className="text-sm">Loading...</span>
      </div>
    );
  }

  if (completed) {
    return (
      <div className={`inline-flex items-center gap-2 text-green-600 ${className}`}>
        <FiCheckCircle className="text-xl" />
        <span className="font-semibold">Completed!</span>
      </div>
    );
  }

  return (
    <button
      onClick={handleComplete}
      disabled={loading}
      className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {loading ? (
        <>
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          <span>Marking as complete...</span>
        </>
      ) : (
        <>
          <FiCheck />
          <span>Mark as Complete</span>
        </>
      )}
    </button>
  );
}

