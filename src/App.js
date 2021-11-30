import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import Details from './components/Details';
import Create from './components/Create';
import Edit from './components/Edit';
import Login from './components/Login';
import Register from './components/Register';
import MyPets from './components/MyPets';

function App() {
  return (
    <div id="container">
      <Header />

      <main id="site-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/my-pets" element={<MyPets />} />
          {/* <Route path="/details" element={<Details />} /> */}
          <Route path="/create" element={<Create />} />
          {/* <Route path="/edit" element={<Edit />} /> */}
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
