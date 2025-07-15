import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import Flashcards from './pages/Flashcards';
import Review from './pages/Review';
import StudyPlans from './pages/StudyPlans';
import Notes from './pages/Notes';
import SharedSets from './pages/SharedSets';
import { AuthProvider } from './context/AuthContext';


function App() {
  return (
    <Router>
      <AuthProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/flashcards" element={<Flashcards />} />
            <Route path="/review" element={<Review />} />
            <Route path="/studyplan" element={<StudyPlans />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/shared" element={<SharedSets />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

          </Routes>
        </main>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
