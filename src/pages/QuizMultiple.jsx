import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import Button from '../component/Button';

const QuizMultiple = () => {
    const questions = [
        {
            question: "Apa yang dimaksud dengan hukum?",
            options: ["Peraturan masyarakat", "Sistem aturan", "Kebiasaan", "Keputusan pemerintah"]
        },
        {
            question: "Apa sumber hukum yang berasal dari keputusan hakim sebelumnya?",
            options: ["Undang-Undang", "Traktat", "Yurisprudensi", "Kebiasaan"]
        }
    ];

    const optionLabels = ["A", "B", "C", "D"];
    const [selectedAnswers, setSelectedAnswers] = useState({});

    const handleSelect = (questionIndex, optionIndex) => {
        setSelectedAnswers({ ...selectedAnswers, [questionIndex]: optionIndex });
    };

    return (
        <div className="mx-40 my-10 p-8 bg-white rounded-lg border border-gray-300 relative">
            <button className="fixed top-1/2 right-10 transform -translate-y-1/2 bg-red-500 text-white p-4 rounded-full shadow-lg hover:bg-red-600 transition duration-300">
                <FontAwesomeIcon icon={faList} size="lg" />
            </button>

            <div className='mb-10'>
                <h1 className="text-3xl font-bold text-red-600 mb-4">Quiz</h1>
                <hr className="h-1 bg-red-500 border-none mb-4" />
                <p className='text-gray-400 text-xs'>
                    “Setiap soal dalam quiz ini merupakan pilihan ganda, dan Anda harus memilih jawaban yang paling tepat. Pastikan Anda menjawab sebelum waktu habis.”
                </p>
            </div>

            <div className='mb-20'>
                <form>
                    {questions.map((q, index) => (
                        <div key={index} className="mb-6 flex items-start gap-6">
                            <div className="text-xl flex items-center justify-center text-4xl font-bold text-red-500">
                                {index + 1}.
                            </div>

                            <div>
                                <p className="font-semibold">{q.question}</p>
                                <ul className="mt-2 space-y-2">
                                    {q.options.map((option, optionIndex) => (
                                        <li key={optionIndex}>
                                            <label className="flex items-center space-x-3 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name={`question-${index}`}
                                                    checked={selectedAnswers[index] === optionIndex}
                                                    onChange={() => handleSelect(index, optionIndex)}
                                                    className="hidden"
                                                />
                                                <div className={`w-10 h-10 flex items-center justify-center border-2 rounded-full text-red-500 font-bold
                                                    ${selectedAnswers[index] === optionIndex ? 'bg-red-500 text-white border-red-500' : 'bg-white border-gray-400'} transition`}>
                                                    {optionLabels[optionIndex]}
                                                </div>
                                                <span>{option}</span>
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </form>
            </div>

            <div className='flex justify-center items-center gap-10'>
                <hr className='w-50 h-1 bg-red-500 border-none rounded-lg' />
                <Button>Selesai</Button>
                <hr className='w-50 h-1 bg-red-500 border-none rounded-lg' />
            </div>
        </div>
    );
};

export default QuizMultiple;
