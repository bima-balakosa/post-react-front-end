import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from './component/Sidebar';
import Dashboard from './pages/Dashboard';
import User from "./pages/Dashboard/User";
import EditUser from "./pages/Dashboard/EditUser";
import AddUser from "./pages/Dashboard/AddUser";
import Product from "./pages/Product";
import Transaction from "./pages/Transaction";
import AddProduct from "./pages/Product/AddProduct";
import AddTransaction from "./pages/Transaction/AddTransaction";

function App() {
  return (<Router>
    <Sidebar>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<User />} />
        <Route path="/user/add" element={<AddUser />} />
        <Route path="/user/edit/:id" element={<EditUser />} />

        {/* 1. Buat baris code route untuk mengarahkan menu ke halaman Product.js */}
        <Route path="/product" element={< Product />} />
        {/* Membuat jalan ke transaction */}
        <Route path="/transaction" element={< Transaction />} />
        <Route path="/product/add" element={< AddProduct />} />
        <Route path="/transaction/add" element={< AddTransaction />} />





      </Routes>
    </Sidebar>
  </Router>
  )
}

export default App;
