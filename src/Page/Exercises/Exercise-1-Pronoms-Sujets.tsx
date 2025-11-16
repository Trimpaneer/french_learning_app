import ExerciseLauncher from "../../Components/Exercise-Layout.tsx";

function ExercisePronounsBasic() {
  return (
    <ExerciseLauncher
      id={1}
      title="French Subject Pronouns Exercise: Je, Tu, Il, Elle"
      description="Practice using French subject pronouns (je, tu, il, elle) in context. This interactive exercise helps you master the four basic French pronouns with instant feedback."
      seoTitle="French Subject Pronouns Exercise - Practice Je, Tu, Il, Elle | Magic Baguette"
      seoDescription="Practice French subject pronouns with this interactive fill-in-the-blank exercise. Master je, tu, il, elle with instant feedback and audio pronunciation."
      sentences={[
        {
          beforeBlank: "",
          correctAnswer: "je",
          afterBlank: "parle français.",
          translation: "I speak French.",
        },
        {
          beforeBlank: "",
          correctAnswer: "je",
          afterBlank: "mange une pomme.",
          translation: "I am eating an apple.",
        },
        {
          beforeBlank: "",
          correctAnswer: "tu",
          afterBlank: "aimes le café ?",
          translation: "Do you like coffee?",
        },
        {
          beforeBlank: "",
          correctAnswer: "tu",
          afterBlank: "habites à Londres.",
          translation: "You live in London.",
        },
        {
          beforeBlank: "",
          correctAnswer: "il",
          afterBlank: "regarde la télé.",
          translation: "He is watching TV.",
        },
        {
          beforeBlank: "",
          correctAnswer: "il",
          afterBlank: "travaille beaucoup.",
          translation: "He works a lot.",
        },
        {
          beforeBlank: "",
          correctAnswer: "elle",
          afterBlank: "chante très bien.",
          translation: "She sings very well.",
        },
        {
          beforeBlank: "",
          correctAnswer: "elle",
          afterBlank: "a une voiture rouge.",
          translation: "She has a red car.",
        },
      ].sort(() => Math.random() - 0.5)}
    />
  );
}

export default ExercisePronounsBasic;
