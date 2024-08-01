
import './App.css';
fetch('https://mern-hosting-test-api.vercel.app/api/data', {
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
