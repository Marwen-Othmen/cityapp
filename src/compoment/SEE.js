import React from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../Data';

const SEE = () => {
const {K,id}= useParams()
const objet=data.find(OBJ=>OBJ.id==K).mustSee.find(OBJ=>OBJ.id==id)


  return <div>
      <h1>{objet.title} </h1>
<img src={objet.imageUrl} /> 

  </div>;
};

export default SEE;
