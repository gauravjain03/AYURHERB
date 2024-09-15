import React, { useState } from 'react';

const QuizPopup = ({ isOpen, onClose }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isQuizComplete, setIsQuizComplete] = useState(false);

  const questions = [
    {
      question: 'Which plant is known as Holy Basil?',
      options: ['Tulsi', 'Neem', 'Aloe Vera', 'Lavender'],
      answer: 'Tulsi',
    },
    {
      question: 'Which plant is used for its antibacterial properties?',
      options: ['Neem', 'Cactus', 'Hibiscus', 'Rosemary'],
      answer: 'Neem',
    },
    {
      question: 'Which plant is known for its soothing properties and is often used in teas?',
      options: ['Chamomile', 'Mint', 'Ginger', 'Echinacea'],
      answer: 'Chamomile',
    },
    {
      question: 'Which plant is commonly used to treat headaches and muscle pain?',
      options: ['Peppermint', 'Lavender', 'Ginseng', 'Dandelion'],
      answer: 'Peppermint',
    },
    {
      question: 'Which plant is known for its high vitamin C content and is used to boost the immune system?',
      options: ['Rosehip', 'Elderberry', 'Ginger', 'Garlic'],
      answer: 'Rosehip',
    },
    {
      question: 'Which plant has leaves used in cooking that provide a distinctive flavor and is known as “Holy Basil” in some cultures?',
      options: ['Thyme', 'Basil', 'Oregano', 'Coriander'],
      answer: 'Basil',
    },
    {
      question: 'Which plant’s roots are used in traditional medicine for their anti-inflammatory properties?',
      options: ['Turmeric', 'Ginger', 'Garlic', 'Dandelion'],
      answer: 'Turmeric',
    },
    {
      question: 'Which plant is used in aromatherapy for relaxation and stress relief?',
      options: ['Lavender', 'Jasmine', 'Sandalwood', 'Patchouli'],
      answer: 'Lavender',
    },
    {
      question: 'Which plant’s leaves are known for their ability to reduce high blood sugar levels?',
      options: ['Moringa', 'Ginseng', 'Neem', 'Aloe Vera'],
      answer: 'Moringa',
    },
    {
      question: 'Which plant is known for its ability to purify the air and is commonly kept indoors?',
      options: ['Spider Plant', 'Aloe Vera', 'Snake Plant', 'Peace Lily'],
      answer: 'Snake Plant',
    },
  ];

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    if (currentQuestion === questions.length - 1) {
      setIsQuizComplete(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleClose = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setIsQuizComplete(false);
    onClose();
  };

  const calculateScore = () => {
    return answers.reduce((score, answer, index) => {
      return answer === questions[index].answer ? score + 1 : score;
    }, 0);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-40 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg mx-4 sm:mx-0 relative max-h-[80vh] overflow-auto">
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-3xl font-medium text-gray-600 hover:text-red-500"
        >
          &times;
        </button>

        <div>
          {isQuizComplete ? (
            <div>
              <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
              <p className="mb-4">Your score: {calculateScore()} / {questions.length}</p>
              <p className="mb-4">Your answers:</p>
              <ul className="list-disc pl-5">
                {questions.map((q, index) => {
                  const isCorrect = answers[index] === q.answer;
                  return (
                    <li key={index} className="mt-2">
                      <strong>{q.question}</strong> <br />
                      <span className={`font-semibold ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
                        Your answer: {answers[index]}
                      </span> <br />
                      <span className="text-gray-600">Correct answer: {q.answer}</span>
                    </li>
                  );
                })}
              </ul>
              <button
                onClick={handleClose}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Close
              </button>
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-bold mb-4">{questions[currentQuestion].question}</h2>
              <div className="mt-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option)}
                    className="block w-full px-4 py-2 mb-2 text-left bg-gray-100 border border-gray-300 rounded hover:bg-gray-200"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizPopup;
