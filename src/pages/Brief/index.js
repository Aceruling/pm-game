import React, { useEffect, useState, useRef } from 'react';
import { Link } from "react-router-dom"; 
import Modal from 'react-modal';
import './index.scss';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  let budgetValue, budgetTolerance, timeValue, timeTolerance, motivationValue, motivationTolerance, qualityValue, qualityTolerance;
  let subtitle1, subtitle2
const Brief = (props) => {

    const [modalTitle, setModalTitle] = useState("Time");
    const [valueTitle, setvalueTitle] = useState("Correct Value");
    const [toleranceTitle, settoleranceTitle] = useState("Acceptable Value");
    const [value, setvalue] = useState("");
    const [tolerance, settolerance] = useState("");
    const [workPackageArray, setworkPackageArray] = useState([]);
    const [workPackageCategory, setworkPackageCategory] = useState("");
    const [projectTitle, setProjectTitle] = useState("")
    const [projectDes, setProjectDes] = useState("")

    const [wpType, setWPType] = useState("");
    const [wpTypeName1, setWPTypeName1] = useState("");
    const [wpTypeValue1, setWPTypeValue1] = useState("");
    const [wpTypeName2, setWPTypeName2] = useState("");
    const [wpTypeValue2, setWPTypeValue2] = useState("");
    
    const category = ["IT", "Construct", "Cook"];
    const workPackage = ["Product", "Service", "Document"];
    const [modalIsOpen, setIsOpen] = useState(false);
    const [scopeModalIsOpen, setScopeIsOpen] = useState(false);

    const clickModalButton = (type) => {
        setModalTitle(type)
        if(type == "Scope") openModal("Scope");
        else openModal("other")
    }
    function openModal (type) {
        if(type == "Scope") setScopeIsOpen(true);
        else setIsOpen(true);
    }

    const afterOpenModal = (type) => {
        if(type == "Scope") {
            subtitle2.style.color = '#foo';
        }
        else subtitle1.style.color = '#foo';
    }

    function closeModal(type) {
        console.log(type)
        if(type == "Scope") setScopeIsOpen(false);
        else setIsOpen(false);
    }

    function saveModal () {
        console.log(modalTitle)
        switch(modalTitle)
        {
            case "Budget":
                    budgetValue = value;
                    budgetTolerance = tolerance;
                    break;
            case "Time":
                    timeValue = value;
                    timeTolerance = tolerance;
                    break;
            case "Motivation":
                    motivationValue = value;
                    motivationTolerance = tolerance;
                    break;
            case "Quality":
                    // qualityValue = value;
                    // qualityTolerance = value;
        }
        closeModal()
    }

    function addModal() {
        let temp = [...workPackageArray];
        temp.push({
            type: wpType,
            name1: wpTypeName1,
            value1: wpTypeValue1,
            name2: wpTypeName2,
            value2: wpTypeValue2
        })
        setworkPackageArray(temp)
    }

    const print = () => {
        console.log(budgetTolerance)
        console.log(timeTolerance)
        console.log(motivationTolerance)
        console.log(qualityTolerance)
    }

    return (
      <div className='brief-page admin-sub-page row'>
            <div className='col-sm-3 basic-setting'>
                <div className='form-group'>
                    <input placeholder='Project Name' className='form-control' value={ projectTitle } onChange={(e) => {setProjectTitle(e.target.value)}}></input>
                </div>

                <div className='form-group'>
                    <select placeholder='Project Category' className='form-control' value={ workPackageCategory } onChange={(e) => {setworkPackageCategory(e.target.value)}}> { category.map(s =><option value={s} key={s}>{s} category</option> )} </select>
                </div>

                <div className='form-group'>
                    <textarea placeholder='Project Content' className="form-control" value={ projectDes } onChange={(e) => {setProjectDes(e.target.value)}}  />
                </div>

                <div className='form-group row'>

                    {/* <div className='col-sm-2'>
                       <label>Budget: </label>       
                    </div> */}

                    <div className='col-sm-6'>
                        <input placeholder='Budget' className='form-control' value={ projectTitle } onChange={(e) => {setProjectTitle(e.target.value)}}></input>
                    </div>

                    <div className='col-sm-6'>
                        <input placeholder='Budget Tolorance' className='form-control' value={ projectTitle } onChange={(e) => {setProjectTitle(e.target.value)}}></input>
                    </div>

                </div>

                <div className='form-group row'>

                    <div className='col-sm-6'>
                        <input placeholder='Time' className='form-control' value={ projectTitle } onChange={(e) => {setProjectTitle(e.target.value)}}></input>
                    </div>

                    <div className='col-sm-6'>
                        <input placeholder='Time Tolorance' className='form-control' value={ projectTitle } onChange={(e) => {setProjectTitle(e.target.value)}}></input>
                    </div>

                </div>

                <div className='form-group'>
                    <input placeholder='Motivation: 50%' className='form-control' value={ projectTitle } onChange={(e) => {setProjectTitle(e.target.value)}}></input>
                </div>
            </div>
        
        
        <div className='col-sm-9 basic-setting'>            
            {/* <button className="btn btn-success m-2" onClick={() => clickModalButton("Budget")}>Budget</button>
            <button className="btn btn-success m-2" onClick={() => clickModalButton("Time")}>Time</button>
            <button className="btn btn-success m-2" onClick={() => clickModalButton("Motivation")}>Motivation</button>
            <button className="btn btn-success m-2" onClick={() => clickModalButton("Scope")}>Scope</button> */}
            {/* <button className="btn btn-success m-2" onClick={()=>print()}>console</button> */}

            <div className='form-group'>
                <select className='form-control' value={ wpType } onChange={(e) => {setWPType(e.target.value)}}> { workPackage.map(s =><option value={s} key={s}>{s}</option> )} </select>
            </div>

            <div className='form-group row'>

                <div className='col-sm-6'>
                    <input placeholder='Quality Name' className='form-control' value={wpTypeName1} onChange={(e) => {setWPTypeName1(e.target.value)}}></input>
                </div>

                <div className='col-sm-6'>
                    <input placeholder='Quality Value' className='form-control' value={wpTypeValue1} onChange={(e) => {setWPTypeValue1(e.target.value)}}></input>
                </div>
                    
            </div>

            <div className='form-group row'>

                <div className='col-sm-6'>
                    <input placeholder='Acceptable Quality Name' className='form-control' value={wpTypeName2} onChange={(e) => {setWPTypeName2(e.target.value)}}></input>
                </div>

                <div className='col-sm-6'>
                    <input placeholder='Acceptable Quality Value' className='form-control' value={wpTypeValue2} onChange={(e) => {setWPTypeValue2(e.target.value)}}></input>
                </div>
                
            </div>

            <div className='form-group'>
                <button className="btn btn-success col-md-6" onClick={addModal}>Add</button>       
            </div>

            <div className='form-group'>
            <table className="table table-striped table-bordered table-sm">
                        <thead className="bg-info text-white">
                            <tr><th>Type</th><th>Name1</th><th>value1</th><th>Name2</th><th>value2</th></tr>
                        </thead>
                            <tbody>
                            {
                                workPackageArray.map((val, key) => {
                                    return (
                                        <tr key={key}>
                                            <td>{val.type}</td>
                                            <td>{val.name1}</td>
                                            <td>{val.value1}</td>
                                            <td>{val.name2}</td>
                                            <td>{val.value2}</td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                            <tfoot className="text-center">
                                {/* <tr>
                                <td colSpan="5">
                                <button className="btn btn-info m-2" onClick={addModal }>Click Me</button>
                                </td>
                                </tr> */}
                            </tfoot>
                        </table>     
            </div>
                
        </div>

      </div>
    );
}

export default Brief;