import { Heart, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Heart className="mr-2" size={24} />
              <h3 className="text-xl font-bold">SanbaCare</h3>
            </div>
            <p className="text-sm">Plateforme e-santé complète adaptée au contexte burkinabè</p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span>+226 XX XX XX XX</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <span>contact@sambacare.bf</span>
              </li>
              <li className="flex items-center">
                <MapPin size={16} className="mr-2" />
                <span>Ouagadougou, Burkina Faso</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Accueil</a></li>
              <li><a href="#" className="hover:underline">Dossier Médical</a></li>
              <li><a href="#" className="hover:underline">Éducation</a></li>
              <li><a href="#" className="hover:underline">Questions Santé</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Partenaires</h4>
            <div className="flex flex-wrap gap-2">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-400 mt-8 pt-4 text-center text-sm">
          © {new Date().getFullYear()} SanbaCare. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}