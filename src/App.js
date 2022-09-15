import logo from './logo.svg';
// import './App.css';
import Header from './components/header/Header';
import { useState } from 'react';
import Galary from './components/gallary/index';




function App() {
  const [query,setQuery]=useState("")
  const [photos,setPhotos]=useState([])
  const [loading,setLoading]=useState(false)
  // console.log(process.env)
  const clint_id=process.env.REACT_APP_CLIENT_ID;
  console.log(photos)
  //https://api.unsplash.com/search/photos?query=cat&client_id=DHlb7di2ZzBd4Jm7g6JWeWzSVqtcW6PSINYO8G3bkLw&per_page=20

  const handleSubmit=(event)=>{
    event.preventDefault();
    setLoading(true)
   
    // console.log(event)

    fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${clint_id}&per_page=20`)
    .then((data) => data.json())
    .then(data => {
      setPhotos(data.results)
      setLoading(false)
    });
    // .catch((err)=>console.log(err))

    setQuery("")
   
    
  }
  
  // console.log(query)
  return (
    <div className="App">
      <Header brand="Splash-clone"  className='header-container'>
     
     
      
     <form onSubmit={handleSubmit}>
     <input type="text"  className='header-input'
        onChange={(event)=>setQuery(event.target.value)}
        value={query}
      />
     </form>
      
      </Header>
      <Galary photos={photos} loading={loading}/>
     
      
    </div>
  );
}

export default App;
