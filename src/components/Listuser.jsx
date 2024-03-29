//import react  
import { useState, useEffect } from 'react';

//import Link from react router dom
import { Link } from "react-router-dom";

//import api
import Api from '../../api';

//import js cookie
import Cookies from 'js-cookie';

import { toast } from 'react-hot-toast';

//import layout
// import LayoutDefault from "../layouts/Default";

//import permissions
import hasAnyPermission from '../../utils/Permissions.jsx';

//import pagination component
import Pagination from "../../components/Pagination";
import Side from "../../components/SideComponent"
import NavbarComponent from '../../components/HeaderComponent';
import HeaderComponent from '../../components/HeaderComponent';
import LayoutDefault from '../../layouts/Default';

export default function UserList() {

    //title page
    document.title = "Users - NewsApp Administrator";

    const handleDelete = async (id) => {
        try {
            const confirmDelete = window.confirm("Are you sure you want to delete the user?");
          
            if (confirmDelete) {
                const response = await Api.delete(`/api/admin/users/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                });
      
                toast.success(response.data.message, {
                    position: "top-right",
                    duration: 4000,
                });
    
                fetchData();  // Reload the data after deletion
            }
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    

    //define state "users"
    const [users, setUsers] = useState([]);

    //define state "pagination"
    const [pagination, setPagination] = useState({
        currentPage: 0,
        perPage: 0,
        total: 0
    });

    //define state "keywords"
    const [keywords, setKeywords] = useState('');

    //token from cookies
    const token = Cookies.get('token');

    //function fetchData    
    const fetchData = async (pageNumber = 1, keywords = '') => {

        //define variable "page"
        const page = pageNumber ? pageNumber : pagination.currentPage;

        await Api.get(`/api/admin/users?search=${keywords}&page=${page}`, {

            //header
            headers: {
                //header Bearer + Token
                Authorization: `Bearer ${token}`,
            }
        })
            .then(response => {

                //set data response to state "setUsers"
                setUsers(response.data.data.data);

                //set data pagination to state "pagination"
                setPagination(() => ({
                    currentPage: response.data.data.current_page,
                    perPage: response.data.data.per_page,
                    total: response.data.data.total
                }));

            })

    }

    //useEffect
    useEffect(() => {

        //call function "fetchData"
        fetchData();

    }, []);

    //function "searchData"
    const searchData = async (e) => {

        //set value to state "keywords"
        setKeywords(e.target.value);

        //call function "fetchData"
        fetchData(1, e.target.value)

    }

    return (
        // <LayoutDefault>
<LayoutDefault>
<div className="container-fluid mb-5 mt-5">
             
                <div className="row">
                    <div className="col-md-8">
                        <div className="row">
                            {hasAnyPermission(['users.create']) &&
                                <div className="col-md-3 col-12 mb-2">
                                    <Link to="/users/create" className="btn btn-md btn-tertiary border-0 shadow w-100" type="button">
                                        <i className="fa fa-plus-circle"></i> Add New
                                    </Link>
                                </div>
                            }
                            <div className="col-md-9 col-12 mb-2">
                                <div className="input-group">
                                    <input type="text" className="form-control border-0 shadow" onChange={(e) => searchData(e)} placeholder="search here..." />
                                    <span className="input-group-text border-0 shadow">
                                        <i className="fa fa-search"></i>
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="row mt-1">
                    <div className="col-md-12">
                        <div className="card border-0 shadow">
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-bordered table-centered mb-0 rounded">
                                        <thead className="thead-dark">
                                            <tr className="border-0">
                                                <th className="border-0" style={{ width: '1%' }}>No.</th>
                                                <th className="border-0" style={{ width: '10%' }}>User Name</th>
                                                <th className="border-0" style={{ width: '10%' }}>Roles</th>
                                                <th className="border-0" style={{ width: '10%' }}>Email</th>
                                                <th className="border-0" style={{ width: '10%' }}>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                //cek apakah data ada
                                                users.length > 0

                                                //looping data "users" dengan "map"
                                                ? users.map((user, index) => (
                                                    <tr key={index}>
                                                        <td className="fw-bold text-center">{++index + (pagination.currentPage - 1) * pagination.perPage}</td>
                                                        <td>{user.name}</td>
                                                        <td>
                                                            {user.roles.map((role, index) => (
                                                                <span className="btn btn-warning btn-sm shadow-sm border-0 ms-2 mb-2 fw-normal" key={index}>
                                                                    {role.name}
                                                                </span>
                                                            ))}
                                                        </td>
                                                        <td>{user.email}</td>
                                                        <td className="text-center">

                                                            {hasAnyPermission(['users.edit']) &&
                                                                <Link to={`/users/edit/${user.id}`} className="btn btn-primary btn-sm me-2"><i className="fa fa-pencil-alt"></i></Link>
                                                            }

                                                            {hasAnyPermission(['users.delete']) &&
                                                              <button onClick={() => handleDelete(user.id)} className="btn btn-md btn-danger"><i className="fa fa-trash"></i> </button> 
                                                            }

                                                        </td>
                                                    </tr>
                                                ))

                                                //tampilkan pesan data belum tersedia
                                                : <tr>
                                                    <td colSpan={4}>
                                                        <div className="alert alert-danger border-0 rounded shadow-sm w-100" role="alert">
                                                            Data Belum Tersedia!.
                                                        </div>
                                                    </td>
                                                </tr>
                                            }
                                        </tbody>
                                    </table>
                                </div>
                                <Pagination
                                    currentPage={pagination.currentPage}
                                    perPage={pagination.perPage}
                                    total={pagination.total}
                                    onChange={(pageNumber) => fetchData(pageNumber, keywords)}
                                    position="end"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutDefault> 

            
    )
}
