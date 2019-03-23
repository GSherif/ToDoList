import React,{Component} from 'react';
import AddTask from './components/Tasks/Add';
import TasksList from './components/Tasks/List';
import CompletedTasks from './components/Tasks/Completed';
import DeletedTasks from './components/Tasks/Deleted';

export const MyContext = React.createContext({data:[]});

class App extends Component {

    state = {
        data: []
    }

    addTask = (task) => {
        const {data} = this.state;
        this.setState({data: data.concat(task) })
    }

    handleComplete =  (id) => {
        let updatedData = this.state.data.slice();
        const t = updatedData.find(t => t.id === id);
        t.completed = !t.completed;
        return this.setState({data: updatedData})
    } 

    handleDelete = (id) => {
        let updatedData2 = this.state.data.slice();
        const c = updatedData2.find(c => c.id === id);
        c.deleted = !c.deleted;
        return this.setState({data: updatedData2})
    } 

    render(){
        const value = {
            state: this.state,
            addTask: this.addTask,
            handleComplete: this.handleComplete,
            handleDelete: this.handleDelete 
        }

        return(
            <MyContext.Provider value={value}>
                <AddTask/>
                <div style={{margin:'1rem',padding:'1rem',border:'1px solid #007bff'}}>
                    <h2 style={{textAlign:'center'}}>All Tasks</h2>
                    <TasksList/>
                </div>    
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
            </MyContext.Provider>
            );
            
        }
}
export default App;
