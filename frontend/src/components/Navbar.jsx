import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Make sure this path is correct

const Navbar = () => {
  const { user, logoutUser } = useAuth();

  return (
    <nav className="bg-blue-600 text-white px-4 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold">MedAid</h1>

      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/flashcards" className="hover:underline">Flashcards</Link>
        <Link to="/review" className="hover:underline">Review</Link>
        <Link to="/studyplan" className="hover:underline">Study Plan</Link>
        <Link to="/notes" className="hover:underline">Notes</Link>
        <Link to="/shared" className="hover:underline">Shared Sets</Link>

        {user ? (
          <>
            <span className="ml-4 font-medium">Hi, {user.name}</span>
            <button
              onClick={logoutUser}
              className="ml-2 underline hover:text-red-300"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:underline">Login</Link>
            <Link to="/register" className="hover:underline">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
