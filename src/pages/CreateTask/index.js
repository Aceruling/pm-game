import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 

const CreateTask = (props) => {
    const [taskList, setTaskList] = useState([])    
    const [taskName, setTaskName] = useState("")
    const [taskProject, setTaskProject] = useState("")
    const [taskWorkpackage, setTasWorkpackage] = useState("")

    const createTaskFunc = () => {
        let _taskList = [...taskList]
        console.log("_taskList: ", taskList)
        let maxID = 0;
        for (var i in taskList) {
            maxID = taskList[i].id > maxID ? taskList[i].id : maxID
        }
        const _id = maxID + 1
        setTaskList([...taskList, {
            id: _id,
            name: taskName,
            project: taskProject,
            workpackage: taskWorkpackage,
            parallel: false
        }])
    }
    const clickParallelCheckBox = (id) => {
        let _taskList = [...taskList]
        console.log("taskList: ", _taskList)
        const found = _taskList.find(element => element.id === id);
        found.parallel = !found.parallel
        setTaskList(_taskList)
    }
    return (
        <div>
            <Link to="/resourcecard" className="btn btn-primary">Next</Link>
            <Link to="/" className="btn btn-primary">Start</Link>
            
            <fieldset>
                <legend>Fill the fields</legend>
                <div>
                    <label>name </label>
                    <input value={taskName} onChange={(e)=>setTaskName(e.target.value)}></input>
                </div>
                <div>
                    <label>project </label>
                    <select name="selectedFruit" defaultValue={taskProject} onChange={(e)=>setTaskProject(e.target.value)}>
                        <option value="ProjectA">ProjectA</option>
                        <option value="ProjectB">ProjectB</option>
                        <option value="ProjectC">ProjectC</option>
                    </select>
                </div>
                <div>
                    <label>workpackage </label>
                    <select name="selectedFruit" defaultValue={taskWorkpackage} onChange={(e)=>setTasWorkpackage(e.target.value)}>
                        <option value="product">Product</option>
                        <option value="service">Service</option>
                        <option value="document">Document</option>
                    </select>
                </div>
                <button onClick={createTaskFunc}>Create Task</button>
            </fieldset>
            <table>
                <tr>
                    <th>name</th>
                    <th>project</th>
                    <th>workpackage</th>
                    <th>parallel</th>
                    <th></th>
                </tr>
                {
                    taskList.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.name}</td>
                                <td>{val.project}</td>
                                <td>{val.workpackage}</td>
                                <td><input type="checkbox" checked={val.parallel} onChange={() => clickParallelCheckBox(val.id)} name="time"/></td>
                                <td>
                                {
                                    val.parallel === true &&
                                    <select name="selectedFruit" defaultValue={taskProject}>
                                        {
                                            taskList.map((val, key) => {
                                                return (
                                                    <option value={val.id}>{val.name}</option>
                                                )
                                            })
                                        }
                                    </select>
                                }
                                </td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    );
}
export default CreateTask