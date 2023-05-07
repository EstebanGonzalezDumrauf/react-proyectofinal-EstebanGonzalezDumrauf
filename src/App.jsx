import './index.css';
import './App.css';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container-fluid" >
      <Header />
      <ItemListContainer greeting= {"Proximamente Productos!!"}/>
      <Footer />
    </div>
  );
} 

export default App;
