import './index.css';
import './App.css';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';



function App() {
  return (
    <div>
      <Header />
      <ItemListContainer/> 
      <ItemDetailContainer />
      <Footer />
    </div>
  );
} 

export default App;
