import React, { useEffect, useState, useRef } from "react";
import './index.scss'

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
        <div className="row resource-page admin-sub-page">
            <div className="col-sm-3 create-content">
                <div className='form-group'>
                        <input className='form-control' placeholder='Resource Name' value={ resourceName } onChange={(e) => {setResourceName(e.target.value)}}></input>
                </div>

                <div className='form-group'>
                        <select className='form-control' placeholder='Resource industry' value={ resourceIndustry } onChange={(e) => {setResourceIndustry(e.target.value)}}> { industry.map(s =><option value={s} key={s}>{s} industry</option> )} </select>
                </div>

                <div className='form-group'>
                        <input className='form-control' placeholder='Technicale' value={ attriTechnical } onChange={(e) => {setAttriTechnical(e.target.value)}}></input>
                </div>

                <div className='form-group'>
                        <input className='form-control' placeholder='ATD' value={ attriATD } onChange={(e) => {setAttriATD(e.target.value)}}></input>
                </div>

                <div className='form-group'>
                        <input className='form-control' placeholder='Communication' value={ attriCommunication } onChange={(e) => {setAttriCommunication(e.target.value)}}></input>
                </div>

                <div className='form-group'>
                        <input className='form-control' placeholder='TeamPlayer' value={ attriTeamPlayer } onChange={(e) => {setAttriTeamPlayer(e.target.value)}}></input>
                </div>

                <div className='form-group'>
                        <input className='form-control' placeholder='Speed' value={ attriSpeed } onChange={(e) => {setAttriSpeed(e.target.value)}}></input>
                </div>

                <button className="btn btn-success" onClick={addModal}>Add</button>

                
                        
            </div>
            <div className="col-sm-9">
                <table className="table table-striped table-bordered">
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
        </div>
    );
}
export default ResourceCard