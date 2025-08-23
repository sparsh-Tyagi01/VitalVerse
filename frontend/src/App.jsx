import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Enav from "./components/Enav";
import Edashboard from "./pages/Edashboard";
import ProductsPage from "./pages/ProductsPage";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Payments from "./pages/Payments";
import Offers from "./pages/Offers";
import Support from "./pages/Support";
import Feedback from './pages/Feedback';

function App(){
  return (
    <>
      <Enav />
      <Routes>
        <Route path="/" element={<Edashboard />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/support" element={<Support />} />
        <Route path="/feedback" element={<Feedback/>} />
      </Routes>
    </>
  );
}

export default App;
