import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiUser, FiLogOut } from "react-icons/fi";
import { useAuth } from "../contexts/AuthContext";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, user, logout, loading } = useAuth();
  
  // Don't render auth-dependent content while loading
  if (loading) {
    return (
      <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              to="/"
              className="flex items-center gap-2 text-indigo-600 font-bold text-xl hover:text-indigo-700 transition-colors"
            >
              <span className="text-2xl">🥖</span>
              Magic Baguette
            </Link>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-indigo-600 font-bold text-xl hover:text-indigo-700 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <span className="text-2xl">🥖</span>
            Magic Baguette
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link 
              to="/" 
              className="text-primary hover:text-indigo-600 font-medium transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/tutorials-menu" 
              className="text-slate-700 hover:text-indigo-600 font-medium transition-colors"
            >
              Tutorials
            </Link>
            <Link 
              to="/exercises-menu" 
              className="text-slate-700 hover:text-indigo-600 font-medium transition-colors"
            >
              Exercises
            </Link>
            <Link 
              to="/about" 
              className="text-slate-700 hover:text-indigo-600 font-medium transition-colors"
            >
              About
            </Link>
            
            {isAuthenticated ? (
              <div className="flex items-center gap-4 ml-2 pl-4 border-l border-slate-200">
                <Link
                  to="/profile"
                  className="flex items-center gap-2 text-slate-700 hover:text-indigo-600 transition-colors"
                >
                  <FiUser className="text-lg" />
                  <span className="text-sm font-medium">{user?.email}</span>
                </Link>
                <button
                  onClick={logout}
                  className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-medium transition-colors border border-slate-200"
                >
                  <FiLogOut />
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3 ml-2 pl-4 border-l border-slate-200">
                <Link 
                  to="/login"
                  className="px-4 py-2 text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
                >
                  Login
                </Link>
                <Link 
                  to="/register"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              className="p-2 text-primary hover:text-indigo-600 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <div className="px-4 py-4 space-y-3">
            <Link
              to="/"
              className="block py-2 text-primary hover:text-indigo-600 font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/tutorials-menu"
              className="block py-2 text-primary hover:text-indigo-600 font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Tutorials
            </Link>
            <Link
              to="/exercises-menu"
              className="block py-2 text-primary hover:text-indigo-600 font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Exercises
            </Link>
            <Link
              to="/about"
              className="block py-2 text-primary hover:text-indigo-600 font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            
            <div className="pt-4 border-t border-border">
              {isAuthenticated ? (
                <>
                  <Link
                    to="/profile"
                    className="flex items-center gap-2 py-2 text-primary hover:text-indigo-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <FiUser />
                    <span>{user?.email}</span>
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setIsOpen(false);
                    }}
                    className="w-full flex items-center justify-center gap-2 py-2 px-4 mt-2 bg-gray-100 hover:bg-gray-200 text-primary rounded-lg font-medium transition-colors"
                  >
                    <FiLogOut />
                    Logout
                  </button>
                </>
              ) : (
                <div className="space-y-3">
                  <Link
                    to="/login"
                    className="block w-full py-2 text-center text-primary hover:text-indigo-600 font-medium transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="block w-full py-2 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium text-center hover:from-indigo-700 hover:to-purple-700 transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
