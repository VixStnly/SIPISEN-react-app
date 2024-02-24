import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import LayoutDefault from '../layouts/Default';

function SiswaCreate() {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  const myFormik = useFormik(
    {
      initialValues: {
        username: "",
        email: "",
        city: "",
        state: "",
        country: ""
      },
      // Validating Forms while entering the data
      validate: (values) => {
        let errors = {}           //Validating the form once the error returns empty else onsubmit won't work

        if (!values.username) {
          errors.username = "Please enter username";
        } else if (values.username.length < 5) {
          errors.username = "Name shouldn't be less than 3 letters";
        } else if (values.username.length > 20) {
          errors.username = "Name shouldn't be more than 20 letters";
        }

        if (!values.email) {
          errors.email = "Please enter email";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }

        if (!values.city) {
          errors.city = "Please select any one city";
        }

        if (!values.state) {
          errors.state = "Please select any one state";
        }

        if (!values.country) {
          errors.country = "Please select any one state";
        }

        return errors;
      },
      //one can be able to submit once the validates returns empty value (validation successful) else can't be submitted
      onSubmit: async (values) => {
        try {
          setLoading(true);
          await axios.post("https://63a9bccb7d7edb3ae616b639.mockapi.io/users", values);
          navigate("/siswa");
        } catch (error) {
          console.log(error);
          alert("Validation failed");
          setLoading(false);
        }

        console.log(values);  
      }

    });
  return (
    <LayoutDefault>
    <div className='container'>

      <form onSubmit={myFormik.handleSubmit}>
        <div className='row'>
          <div className="col-lg-6">
            <label>Name</label>
            <input name='username' value={myFormik.values.username} onChange={myFormik.handleChange} type={"text"}
              className={`form-control ${myFormik.errors.username ? "is-invalid" : ""} `} />
            <span style={{ color: "red" }}>{myFormik.errors.username}</span>
          </div>

          <div className="col-lg-6">
            <label>NISN</label>
            <input name='email' value={myFormik.values.email} onChange={myFormik.handleChange} type={"mail"}
              className={`form-control ${myFormik.errors.email ? "is-invalid" : ""} `} />
            <span style={{ color: "red" }}>{myFormik.errors.email}</span>
          </div>

          <div className='col-lg-4'>
            <label>Jenis Kelamin</label>
            <select name='city' value={myFormik.values.city} onChange={myFormik.handleChange}
              className={`form-control ${myFormik.errors.city ? "is-invalid" : ""} `} >
              <option value="">----Pilih----</option>
              <option value="Perempuan">Perempuan</option>
              <option value="laki-Laki">Laki-Laki</option>
            </select>
            <span style={{ color: "red" }}>{myFormik.errors.city}</span>
          </div>

          <div className='col-lg-4'>
            <label>Jurusan</label>
            <select name='state' value={myFormik.values.state} onChange={myFormik.handleChange}
              className={`form-control ${myFormik.errors.state ? "is-invalid" : ""} `} >
              <option value="">----Pilih----</option>
              <option value="PPLG">PPLG</option>
              <option value="Broadcast">Broadcast</option>
              <option value="Animasi">Animasi</option>
              <option value="Otomotif">Otomotif</option>
              
            </select>
            <span style={{ color: "red" }}>{myFormik.errors.state}</span>
          </div>

          <div className='col-lg-4'>
            <label>Kelas</label>
            <select name='country' value={myFormik.values.country} onChange={myFormik.handleChange}
              className={`form-control ${myFormik.errors.country ? "is-invalid" : ""} `} >
              <option value="">----Pilih----</option>
              <option value="11-1">11-1</option>
              <option value="11-2">11-2</option>
              <option value="11-3">11-3</option>
              <option value="10-1">10-1</option>
              <option value="10-2">10-2</option>
              <option value="10-3">10-3</option>
          
            </select>
            <span style={{ color: "red" }}>{myFormik.errors.country}</span>
          </div>

          <div className='col-lg-4 mt-3'>
            <input disabled={isLoading} type="submit" value={isLoading ? "Submitting..." : "Create"} className=' btn btn-primary' />
          </div>
        </div>
      </form>
      {/* {JSON.stringify(myFormik.values)} */}
    </div>
    </LayoutDefault>
  );
}

export default SiswaCreate