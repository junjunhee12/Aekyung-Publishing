
import { Outlet } from 'react-router-dom';
// import './App.css';
import Header from './Header';
import Foot from './components/Foot/Foot';

function App() {
  return (
    <>
      <Header />
      <Outlet/>
      <Foot />
    </>
      
  );
}

export default App;
