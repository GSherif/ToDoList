import React from 'react';
import {Card, Button} from 'react-bootstrap';

const CompletedTasks = props => {
    return(
            <div style={{margin:'1rem',padding:'1rem',border:'1px solid #007bff'}}>
                    <h2>Completed Tasks</h2>
                    <Card className="mx-5"style={{width:'35rem'}}>
                            <Card.Body>
                                <Card.Title>Task 1</Card.Title>
                                <Button variant="secondary" className="px-4">Delete</Button>
                            </Card.Body>
                    </Card>
            </div>
    )
}

export default CompletedTasks;