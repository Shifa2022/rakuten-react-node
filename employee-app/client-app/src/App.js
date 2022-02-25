import logo from './logo.svg';
import './App.css';
import ViewEmployees from './components/ViewEmployees';
import AddEmployee from './components/AddEmployee';
import UpdateEmployee from './components/UpdateEmployee';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <>
    <Header/>
    <Routes>
        <Route path="/" element={<ViewEmployees />} />
        <Route path="add" element={<AddEmployee />} />
        <Route path="update/:id/:name" element={<UpdateEmployee />} />
      </Routes>
      </>
  );
}

export default App;
