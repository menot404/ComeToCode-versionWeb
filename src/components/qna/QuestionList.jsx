import QuestionItem from './QuestionItem';
import { useState } from 'react';

export default function QuestionList() {
  const [questions] = useState([
    { 
      id: 1, 
      title: "Comment prévenir le paludisme ?", 
      content: "Quelles sont les mesures préventives efficaces contre le paludisme ?", 
      category: "Prévention", 
      answer: "Utilisez des moustiquaires imprégnées, appliquez des répulsifs et évitez les eaux stagnantes. Consultez immédiatement en cas de fièvre.", 
      answered: true,
      date: "2023-06-20"
    },
    { 
      id: 2, 
      title: "Symptômes du diabète", 
      content: "Quels sont les premiers signes du diabète ?", 
      category: "Symptômes", 
      answer: null, 
      answered: false,
      date: "2023-06-25"
    }
  ]);
  
  return (
    <div className="space-y-4">
      {questions.map(question => (
        <QuestionItem key={question.id} question={question} />
      ))}
    </div>
  );
}