import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import './index.scss';

let uniqueNumber = 0
const CreateRisk = (props) => {
    const [timeCheck, setTimeCheck] = useState(false)
    const [budgetCheck, setBudgetCheck] = useState(false)
    const [qualityCheck, setQualityCheck] = useState(false)
    const [motivationCheck, setMotivationCheck] = useState(false)

    const [timeID, setTimeID] = useState("")
    const [budgetID, setBudgetID] = useState("")
    const [qualityID, setQualityID] = useState("")
    const [motivationID, setMotivationID] = useState("")

    const createRiskFunc = () => {
        let numStr
        if(timeCheck) {
            uniqueNumber ++
            numStr = ("0000000" + uniqueNumber).slice(-7)
            setTimeID("RT" + numStr)
        }
        else setTimeID("")
        if(budgetCheck) {
            uniqueNumber ++
            numStr = ("0000000" + uniqueNumber).slice(-7)
            setBudgetID("RB" + numStr)
        }
        else setBudgetID("")
        if(qualityCheck) {
            uniqueNumber ++
            numStr = ("0000000" + uniqueNumber).slice(-7)
            setQualityID("RQ" + numStr)
        }
        else setQualityID("")
        if(motivationCheck) {
            uniqueNumber ++
            numStr = ("0000000" + uniqueNumber).slice(-7)
            setMotivationID("RM" + numStr)
        }
        else setMotivationID("")
    }
    
    return (
        <div className="risk-page admin-sub-page">
            <div className="risk-container">
                <div className="risk-cell">
                    <div className="risk-check">
                        <input className="checkbox-size" type="checkbox" id="time" name="time" checked={timeCheck} onChange={() => setTimeCheck((prev) => !prev)}/>
                        <label className="font-30" for="time">Time</label>
                    </div>
                    <p className="font-30 risk-name">{timeID}</p>
                </div>
                <div className="risk-cell">
                    <div className="risk-check">
                        <input className="checkbox-size" type="checkbox" id="budget" name="budget" checked={budgetCheck} onChange={() => setBudgetCheck((prev) => !prev)}/>
                        <label className="font-30" for="budget">Budget</label>
                    </div>
                    <p className="font-30 risk-name">{budgetID}</p>
                </div>
                <div className="risk-cell">
                    <div className="risk-check">
                        <input className="checkbox-size" type="checkbox" id="qualtiy" name="qualtiy" checked={qualityCheck} onChange={() => setQualityCheck((prev) => !prev)}/>
                        <label className="font-30" for="qualtiy">Quality</label>
                    </div>
                    <p className="font-30 risk-name">{qualityID}</p>
                </div>
                <div className="risk-cell">
                    <div className="risk-check">
                        <input className="checkbox-size" type="checkbox" id="motivation" name="motivation" checked={motivationCheck} onChange={() => setMotivationCheck((prev) => !prev)}/>
                        <label className="font-30" for="motivation">Motivation</label>
                    </div>
                        <p className="font-30 risk-name">{motivationID}</p>
                </div>
            
            </div>
            <button className="btn btn-success" onClick={createRiskFunc}>Create Risk</button>
        </div>
    );
}
export default CreateRisk