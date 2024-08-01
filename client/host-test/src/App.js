
import './App.css';
fetch('http://localhost:7001/api/data', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    
  },
  credentials: 'include' 
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));


function App() {
  
  return (
    <div className="App">
      THIS IS TEST
    </div>
  );
}

export default App;
