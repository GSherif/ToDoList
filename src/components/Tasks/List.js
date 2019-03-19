import React,{Component} from 'react';
import {Card, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import { completeTask, deleteTask } from '../../actions/tasks';


class TasksList extends Component {

    handleComplete = e => {
        const id = e.target.dataset.id;
        this.props.completeTask(id);
    }

    handleDelete = e => {
        const id = e.target.dataset.id;
        this.props.deleteTask(id);
    }


    render(){
        return (
            <>
            <div style={{margin:'1rem',padding:'1rem',border:'1px solid #007bff'}}>
                <h2 style={{textAlign:'center'}}>All Tasks</h2>
            {
                this.props.data.map( t =>
                <Card className="mx-5" key={t.id}>
                        <Card.Body>
                            <Card.Title>{t.text}</Card.Title>
                            <Button variant="primary" className="mr-3" data-id={t.id} onClick={this.handleComplete}>Complete</Button>
                            <Button variant="secondary" className="px-4" data-id={t.id} onClick={this.handleDelete}>Delete</Button>
                        </Card.Body>
                </Card>)
            }
            </div> 
        
            </>
        )
    }
}
const mapStateToProps = state => ({
    data: state.data.filter(t => !(t.completed || t.deleted)),
});

const mapDispatchToProps = dispatch => ({
    completeTask: id => dispatch(completeTask(id)),
    deleteTask: id => dispatch(deleteTask(id)),
});

export default connect(mapStateToProps,mapDispatchToProps)(TasksList);