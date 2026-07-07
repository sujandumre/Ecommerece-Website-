import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

function NavActions() {
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
        <Heart size={18} />
        Wishlist
      </Link>

      <Link
        to="/login"
        className="hover:text-blue-600"
      >
        Login / Register
      </Link>

    </div>
  );
}

export default NavActions;