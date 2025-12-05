import ExerciseLauncher from "../../Components/Exercise-Layout.tsx";

function Exercise2() {
  return (
    <ExerciseLauncher
      id={2}
      title="French Verb Être (To Be) Exercise"
      description="Practice conjugating the French verb être (to be) with je, tu, il, and elle. Master this essential French verb with interactive exercises and instant feedback."
      seoTitle="French Verb Être Exercise - Practice To Be Conjugation | Magic Baguette"
      seoDescription="Practice the French verb être (to be) conjugation with this interactive exercise. Master je suis, tu es, il est, elle est with fill-in-the-blank exercises."
      sentences={[
        {
          beforeBlank: "Elle",
          correctAnswer: "est",
          afterBlank: "jolie.",
          translation: "She is pretty.",
        },
        {
          beforeBlank: "Je",
          correctAnswer: "suis",
          afterBlank: "professeur.",
          translation: "I am a teacher.",
        },
        {
          beforeBlank: "Il",
          correctAnswer: "est",
          afterBlank: "fatigué.",
          translation: "He is tired.",
        },
        {
          beforeBlank: "Tu",
          correctAnswer: "es",
          afterBlank: "content aujourd'hui.",
          translation: "You are happy today.",
        },
        {
          beforeBlank: "Elle",
          correctAnswer: "est",
          afterBlank: "française.",
          translation: "She is French.",
        },
        {
          beforeBlank: "Je",
          correctAnswer: "suis",
          afterBlank: "un étudiant français.",
          translation: "I am a French student.",
        },
        {
          beforeBlank: "Tu",
          correctAnswer: "es",
          afterBlank: "mon ami.",
          translation: "You are my friend.",
        },
        {
          beforeBlank: "Il",
          correctAnswer: "est",
          afterBlank: "à la maison.",
          translation: "He is at home.",
        },
      ]
        // Mélange des phrases aléatoirement
        .sort(() => Math.random() - 0.5)}
    />
  );
}

export default Exercise2;
