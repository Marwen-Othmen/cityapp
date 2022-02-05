import React from 'react';
import CityCard from './CityCard';

const ListeOfCity = ({Y}) => {
  return <div style={{display:'flex', justifyContent: 'space-around', flexWrap: 'wrap'}}>

{Y.map(X=><CityCard description={X.description} imageUrl={X.imageUrl} city={X.city} key={X.id} id={X.id} />)}

  </div>;
};

export default ListeOfCity;
