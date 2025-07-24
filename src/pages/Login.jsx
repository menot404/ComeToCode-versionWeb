import { Lock, User as UserIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';

export default function Login() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      // Simulation d'authentification
      await new Promise(resolve => setTimeout(resolve, 800));
      
      if (credentials.email === 'medecin@sancare.bf' && credentials.password === 'SanbaCare2025') {
        login({
          id: 'med1',
          name: 'Dr. Aminata Ouédraogo',
          role: 'doctor',
          speciality: 'Médecin Généraliste'
        });
        navigate('/medical');
      } else {
        setError('Identifiants incorrects');
      }
    } catch (err) {
      setError(`Une erreur est survenue lors de la connexion: ${err}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="text-center mb-8">
          <div className="mx-auto bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
            <Lock className="text-blue-600" size={32} />
          </div>
          <h2 className="text-2xl font-bold text-blue-600">Connexion Médecin</h2>
          <p className="text-gray-600 mt-2">Accédez à votre espace professionnel</p>
        </div>

        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <UserIcon className="text-gray-400" size={18} />
              </div>
              <input
                type="email"
                className="block w-full pl-10 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-none"
                placeholder="email@exemple.com"
                value={credentials.email}
                onChange={(e) => setCredentials({...credentials, email: e.target.value})}
                required
                disabled={isLoading}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mot de passe</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="text-gray-400" size={18} />
              </div>
              <input
                type="password"
                className="block w-full pl-10 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-none"
                placeholder="••••••••"
                value={credentials.password}
                onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                required
                disabled={isLoading}
              />
            </div>
          </div>

          <button
            type="submit"
            className={`w-full ${
              isLoading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
            } text-white py-2 px-4 rounded-lg transition`}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></div>
                Connexion en cours...
              </div>
            ) : 'Se connecter'}
          </button>
        </form>
      </div>
    </div>
  );
}