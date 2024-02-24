import { faFaceLaughWink, faTachographDigital, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <ul className="navbar-nav bg-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            {/* <!-- Sidebar - Brand --> */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                
                <div className="text-admin">Admin</div>
            </a>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0" />

            {/* <!-- Nav Item - Dashboard --> */}
            <li className="nav-item active">
                <Link className="nav-link" to="/dashboard">
                    <FontAwesomeIcon icon={faTachographDigital} style={{ marginRight: "0.5rem" }} />
                    <span>Home</span>
                </Link>
            </li>
            <p >MENU</p>
            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0" />

            {/* <!-- Nav Item - Users --> */}
            <li className="nav-item active">
                <Link className="nav-link" to="/guru">
                    <FontAwesomeIcon icon={faUsers} style={{ marginRight: "0.5rem" }} />
                    <span>Daftar Guru</span>
                </Link>
            </li>

            <li className="nav-item active">
                <Link className="nav-link" to="/KehadiranGuru">
                    <FontAwesomeIcon icon={faUsers} style={{ marginRight: "0.5rem" }} />
                    <span>Data Kehadiran Guru</span>
                </Link>
            </li>

            <li className="nav-item active">
                <Link className="nav-link" to="/siswa">
                    <FontAwesomeIcon icon={faUsers} style={{ marginRight: "0.5rem" }} />
                    <span>Daftar Siswa</span>
                </Link>
            </li>

            <li className="nav-item active">
                <Link className="nav-link" to="/KehadiranSiswa">
                    <FontAwesomeIcon icon={faUsers} style={{ marginRight: "0.5rem" }} />
                    <span>Daftar Kehadiran Siswa</span>
                </Link>
            </li>

            <li className="nav-item active">
                <Link className="nav-link" to="/portal/user-list">
                    <FontAwesomeIcon icon={faUsers} style={{ marginRight: "0.5rem" }} />
                    <span>Daftar Izin</span>
                </Link>
            </li>

            <li className="nav-item active">
                <Link className="nav-link" to="/users">
                    <FontAwesomeIcon icon={faUsers} style={{ marginRight: "0.5rem" }} />
                    <span>Data User </span>
                </Link>
            </li>

            <li className="nav-item active">
                <Link className="nav-link" to="/portal/user-list">
                    <FontAwesomeIcon icon={faUsers} style={{ marginRight: "0.5rem" }} />
                    <span>Jadwal Piket </span>
                </Link>
            </li>

            <p>Account</p>

            <li className="nav-item active">
                <Link className="nav-link" to="/portal/user-list">
                    <FontAwesomeIcon icon={faUsers} style={{ marginRight: "0.5rem" }} />
                    <span>Pengaturan</span>
                </Link>
            </li>
        </ul>
    )
}

export default Sidebar