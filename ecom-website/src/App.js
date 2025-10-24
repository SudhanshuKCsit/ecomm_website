import "./App.css";
import Header from "./components/Header";
import CartProvider from "./components/Store/CartProvider";
import ProductList from "./components/products/ProductList";

const App = () => {
  return (
    <CartProvider>
      <Header />
      <ProductList />
    </CartProvider>
  );
};

export default App;
