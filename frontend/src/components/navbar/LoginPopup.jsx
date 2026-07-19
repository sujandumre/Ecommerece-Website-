import { useNavigate } from "react-router-dom";

export default function LoginPopup({ onClose }) {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white rounded-xl p-8 w-100 text-center shadow-2xl">

        <h2 className="text-2xl font-bold text-gray-800">
          Please Login
        </h2>

        <p className="text-gray-500 mt-3">
          You need to login or create an account to continue.
        </p>

        <div className="flex justify-center gap-3 mt-8">

          <button
            onClick={() => navigate("/login")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
          >
            Login
          </button>

          <button
            onClick={() => navigate("/register")}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg"
          >
            Register
          </button>

          <button
            onClick={onClose}
            className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg"
          >
            Cancel
          </button>

        </div>

      </div>

    </div>
  );
}