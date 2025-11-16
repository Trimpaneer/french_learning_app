import React, { useState } from "react";
import { AiFillSound } from "react-icons/ai";
import CompletionButton from "./CompletionButton.tsx";
import SEO from "./SEO.tsx";

type Sentence = {
  beforeBlank: string;
  afterBlank: string;
  correctAnswer: string;
  translation?: string;
};

type ExerciseLauncherProps = {
  id: number;
  title: string;
  sentences: Sentence[];
  description?: string;
  seoTitle?: string;
  seoDescription?: string;
};

const ExerciseLauncher: React.FC<ExerciseLauncherProps> = ({
  id,
  title,
  sentences,
  description,
  seoTitle,
  seoDescription,
}) => {
  const [userAnswers, setUserAnswers] = useState<string[]>(
    Array(sentences.length).fill("")
  );
  const [isValidated, setIsValidated] = useState(false);

  // Calculate score
  const score = isValidated
    ? userAnswers.filter(
        (answer, index) =>
          answer.trim().toLowerCase() ===
          sentences[index].correctAnswer.trim().toLowerCase()
      ).length
    : 0;
  const totalQuestions = sentences.length;
  const percentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;

  // 🗣️ Lecture de la phrase (sans la traduction)
  const speakSentence = (sentence: Sentence) => {
    const text = `${sentence.beforeBlank} ${sentence.correctAnswer} ${sentence.afterBlank}`.trim();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "fr-FR";
    utterance.rate = 0.95;
    utterance.pitch = 1;
    speechSynthesis.speak(utterance);
  };

  const handleChange = (index: number, value: string) => {
    if (value.length <= sentences[index].correctAnswer.length) {
      const newAnswers = [...userAnswers];
      newAnswers[index] = value;
      setUserAnswers(newAnswers);
    }
  };

  const handleValidate = () => {
    setIsValidated(true);
  };

  const handleReset = () => {
    setUserAnswers(Array(sentences.length).fill(""));
    setIsValidated(false);
  };

  return (
    <>
      <SEO
        title={seoTitle || `${title} - French Practice Exercise | Magic Baguette`}
        description={seoDescription || `Practice French with this interactive ${title.toLowerCase()} exercise. Fill in the blanks, get instant feedback, and improve your French skills.`}
        keywords={`French exercise, ${title.toLowerCase()}, French practice, French fill in the blank, learn French, French grammar practice`}
        author="Magic Baguette"
        image="/images/seo-exercise.png"
      />
      <div className="w-full min-h-screen py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <header className="mb-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">
              {title}
            </h1>
            {description && (
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                {description}
              </p>
            )}
            <p className="text-lg text-slate-600 mt-4">
              Fill in the blank with the correct French word. Use the audio button to hear each sentence pronounced.
            </p>
          </header>

          <div
            id={`exercise-${id}`}
            className="bg-white shadow-lg rounded-2xl p-8 border border-slate-100"
          >
            {!isValidated && (
              <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-blue-800">
                  <strong>Instructions:</strong> Type the correct word in each blank. Click the speaker icon to hear the sentence pronounced. When you're done, click "Validate Answers" to check your work.
                </p>
              </div>
            )}

            {isValidated && (
              <div className={`mb-6 p-6 rounded-xl border-2 ${
                percentage >= 80 
                  ? 'bg-green-50 border-green-300' 
                  : percentage >= 60 
                  ? 'bg-yellow-50 border-yellow-300' 
                  : 'bg-red-50 border-red-300'
              }`}>
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2 text-slate-800">Your Results</h3>
                  <p className="text-3xl font-bold mb-2">
                    <span className={percentage >= 80 ? 'text-green-600' : percentage >= 60 ? 'text-yellow-600' : 'text-red-600'}>
                      {score} / {totalQuestions}
                    </span>
                  </p>
                  <p className="text-xl text-slate-700 mb-4">
                    {percentage}% Correct
                  </p>
                  {percentage === 100 && (
                    <p className="text-green-700 font-semibold">🎉 Excellent! Perfect score!</p>
                  )}
                  {percentage >= 80 && percentage < 100 && (
                    <p className="text-green-700 font-semibold">Great job! You're doing well!</p>
                  )}
                  {percentage >= 60 && percentage < 80 && (
                    <p className="text-yellow-700 font-semibold">Good effort! Review the mistakes and try again.</p>
                  )}
                  {percentage < 60 && (
                    <p className="text-red-700 font-semibold">Keep practicing! Review the tutorial and try again.</p>
                  )}
                </div>
              </div>
            )}

            <div className="space-y-6">
              {sentences.map((sentence, index) => {
                const isCorrect =
                  userAnswers[index].trim().toLowerCase() ===
                  sentence.correctAnswer.trim().toLowerCase();

                const inputWidth = `${Math.max(sentence.correctAnswer.length + 2, 8)}ch`;

                return (
                  <div key={`${id}-sent-${index}`} className="p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-slate-500 font-semibold min-w-[2rem]">
                        {index + 1}.
                      </span>
                      <p className="text-lg flex-1">
                        {sentence.beforeBlank}{" "}
                        <input
                          type="text"
                          value={userAnswers[index]}
                          onChange={(e) => handleChange(index, e.target.value)}
                          disabled={isValidated}
                          maxLength={sentence.correctAnswer.length}
                          style={{ width: inputWidth }}
                          className={`border-b-2 focus:outline-none px-2 py-1 text-center font-semibold transition-all
                            ${
                              isValidated
                                ? isCorrect
                                  ? "border-green-500 bg-green-100 text-green-800"
                                  : "border-red-500 bg-red-100 text-red-800"
                                : "border-indigo-400 focus:border-indigo-600"
                            }`}
                          aria-label={`Answer for sentence ${index + 1}`}
                        />{" "}
                        {sentence.afterBlank}
                      </p>

                      <button
                        onClick={() => speakSentence(sentence)}
                        className="text-indigo-600 hover:text-indigo-700 text-xl p-2 hover:bg-indigo-50 rounded-lg transition-colors"
                        title="Listen to the sentence"
                        aria-label="Play audio for this sentence"
                      >
                        <AiFillSound />
                      </button>
                    </div>

                    {/* Translation */}
                    {sentence.translation && (
                      <p className="text-slate-600 italic text-sm ml-12 mb-2">
                        Translation: {sentence.translation}
                      </p>
                    )}

                    {/* Feedback */}
                    {isValidated && (
                      <div className={`ml-12 mt-2 p-2 rounded ${
                        isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {isCorrect ? (
                          <p className="font-semibold">✅ Correct! Well done.</p>
                        ) : (
                          <p className="font-semibold">
                            ❌ Incorrect. The correct answer is: <strong>"{sentence.correctAnswer}"</strong>
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              {!isValidated && (
                <button
                  onClick={handleValidate}
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg"
                >
                  Validate Answers
                </button>
              )}

              {isValidated && (
                <>
                  <button
                    onClick={handleReset}
                    className="bg-slate-200 text-slate-700 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-slate-300 transition-colors"
                  >
                    Try Again
                  </button>
                  <CompletionButton type="exercise" id={id} />
                </>
              )}
            </div>
          </div>

          {/* Tips Section */}
          {isValidated && percentage < 100 && (
            <div className="mt-8 p-6 bg-indigo-50 rounded-xl border border-indigo-100">
              <h3 className="text-xl font-bold mb-3 text-slate-800">💡 Study Tips</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Review the related tutorial to reinforce the concepts</li>
                <li>• Practice the incorrect answers out loud</li>
                <li>• Try the exercise again after reviewing</li>
                <li>• Use the audio feature to improve your pronunciation</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ExerciseLauncher;
