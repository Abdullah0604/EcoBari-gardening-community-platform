import { FaTools } from "react-icons/fa";
import { Link } from "react-router";

const ComingSoon = () => {
  return (
    <div className="flex items-center justify-center min-h-[70vh] px-2">
      <div className="text-center bg-white dark:bg-gray-800 shadow-md rounded-xl p-10 max-w-3xl w-full">
        <div className="flex items-center justify-center text-green-600 text-5xl mb-4">
          <FaTools />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2">
          Coming Soon!
        </h2>
        <p className="text-gray-600 max-w-lg mx-auto dark:text-gray-300 mb-4">
          We’re working on this feature. Stay tuned for updates and exciting
          tools coming your way!
        </p>
        <Link to="/dashboard">
          <button className="mt-4 px-5 py-2 bg-[#00a63e] text-white rounded-full hover:bg-green-700 transition">
            Back to Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ComingSoon;
