import React from 'react';
import {Card, Button} from 'react-bootstrap';

const DeletedTasks = props => {
    return (
        <>
        <div style={{margin:'1rem',padding:'1rem',border:'1px solid #007bff'}}>
        <h2>Deleted Tasks</h2>
             <Card className="mx-5" style={{width:'35rem'}}>
                    <Card.Body>
                        <Card.Title>Task 2</Card.Title>
                        <Button variant="primary" className="mr-3">Complete</Button>
                    </Card.Body>
             </Card>
        </div> 
        </>
    )
}

export default DeletedTasks;