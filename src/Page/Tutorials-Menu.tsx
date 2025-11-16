import { Link } from "react-router-dom";
import { FiBook, FiArrowRight } from "react-icons/fi";
import SEO from "../Components/SEO";

const tutorials = [
  {
    id: 0,
    title: "Alphabet and Pronunciation",
    description: "Master the French alphabet and learn proper pronunciation from the start.",
    level: "Beginner",
    icon: "🔤",
    path: "/tutorials/tuto-0-alphabet-and-pronunciation",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 1,
    title: "Subject Pronouns",
    description: "Learn Je, tu, il, elle and how to use them correctly.",
    level: "Beginner",
    icon: "👤",
    path: "/tutorials/tuto-1-subject-pronouns",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 2,
    title: "Être (to be)",
    description: "Master the most important verb in French: être. Learn all its forms and uses.",
    level: "Beginner",
    icon: "⭐",
    path: "/tutorials/tuto-2-etre",
    color: "from-orange-500 to-red-500"
  }
];

function TutorialsMenu() {
  return (
    <>
      <SEO
        title="French Tutorials - Learn French Grammar Step by Step | Magic Baguette"
        description="Browse our comprehensive collection of French tutorials designed for English speakers. Learn French grammar, vocabulary, and pronunciation with step-by-step lessons."
        keywords="French tutorials, French lessons, French grammar lessons, learn French step by step, French for beginners, French language course"
        author="Magic Baguette"
        image="/images/seo/french-tutorials-cover.png"
      />
      <div className="w-full min-h-screen py-12 px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fadeIn text-primary">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-primary mb-4">
            All Tutorials
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Step-by-step lessons designed to build your French skills progressively
          </p>
        </div>

        {/* Level Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
            <FiBook className="text-indigo-600" />
            Beginner Level
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tutorials.map((tutorial, index) => (
              <Link
                key={tutorial.id}
                to={tutorial.path}
                className="card-hover bg-white hover:bg-slate-50 rounded-2xl p-6 shadow-lg border border-slate-100 group transition-all duration-200"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${tutorial.color} rounded-xl flex items-center justify-center mb-4 text-3xl text-white`}>
                  {tutorial.icon}
                </div>
                
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full">
                    {tutorial.level}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{tutorial.title}</h3>
                
                <p className="text-slate-600 text-sm mb-4">{tutorial.description}</p>
                
                <div className="flex items-center text-indigo-600 font-medium group-hover:gap-2 transition-all">
                  <span>Start Learning</span>
                  <FiArrowRight className="text-indigo-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="mt-16 p-8 bg-gradient-to-r from-slate-100 to-slate-200 rounded-2xl text-center border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-800 mb-2">More Tutorials Coming Soon!</h3>
          <p className="text-slate-600">
            We're constantly adding new lessons. Check back regularly for updates.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default TutorialsMenu;
