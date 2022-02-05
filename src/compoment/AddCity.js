
import { Button, Form } from 'react-bootstrap';
import React, { useState } from 'react';



const AddCity = ( {ADD}) => {
    const [input, setinput] = useState({});
  return <div>
      <Form>
  <Form.Group className="mb-3">
    <Form.Label> city</Form.Label> 
    <Form.Control type="text" placeholder="Enter city"  onChange={e=>setinput({...input,city:e.target.value})}/>
    <Form.Label> description </Form.Label>
    <Form.Control type="text" placeholder="description" onChange={e=>setinput({...input,description:e.target.value})} />
    <Form.Label> imageUrl </Form.Label> 
    <Form.Control type="text" placeholder="Enter imageUrl" onChange={e=>setinput({...input,imageUrl:e.target.value})} />
  </Form.Group>

  <Button variant="primary" onClick={()=>ADD({...input,id:Math.random()})}>
    Submit
  </Button>
</Form>;
  </div>;
};

export default AddCity;
