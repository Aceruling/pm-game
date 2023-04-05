import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 

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
        <div>
            <Link to="/create-email" className="btn btn-primary">Next</Link>
            <Link to="/" className="btn btn-primary">Start</Link>
            <fieldset>
                <legend>Choose your interests</legend>
                <div>
                    <input type="checkbox" id="time" name="time" checked={timeCheck} onChange={() => setTimeCheck((prev) => !prev)}/>
                    <label for="time">Time</label>
                    <p>{timeID}</p>
                </div>
                <div>
                    <input type="checkbox" id="budget" name="budget" checked={budgetCheck} onChange={() => setBudgetCheck((prev) => !prev)}/>
                    <label for="budget">Budget</label>
                    <p>{budgetID}</p>
                </div>
                <div>
                    <input type="checkbox" id="qualtiy" name="qualtiy" checked={qualityCheck} onChange={() => setQualityCheck((prev) => !prev)}/>
                    <label for="qualtiy">Quality</label>
                    <p>{qualityID}</p>
                </div>
                <div>
                    <input type="checkbox" id="motivation" name="motivation" checked={motivationCheck} onChange={() => setMotivationCheck((prev) => !prev)}/>
                    <label for="motivation">Motivation</label>
                    <p>{motivationID}</p>
                </div>
            </fieldset>
            <button onClick={createRiskFunc}>Create Risk</button>
        </div>
    );
}
export default CreateRisk