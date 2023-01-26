import './App.css';
import Navbar from './components/Navbar';
import Pagination from './components/Pagination';
import Cards from './components/Cards';
import { useState,useEffect } from 'react';
import Section from './components/Section';
import RightSection from './components/RightSection';


//Used dummy api
const api = "https://jsonplaceholder.typicode.com/photos";



function App() {
  
  // kept loggedIn variable true to show functionalities of add and delete images buttons
  const [loggedIn,setLoggedIn]= useState(true);
  const [key,setKey] = useState("");

  const searchtext = (text) =>{
        setKey(text);
  }


      
  return (<>
    <div className="App">
     
     <Navbar func = {searchtext}></Navbar>
     <div className="main flex flex-wrap ">
      
        {loggedIn == true && <RightSection/>}
<Pagination API = "https://jsonplaceholder.typicode.com/photos" numberOfPostsPerPage={9}/>
      


     </div>
     
    </div>
      </>
  );
}

export default App;
