import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AddCity from './compoment/AddCity';
import CityMore from './compoment/CityMore';
import Header from './compoment/Header';
import ListeOfCity from './compoment/ListeOfCity';
import SEE from './compoment/SEE';
import { data } from './Data';


const App = () => {
  const [cities, setcities] = useState(data);
  const AddFunction=(Z)=>{
 setcities([...cities,Z])
  };
  const filtre=(W)=>{
  W===''? setcities(data):setcities(cities.filter(el=>el.city.toLowerCase().includes(W.toLowerCase())))
  }
  return <div>
    <Header Search={filtre}/>
     <Routes>
      <Route path="/" element={<ListeOfCity Y={cities}/>}/>
      <Route path="/Add" element={ <AddCity ADD={AddFunction}/>}/>
      <Route path="/City/:K" element={<CityMore/>}/>
      <Route path="/City/:K/See/:id" element={<SEE/>}/>
      
      {/* (:) appel de  variable  */}
      </Routes>

  </div>;
};

export default App;

