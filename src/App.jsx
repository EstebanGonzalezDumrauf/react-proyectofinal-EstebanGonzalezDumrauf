import './index.css';
import './App.css';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from './components/Error404';
import Cart from './components/Cart';
import CartContextProvider from './components/context/CartContext';
import CheckOut from './components/CheckOut';
import Order from './components/Order';

function App() {
  return (
    <div>
      <CartContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path={"/"} element={<ItemListContainer />} />
            <Route path={"/categoria/:id"} element={<ItemListContainer />} />
            <Route path={"/cart"} element={<Cart />} />
            <Route path={"/checkout"} element={<CheckOut />} />
            <Route path={"/order/:orderId"} element={<Order />} />
            <Route path={"/item/:id"} element={<ItemDetailContainer />} />
            <Route path={"/*"} element={<Error404 />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
