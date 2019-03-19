import React from 'react';
import AddTask from './components/Tasks/Add';
import TasksList from './components/Tasks/List';
import CompletedTasks from './components/Tasks/Completed';
import DeletedTasks from './components/Tasks/Deleted';

const App = () => (
    <>
        <AddTask/>
        <TasksList/>
        <div style={{margin:'1rem',padding:'1rem',border:'1px solid #007bff', display:'flex'}}> 
            <div  style={{ margin: '1rem', padding: '1rem', border: '1px solid #007bff',flexDirection:'column' }}>
                 <h2>Completed Tasks</h2>
                 <CompletedTasks/>
            </div>
            <div style={{margin:'1rem',padding:'1rem',border:'1px solid #007bff'}}>
                <h2>Deleted Tasks</h2>
                <DeletedTasks/>
            </div>
        </div> 
    </>
);

export default App;
