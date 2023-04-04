import React, { useState, useEffect } from "react";

let uniqueNumber = 0
const CreaetRisk = (props) => {
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
export default CreaetRisk