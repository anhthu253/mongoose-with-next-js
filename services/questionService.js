import dbConnect from "../lib/dbConnect";
import Question from "../models/Question";

export async function getAllQuestions() {
  await dbConnect();

  const questions = await Question.find();

  const sanitizedQuestions = questions.map((question) => ({
    id: question.id,
    question: question.question,
    answer: question.answer,
    options: question.options,
  }));

  return sanitizedQuestions;
}
