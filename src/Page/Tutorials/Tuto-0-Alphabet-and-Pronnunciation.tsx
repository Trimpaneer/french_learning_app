import { AiFillSound } from "react-icons/ai";
import { Link } from "react-router-dom";
import CompletionButton from "../../Components/CompletionButton.tsx";
import SEO from "../../Components/SEO";

function FrenchAlphabet() {
  // fonction pour lire un texte avec l'API du navigateur
  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "fr-FR"; // voix française
    window.speechSynthesis.speak(utterance);
  };

  return (
    <>
      <SEO
        title="French Alphabet and Pronunciation Guide for English Speakers | Magic Baguette"
        description="Learn the French alphabet pronunciation with audio examples. Master French sounds, accent marks, and pronunciation rules. Perfect guide for English speakers learning French."
        keywords="French alphabet, French pronunciation, French sounds, French accent marks, learn French pronunciation, French for English speakers, French phonetics"
        author="Magic Baguette Team"
        image="https://magicbaguette.com/assets/french-alphabet-guide.png"
      />
      <article className="w-full flex flex-col items-start pt-16 px-6 max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">
            The French Alphabet and Pronunciation Guide
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Master the French alphabet and pronunciation with this comprehensive guide designed specifically for English speakers. Learn how each letter sounds and understand the key differences from English.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              In this essential lesson, you'll learn how to pronounce the <strong>French alphabet</strong> and understand some of the most common <strong>sounds and accent marks</strong> used in the French language. This foundation is crucial for English speakers, since many letters look the same but sound very different in French.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Understanding French pronunciation from the start will help you speak more confidently and be better understood by native French speakers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-slate-800">The French Alphabet (L'Alphabet Français)</h2>
            <p className="text-lg text-slate-700 mb-4">
              The French alphabet uses the same 26 letters as English, but most letters have a distinct pronunciation. Here's how each letter sounds (click the audio buttons to hear the pronunciation):
            </p>
            <div className="bg-slate-50 rounded-xl p-6 mb-6">
              <ul className="grid md:grid-cols-2 gap-3 text-lg">
                {[
                  ["A", "ah", "Like 'a' in 'father'"],
                  ["B", "bay", "Like 'b' in 'boy'"],
                  ["C", "say", "Like 'c' in 'cat' (before a, o, u)"],
                  ["D", "day", "Like 'd' in 'dog'"],
                  ["E", "uh", "Like 'e' in 'the'"],
                  ["F", "eff", "Like 'f' in 'fish'"],
                  ["G", "zhay", "Like 'g' in 'genre'"],
                  ["H", "ahsh", "Silent in most words"],
                  ["I", "ee", "Like 'ee' in 'see'"],
                  ["J", "zhee", "Like 's' in 'measure'"],
                  ["K", "kah", "Like 'k' in 'key'"],
                  ["L", "ell", "Like 'l' in 'love'"],
                  ["M", "emm", "Like 'm' in 'mother'"],
                  ["N", "enn", "Like 'n' in 'no'"],
                  ["O", "oh", "Like 'o' in 'go'"],
                  ["P", "pay", "Like 'p' in 'pen'"],
                  ["Q", "koo", "Always followed by 'u'"],
                  ["R", "air", "Guttural 'r' sound (unique to French)"],
                  ["S", "ess", "Like 's' in 'sun'"],
                  ["T", "tay", "Like 't' in 'top'"],
                  ["U", "u", "Like 'ew' in 'few' (unique French sound)"],
                  ["V", "vay", "Like 'v' in 'very'"],
                  ["W", "doo-bluh-vay", "Rare in French"],
                  ["X", "eeks", "Like 'x' in 'box'"],
                  ["Y", "ee-grek", "Like 'y' in 'yes'"],
                  ["Z", "zed", "Like 'z' in 'zoo'"],
                ].map(([letter, pronunciation, note]) => (
                  <li key={letter} className="flex items-start gap-3 p-2 hover:bg-white rounded">
                    <span className="font-bold text-indigo-600 w-8">{letter}</span>
                    <div className="flex-1">
                      <span className="text-slate-700">{pronunciation}</span>
                      {note && <span className="text-sm text-slate-500 block mt-1">{note}</span>}
                    </div>
                    <button
                      onClick={() => speak(letter)}
                      className="text-indigo-600 hover:text-indigo-700"
                      aria-label={`Pronounce ${letter}`}
                    >
                      <AiFillSound />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-slate-800">Key Pronunciation Differences for English Speakers</h2>
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <h3 className="text-xl font-bold mb-3 text-slate-800">The French "R"</h3>
                <p className="text-slate-700 mb-3">
                  The French "r" is guttural (pronounced in the back of the throat), unlike the English "r". Practice by saying "ah" while trying to make a soft gargling sound. This is one of the most distinctive French sounds.
                </p>
                <p className="text-slate-700">
                  <strong>Examples:</strong> <button onClick={() => speak("rouge")} className="text-blue-600 hover:text-blue-700 underline">rouge</button> (red), <button onClick={() => speak("merci")} className="text-blue-600 hover:text-blue-700 underline">merci</button> (thank you)
                </p>
              </div>

              <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
                <h3 className="text-xl font-bold mb-3 text-slate-800">The French "U"</h3>
                <p className="text-slate-700 mb-3">
                  The French "u" doesn't exist in English. To make this sound, say "ee" while rounding your lips as if saying "oo". This creates a unique sound that's essential for proper French pronunciation.
                </p>
                <p className="text-slate-700">
                  <strong>Examples:</strong> <button onClick={() => speak("tu")} className="text-purple-600 hover:text-purple-700 underline">tu</button> (you), <button onClick={() => speak("lune")} className="text-purple-600 hover:text-purple-700 underline">lune</button> (moon)
                </p>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                <h3 className="text-xl font-bold mb-3 text-slate-800">Silent Letters</h3>
                <p className="text-slate-700 mb-3">
                  French has many silent letters, especially at the end of words. The final "e", "s", "t", "d" are often silent. This is very different from English and takes practice to master.
                </p>
                <p className="text-slate-700">
                  <strong>Examples:</strong> <button onClick={() => speak("paris")} className="text-green-600 hover:text-green-700 underline">Paris</button> (the 's' is silent), <button onClick={() => speak("chat")} className="text-green-600 hover:text-green-700 underline">chat</button> (the 't' is silent)
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-slate-800">French Accent Marks (Les Accents)</h2>
            <p className="text-lg text-slate-700 mb-4">
              French uses five accent marks that change pronunciation and sometimes meaning. Understanding these is crucial for proper French pronunciation and spelling.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-5 border border-slate-200">
                <h3 className="text-lg font-bold mb-2 text-slate-800">é (accent aigu)</h3>
                <p className="text-slate-700 mb-2">Pronounced like "ay" in "say". Makes the 'e' sound closed and sharp.</p>
                <p className="text-slate-600 text-sm"><strong>Example:</strong> <button onClick={() => speak("café")} className="text-indigo-600 hover:text-indigo-700 underline">café</button> (coffee)</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-slate-200">
                <h3 className="text-lg font-bold mb-2 text-slate-800">è (accent grave)</h3>
                <p className="text-slate-700 mb-2">Pronounced like "eh" in "bed". Makes the 'e' sound open.</p>
                <p className="text-slate-600 text-sm"><strong>Example:</strong> <button onClick={() => speak("père")} className="text-indigo-600 hover:text-indigo-700 underline">père</button> (father)</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-slate-200">
                <h3 className="text-lg font-bold mb-2 text-slate-800">ê (accent circonflexe)</h3>
                <p className="text-slate-700 mb-2">Usually indicates a longer or different vowel sound, or replaces a historical 's'.</p>
                <p className="text-slate-600 text-sm"><strong>Example:</strong> <button onClick={() => speak("forêt")} className="text-indigo-600 hover:text-indigo-700 underline">forêt</button> (forest)</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-slate-200">
                <h3 className="text-lg font-bold mb-2 text-slate-800">ç (cédille)</h3>
                <p className="text-slate-700 mb-2">Makes 'c' sound like 's' before a, o, u (normally 'c' would sound like 'k').</p>
                <p className="text-slate-600 text-sm"><strong>Example:</strong> <button onClick={() => speak("français")} className="text-indigo-600 hover:text-indigo-700 underline">français</button> (French)</p>
              </div>
            </div>
          </section>

          <section className="mb-8 bg-indigo-50 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4 text-slate-800">Practice Tips for English Speakers</h3>
            <ul className="space-y-3 text-lg text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 font-bold mt-1">•</span>
                <span><strong>Listen and repeat:</strong> Use the audio buttons throughout this lesson to hear native pronunciation and practice repeating.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 font-bold mt-1">•</span>
                <span><strong>Focus on difficult sounds:</strong> Pay special attention to the French "r" and "u" sounds, which don't exist in English.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 font-bold mt-1">•</span>
                <span><strong>Practice common words:</strong> Start with simple words like <button onClick={() => speak("bonjour")} className="text-indigo-600 hover:text-indigo-700 underline">bonjour</button> (hello), <button onClick={() => speak("merci")} className="text-indigo-600 hover:text-indigo-700 underline">merci</button> (thank you), <button onClick={() => speak("au revoir")} className="text-indigo-600 hover:text-indigo-700 underline">au revoir</button> (goodbye).</span>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-slate-800">Common French Words to Practice</h2>
            <p className="text-lg text-slate-700 mb-4">
              Try pronouncing these common French words. Click the audio buttons to hear the correct pronunciation:
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => speak("Bonjour")}
                className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition-colors"
              >
                Bonjour (Hello)
              </button>
              <button
                onClick={() => speak("Merci")}
                className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition-colors"
              >
                Merci (Thank you)
              </button>
              <button
                onClick={() => speak("S'il vous plaît")}
                className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition-colors"
              >
                S'il vous plaît (Please)
              </button>
              <button
                onClick={() => speak("Au revoir")}
                className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition-colors"
              >
                Au revoir (Goodbye)
              </button>
              <button
                onClick={() => speak("Oui")}
                className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition-colors"
              >
                Oui (Yes)
              </button>
              <button
                onClick={() => speak("Non")}
                className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition-colors"
              >
                Non (No)
              </button>
            </div>
          </section>
        </div>

        {/* Navigation */}
        <nav className="flex flex-row items-center gap-4 mt-8 pt-6 border-t border-slate-200" aria-label="Tutorial navigation">
          <Link 
            to="/tutorials-menu"
            className="text-indigo-600 hover:text-indigo-700 font-medium"
          >
            ⬅️ Back to Tutorials
          </Link>
          <Link 
            to="/tutorials/tuto-1-subject-pronouns"
            className="text-indigo-600 hover:text-indigo-700 font-medium ml-auto"
          >
            Next: Subject Pronouns ➡️
          </Link>
        </nav>
       
        {/* Completion Button */}
        <div className="mt-8 pt-6 border-t border-slate-200">
          <CompletionButton type="tutorial" id={0} />
        </div>
      </article>
    </>
  );
}

export default FrenchAlphabet;
