import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Medical from './pages/Medical';
import Education from './pages/Education';
import QnA from './pages/QnA';
import Login from './pages/Login';
import Emergency from './pages/Emergency';
import { useAuth } from './context/AuthContext';

function App() {
  const { isAuthenticated, loading: authLoading } = useAuth();

  if (authLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/medical" element={
              isAuthenticated ? <Medical /> : <Navigate to="/login" replace />
            } />
            <Route path="/education" element={<Education />} />
            <Route path="/qna" element={<QnA />} />
            <Route path="/login" element={<Login />} />
            <Route path="/emergency" element={
              isAuthenticated ? <Emergency /> : <Navigate to="/login" replace />
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;