import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom"; 

const ResourceCard = (props) => {

    const [resourceName, setResourceName] = useState("");
    const [resourceIndustry, setResourceIndustry] = useState("");
    const [attriTechnical, setAttriTechnical] = useState("");
    const [attriATD, setAttriATD] = useState("");
    const [attriCommunication, setAttriCommunication] = useState("");
    const [attriTeamPlayer, setAttriTeamPlayer] = useState("");
    const [attriSpeed, setAttriSpeed] = useState("");
    const [resource, setResource] = useState([]);

    const industry = ["IT", "Construct", "Cook"];

    function addModal() {
        let temp = [...resource];
        temp.push({
            Name: resourceName,
            Industry: resourceIndustry,
            Technical: attriTechnical,
            ATD: attriATD,
            Communication: attriCommunication,
            TeamPlayer:attriTeamPlayer,
            Speed:attriSpeed,
        })
        setResource(temp)
    }

    return (
        <div>
            <h1>ResourceCard</h1>
            <Link to="/create-risk" className="btn btn-primary">Start</Link>

            <div className='form-group m-5'>
                    <label>Resource Name: </label>
                    <input className='form-control' value={ resourceName } onChange={(e) => {setResourceName(e.target.value)}}></input>
            </div>

            <div className='form-group m-5'>
                    <label>Resource industry: </label>
                    <select className='form-control' value={ resourceIndustry } onChange={(e) => {setResourceIndustry(e.target.value)}}> { industry.map(s =><option value={s} key={s}>{s} industry</option> )} </select>
            </div>

            <div className='form-group m-5'>
                    <label>Technical: </label>
                    <input className='form-control' value={ attriTechnical } onChange={(e) => {setAttriTechnical(e.target.value)}}></input>
            </div>

            <div className='form-group m-5'>
                    <label>ATD: </label>
                    <input className='form-control' value={ attriATD } onChange={(e) => {setAttriATD(e.target.value)}}></input>
            </div>

            <div className='form-group m-5'>
                    <label>Communication: </label>
                    <input className='form-control' value={ attriCommunication } onChange={(e) => {setAttriCommunication(e.target.value)}}></input>
            </div>

            <div className='form-group m-5'>
                    <label>TeamPlayer: </label>
                    <input className='form-control' value={ attriTeamPlayer } onChange={(e) => {setAttriTeamPlayer(e.target.value)}}></input>
            </div>

            <div className='form-group m-5'>
                    <label>Speed: </label>
                    <input className='form-control' value={ attriSpeed } onChange={(e) => {setAttriSpeed(e.target.value)}}></input>
            </div>

            <button className="btn btn-primary m-2 col-3" onClick={addModal}>Add</button>

            <table className="table table-striped table-bordered table-sm">
                <thead className="bg-info text-white">
                    <tr><th>Name</th><th>Industry</th><th>Technical</th><th>ATD</th><th>Communication</th><th>TeamPlayer</th><th>Speed</th></tr>
                </thead>
                <tbody>
                {
                    resource.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.Name}</td>
                                <td>{val.Industry}</td>
                                <td>{val.Technical}</td>
                                <td>{val.ATD}</td>
                                <td>{val.Communication}</td>
                                <td>{val.TeamPlayer}</td>
                                <td>{val.Speed}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>   
                    
        </div>
    );
}
export default ResourceCard