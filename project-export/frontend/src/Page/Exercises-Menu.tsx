import { Link } from "react-router-dom";
import { FiTarget, FiArrowRight, FiCheckCircle } from "react-icons/fi";
import SEO from "../Components/SEO";

const exercises = [
  {
    id: 1,
    title: "Subject Pronouns",
    description: "Practice using je, tu, il, elle, nous, vous, ils, elles in context.",
    level: "Beginner",
    icon: "👤",
    path: "/exercises/exercise-1-pronoms-sujets",
    color: "from-indigo-500 to-purple-500"
  },
  {
    id: 2,
    title: "Être (to be)",
    description: "Test your knowledge of the verb être with interactive exercises.",
    level: "Beginner",
    icon: "⭐",
    path: "/exercises/exercise-2-etre",
    color: "from-orange-500 to-pink-500"
  }
];

function ExercisesMenu() {
  return (
    <>
      <SEO
        title="French Practice Exercises - Interactive French Exercises | Magic Baguette"
        description="Practice French with interactive exercises. Fill in the blanks, get instant feedback, and track your progress. Perfect for reinforcing French grammar and vocabulary."
        keywords="French exercises, French practice, French fill in the blank, French grammar exercises, practice French, French language practice"
        author="Magic Baguette"
        image="/assets/images/exercises-seo.png"
      />
      <div className="w-full min-h-screen py-12 px-6 bg-primary">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fadeIn">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">
            Practice Exercises
          </h1>
          <p className="text-xl text-primary max-w-2xl mx-auto">
            Reinforce what you've learned with interactive exercises and get instant feedback
          </p>
        </div>

        {/* Exercises Grid */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
            <FiTarget className="text-orange-600" />
            Available Exercises
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {exercises.map((exercise) => (
              <div key={exercise.id} className="bg-surface rounded-xl shadow-md overflow-hidden border border-border hover:shadow-lg transition-all duration-300">
                {/* Decorative gradient */}
                <div className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full ${exercise.color.replace('from-', 'bg-gradient-to-br from-').replace('to-', ' to-')} opacity-10 dark:opacity-5`}></div>
                
                <div className="relative p-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${exercise.color} rounded-2xl flex items-center justify-center mb-6 text-4xl shadow-lg text-white`}>
                    {exercise.icon}
                  </div>
                  
                  <div className="flex items-center justify-between mt-6">
                  <span className="text-sm font-medium px-3 py-1 bg-gray-100 dark:bg-gray-700 text-primary rounded-full border border-border">
                    {exercise.level}
                  </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-primary mb-2">{exercise.title}</h3>
                  
                  <p className="text-secondary mb-8 leading-relaxed">
                    {exercise.description}
                  </p>
                  
                  <Link to={exercise.path} className="group block">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-indigo-700 dark:text-indigo-400 font-semibold group-hover:gap-2 transition-all">
                        <FiCheckCircle className="mr-2" />
                        <span>Start Exercise</span>
                      </div>
                      <FiArrowRight className="text-indigo-700 dark:text-indigo-400 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tips Section */}
        <div className="mt-12 p-8 bg-indigo-50 dark:bg-gray-800 rounded-2xl border border-indigo-100 dark:border-gray-700">
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
            <span className="text-2xl">💡</span>
            Study Tips
          </h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="mt-1">
                <FiCheckCircle className="text-green-500" />
              </div>
              <p className="text-primary">Complete exercises regularly to reinforce your learning</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1">
                <FiCheckCircle className="text-green-500" />
              </div>
              <p className="text-primary">Review mistakes to understand your weak areas</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1">
                <FiCheckCircle className="text-green-500" />
              </div>
              <p className="text-primary">Practice regularly for best results</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default ExercisesMenu;
