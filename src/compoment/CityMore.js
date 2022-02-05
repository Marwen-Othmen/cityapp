import React from 'react';
import { useParams } from 'react-router-dom';
import {data} from '../Data';
import { Link } from "react-router-dom";

const CityMore = () => {
  const {K}= useParams()
 
  const objet=data.find(OBJ=>OBJ.id==K)
  return <div>
      <h1> {objet.city} </h1>
      <p>{objet.description}  </p>
      {/* {objet.mustSee && objet.mustSee.map(el=> <p>{el.title} </p>)} */}
      {objet.mustSee ?  objet.mustSee.map(el=> <Link to={`See/${el.id}`} >{el.title} </Link>):<h1> NO DATA</h1>}
      {/* {objet.mustSee ?  objet.mustSee.map(el=> <Link to={`/City/${K}/See/${el.id}`} >{el.title} </Link>):<h1> NO DATA</h1>} */}
      
  </div>;
};

export default CityMore;
