import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary-700 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        <Link
          to="/"
          className="bg-primary-700 text-white px-6 py-3 rounded-md hover:bg-primary-800 transition-colors font-semibold"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound; 