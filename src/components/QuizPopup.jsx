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
    // Add more questions as needed
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-40 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-8 w-4/5 max-w-md relative">
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-3xl font-medium text-gray-600 hover:text-red-500"
        >
          &times;
        </button>

        <div>
          {isQuizComplete ? (
            <div>
              <h2 className="text-2xl font-bold">Quiz Completed!</h2>
              <p className="mt-4">Your answers:</p>
              <ul>
                {questions.map((q, index) => (
                  <li key={index} className="mt-2">
                    {q.question} <span className="font-semibold">Your answer: {answers[index]}</span>
                  </li>
                ))}
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
              <h2 className="text-2xl font-bold">{questions[currentQuestion].question}</h2>
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