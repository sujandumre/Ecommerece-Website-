// import { Link } from "react-router-dom";
// import { Heart } from "lucide-react";


// function NavActions() {
//   return (
    
//     <div className="flex items-center gap-6">

//       <Link
//         to="/track-order"
//         className="hover:text-blue-600"
//       >
//         Track Order
//       </Link>

//       <Link
//         to="/wishlist"
//         className="flex items-center gap-1 hover:text-blue-600"
//       >
        
//         Wishlist
//         <Heart size={18} />
//       </Link>

//       {/* <Link
//         to="/login"
//         className="hover:text-blue-600"
//       >
//         Login
//       </Link> */}

//       {isLoggedIn ? (
//   <button
//     onClick={handleLogout}
//     className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
//   >
//     Logout
//   </button>
// ) : (
//   <Link
//     to="/login"
//     className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
//   >
//     Login
//   </Link>
// )}

//     </div>
    
  
//   );
// }

// export default NavActions;


import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

function NavActions({ isLoggedIn, handleLogout }) {
  return (
    <div className="flex items-center gap-6">

      <Link
        to="/track-order"
        className="hover:text-blue-600"
      >
        Track Order
      </Link>

      <Link
        to="/wishlist"
        className="flex items-center gap-1 hover:text-blue-600"
      >
        Wishlist
        <Heart size={18} />
      </Link>

      {isLoggedIn ? (
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
        >
          Logout
        </button>
      ) : (
        <Link
          to="/login"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
        >
          Login
        </Link>
      )}

    </div>
  );
}

export default NavActions;