import QuestionForm from '../components/qna/QuestionForm';
import QuestionList from '../components/qna/QuestionList';
import NotificationBadge from '../components/common/NotificationBadge';

export default function QnA() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-blue-600">Espace Questions/Réponses</h1>
        <NotificationBadge count={3} />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <QuestionList />
        </div>
        
        <div>
          <QuestionForm />
          <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h3 className="font-bold mb-2 text-blue-700">Comment poser une question ?</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Soyez précis dans votre description</li>
              <li>Indiquez l'âge et le sexe si pertinent</li>
              <li>Les réponses arrivent sous 24h maximum</li>
              <li>En cas d'urgence, consultez immédiatement</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}