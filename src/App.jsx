import { Navbar } from 'react-bootstrap'
import './App.css'
import './Pages/Create'
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from './Pages/Create';
import FirstNavbar from './Pages/Navbar';

function App() {
   return (
      <div className='App'>
         <FirstNavbar></FirstNavbar>
          <Formulario></Formulario> 

      </div>
   );
}
export default App 