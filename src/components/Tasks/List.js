import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import { MyContext } from '../../App';


class TasksList extends Component {

    completedTaskId = (handleComplete) => (e) => {
        const cid = e.target.dataset.id;
        handleComplete(cid);
    }

    deletedTaskId = (handleDelete) => (e) => {
        const did = e.target.dataset.id;
        handleDelete(did);
    }

    render() {
        return (
            <MyContext.Consumer>
                {
                    value => (
                        value.state.data.filter(t => !(t.completed || t.deleted)).map(t =>
                            <Card className="mx-5" key={t.id}>
                                <Card.Body>
                                    <Card.Title>{t.text}</Card.Title>
                                    <Button variant="primary" className="mr-3" data-id={t.id} onClick={this.completedTaskId(value.handleComplete)}>Complete</Button>
                                    <Button variant="secondary" className="px-4" data-id={t.id} onClick={this.deletedTaskId(value.handleDelete)}>Delete</Button>
                                </Card.Body>
                            </Card>

                        )
                    )
                }
            </MyContext.Consumer>
        )
    }
}

export default TasksList;
