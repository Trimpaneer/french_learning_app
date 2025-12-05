import { Link } from "react-router-dom";
import { FiBook, FiTarget, FiMail } from "react-icons/fi";

function Footer() {
  return (
    <footer className="bg-surface text-primary border-t border-border mt-20 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] dark:shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.3)] relative z-10 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🥖</span>
              <h2 className="text-2xl font-bold text-primary">
                Magic Baguette
              </h2>
            </div>
            <p className="text-secondary mb-4 leading-relaxed">
              Your pocket guide to real French! Learn French the fun way with interactive 
              tutorials and exercises designed for English speakers of all levels.
            </p>
            <p className="text-sm text-secondary">
              &copy; {new Date().getFullYear()} Magic Baguette. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-slate-900 dark:text-white font-semibold mb-4 flex items-center gap-2">
              <FiBook className="text-indigo-400" />
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/tutorials-menu" className="text-primary hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link to="/exercises-menu" className="text-primary hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Exercises
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-slate-900 dark:text-white font-semibold mb-4 flex items-center gap-2">
              <FiTarget className="text-orange-400" />
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/tutorials-menu" className="text-primary hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Learning Path
                </Link>
              </li>
              <li>
                <Link to="/exercises-menu" className="text-primary hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Practice Center
                </Link>
              </li>
              <li>
                <a href="#" className="text-secondary hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Study Tips
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Made with ❤️ for French learners worldwide
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-secondary hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <FiMail className="text-lg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
