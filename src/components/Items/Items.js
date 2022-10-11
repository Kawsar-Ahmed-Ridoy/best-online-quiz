import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Items = ({item}) => {
    const {id, name, logo, total} = item
    return (
        <div className="mx-auto">
            <Card style={{ width: '18rem',  }}>
        <Card.Img className='bg-black rounded-2' variant="top" src={logo} />      
        <Card.Body className='my-3 d-flex justify-content-between '>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
           Quiz: {total}
          </Card.Text>
          <Link to={`/quizzes/${id}`}>
          <Button variant="primary">Start Quiz</Button>
          </Link>
          
        </Card.Body>
      </Card>
        </div>
        
    );
};

export default Items;