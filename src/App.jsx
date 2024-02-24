import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import HomePage from "./pages/Homepage";
import Navbar from './components/Navbar'

import LoginAdmin from "./views/Auth/LoginAdmin"
import Dashboard from './views/Dashboard/Index';
import Aos from 'aos';
import '../node_modules/aos/dist/aos.css'
import Guru from "../src/views/admin/DaftarGuru"
import Siswa from "./views/admin/DaftarSiswa"
import GuruCreate from "./views/admin/GuruCreate"
import CreateSiswa from "../src/components/SiswaCreate"
import KehadiranGuru from "../src/views/admin/KehadiranGuru"
import KehadiranSiswa from "../src/components/KehadiranSiswa"
import Login from "../src/views/Auth/Login"
import View from "../src/components/UserView"
import Edit from "../src/components/EditUser"
import Users from "../src/views/admin/DaftarUser"
import Profile from "../src/components/Profile"

function App(){
  return(
    <div>
      
      <Routes>

        <Route path="/" Component={HomePage} />   
        <Route path="/LoginAdmin" Component={LoginAdmin} />
        <Route path="/Login" Component={Login} />
        <Route path="/dashboard" Component={Dashboard} />
        <Route path="/GuruCreate" Component={GuruCreate} />
        <Route path="/CreateSiswa" Component={CreateSiswa} />
        <Route path="/KehadiranGuru" Component={KehadiranGuru} />
        <Route path="/KehadiranSiswa" Component={KehadiranSiswa} />
        <Route path="/guru" Component={Guru} />
        <Route path="/siswa" Component={Siswa} />
        <Route path="/view" Component={View} />
      <Route path="/navbar" Component={Navbar}/>
      <Route path="/edit" Component={Edit}/>
      <Route path="/users" Component={Users}/>
      <Route path="/profile" Component={Profile}/>
      </Routes>
    </div>
  );
}


export default App;
