"use client";

import * as React from "react";
import { trees } from "@/data/tree";
import {
  ArrowLeftIcon,
  BookmarkFilledIcon,
  BookmarkIcon,
  Cross1Icon,
  Pencil1Icon,
  SymbolIcon,
} from "@radix-ui/react-icons";
import { Link } from "next-view-transitions";
import JSConfetti from "js-confetti";
import { motion } from "framer-motion";

import { Answer, GivenAnswer, Question } from "@/types";
import Modal from "@/components/Modal";

export default function Tree({ params }: { params: { slug: string } }) {
  const tree = trees.find((tree) => tree.slug === params.slug);

  const [isOpen, setIsOpen] = React.useState(false);
  const [userAnswers, setUserAnswers] = React.useState<GivenAnswer[]>([]);
  const [questions, setQuestions] = React.useState<Question[]>([
    tree?.question!,
  ]);
  const [result, setResult] = React.useState<Answer["result"]>();

  const handleAnswer = (answer: Answer, question: Question) => {
    setUserAnswers((prev) => [
      ...prev,
      { answerId: answer.id, questionId: question.id },
    ]);

    // update result if user reaches the result
    if (answer.result) {
      setResult(answer.result);
      setIsOpen(true);
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti({
        confettiColors: ["#00ffaa", "#437162", "#90e1c7", "#ebc558", "#25ebd9"],
      });
      return;
    }

    // update questions array if selected answer has question and reset result
    if (answer.question) {
      setQuestions((prev) => [...prev, answer.question!]);
      setTimeout(() => {
        window.scrollTo({
          left: 0,
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
      }, 300);
      return;
    }
  };

  const handleReset = () => {
    setUserAnswers([]);
    setQuestions([tree?.question!]);
  };

  const isAnswered = (questionId: number) => {
    // check given question is answered or not
    return !!userAnswers.find(
      (userAnswer) => userAnswer.questionId === questionId
    );
  };

  const handleCloseModal = () => {
    handleReset();
    setIsOpen(false);
  };

  return (
    <div className="container">
      <div className="flex flex-col gap-8 mt-8 mb-4">
        <Link href="/sandbox">
          <div className="flex flex-row gap-2">
            <ArrowLeftIcon width={24} height={24} />
            <span className="font-lato font-bold">Back</span>
          </div>
        </Link>
        <div className="flex flex-row justify-between items-center h-[38px]">
          <h3 className="text-2xl font-oswald font-extrabold">{tree?.title}</h3>
          <div className="flex flex-row items-center">
            {userAnswers.length > 0 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <button
                  className="bg-transparent hover:bg-brand hover:border-brand border-2 border-transparent text-black font-bold py-2 px-2 rounded-full transition-all duration-300"
                  onClick={handleReset}
                >
                  <SymbolIcon width={18} height={18} />
                </button>
              </motion.div>
            )}
            <button className="bg-transparent hover:bg-brand hover:border-brand border-2 border-transparent text-black font-bold py-2 px-2 rounded-full transition-all duration-300">
              <BookmarkIcon width={18} height={18} />
            </button>
          </div>
        </div>
      </div>
      <div className="h-full relative p-4 sm:p-8 mb-8 bg-white border-2 border-gray-900 rounded-lg transition-all duration-300 ease-out">
        <div className="flex flex-col gap-8">
          {questions.map((question, idx) => (
            <>
              <motion.div
                initial={{ opacity: 0, translateY: -5 }}
                animate={{ opacity: 1, translateY: 0 }}
              >
                {idx !== 0 && <hr className="mb-6" />}
                <div className="text-xl font-oswald font-extrabold">
                  {idx + 1}. {question.text}
                </div>
                <div className="flex flex-col gap-4 mt-4">
                  {question.answers.map((answer) => (
                    <div key={answer.id}>
                      <input
                        type="radio"
                        id={answer.id.toString()}
                        name={question.id.toString()}
                        value={answer.id}
                        className="hidden peer"
                        required
                        onChange={() => {
                          !isAnswered(question.id) &&
                            handleAnswer(answer, question);
                        }}
                        disabled={isAnswered(question.id)}
                        checked={
                          !!userAnswers.find(
                            (userAnswer) => userAnswer.answerId === answer.id
                          )
                        }
                      />
                      <label
                        role="button"
                        htmlFor={answer.id.toString()}
                        className="peer-disabled:pointer-events-none max-w-3xl peer-checked:shadow-[5px_5px_0px_0px_rgba(0,0,0)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0)] font-lato cursor-pointer fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-300 hover:bg-brand peer-checked:bg-brand hover:text-gray-900"
                      >
                        {answer.text}. {answer.description}
                      </label>
                    </div>
                  ))}
                </div>
              </motion.div>
            </>
          ))}
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <div className="flex items-center justify-center flex-col gap-10">
          <h3 className="text-2xl font-oswald font-extrabold text-center">
            You can use{" "}
            <u className="cursor-pointer text-brand-900 transition-colors duration-300">
              Primary Button
            </u>{" "}
            or{" "}
            <u className="cursor-pointer hover:text-brand-900 transition-colors duration-300">
              Secondary Button
            </u>
          </h3>
          <div className="flex flex-col gap-2 justify-center items-center">
            <button className="bg-brand hover:bg-brand-700 text-black  border-2 border-black font-bold py-2 px-4 rounded transition-colors duration-300">
              Primary Button
            </button>
            <button className="bg-brand hover:bg-brand-700 text-black  border-2 border-black font-bold py-2 px-4 rounded transition-colors duration-300 flex flex-row gap-2 items-center">
              <BookmarkFilledIcon width={18} height={18} />
              Primary Button with Icon
            </button>
            <button className="py-2 px-4 rounded transition-colors duration-300 font-bold border-2 text-black border-black focus:shadow-outline hover:bg-brand ">
              Secondary Button
            </button>
            <button className="bg-transparent hover:bg-brand hover:border-brand border-2 border-transparent text-black font-bold py-2 px-4 rounded transition-all duration-300">
              Tertiary Button
            </button>
            <button className="bg-transparent hover:bg-brand hover:border-brand border-2 border-transparent text-black font-bold py-2 px-2 rounded-full transition-all duration-300">
              <Cross1Icon width={18} height={18} />
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
