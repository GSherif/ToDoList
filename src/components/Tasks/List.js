import React from 'react';
import {Card, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import CompletedTasks from './Completed';
import DeletedTasks from './Deleted';

const TasksList = props => {
    return (
        <>
        <div style={{margin:'1rem',padding:'1rem',border:'1px solid #007bff'}}>
            <h2 style={{textAlign:'center'}}>All Tasks</h2>
        {
            props.data.map( t =>
             <Card className="mx-5" key={t.id}>
                    <Card.Body>
                        <Card.Title>{t.text}</Card.Title>
                        <Button variant="primary" className="mr-3" data-id={t.id} >Complete</Button>
                        <Button variant="secondary" className="px-4">Delete</Button>
                    </Card.Body>
             </Card>)
        }
        </div> 
        <div style={{margin:'1rem',padding:'1rem',border:'1px solid #007bff', display:'flex'}}> 
            <CompletedTasks/>
            <DeletedTasks/>
        </div> 
        </>
    )
}
const mapStateToProps = state => ({
    data: state.data,
});
export default connect(mapStateToProps)(TasksList);