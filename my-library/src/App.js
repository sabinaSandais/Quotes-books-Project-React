
import './App.css';

function App() {

  //q write code in this react app to fetch an api using async
  //q await and display the data in the console
  // A
  async function fetchData(){
    const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=animals&key=AIzaSyD37gIxUgtB-cmboY4p1FEZ6Yd9mvFx7BA');
    const data = await response.json();
    console.log(data.items);
  }
  return (
    fetchData(),
    <div className="App">
      <h1>My Library</h1>
    </div>
  );
}


export default App;
