import { Link, Route, Routes } from 'react-router-dom';
import About from './About';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Missing from './Missing';
import Nav from './Nav';
import Newpost from './Newpost';
import Postpage from './Postpage';
import Post from './Post';
import Postlayout from './Postlayout';
import { useState } from 'react';
function App() {
  const [search, setsearch] = useState('')
  const [posts,setposts]=useState([
    {
      id:1,
      title:"my first Post",
      datetime:"july 012021 11:17:36 AM",
      body:"Made a video about tesla q1 results"
    },
    {
      id:2,
      title:"my first Post",
      datetime:"july 012021 11:17:36 AM",
      body:"Made a video about tesla q1 results"
    },
    {
      id:3,
      title:"my first Post",
      datetime:"july 012021 11:17:36 AM",
      body:"Made a video about tesla q1 results"
    },
    {
      id:4,
      title:"my first Post",
      datetime:"july 012021 11:17:36 AM",
      body:"Made a video about tesla q1 results"
    },
  ])
   const [searchresult,setsearchresult]=useState([])
  return (
    
    <div className="App">
    <Header title="MT_social_Media"/>
    <Nav 
     search={search}
     setsearch={setsearch}/>
    <Home posts={posts}/>
    <Newpost/>
    <Postpage/>
    <About/>
    <Missing/>
    <Footer/>
    </div>
  );
}

export default App;
