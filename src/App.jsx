import './App.css';
import '../src/components/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormUpload from './components/Form';
import FirstNav from '../src/components/Navbar';
/* import ProductList from './Pages/ProductList' */

function App() {
   return (
      <div className='App'>
         <FirstNav/>
          <FormUpload/>
      {/*     <ProductList/> */}

      </div>
   );
}
export default App 