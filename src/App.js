import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from './component/Sidebar';
import Dashboard from './pages/Dashboard';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import User from "./pages/Dashboard/User";
import EditUser from "./pages/Dashboard/EditUser";
import AddUser from "./pages/Dashboard/AddUser";

function App() {
  return (<Router>
    <Sidebar>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<User />} />
        <Route path="/products" element={<Product />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/user/add" element={<AddUser />} />
        <Route path="/user/edit/:id" element={<EditUser />} />


      </Routes>
    </Sidebar>
  </Router>
  )
}

export default App;
