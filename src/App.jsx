import "./App.css"
import NavBar from "./components/NavBar/NavBar"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer.jsx/ItemDetailContainer"
import CartProvider from "./components/context/cart/CartProvider"
import ItemCartContainer from "./components/ItemCartContainer/ItemCartContainer"
import CheckoutContainer from "./components/CheckoutContainer/CheckoutContainer"
import OrderContainer from "./components/OrderContainer/OrderContainer"
function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/Products/:id" element={<ItemDetailContainer />} />
          <Route path="/Category/:id" element={<ItemListContainer />} />
          <Route path="/cart" element={<ItemCartContainer />} />
          <Route path="/checkout" element={<CheckoutContainer />} />
          <Route path="/Orders" element={<OrderContainer />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
