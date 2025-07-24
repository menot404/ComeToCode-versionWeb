import { Link } from 'react-router-dom';
import { Stethoscope, Headphones, MessageCircle, AlertTriangle } from 'lucide-react';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">SanbaCare</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Plateforme e-santé complète adaptée au contexte burkinabè
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <FeatureCard 
          icon={<Stethoscope size={48} className="text-blue-600" />}
          title="Dossier Médical Numérique"
          description="Accédez à votre historique médical complet via QR code"
          link="/medical"
          linkText="Accéder aux dossiers"
          color="blue"
        />
        
        <FeatureCard 
          icon={<Headphones size={48} className="text-green-600" />}
          title="Éducation Sanitaire"
          description="Conseils santé vocaux en mooré, dioula, fulfuldé et français"
          link="/education"
          linkText="Écouter les conseils"
          color="green"
        />
        
        <FeatureCard 
          icon={<MessageCircle size={48} className="text-purple-600" />}
          title="Questions/Réponses"
          description="Posez vos questions à des professionnels de santé"
          link="/qna"
          linkText="Poser une question"
          color="purple"
        />
      </div>

      <div className="bg-blue-50 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">Urgence Médicale</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          En cas d'urgence médicale, accédez rapidement au service dédié pour une prise en charge immédiate.
        </p>
        <Link 
          to="/emergency" 
          className="btn-emergency inline-flex items-center"
        >
          <AlertTriangle className="mr-2" size={20} />
          Accéder au service d'urgence
        </Link>
      </div>
    </div>
  );
}

const FeatureCard = ({ icon, title, description, link, linkText, color }) => {
  const colorClasses = {
    blue: 'border-blue-200',
    green: 'border-green-200',
    purple: 'border-purple-200'
  };
  
  return (
    <div className={`border rounded-xl p-6 hover:shadow-md transition-shadow ${colorClasses[color]}`}>
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link to={link} className={`text-${color}-600 hover:text-${color}-800 font-medium`}>
        {linkText} →
      </Link>
    </div>
  );
};