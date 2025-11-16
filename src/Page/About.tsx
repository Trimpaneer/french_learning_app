import { FiBook, FiTarget, FiHeart, FiGlobe, FiAward } from "react-icons/fi";
import SEO from "../Components/SEO.tsx";

function About() {
    return (
        <>
            <SEO
                title="About Magic Baguette - Learn French Online | Our Mission & Story"
                description="Learn about Magic Baguette, your trusted platform for learning French online. Discover our mission to make French learning fun, practical, and accessible for English speakers worldwide."
                keywords="about Magic Baguette, learn French online, French learning platform, French education, French language school, online French courses"
                author="Magic Baguette Team"
                image="/images/magic-baguette-logo.png"
            />
            <div className="w-full min-h-screen py-12 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">
                            About Magic Baguette
                        </h1>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            Your trusted companion on the journey to mastering French
                        </p>
                    </div>

                    {/* Mission Section */}
                    <section className="mb-12">
                        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-slate-100">
                            <h2 className="text-3xl font-bold mb-6 text-slate-800 flex items-center gap-3">
                                <FiTarget className="text-indigo-600" />
                                Our Mission
                            </h2>
                            <p className="text-lg text-slate-700 leading-relaxed mb-4">
                                At <strong>Magic Baguette</strong>, we believe that learning French should be <strong>fun, practical, and accessible</strong> for English speakers of all levels. Our mission is simple: to make French learning engaging and effective through interactive lessons, real-world examples, and cultural insights.
                            </p>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                We understand the unique challenges English speakers face when learning French—from pronunciation differences to grammatical structures. That's why every lesson is crafted specifically with English speakers in mind, using comparisons and explanations that make sense in your native language.
                            </p>
                        </div>
                    </section>

                    {/* What We Offer */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6 text-slate-800 flex items-center gap-3">
                            <FiBook className="text-indigo-600" />
                            What We Offer
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100">
                                <h3 className="text-xl font-bold mb-3 text-slate-800">Interactive Tutorials</h3>
                                <p className="text-slate-700 leading-relaxed">
                                    Step-by-step French grammar lessons with clear explanations, pronunciation guides, and example sentences. Each tutorial builds on previous knowledge, ensuring steady progress.
                                </p>
                            </div>
                            <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-xl p-6 border border-orange-100">
                                <h3 className="text-xl font-bold mb-3 text-slate-800">Practice Exercises</h3>
                                <p className="text-slate-700 leading-relaxed">
                                    Interactive exercises with instant feedback help you practice what you've learned. Track your progress and see your French skills improve over time.
                                </p>
                            </div>
                            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                                <h3 className="text-xl font-bold mb-3 text-slate-800">Cultural Insights</h3>
                                <p className="text-slate-700 leading-relaxed">
                                    Learn French in context with cultural notes about French life, traditions, and everyday expressions. Understanding culture enhances language learning.
                                </p>
                            </div>
                            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100">
                                <h3 className="text-xl font-bold mb-3 text-slate-800">Progress Tracking</h3>
                                <p className="text-slate-700 leading-relaxed">
                                    Monitor your learning journey with detailed statistics. See how many tutorials and exercises you've completed, and stay motivated as you progress.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Our Approach */}
                    <section className="mb-12">
                        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-slate-100">
                            <h2 className="text-3xl font-bold mb-6 text-slate-800 flex items-center gap-3">
                                <FiHeart className="text-pink-600" />
                                Our Approach
                            </h2>
                            <p className="text-lg text-slate-700 leading-relaxed mb-4">
                                We believe that learning a language isn't just about memorizing words and grammar rules—it's about <strong>connecting with people, stories, and traditions</strong>. That's why our team of French teachers, linguists, and developers work together to create lessons that feel alive and relevant.
                            </p>
                            <p className="text-lg text-slate-700 leading-relaxed mb-4">
                                Our teaching method combines:
                            </p>
                            <ul className="space-y-3 text-lg text-slate-700 mb-6">
                                <li className="flex items-start gap-3">
                                    <span className="text-indigo-600 font-bold mt-1">✓</span>
                                    <span><strong>Proven language learning techniques</strong> backed by linguistic research</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-indigo-600 font-bold mt-1">✓</span>
                                    <span><strong>Modern technology</strong> that makes learning interactive and engaging</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-indigo-600 font-bold mt-1">✓</span>
                                    <span><strong>Real-world context</strong> so you can use French in actual conversations</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-indigo-600 font-bold mt-1">✓</span>
                                    <span><strong>Cultural understanding</strong> to deepen your appreciation of French life</span>
                                </li>
                            </ul>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                Whether you're learning French for travel, work, academic purposes, or simply for the love of the language, we're here to support your journey every step of the way.
                            </p>
                        </div>
                    </section>

                    {/* Why French Matters */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6 text-slate-800 flex items-center gap-3">
                            <FiGlobe className="text-indigo-600" />
                            Why French Matters
                        </h2>
                        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8 border border-indigo-100">
                            <p className="text-lg text-slate-700 leading-relaxed mb-4">
                                French is one of the world's most important languages, spoken by over <strong>300 million people</strong> across five continents. It's an official language of international organizations like the United Nations, the European Union, and the International Olympic Committee.
                            </p>
                            <p className="text-lg text-slate-700 leading-relaxed mb-4">
                                Learning French opens doors to:
                            </p>
                            <ul className="grid md:grid-cols-2 gap-3 text-slate-700 mb-4">
                                <li className="flex items-start gap-2">
                                    <span className="text-indigo-600 mt-1">•</span>
                                    <span>Career opportunities in international business, diplomacy, and tourism</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-indigo-600 mt-1">•</span>
                                    <span>Access to French literature, cinema, and art</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-indigo-600 mt-1">•</span>
                                    <span>Travel experiences in French-speaking countries</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-indigo-600 mt-1">•</span>
                                    <span>Academic and research opportunities</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Call to Action */}
                    <section className="text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-10 shadow-lg">
                        <FiAward className="text-5xl mx-auto mb-4" />
                        <h2 className="text-3xl font-bold mb-4">Start Your French Learning Journey Today</h2>
                        <p className="text-xl mb-6 text-indigo-100">
                            Join our community of French learners and make French a part of your world, one lesson at a time!
                        </p>
                        <p className="text-lg text-indigo-200 mb-6">
                            Free to start. Learn at your own pace. No credit card required.
                        </p>
                        <a
                            href="/tutorials-menu"
                            className="btn-secondary text-white px-8 py-3 rounded-xl font-semibold text-lg inline-block"
                        >
                            Explore Our Tutorials
                        </a>
                    </section>
                </div>
            </div>
        </>
    )
}

export default About;
