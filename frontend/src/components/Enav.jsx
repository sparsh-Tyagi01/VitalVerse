import { Link } from "react-router-dom";

function Enav() {
  return (
 <nav className="bg-blue-950 text-white px-6 py-4 flex flex-wrap justify-between items-center shadow-md sticky top-0 z-50">
  <div className="text-xl font-bold">VitalVerse</div>
  <div className="flex flex-wrap gap-3">
    <Link className="hover:bg-blue-800 px-3 py-2 rounded transition-colors" to="/">Dashboard</Link>
    <Link className="hover:bg-blue-800 px-3 py-2 rounded transition-colors" to="/products">Products</Link>
    <Link className="hover:bg-blue-800 px-3 py-2 rounded transition-colors" to="/orders">Orders</Link>
    <Link className="hover:bg-blue-800 px-3 py-2 rounded transition-colors" to="/cart">Cart</Link>
    <Link className="hover:bg-blue-800 px-3 py-2 rounded transition-colors" to="/payments">Payments</Link>
    <Link className="hover:bg-blue-800 px-3 py-2 rounded transition-colors" to="/offers">Offers</Link>
    <Link className="hover:bg-blue-800 px-3 py-2 rounded transition-colors" to="/support">Support</Link>
     <Link className="hover:bg-blue-800 px-3 py-2 rounded transition-colors" to="/feedback">Feedback</Link>
  </div>
</nav>

  );
}

export default Enav;
