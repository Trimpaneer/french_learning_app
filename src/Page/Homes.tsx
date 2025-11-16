import { Link } from "react-router-dom";
import { FiBook, FiHeadphones, FiCoffee, FiArrowRight, FiCheckCircle, FiUsers, FiAward } from "react-icons/fi";
import SEO from "../Components/SEO";

function Home() {
    return (
        <>
            <SEO
                title="Learn French Online for English Speakers | Magic Baguette - Free French Lessons"
                description="Master French with interactive tutorials and exercises designed specifically for English speakers. Learn French grammar, vocabulary, pronunciation, and culture. Start your French learning journey today!"
                keywords="learn French online, French for English speakers, French lessons, French grammar tutorial, French vocabulary, French pronunciation guide, online French course, French for beginners, free French lessons"
                author="Magic Baguette"
                image="https://example.com/og-image.jpg"
            />
            <div className="w-full min-h-screen">
                {/* Hero Section */}
                <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white dark:from-indigo-800 dark:via-purple-800 dark:to-pink-800">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32 lg:py-40">
                        <div className="max-w-3xl mx-auto text-center animate-fadeIn">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                                Learn French.
                                <span className="block text-yellow-300">Have Fun.</span>
                            </h1>
                            <p className="text-xl md:text-2xl mb-4 text-white leading-relaxed">
                                Your comprehensive guide to mastering French! Interactive lessons designed specifically for English speakers.
                            </p>
                            <p className="text-lg md:text-xl mb-8 text-indigo-100">
                                Master French grammar, vocabulary, pronunciation, and culture at your own pace. Start speaking French confidently today!
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link 
                                    to="/tutorials-menu"
                                    className="btn-primary text-white px-8 py-4 rounded-xl font-semibold text-lg inline-flex items-center justify-center gap-2"
                                    aria-label="Start learning French with our tutorials"
                                >
                                    Start Learning Free
                                    <FiArrowRight className="text-xl" />
                                </Link>
                                <Link 
                                    to="/exercises-menu"
                                    className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg border-2 border-white/20 hover:bg-white/20 transition-all inline-flex items-center justify-center"
                                    aria-label="Practice French with interactive exercises"
                                >
                                    Practice Exercises
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                    <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
                </section>

                {/* Why Learn French Section */}
                <section className="max-w-7xl mx-auto px-6 py-16 bg-white dark:bg-slate-800">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800 dark:text-white">
                            Why Learn French?
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-200 max-w-3xl mx-auto">
                            French is spoken by over 300 million people worldwide. Whether you're planning to travel, advance your career, or simply love the language, learning French opens doors to new opportunities.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
                            <FiUsers className="text-4xl text-indigo-600 mb-4" />
                            <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">Global Language</h3>
                            <p className="text-slate-700 dark:text-slate-200 mb-4">French is an official language in 29 countries and widely used in international business, diplomacy, and culture.</p>
                        </div>
                        <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                            <FiAward className="text-4xl text-purple-600 mb-4" />
                            <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">Career Benefits</h3>
                            <p className="text-slate-700 dark:text-slate-200 mb-4">Bilingual professionals often earn higher salaries and have access to more job opportunities in various industries.</p>
                        </div>
                        <div className="p-6 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl">
                            <FiCoffee className="text-4xl text-orange-600 mb-4" />
                            <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">Rich Culture</h3>
                            <p className="text-slate-700 dark:text-slate-200 mb-4">Explore French literature, cinema, cuisine, and art. Understanding French enhances your appreciation of world culture.</p>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="max-w-7xl mx-auto px-6 py-20">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                            Why Choose Magic Baguette?
                        </h2>
                        <p className="text-xl text-slate-700 dark:text-slate-200 max-w-2xl mx-auto">
                            We make learning French accessible, engaging, and effective for English speakers of all levels. Our method combines proven language learning techniques with modern technology.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <article className="card-hover bg-white dark:bg-slate-700 rounded-2xl p-8 shadow-lg border border-slate-100 dark:border-slate-600">
                            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                                <FiBook className="text-white text-2xl" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-slate-800">Structured Lessons</h3>
                            <p className="text-slate-600 dark:text-slate-300 mb-4">Learn French grammar, vocabulary, and pronunciation through carefully structured tutorials. Each lesson builds on the previous one, ensuring steady progress.</p>
                            <ul className="space-y-2 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <FiCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                                    <span>Step-by-step grammar explanations</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <FiCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                                    <span>Real-world examples and translations</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <FiCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                                    <span>Pronunciation guides for English speakers</span>
                                </li>
                            </ul>
                        </article>

                        {/* Feature 2 */}
                        <article className="card-hover bg-white dark:bg-slate-700 rounded-2xl p-8 shadow-lg border border-slate-100 dark:border-slate-600">
                            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                                <FiHeadphones className="text-white text-2xl" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-slate-800">Interactive Practice</h3>
                            <p className="text-slate-600 dark:text-slate-300 mb-4">Practice what you learn with interactive exercises that provide instant feedback. Hear native pronunciation and improve your speaking skills.</p>
                            <ul className="space-y-2 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <FiCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                                    <span>Audio pronunciation examples</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <FiCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                                    <span>Fill-in-the-blank exercises</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <FiCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                                    <span>Progress tracking and statistics</span>
                                </li>
                            </ul>
                        </article>

                        {/* Feature 3 */}
                        <article className="card-hover bg-white dark:bg-slate-700 rounded-2xl p-8 shadow-lg border border-slate-100 dark:border-slate-600">
                            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                                <FiCoffee className="text-white text-2xl" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-slate-800">Cultural Context</h3>
                            <p className="text-slate-600 dark:text-slate-300 mb-4">Learn French in context. Discover French culture, traditions, and everyday expressions that make the language come alive.</p>
                            <ul className="space-y-2 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <FiCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                                    <span>Cultural insights and tips</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <FiCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                                    <span>Common phrases and expressions</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <FiCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                                    <span>Real-world usage examples</span>
                                </li>
                            </ul>
                        </article>
                    </div>
                </section>

                {/* How It Works Section */}
                <section className="py-20 bg-gray-50 dark:bg-slate-800">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">
                                How It Works
                            </h2>
                            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">Start learning French in three simple steps. No credit card required.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                                <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">Create Your Account</h3>
                                <p className="text-slate-600 dark:text-slate-300 mb-4">Sign up for free and get instant access to all our French lessons and exercises.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                                <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">Follow the Tutorials</h3>
                                <p className="text-slate-600 dark:text-slate-300 mb-4">Start with the basics and progress at your own pace. Each tutorial includes clear explanations and examples.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                                <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">Practice & Track Progress</h3>
                                <p className="text-slate-600 dark:text-slate-300 mb-4">Complete exercises to reinforce learning and track your progress in your profile.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Ready to Start Your French Journey?
                        </h2>
                        <p className="text-xl mb-4 text-indigo-100">
                            Join thousands of English speakers who are mastering French with our interactive tutorials and exercises.
                        </p>
                        <p className="text-lg mb-8 text-indigo-200">
                            Free to start. Learn at your own pace. No credit card required.
                        </p>
                        <Link 
                            to="/tutorials-menu"
                            className="btn-secondary text-white px-10 py-4 rounded-xl font-semibold text-lg inline-flex items-center gap-2"
                            aria-label="Explore our French tutorials"
                        >
                            Explore Tutorials
                            <FiArrowRight className="text-xl" />
                        </Link>
                    </div>
                </section>

                {/* FAQ Section for SEO */}
                <section className="max-w-4xl mx-auto px-6 py-20">
                    <h2 className="text-4xl font-bold mb-8 text-center text-slate-800">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-6">
                        <div className="p-6 bg-white dark:bg-slate-700 rounded-xl shadow-md">
                            <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">Is Magic Baguette free to use?</h3>
                            <p className="text-slate-600 dark:text-slate-300 mb-4">Yes! All our French tutorials and exercises are completely free. Create an account to track your progress and unlock additional features.</p>
                        </div>
                        <div className="p-6 bg-white dark:bg-slate-700 rounded-xl shadow-md">
                            <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">Do I need to know any French to start?</h3>
                            <p className="text-slate-600 dark:text-slate-300 mb-4">Not at all! Our lessons are designed for complete beginners. We start with the French alphabet and basic pronunciation, perfect for English speakers with no prior French knowledge.</p>
                        </div>
                        <div className="p-6 bg-white dark:bg-slate-700 rounded-xl shadow-md">
                            <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">How is this different from other French learning apps?</h3>
                            <p className="text-slate-600 dark:text-slate-300 mb-4">Magic Baguette focuses specifically on English speakers, explaining French grammar and pronunciation in ways that make sense for native English speakers. Our lessons include cultural context and real-world examples.</p>
                        </div>
                        <div className="p-6 bg-white dark:bg-slate-700 rounded-xl shadow-md">
                            <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">Can I learn at my own pace?</h3>
                            <p className="text-slate-600 dark:text-slate-300 mb-4">Absolutely! There are no deadlines or schedules. Complete lessons and exercises whenever you have time. Your progress is saved automatically.</p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home;
