import { Link } from "react-router-dom";
import CompletionButton from "../../Components/CompletionButton.tsx";
import SEO from "../../Components/SEO.tsx";

function Etre1() {
    return (
        <>
            <SEO
                title="French Verb Être (To Be) Conjugation - Learn French Grammar | Magic Baguette"
                description="Master the French verb être (to be) conjugation with je, tu, il, elle. Learn pronunciation, usage, and examples. Essential French grammar for English speakers."
                keywords="French verb être, être conjugation, French to be verb, French grammar, être je tu il elle, learn French verbs, French conjugation"
                author="Magic Baguette Team"
                image="https://magicbaguette.com/images/etre-conjugation-cover.jpg"
            />
            <article className="w-full flex flex-col items-start pt-16 px-6 max-w-4xl mx-auto">
                <header className="mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">
                        How to Conjugate the Verb <em>Être</em> (To Be)
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        Master the most important verb in French! Learn how to conjugate <strong>être</strong> (to be) in the present tense with clear pronunciation guides and practical examples for English speakers.
                    </p>
                </header>

                <div className="prose prose-lg max-w-none">
                    <section className="mb-6">
                        <p className="text-lg text-slate-700 leading-relaxed mb-4">
                            This comprehensive guide explains how to conjugate the French verb <strong>être</strong> ("to be") in the present tense with the four basic subject pronouns: <strong>je</strong>, <strong>tu</strong>, <strong>il</strong>, and <strong>elle</strong>. The verb <em>être</em> is one of the most essential verbs in French and appears in countless sentences and expressions.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Each section includes pronunciation tips specifically for English speakers, meaning, usage examples, and common phrases. Understanding <em>être</em> is crucial for building your French foundation.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-3xl font-bold mb-4 text-slate-800">Je suis (I am)</h2>
                        <p className="text-lg text-slate-700 mb-3">
                            <strong>Meaning:</strong> "I am" — used to describe yourself or your state.
                        </p>
                        <p className="text-lg text-slate-700 mb-3">
                            <strong>Pronunciation tip for English speakers:</strong> Pronounced like "zhuh swee". The <em>je</em> has a soft "zh" sound (like the "s" in "measure"), and <em>suis</em> sounds like "swee" (rhymes with "we"). 
                        </p>
                        <p className="text-lg text-slate-700 mb-3">
                            <strong>Important note:</strong> In informal speech, <em>je</em> often becomes <em>j'</em> before vowels, so you might hear "<em>j'suis</em>" in casual conversation. However, in written French and formal speech, "<em>je suis</em>" is standard.
                        </p>
                        <p className="text-lg text-slate-700 mb-3"><strong>Examples:</strong></p>
                        <ul className="list-disc ml-6 mb-4 space-y-2 text-lg text-slate-700">
                            <li>"<strong>Je suis étudiant.</strong>" — "<em>I am a student.</em>"</li>
                            <li>"<strong>Je suis content.</strong>" — "<em>I am happy.</em>"</li>
                            <li>"<strong>Je suis français.</strong>" — "<em>I am French.</em>"</li>
                            <li>"<strong>Je suis à Paris.</strong>" — "<em>I am in Paris.</em>"</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-3xl font-bold mb-4 text-slate-800">Tu es (You are - Informal)</h2>
                        <p className="text-lg text-slate-700 mb-3">
                            <strong>Meaning:</strong> "You are" (singular, informal) — used when speaking to one person you know well.
                        </p>
                        <p className="text-lg text-slate-700 mb-3">
                            <strong>Pronunciation tip:</strong> Pronounced like "tü eh". The <em>tu</em> has a short, tight French "u" sound (not like English "too"). To make this sound, say "ee" while rounding your lips. The <em>s</em> in <em>es</em> is silent—only the "eh" sound is pronounced.
                        </p>
                        <p className="text-lg text-slate-700 mb-3"><strong>Examples:</strong></p>
                        <ul className="list-disc ml-6 mb-4 space-y-2 text-lg text-slate-700">
                            <li>"<strong>Tu es mon ami.</strong>" — "<em>You are my friend.</em>"</li>
                            <li>"<strong>Tu es professeur?</strong>" — "<em>Are you a teacher?</em>"</li>
                            <li>"<strong>Tu es intelligent.</strong>" — "<em>You are smart.</em>"</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-3xl font-bold mb-4 text-slate-800">Il est (He is / It is - Masculine)</h2>
                        <p className="text-lg text-slate-700 mb-3">
                            <strong>Meaning:</strong> "He is" or "It is" (masculine) — used to describe a man, boy, or masculine noun.
                        </p>
                        <p className="text-lg text-slate-700 mb-3">
                            <strong>Pronunciation tip:</strong> Pronounced like "eel eh" (very short "i" sound in "eel"). The final <em>t</em> in <em>est</em> is silent, but if the next word begins with a vowel, there is a <strong>liaison</strong> (the <em>t</em> links to the vowel sound).
                        </p>
                        <p className="text-lg text-slate-700 mb-3">
                            <strong>Liaison example:</strong> "<em>Il est anglais</em>" might sound like "eel eh-tang-lay" in connected speech, with the "t" linking to "anglais".
                        </p>
                        <p className="text-lg text-slate-700 mb-3"><strong>Examples:</strong></p>
                        <ul className="list-disc ml-6 mb-4 space-y-2 text-lg text-slate-700">
                            <li>"<strong>Il est français.</strong>" — "<em>He is French.</em>"</li>
                            <li>"<strong>Il est intelligent.</strong>" — "<em>He is smart.</em>"</li>
                            <li>"<strong>Il est professeur.</strong>" — "<em>He is a teacher.</em>"</li>
                            <li>"<strong>Il est tard.</strong>" — "<em>It is late.</em>" (time)</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-3xl font-bold mb-4 text-slate-800">Elle est (She is / It is - Feminine)</h2>
                        <p className="text-lg text-slate-700 mb-3">
                            <strong>Meaning:</strong> "She is" or "It is" (feminine) — used to describe a woman, girl, or feminine noun.
                        </p>
                        <p className="text-lg text-slate-700 mb-3">
                            <strong>Pronunciation tip:</strong> Pronounced like "el eh". The <em>e</em> in <em>elle</em> is short and open (not like the English "ay" sound). Like <em>il est</em>, the <em>t</em> in <em>est</em> is silent unless followed by a vowel sound in the next word.
                        </p>
                        <p className="text-lg text-slate-700 mb-3"><strong>Examples:</strong></p>
                        <ul className="list-disc ml-6 mb-4 space-y-2 text-lg text-slate-700">
                            <li>"<strong>Elle est anglaise.</strong>" — "<em>She is English.</em>"</li>
                            <li>"<strong>Elle est belle.</strong>" — "<em>She is beautiful.</em>"</li>
                            <li>"<strong>Elle est étudiante.</strong>" — "<em>She is a student.</em>"</li>
                            <li>"<strong>Elle est ouverte.</strong>" — "<em>It (the door) is open.</em>"</li>
                        </ul>
                    </section>

                    <section className="mb-8 bg-slate-50 rounded-xl p-6">
                        <h3 className="text-2xl font-bold mb-4 text-slate-800">Important Grammar Notes</h3>
                        <ul className="space-y-3 text-lg text-slate-700">
                            <li className="flex items-start gap-2">
                                <span className="text-indigo-600 font-bold mt-1">•</span>
                                <span><strong>Irregular verb:</strong> The verb <em>être</em> is irregular—it doesn't follow typical conjugation patterns, so it must be memorized. This is one of the most important verbs to learn.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-indigo-600 font-bold mt-1">•</span>
                                <span><strong>Same form for il/elle:</strong> Notice that <em>il est</em> and <em>elle est</em> share the same verb form (<em>est</em>), even though the pronoun changes. The gender is indicated by the pronoun, not the verb.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-indigo-600 font-bold mt-1">•</span>
                                <span><strong>Common uses:</strong> <em>Être</em> is used in many expressions and grammatical structures, including describing people, stating locations, expressing time, and forming compound tenses.</span>
                            </li>
                        </ul>
                    </section>

                    <section className="mb-8 bg-indigo-50 rounded-xl p-6">
                        <h3 className="text-2xl font-bold mb-4 text-slate-800">Practice Tips for English Speakers</h3>
                        <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                            To master <em>être</em>, practice making short sentences with different adjectives. Here are some examples to get you started:
                        </p>
                        <ul className="space-y-2 text-lg text-slate-700 mb-4">
                            <li>• "<strong>Je suis fatigué(e).</strong>" — "<em>I am tired.</em>" (Note: add "e" if you're female)</li>
                            <li>• "<strong>Tu es gentil(le).</strong>" — "<em>You are kind.</em>" (Note: add "le" if addressing a female)</li>
                            <li>• "<strong>Il est petit.</strong>" — "<em>He is small.</em>"</li>
                            <li>• "<strong>Elle est drôle.</strong>" — "<em>She is funny.</em>"</li>
                        </ul>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            <strong>Pronunciation practice:</strong> Repeat these sentences out loud, paying attention to the silent letters and liaisons. The verb <em>être</em> appears in almost every French conversation, so mastering its pronunciation is essential.
                        </p>
                    </section>

                    <section className="mb-8">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            <strong>Next steps:</strong> Once you've mastered these four forms, you can learn how to use <em>nous</em> (we), <em>vous</em> (you formal/plural), and <em>ils/elles</em> (they) with <em>être</em> to talk about groups of people in advanced lessons.
                        </p>
                    </section>
                </div>

                {/* Navigation */}
                <nav className="flex flex-row items-center gap-4 mt-8 pt-6 border-t border-slate-200" aria-label="Tutorial navigation">
                    <Link 
                        to="/tutorials/tuto-1-subject-pronouns"
                        className="text-indigo-600 hover:text-indigo-700 font-medium"
                    >
                        ⬅️ Previous: Subject Pronouns
                    </Link>
                    <Link 
                        to="/tutorials-menu"
                        className="text-indigo-600 hover:text-indigo-700 font-medium ml-auto"
                    >
                        Back to Tutorials ➡️
                    </Link>
                </nav>

                {/* Practice Exercise Link */}
                <section className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl border border-orange-100">
                    <h4 className="text-xl font-bold mb-3 text-slate-800">Ready to Practice?</h4>
                    <p className="text-slate-700 mb-4">
                        Test your knowledge of the verb <em>être</em> with our interactive exercise.
                    </p>
                    <Link 
                        className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                        to="/exercises/exercise-2-etre"
                    >
                        Start Exercise: Être (To Be)
                    </Link>
                </section>
            
                {/* Completion Button */}
                <div className="mt-8 pt-6 border-t border-slate-200">
                    <CompletionButton type="tutorial" id={2} />
                </div>
            </article>
        </>
    )
}

export default Etre1;
