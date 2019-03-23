import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import { MyContext } from '../../App';

class CompletedTasks extends Component {
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
                                                value.state.data.filter(t => (t.completed && !t.deleted)).map(t =>

                                                        <Card key={t.id} className="mx-5" style={{ width: '35rem' }}>
                                                                <Card.Body>
                                                                        <Card.Title>{t.text}</Card.Title>
                                                                        <Button variant="primary" className="px-4" onClick={this.completedTaskId(value.handleComplete)} data-id={t.id}>uncomplete</Button>
                                                                        <Button variant="secondary" className="px-4" onClick={this.deletedTaskId(value.handleDelete)} data-id={t.id}>Delete</Button>
                                                                </Card.Body>
                                                        </Card>
                                                )
                                        )
                                }
                        </MyContext.Consumer>
                )
        }

}

export default CompletedTasks;