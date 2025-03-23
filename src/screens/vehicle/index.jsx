import React, { useEffect, useState } from 'react'
import VehicleList from '../../assets/components/Vehicle'

export default function Driver() {
  const [vehicle, setVehicle] = useState([]);
  
    const getVehicles = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/v1/vehicles");
        const data = await response.json();
        console.log(data);
        setVehicle(data);
      } catch (error) {
        console.error(error);
      }
    };
  
    useEffect(() => {
      getVehicles();
    }
    , []);
  return (
    <>
    <VehicleList vehicle={vehicle} />
    </>
  )
}
