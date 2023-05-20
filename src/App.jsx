import './index.css';
import './App.css';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Header />
      <ItemListContainer/> 
      <ItemCount inicial={1} stock={10} agregar={(cantidad) => console.log('Cantidad Agregada', cantidad)} />
      <Footer />
    </div>
  );
} 

export default App;
