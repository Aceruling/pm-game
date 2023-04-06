import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import './index.scss'

const CreateEmail = (props) => {
    const [normalEmailList, setNormalEmailList] = useState([])
    const [decisionEmailList, setDecisionEmailList] = useState([])
    const [normalDescription, setNormalDescription] = useState("")    
    const [decisionEmailData, setDecisionEmailData] = useState({
        description: "",
        answer1: "",
        time1: 0,
        budget1: 0,
        quality1: 0,
        motivation1: 0,
        answer2: "",
        time2: 0,
        budget2: 0,
        quality2: 0,
        motivation2: 0
    })
    const changeDecisionEmailData = (type, value) => {
        setDecisionEmailData({
            ...decisionEmailData,
            [type]: value
        })
    }
    const createDecisionMailFunc = () => {
        let _emailList = [...decisionEmailList]
        _emailList.push({...decisionEmailData})
        setDecisionEmailList(_emailList)
    }
    const createNormalEmailFunc = () => {
        let _emailList = [...normalEmailList]
        _emailList.push({description: normalDescription})
        setNormalEmailList(_emailList)
    }
    return (
        <div className="row email-page admin-sub-page">
            <div className="col-sm-6 create-normal">
            <legend>Normal</legend>

            <div className="form-group gap-20">
                <div>
                    <input className="form-control" placeholder="mail" value={normalDescription} onChange={(e)=>setNormalDescription(e.target.value)}></input>
                </div>
                <div>
                    <button className="btn btn-success col-md-6" onClick={createNormalEmailFunc}>Create Email</button>
                </div>
            </div>

            <div className="form-group mt-3">
                <table className="wide">
                    <tr>
                        <th>mail</th>
                    </tr>
                    {
                        normalEmailList.map((val, key) => {
                            return (
                                <tr key={key}>
                                    <td>{val.description}</td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>    

            </div>

            <div className="col-sm-6 create-decision">
            <legend>Decision</legend>
                <div className="form-group">
                    <input placeholder="email content" className="form-control" value={decisionEmailData.description} onChange={(e)=>changeDecisionEmailData("description", e.target.value)}></input>
                </div>
                
                <div className="form-group row mt-3">
                    <div className="col-md-6 gap-20">
                        <div>
                            <input placeholder="Answer1" className="form-control" value={decisionEmailData.answer1} onChange={(e)=>changeDecisionEmailData("answer1", e.target.value)}></input>
                        </div>
                        <div>
                            <input placeholder="Time" className="form-control" value={decisionEmailData.time1} onChange={(e)=>changeDecisionEmailData("time1", e.target.value)}></input>
                        </div>
                        <div>
                            <input placeholder="Budget" className="form-control" value={decisionEmailData.budget1} onChange={(e)=>changeDecisionEmailData("budget1", e.target.value)}></input>
                        </div>
                        <div>
                            <input placeholder="Quality" className="form-control" value={decisionEmailData.quality1} onChange={(e)=>changeDecisionEmailData("quality1", e.target.value)}></input>
                        </div>
                        <div>
                            <input placeholder="Motivation" className="form-control" value={decisionEmailData.motivation1} onChange={(e)=>changeDecisionEmailData("motivation1", e.target.value)}></input>
                        </div>
                    </div>
                    <div className="col-md-6 gap-20">         
                        <div>
                            <input placeholder="Answer2" className="form-control" value={decisionEmailData.answer2} onChange={(e)=>changeDecisionEmailData("answer2", e.target.value)}></input>
                        </div>
                        <div>
                            <input placeholder="Time" className="form-control" value={decisionEmailData.time2} onChange={(e)=>changeDecisionEmailData("time2", e.target.value)}></input>
                        </div>
                        <div>
                            <input placeholder="Budget" className="form-control" value={decisionEmailData.budget2} onChange={(e)=>changeDecisionEmailData("budget2", e.target.value)}></input>
                        </div>
                        <div>
                            <input placeholder="Quality" className="form-control" value={decisionEmailData.quality2} onChange={(e)=>changeDecisionEmailData("quality2", e.target.value)}></input>
                        </div>
                        <div>
                            <input placeholder="Motivation" className="form-control" value={decisionEmailData.motivation2} onChange={(e)=>changeDecisionEmailData("motivation2", e.target.value)}></input>
                        </div>
                    </div>
                </div>
                
                <div className="form-group mt-3">
                    <button className="form-control btn btn-success" onClick={createDecisionMailFunc}>Create Email</button>
                </div>

                <div className="form-group mt-3">
                    <table className="wide">
                        <tr>
                            <th>mail</th>
                            <th>Answer A </th>
                            <th>Answer B</th>
                        </tr>
                        {
                            decisionEmailList.map((val, key) => {
                                return (
                                    <tr key={key}>
                                        <td>{val.description}</td>
                                        <td>{val.answer1}</td>
                                        <td>{val.answer2}</td>
                                    </tr>
                                )
                            })
                        }
                    </table>
                </div>
            </div>
        </div>
    );
}
export default CreateEmail