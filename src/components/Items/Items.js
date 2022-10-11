import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Items = ({item}) => {
    const {id, name, logo, total} = item
    return (
        <div className="">
            <Card style={{ width: '18rem',  }}>
        <Card.Img className='bg-black rounded-2' variant="top" src={logo} />      
        <Card.Body className='my-3 d-flex justify-content-between '>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
           Quiz: {total}
          </Card.Text>
          <Button variant="primary">Start Quiz</Button>
        </Card.Body>
      </Card>
        </div>
        
    );
};

export default Items;