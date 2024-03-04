import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import HomePage from "./pages/Homepage";
import Navbar from './components/Navbar'



import Dashboard from './views/Dashboard/Index';
import Aos from 'aos';
import '../node_modules/aos/dist/aos.css'
import Guru from "./views/admin/guru/DaftarGuru"
import Siswa from "./views/admin/siswa/DaftarSiswa"
import GuruCreate from "./views/admin/guru/GuruCreate"
import CreateSiswa from "../src/components/SiswaCreate"
import KehadiranGuru from "../src/views/admin/KehadiranGuru"
import KehadiranSiswa from "../src/components/KehadiranSiswa"
import Login from "../src/views/Auth/Login"
import View from "../src/components/UserView"
import Edit from "../src/components/EditUser"
import Users from "../src/views/admin/DaftarUser"
import Profile from "../src/components/Profile"
import jurusan from "./views/admin/Jurusan/DaftarJurusan"
import pplg from "./views/admin/Kelas/pplg"
import animasi from "./views/admin/Kelas/animasi"
import bcf from "./views/admin/Kelas/bcf"
import to from "./views/admin/Kelas/to"
import tpfl from "./views/admin/Kelas/tpfl"
import Otomotif from "./views/admin/Kelas/Kelass/Otomotif"
import Rpl from "./views/admin/Kelas/Kelass/pplg"
import Anim from "./views/admin/Kelas/Kelass/animasi"
import Broadcasting from "./views/admin/Kelas/Kelass/bcf"
import Tpfl from "./views/admin/Kelas/Kelass/tpfl"
import Izin from "./views/admin/izin/FormIzin"
import Print from "./views/admin/izin/print"
import rekapguru from "./views/GuruPiket/rekapguru"
import Print1 from "./views/admin/izin/print/print1"
import Print2 from "./views/admin/izin/print/print2"
import Print3 from "./views/admin/izin/print/print3"
import Print4 from "./views/admin/izin/print/print4"
import MenuIzin from"./views/admin/izin/MenuIzin"
import DaftarIzin from "./views/admin/izin/DaftarIzin"
import SiswaCreate from './views/admin/siswa/SiswaCreate';
import PiketCreate from './views/admin/piket/PiketCreate'
import EditSiswa from './views/admin/siswa/EditSiswa'
import HadirGuru from'./views/admin/guru/hadir/index'
import TidakHadirGuru from "./views/admin/guru/TidakHadir/index"
import TerlambatGuru from'./views/admin/guru/TidakHadir/index'
import HadirSiswa from'./views/admin/siswa/hadir/index'
import TidakHadirSiswa from "./views/admin/siswa/TidakHadir/index"
import TerlambatSiswa from'./views/admin/siswa/TidakHadir/index'
import FormIzin from './views/admin/izin/FormIzin'
import Piket from './views/admin/piket/index'
import FormAbsen from './views/GuruPiket/FormAbsen'
import FormSiswa from './views/GuruPiket/FormSiswa'
import AbsenSiswa from './views/GuruPiket/AbsenSiswa'
import AbsenGuru from './views/GuruPiket/AbsenGuru'
import FormGuru from './views/GuruPiket/FormGuru'
function App(){
  return(
    <div>
      
      <Routes>

        <Route path="/" Component={HomePage} />   
        <Route path="/MenuIzin" Component={MenuIzin} />   
        <Route path="/DaftarIzin" Component={DaftarIzin} />   
        <Route path="/HadirGuru" Component={HadirGuru} />   
        <Route path="/TidakHadirGuru" Component={TidakHadirGuru} />   
        <Route path="/TerlambatGuru" Component={TerlambatGuru} />   
        <Route path="/HadirSiswa" Component={HadirSiswa} />   
        <Route path="/FormGuru" Component={FormGuru} />   
        <Route path="/TidakHadirSiswa" Component={TidakHadirSiswa} />   
        <Route path="/TerlambatSiswa" Component={TerlambatSiswa} />   
        <Route path="/FormIzin" Component={FormIzin} />   
        <Route path="/Piket" Component={Piket} />   
        <Route path="/FormSiswa" Component={FormSiswa} />   
        <Route path="/AbsenSiswa" Component={AbsenSiswa} />   
        <Route path="/Print/1" Component={Print1} />   
        <Route path="/Print/4" Component={Print4} />   
        <Route path="/Print/3" Component={Print3} />   
        <Route path="/Print/2" Component={Print2} />   
        <Route path="/AbsenGuru" Component={AbsenGuru} />   
        <Route path="/rekapguru" Component={rekapguru} />   
        
        <Route path="/EditSiswa" Component={EditSiswa} />
        <Route path="/Login" Component={Login} />
        <Route path="/dashboard" Component={Dashboard} />
        <Route path="/GuruCreate" Component={GuruCreate} />
        <Route path="/PiketCreate" Component={PiketCreate} />
        <Route path="/SiswaCreate" Component={SiswaCreate} />
        <Route path="/CreateSiswa" Component={CreateSiswa} />
        <Route path="/KehadiranGuru" Component={KehadiranGuru} />
        <Route path="/KehadiranSiswa" Component={KehadiranSiswa} />
        <Route path="/guru" Component={Guru} />
        <Route path="/izin" Component={FormIzin} />
        <Route path="/siswa" Component={Siswa} />
        <Route path="/jurusan" Component={jurusan} />
        <Route path="/view" Component={View} />
        <Route path="/absen" Component={FormAbsen} />
      <Route path="/navbar" Component={Navbar}/>
      <Route path="/edit" Component={Edit}/>
      <Route path="/users" Component={Users}/>
      <Route path="/profile" Component={Profile}/>
      <Route path="/user-details/2" Component={pplg}/>
      <Route path="/user-details/3" Component={animasi}/>
      <Route path="/user-details/4" Component={bcf}/>
      <Route path="/user-details/1" Component={to}/>
      <Route path="/user-details/5" Component={tpfl}/>
      <Route path="/class-details/1" Component={Otomotif}/>
      <Route path="/class-details/2" Component={Rpl}/>
      <Route path="/class-details/3" Component={Anim}/>
      <Route path="/class-details/4" Component={Broadcasting}/>
      <Route path="/class-details/5" Component={Tpfl}/>
      </Routes>
    </div>
  );
}


export default App;
