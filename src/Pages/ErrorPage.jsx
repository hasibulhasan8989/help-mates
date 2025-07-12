import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
      <div>
       <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="text-center max-w-xl mx-auto animate-fadeIn">
        <h1 className="text-7xl font-extrabold text-indigo-600 mb-4 drop-shadow-lg">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <img
          src="https://cdnl.iconscout.com/lottie/premium/thumb/404-error-page-animation-download-in-lottie-json-gif-static-svg-file-formats--not-found-web-the-ultimate-pack-design-development-animations-3299960.gif"
          alt="404 illustration"
          className="mx-auto w-72 mb-6"
        />
        <Link
          to="/"
          className="inline-block px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-700 transition rounded-full shadow-lg"
        >
          Go Home
        </Link>
      </div>
    </div>
      </div>
    );
};

export default ErrorPage;