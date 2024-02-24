import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LayoutDefault from '../../layouts/Default.jsx';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import Api from '../../api/index.jsx';


function Userlist() {
     //title page
     document.title = "Users - NewsApp Administrator";

     const handleDelete = async (id) => {
         try {
             const confirmDelete = window.confirm("Are you sure you want to delete the teachers?");
           
             if (confirmDelete) {
                 const response = await Api.delete(`http://localhost:8000/api/admin/datateachers/${id}`, {
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
 
         await Api.get(`http://localhost:8000/api/admin/datateachers`, {
 
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
      <LayoutDefault>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Daftar-Guru</h1>
          <Link to="/GuruCreate" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
              <FontAwesomeIcon icon={faUser} className="creatinguser mr-2" />
              Create User
          </Link>
      </div>
      <div className="card shadow mb-4">
          <div className="card-body">
             
                  <div className="table-responsive">
                      <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                          <thead>
                              <tr>
                                  <th className="bg-dark text-white">Id</th>
                                  <th className="bg-dark text-white">Nama Guru</th>
                                  <th className="bg-dark text-white">Nip</th>
                                  <th className="bg-dark text-white">Jenis Kelamin</th>
                                  <th className="bg-dark text-white">Mata Pelajaran</th>
                                  
                                  <th className="bg-dark text-white">Action</th>
                              </tr>
                          </thead>
                          <tbody>
  {users.map((user) => {
    return (
      <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.nip}</td>
        <td>{user.gender}</td>
        <td>{user.subject}</td>
        
        <th>
          <Link to={`/edit/${user.id}`} className="btn btn-info btn-sm mr-1">
            Edit
          </Link>
          <button onClick={() => handleDelete(user.id)} className="btn btn-danger btn-sm mr-1">
            Delete
          </button>
        </th>
      </tr>
    );
  })}
</tbody>

                      </table>
                  </div>
          </div>
      </div>
  </LayoutDefault>
    );
}

export default Userlist;
