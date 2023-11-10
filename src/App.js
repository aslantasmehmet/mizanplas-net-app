import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Dashboard from "./layout/Dashboard";
import Login from "./pages/Login";
import RecipeDetail from "./pages/RecipeDetail";
import MenuDayDetail from "./pages/MenuDayDetail";
import NewsDetail from "./pages/NewsDetail";
import BlogDetail from "./pages/BlogDetail";
import About from "./pages/About";
import Shop from "./pages/Shop";
import CartDetail from "./pages/CartDetail";
import CategoriesPages from "./pages/CategoriesPages";
import CategoriesRecipe from "./pages/CategoriesRecipe";
import Account from "./pages/Account";
import ContactPages from "./pages/ContactPages";
import SendRecipe from "./pages/SendRecipe";
import MyRecipe from "./pages/MyRecipe";
import MyAccount from "./pages/MyAccount";
import SendRecipeButton from "./component/Account/SendRecipeButton";
import AdminLogin from "./pages/AdminLogin";
import Admin from "./pages/Admin";
import Test from "./pages/Test";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <div className="loading">
          <div className="dot dot-1"></div>
          <div className="dot dot-2"></div>
          <div className="dot dot-3"></div>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tarif/:title" element={<RecipeDetail />} />
          <Route path="/gunun-menusu/:title" element={<MenuDayDetail/>} />
          <Route path="/haber/:title" element={<NewsDetail />} />
          <Route path="/blog/:title" element={<BlogDetail />} />
          <Route
            path="/kategori/:categoryName"
            element={<CategoriesRecipe />}
          />
          <Route path="/hakkımızda" element={<About />} />
          <Route path="/sepet" element={<CartDetail />} />
          <Route path="/market" element={<Shop />} />
          <Route path="/kategoriler" element={<CategoriesPages />} />
          <Route path="/hesabım" element={<Account />} />
          <Route path="/iletisim" element={<ContactPages />} />
          <Route path="/hesabım/tarif-ekle" element={<SendRecipe />} />
          <Route path="/hesabım/tariflerim" element={<MyRecipe />} />
          <Route path="/hesabım/:displayName" element={<MyAccount />} />
          <Route path="/buton" element={<SendRecipeButton />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/:email" element={<Admin />} />
          <Route path="/test" element={<Test/>} />
        </Routes>
      )}
    </div>
  );
}

export default App;
