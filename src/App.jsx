import { Navbar } from 'react-bootstrap'
import './App.css'
import './Pages/Create'
import 'bootstrap/dist/css/bootstrap.min.css';
import FormUpload from './Pages/Form';
import FirstNavbar from './Pages/Navbar';

function App() {
   return (
      <div className='App'>
         <FirstNavbar></FirstNavbar>
          <FormUpload></FormUpload>

      </div>
   );
}
export default App 