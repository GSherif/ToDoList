import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { completeTask, deleteTask } from '../../actions/tasks';

class CompletedTasks extends Component {
        handleComplete = e => {
                const id = e.target.dataset.id;
                this.props.completeTask(id);
        } 
        handleDelete = e => {
                const id = e.target.dataset.id;
                this.props.deleteTask(id);
        } 

        render() {
                return (
                        this.props.data.map(t => 
                                
                                 <Card key={t.id} className="mx-5" style={{ width: '35rem' }}>
                                        <Card.Body>
                                                <Card.Title>{t.text}</Card.Title>
                                                <Button variant="primary" className="px-4" onClick={this.handleComplete} data-id={t.id}>uncomplete</Button>
                                                <Button variant="secondary" className="px-4" onClick={this.handleDelete} data-id={t.id}>Delete</Button>
                                        </Card.Body>
                                </Card>
                        )
                
                )
        }

}

const mapStateToProps = state => ({
        data: state.data.filter(t => t.completed && !t.deleted),
    });

const mapDispatchToProps = dispatch => ({
        completeTask: id => dispatch(completeTask(id)),
        deleteTask:id => dispatch(deleteTask(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CompletedTasks);