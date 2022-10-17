import React from 'react';
import "../../styles/selector/selectorStyle.css";
import {useState , useEffect} from 'react';
import axios from 'axios';
// countryData.map(element => (
//     <option value={element.id}>{element.name}</option>
// ))
export const Selector = () => {

  const [country , setCountryState] = useState([]);
  
  const getCountry = () => {
    // let urlCountry = ;
    axios.get("https://simulador-covid19-backend.herokuapp.com/api/country-data-covid/countrys/")
      .then((response) => {
          setCountryState(response.data);
      })
      .catch((error) => {
          console.log(error);
      });
  };

  useEffect(()=>{
    getCountry();
  }, [])

  

  return <div className='seleccion-pais'>
      <h2>Select the country</h2>
      <select name="select" id="selector">
          {country.map((element) => {
            return (
              <option key={element.id} value={element.id}>
                {element.name}
              </option>
            );
          })}
      </select>
  </div>
};