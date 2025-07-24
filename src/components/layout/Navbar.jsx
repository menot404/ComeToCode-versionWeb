import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Stethoscope, 
  Headphones, 
  MessageCircle, 
  AlertTriangle, 
  Menu, 
  X,
  User as UserIcon
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import LanguageSwitcher from '../common/LanguageSwitcher';
import NotificationBadge from '../common/NotificationBadge';

export default function Navbar() {
  const { user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Stethoscope size={24} />
            <Link to="/" className="font-bold text-xl">SanbaCare</Link>
          </div>
          
          {/* Navigation Desktop */}
          <div className="hidden md:flex space-x-4">
            <NavLink to="/medical" icon={<Stethoscope size={18} />} text="Dossier Médical" />
            <NavLink to="/education" icon={<Headphones size={18} />} text="Éducation" />
            <NavLink to="/qna" icon={<MessageCircle size={18} />} text="Questions" />
            <NavLink 
              to="/emergency" 
              icon={<AlertTriangle size={18} className="text-red-300" />} 
              text="Urgence"
              emergency
            />
          </div>
          
          {/* Actions Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-3">
                <NotificationBadge count={3} />
                <div className="flex items-center">
                  <div className="bg-gray-200 border-2 border-dashed rounded-full w-8 h-8 mr-2" />
                  <div>
                    <p className="text-sm">{user.name.split(' ')[0]}</p>
                    <button 
                      onClick={logout}
                      className="text-xs text-blue-200 hover:text-white"
                    >
                      Déconnexion
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <Link to="/login" className="text-sm hover:underline flex items-center">
                <UserIcon size={16} className="mr-1" />
                Connexion Médecin
              </Link>
            )}
            <LanguageSwitcher />
          </div>
          
          {/* Menu Mobile */}
          <div className="md:hidden flex items-center space-x-3">
            <LanguageSwitcher />
            <button 
              className="text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Navigation Mobile */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <MobileNavLink 
              to="/medical" 
              icon={<Stethoscope size={18} />} 
              text="Dossier Médical" 
              onClick={() => setMobileMenuOpen(false)}
            />
            <MobileNavLink 
              to="/education" 
              icon={<Headphones size={18} />} 
              text="Éducation" 
              onClick={() => setMobileMenuOpen(false)}
            />
            <MobileNavLink 
              to="/qna" 
              icon={<MessageCircle size={18} />} 
              text="Questions" 
              onClick={() => setMobileMenuOpen(false)}
            />
            <MobileNavLink 
              to="/emergency" 
              icon={<AlertTriangle size={18} className="text-red-300" />} 
              text="Urgence"
              emergency
              onClick={() => setMobileMenuOpen(false)}
            />
            
            <div className="pt-4 border-t border-blue-400">
              {user ? (
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="bg-gray-200 border-2 border-dashed rounded-full w-10 h-10 mr-3" />
                      <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="text-sm text-blue-200">Médecin</p>
                      </div>
                    </div>
                    <NotificationBadge count={3} />
                  </div>
                  
                  <button 
                    onClick={() => {
                      logout();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full py-2 px-4 bg-red-600 text-white rounded hover:bg-red-700"
                  >
                    Déconnexion
                  </button>
                </div>
              ) : (
                <div className="flex flex-col space-y-3">
                  <Link 
                    to="/login" 
                    className="flex items-center justify-center py-2 bg-blue-700 rounded hover:bg-blue-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <UserIcon size={16} className="mr-2" />
                    Connexion Médecin
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// Composant pour les liens desktop
const NavLink = ({ to, icon, text, emergency = false }) => (
  <Link 
    to={to} 
    className={`flex items-center space-x-1 px-3 py-2 rounded transition ${
      emergency 
        ? 'bg-red-100 text-red-700 hover:bg-red-200' 
        : 'hover:bg-blue-700'
    }`}
  >
    {icon}
    <span>{text}</span>
  </Link>
);

// Composant pour les liens mobile
const MobileNavLink = ({ to, icon, text, emergency = false, onClick }) => (
  <Link 
    to={to} 
    className={`flex items-center space-x-3 px-3 py-2 rounded transition ${
      emergency 
        ? 'bg-red-100 text-red-700' 
        : 'hover:bg-blue-700'
    }`}
    onClick={onClick}
  >
    {icon}
    <span className="font-medium">{text}</span>
  </Link>
);