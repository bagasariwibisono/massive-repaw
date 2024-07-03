import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Beranda from './pages/beranda';
import Login from './pages/login';
import Register from './pages/register';
import Adopsi from './pages/adopsi';
import Donasi from './pages/donasi';
import Shelter from './pages/shelter';
import DetailShelter from './pages/detailshelter';
import Blog from './pages/blog';
import DetailBlog from './pages/detailblog';
import Profil from './pages/profil';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        {}
        <Route path='/' element= {<Beranda/>}/>
        <Route path='/login' element= {<Login/>}/>
        <Route path='/register' element= {<Register/>}/>
        <Route path='/adopsi' element= {<Adopsi/>}/>
        <Route path='/donasi' element= {<Donasi/>}/>
        <Route path='/shelter' element= {<Shelter/>}/>
        <Route path='/detailshelter' element= {<DetailShelter/>}/>
        <Route path='/blog' element= {<Blog/>}/>
        <Route path='/detailblog' element= {<DetailBlog/>}/>
        <Route path='/profil' element= {<Profil/>}/>
      </Routes>
    </BrowserRouter>
    </div>


  )
}

export default App;
