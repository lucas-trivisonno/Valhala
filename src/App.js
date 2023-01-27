import Itemlistcontainer from './componentes/Itemlistcontainer';
import Itemdetailcontainer from './componentes/Itemdetailcontainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Provider from './componentes/Context';
import Cart from './componentes/Cart';
import './App.css';
import Header from './componentes/Header';
import Main from './componentes/Main';
import Footer from './componentes/Footer';
import Comtacto from './componentes/Contacto';


function App() {
  return (
<Provider>
    <BrowserRouter>
    <div className='' >
      <Header />
      
      
      
      
    </div>
    <Routes>
    <Route exact path='/' element={<Main/>}/>
    <Route exact path='/productos' element={<Itemlistcontainer/>}/>
    <Route exact path='/producto/:id' element={<Itemdetailcontainer/>}/>
    <Route path={"/cart"} element={<Cart />} />
    <Route exact path='/contacto' element={<Comtacto/>}/>
    

    </Routes>
    <Footer/>
    
    </BrowserRouter>
    </Provider>
  );
}

export default App;
