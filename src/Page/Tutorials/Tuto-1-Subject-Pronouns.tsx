import { Link } from "react-router-dom";
import CompletionButton from "../../Components/CompletionButton.tsx";
import SEO from "../../Components/SEO";

function SubjectPronouns() {
    return (
        <>
            <SEO
                title="French Subject Pronouns: Je, Tu, Il, Elle - Learn French Grammar | Magic Baguette"
                description="Master French subject pronouns (je, tu, il, elle) with clear explanations, pronunciation guides, and examples. Perfect for English speakers learning French grammar basics."
                keywords="French subject pronouns, je tu il elle, French grammar, French pronouns, learn French pronouns, French for beginners, French grammar tutorial"
                author="Magic Baguette"
                image="https://magicbaguette.com/images/tutorials/subject-pronouns-cover.jpg"
            />
            <article className="w-full flex flex-col items-start pt-16 px-6 max-w-4xl mx-auto">
                <header className="mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">
                        French Subject Pronouns: Je, Tu, Il, Elle
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        Master the four basic French subject pronouns with pronunciation tips, usage rules, and practical examples designed for English speakers.
                    </p>
                </header>

                <div className="prose prose-lg max-w-none">
                    <section className="mb-8">
                        <p className="text-lg text-slate-700 leading-relaxed mb-4">
                            This comprehensive guide explains four essential French subject pronouns in detail: <strong>je</strong> (I), <strong>tu</strong> (you), <strong>il</strong> (he/it), and <strong>elle</strong> (she/it). Each section includes meaning, pronunciation tips for English speakers, usage rules, and example sentences with English translations.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-3xl font-bold mb-4 text-slate-800">Je (I)</h2>
                        <p className="text-lg text-slate-700 mb-3">
                            <strong>Meaning:</strong> "I" — used when speaking about yourself.
                        </p>
                        <p className="text-lg text-slate-700 mb-3">
                            <strong>Pronunciation tip for English speakers:</strong> Pronounced like "zhuh" (the initial sound is similar to the "s" in "measure" or the "g" in "beige"). The "j" in French has a soft, buzzing sound that doesn't exist in English. Practice saying "measure" and notice the "zh" sound—that's how you pronounce <em>je</em>.
                        </p>
                        <p className="text-lg text-slate-700 mb-3">
                            <strong>Important rule:</strong> When <em>je</em> comes before a verb that begins with a vowel (a, e, i, o, u) or a silent "h", it contracts to <em>j'</em> (with an apostrophe). This makes pronunciation smoother and is essential in spoken French.
                        </p>
                        <p className="text-lg text-slate-700 mb-3"><strong>Examples:</strong></p>
                        <ul className="list-disc ml-6 mb-4 space-y-2 text-lg text-slate-700">
                            <li>"<strong>Je suis étudiant.</strong>" — "<em>I am a student.</em>"</li>
                            <li>"<strong>J'aime le chocolat.</strong>" — "<em>I like chocolate.</em>" (Note: <em>j'</em> is used because <em>aime</em> starts with a vowel)</li>
                            <li>"<strong>Je parle français.</strong>" — "<em>I speak French.</em>"</li>
                            <li>"<strong>J'habite à Paris.</strong>" — "<em>I live in Paris.</em>"</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-3xl font-bold mb-4 text-slate-800">Tu (You - Informal)</h2>
                        <p className="text-lg text-slate-700 mb-3">
                            <strong>Meaning:</strong> "You" (singular, informal) — used when speaking to one person you know well.
                        </p>
                        <p className="text-lg text-slate-700 mb-3">
                            <strong>Pronunciation tip:</strong> Pronounced like "too" but shorter and tighter. The French "u" sound is different from English—try saying "ee" while rounding your lips as if saying "oo". This creates the unique French "u" sound.
                        </p>
                        <p className="text-lg text-slate-700 mb-3">
                            <strong>When to use <em>tu</em>:</strong> Use <em>tu</em> when speaking to friends, family members, children, or people you address informally. In France, <em>tu</em> is common among peers and in casual settings.
                        </p>
                        <p className="text-lg text-slate-700 mb-3">
                            <strong>When NOT to use <em>tu</em>:</strong> Avoid <em>tu</em> in formal situations, with strangers, or when speaking to more than one person (use <em>vous</em> instead).
                        </p>
                        <p className="text-lg text-slate-700 mb-3"><strong>Examples:</strong></p>
                        <ul className="list-disc ml-6 mb-4 space-y-2 text-lg text-slate-700">
                            <li>"<strong>Tu es professeur.</strong>" — "<em>You are a teacher.</em>"</li>
                            <li>"<strong>Tu parles anglais?</strong>" — "<em>Do you speak English?</em>"</li>
                            <li>"<strong>Tu aimes le café?</strong>" — "<em>Do you like coffee?</em>"</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-3xl font-bold mb-4 text-slate-800">Il (He/It - Masculine)</h2>
                        <p className="text-lg text-slate-700 mb-3">
                            <strong>Meaning:</strong> "He" or "it" (masculine) — used to refer to a man, boy, or any masculine noun.
                        </p>
                        <p className="text-lg text-slate-700 mb-3">
                            <strong>Pronunciation tip:</strong> Pronounced like "eel" but with a shorter "i" sound. The final "l" is pronounced, unlike in English where it might be silent.
                        </p>
                        <p className="text-lg text-slate-700 mb-3">
                            <strong>Usage:</strong> Use <em>il</em> to talk about a man, a boy, or any masculine noun. For example, <em>le livre</em> (the book) is masculine, so you can refer to it as <em>il</em> in speech: "<em>Il est sur la table</em>" (It is on the table).
                        </p>
                        <p className="text-lg text-slate-700 mb-3">
                            <strong>Liaison:</strong> In spoken French, the final "l" in <em>il</em> can link to a following vowel sound (this is called "liaison"). For example, "<em>il est</em>" might sound like "ee-lay" in fast speech.
                        </p>
                        <p className="text-lg text-slate-700 mb-3"><strong>Examples:</strong></p>
                        <ul className="list-disc ml-6 mb-4 space-y-2 text-lg text-slate-700">
                            <li>"<strong>Il est français.</strong>" — "<em>He is French.</em>"</li>
                            <li>"<strong>Il pleut.</strong>" — "<em>It is raining.</em>" (weather uses <em>il</em>)</li>
                            <li>"<strong>Il travaille beaucoup.</strong>" — "<em>He works a lot.</em>"</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-3xl font-bold mb-4 text-slate-800">Elle (She/It - Feminine)</h2>
                        <p className="text-lg text-slate-700 mb-3">
                            <strong>Meaning:</strong> "She" or "it" (feminine) — used to refer to a woman, girl, or any feminine noun.
                        </p>
                        <p className="text-lg text-slate-700 mb-3">
                            <strong>Pronunciation tip:</strong> Pronounced like "el" (a short "e" sound followed by "l"). The "e" is open and short, not like the English "ay" sound.
                        </p>
                        <p className="text-lg text-slate-700 mb-3">
                            <strong>Usage:</strong> Use <em>elle</em> to talk about a woman, a girl, or any feminine noun. For example, <em>la maison</em> (the house) is feminine, so you can say "<em>Elle est grande</em>" (It is big).
                        </p>
                        <p className="text-lg text-slate-700 mb-3"><strong>Examples:</strong></p>
                        <ul className="list-disc ml-6 mb-4 space-y-2 text-lg text-slate-700">
                            <li>"<strong>Elle est anglaise.</strong>" — "<em>She is English.</em>"</li>
                            <li>"<strong>Elle est jolie.</strong>" — "<em>She is pretty.</em>" or "<em>It (the table) is pretty.</em>"</li>
                            <li>"<strong>Elle parle français.</strong>" — "<em>She speaks French.</em>"</li>
                        </ul>
                    </section>

                    <section className="mb-8 bg-slate-50 rounded-xl p-6">
                        <h3 className="text-2xl font-bold mb-4 text-slate-800">Quick Grammar Notes</h3>
                        <ul className="space-y-3 text-lg text-slate-700">
                            <li className="flex items-start gap-2">
                                <span className="text-indigo-600 font-bold mt-1">•</span>
                                <span><strong>Position:</strong> Subject pronouns come before the verb in French, just like in English.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-indigo-600 font-bold mt-1">•</span>
                                <span><strong>Verb agreement:</strong> Verbs must agree with the subject pronoun. For example, the verb <em>être</em> (to be) is conjugated: "je suis", "tu es", "il/elle est".</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-indigo-600 font-bold mt-1">•</span>
                                <span><strong>Avoiding repetition:</strong> Pronouns help avoid repeating nouns. Instead of saying "Marie" multiple times, use <em>elle</em>.</span>
                            </li>
                        </ul>
                    </section>

                    <section className="mb-8 bg-indigo-50 rounded-xl p-6">
                        <h3 className="text-2xl font-bold mb-4 text-slate-800">Practice Tips for English Speakers</h3>
                        <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                            To master these pronouns, practice making short sentences about yourself and others using common verbs in the present tense:
                        </p>
                        <ul className="space-y-2 text-lg text-slate-700 mb-4">
                            <li>• <strong>être</strong> (to be): "Je suis content" (I am happy)</li>
                            <li>• <strong>avoir</strong> (to have): "Tu as un chat" (You have a cat)</li>
                            <li>• <strong>parler</strong> (to speak): "Il parle anglais" (He speaks English)</li>
                            <li>• <strong>aimer</strong> (to like): "Elle aime le café" (She likes coffee)</li>
                        </ul>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            <strong>Pronunciation practice:</strong> Repeat sentences out loud, paying special attention to the contraction <em>j'</em> before vowels. This is crucial for natural-sounding French.
                        </p>
                    </section>

                    <section className="mb-8">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            <strong>Next steps:</strong> Once you've mastered these four pronouns, you can learn the plural forms (<em>nous</em>, <em>vous</em>, <em>ils</em>, <em>elles</em>) and the formal <em>vous</em> in advanced lessons.
                        </p>
                    </section>
                </div>

                {/* Navigation */}
                <nav className="flex flex-row items-center gap-4 mt-8 pt-6 border-t border-slate-200" aria-label="Tutorial navigation">
                    <Link 
                        to="/tutorials/tuto-0-alphabet-and-pronunciation"
                        className="text-indigo-600 hover:text-indigo-700 font-medium"
                    >
                        ⬅️ Previous: Alphabet and Pronunciation
                    </Link>
                    <Link 
                        to="/tutorials/tuto-2-etre"
                        className="text-indigo-600 hover:text-indigo-700 font-medium ml-auto"
                    >
                        Next: Verb "to be" ➡️
                    </Link>
                </nav>

                {/* Practice Exercise Link */}
                <section className="mt-8 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-100">
                    <h4 className="text-xl font-bold mb-3 text-slate-800">Ready to Practice?</h4>
                    <p className="text-slate-700 mb-4">
                        Test your understanding of French subject pronouns with our interactive exercise.
                    </p>
                    <Link 
                        className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                        to="/exercises/exercise-1-pronoms-sujets"
                    >
                        Start Exercise: Subject Pronouns
                    </Link>
                </section>
                
                {/* Completion Button */}
                <div className="mt-8 pt-6 border-t border-slate-200">
                    <CompletionButton type="tutorial" id={1} />
                </div>
            </article>
        </>
    )
}

export default SubjectPronouns;
