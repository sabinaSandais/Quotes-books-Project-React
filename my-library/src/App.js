
import './App.css';
import { Routes,Route } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Favorites from './components/Favorites';
import BookDetails from './components/BookDetails';
import BookList from './components/BookList';
import Footer from './components/Footer';

function App() {

 
 
  // async function fetchData(){
  //   const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=animals&key=AIzaSyD37gIxUgtB-cmboY4p1FEZ6Yd9mvFx7BA');
  //   const data = await response.json();
  //   console.log(data.items);
  // }
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element ={< BookList/>} />
        <Route path='/book/:id' element = {<BookDetails />}/>
        <Route path='/favorites' element = {<Favorites />}/>
      </Routes>
      <Footer />
     
    </div>
  );
}


export default App;
