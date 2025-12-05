import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import { FiUser, FiMail, FiCalendar, FiEdit2, FiLogOut, FiArrowLeft, FiShield } from 'react-icons/fi';

export default function Profile() {
  const { user, logout, isAuthenticated, stats } = useAuth();

  if (!isAuthenticated || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-md w-full text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
            <FiShield className="text-6xl text-slate-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Access Restricted</h2>
            <p className="text-slate-600 mb-6">
              You must be logged in to access your profile.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/login"
                className="btn-primary text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center justify-center gap-2"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="bg-slate-100 text-slate-700 px-6 py-3 rounded-lg font-semibold hover:bg-slate-200 transition-colors inline-flex items-center justify-center gap-2"
              >
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const formatDate = (dateString?: string) => {
    if (!dateString) return 'Not available';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-indigo-600 transition-colors mb-4"
          >
            <FiArrowLeft />
            Back to home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-2">
            My Profile
          </h1>
          <p className="text-slate-600 text-lg">
            Manage your personal information and preferences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Profile Card */}
          <div className="md:col-span-2 space-y-6">
            {/* Profile Information Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                  <FiUser className="text-indigo-600" />
                  Personal Information
                </h2>
                <button className="p-2 text-slate-400 hover:text-indigo-600 transition-colors">
                  <FiEdit2 />
                </button>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {/* Email */}
                <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-slate-50 rounded-xl">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiMail className="text-white text-xl" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-slate-500 mb-1">Email Address</p>
                    <p className="text-lg font-semibold text-slate-800">{user.email}</p>
                  </div>
                </div>

                {/* User ID */}
                <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-slate-50 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiUser className="text-white text-xl" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-slate-500 mb-1">User ID</p>
                    <p className="text-lg font-semibold text-slate-800">#{user.id}</p>
                  </div>
                </div>

                {/* Account Created */}
                {user.created_at && (
                  <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-slate-50 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FiCalendar className="text-white text-xl" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-slate-500 mb-1">Account Created</p>
                      <p className="text-lg font-semibold text-slate-800">
                        {formatDate(user.created_at)}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Statistics Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Statistics</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 sm:p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-100">
                  <p className="text-sm text-slate-600 mb-1">Tutorials Completed</p>
                  <p className="text-2xl sm:text-3xl font-bold text-indigo-600">
                    {stats?.tutorials_completed ?? 0}
                  </p>
                </div>
                <div className="p-3 sm:p-4 bg-gradient-to-br from-orange-50 to-pink-50 rounded-xl border border-orange-100">
                  <p className="text-sm text-slate-600 mb-1">Exercises Completed</p>
                  <p className="text-2xl sm:text-3xl font-bold text-orange-600">
                    {stats?.exercises_completed ?? 0}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Picture Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-100 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl text-white font-bold">
                  {user.email.charAt(0).toUpperCase()}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-1">
                {user.email.split('@')[0]}
              </h3>
              <p className="text-slate-500 text-sm mb-4">Member since {formatDate(user.created_at)}</p>
              <button className="w-full py-2 px-4 bg-slate-100 text-slate-700 rounded-lg font-medium hover:bg-slate-200 transition-colors">
                Change Photo
              </button>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-100">
              <h3 className="text-lg font-bold text-slate-800 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link
                  to="/tutorials-menu"
                  className="block w-full py-3 px-4 bg-indigo-50 text-indigo-700 rounded-lg font-medium hover:bg-indigo-100 transition-colors text-center text-sm sm:text-base"
                >
                  Continue Learning
                </Link>
                <Link
                  to="/exercises-menu"
                  className="block w-full py-3 px-4 bg-orange-50 text-orange-700 rounded-lg font-medium hover:bg-orange-100 transition-colors text-center text-sm sm:text-base"
                >
                  Practice Exercises
                </Link>
                <button
                  onClick={logout}
                  className="w-full py-3 px-4 bg-red-50 text-red-700 rounded-lg font-medium hover:bg-red-100 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <FiLogOut />
                  Sign Out
                </button>
              </div>
            </div>

            {/* Account Status */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="font-semibold text-green-800">Active Account</span>
              </div>
              <p className="text-sm text-green-700">
                Your account is in good standing and ready to use.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

