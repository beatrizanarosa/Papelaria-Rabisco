import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Headerb from '../components/Headerb';
import Titulo from '../components/Titulo';

const Contato = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get('https://reqres.in/api/users', {
      params: {
        per_page: 8
      }
    })
      .then(response => {
        setEmployees(response.data.data);
      })
      .catch(error => {
        console.error('Erro ao buscar dados dos funcionários:', error);
      });
  }, []);

  return (
    <>
      <Headerb />
      <Titulo texto="Entre em contato com nossos funcionários!" />
      <div className="container my-4">
        <div className="row g-5">
          {employees.map(employee => (
            <div key={employee.id} className="col-12 col-sm-6 col-lg-3">
              <div className="card shadow-sm h-100 text-center">
                <img src={employee.avatar} className="card-img-top" alt="Employee Avatar" />
                <div className="card-body">
                  <h5 className="card-title">{employee.first_name} {employee.last_name}</h5>
                  <p className="card-text">{employee.email}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Contato;

