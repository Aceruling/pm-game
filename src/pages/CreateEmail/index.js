import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 

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
        <div>
            <fieldset>
                <legend>Normal</legend>
                <div>
                    <label>mail </label>
                    <input value={normalDescription} onChange={(e)=>setNormalDescription(e.target.value)}></input>
                </div>
                <button onClick={createNormalEmailFunc}>Create Email</button>
            </fieldset>
            <fieldset>
                <legend>Decision</legend>
                <div>
                    <label>mail </label>
                    <input value={decisionEmailData.description} onChange={(e)=>changeDecisionEmailData("description", e.target.value)}></input>
                </div>
                <div>
                    <label>Answer1 </label>
                    <input value={decisionEmailData.answer1} onChange={(e)=>changeDecisionEmailData("answer1", e.target.value)}></input>
                </div>
                <div>
                    <label>Time </label>
                    <input value={decisionEmailData.time1} onChange={(e)=>changeDecisionEmailData("time1", e.target.value)}></input>
                </div>
                <div>
                    <label>Budget </label>
                    <input value={decisionEmailData.budget1} onChange={(e)=>changeDecisionEmailData("budget1", e.target.value)}></input>
                </div>
                <div>
                    <label>Quality </label>
                    <input value={decisionEmailData.quality1} onChange={(e)=>changeDecisionEmailData("quality1", e.target.value)}></input>
                </div>
                <div>
                    <label>Motivation </label>
                    <input value={decisionEmailData.motivation1} onChange={(e)=>changeDecisionEmailData("motivation1", e.target.value)}></input>
                </div>

                <div>
                    <label>Answer2 </label>
                    <input value={decisionEmailData.answer2} onChange={(e)=>changeDecisionEmailData("answer2", e.target.value)}></input>
                </div>
                <div>
                    <label>Time </label>
                    <input value={decisionEmailData.time2} onChange={(e)=>changeDecisionEmailData("time2", e.target.value)}></input>
                </div>
                <div>
                    <label>Budget </label>
                    <input value={decisionEmailData.budget2} onChange={(e)=>changeDecisionEmailData("budget2", e.target.value)}></input>
                </div>
                <div>
                    <label>Quality </label>
                    <input value={decisionEmailData.quality2} onChange={(e)=>changeDecisionEmailData("quality2", e.target.value)}></input>
                </div>
                <div>
                    <label>Motivation </label>
                    <input value={decisionEmailData.motivation2} onChange={(e)=>changeDecisionEmailData("motivation2", e.target.value)}></input>
                </div>
                <button onClick={createDecisionMailFunc}>Create Email</button>
            </fieldset>
            <table>
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
            <table>
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
    );
}
export default CreateEmail