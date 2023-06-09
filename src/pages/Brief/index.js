import React, { forwardRef, useImperativeHandle, useEffect, useState, useRef } from 'react';
import {connect} from 'react-redux'

import { saveBriefData } from '../../actions/gameActions'
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
  let subtitle1, subtitle2
const Brief = forwardRef((props, ref) => {
    const {saveBriefData} = props
    const category = ["IT", "Construct", "Cook"];
    const workPackage = ["Product", "Service", "Document"];

    const [workPackageArray, setworkPackageArray] = useState([]);
    const [workPackageCategory, setworkPackageCategory] = useState(category[0]);
    const [projectTitle, setProjectTitle] = useState("");
    const [projectDes, setProjectDes] = useState("");

    const [budgetValue, setBudgetValue] = useState("");
    const [budgetTolerance, setBudgetTolerance] = useState("");
    const [timeValue, setTimeValue] = useState("");
    const [timeTolerance, setTimeTolerance] = useState("");
    const [motivationValue, setMotivationValue] = useState("");

    const [wpName, setWPName] = useState("");
    const [wpType, setWPType] = useState(workPackage[0]);
    const [wpTypeName1, setWPTypeName1] = useState("");
    const [wpTypeValue1, setWPTypeValue1] = useState("");
    const [wpTypeName2, setWPTypeName2] = useState("");
    const [wpTypeValue2, setWPTypeValue2] = useState("");
    
    useImperativeHandle(ref, () => ({
        savePageData() {
            saveBriefData({
                projectName: projectTitle,
                workPackages: workPackageArray
            })
            console.log("project title: ", projectTitle)
        }
    }))

    function addModal() {
        let temp = [...workPackageArray];
        temp.push({
            type: wpType,
            packageName: wpName,
            name1: wpTypeName1,
            value1: wpTypeValue1,
            name2: wpTypeName2,
            value2: wpTypeValue2
        })
        setworkPackageArray(temp)
    }


    return (
      <div className='brief-page admin-sub-page row'>
            <div className='col-sm-3 basic-setting'>
                <div className='form-group'>
                    <input placeholder='Project Name' className='form-control' value={ projectTitle } onChange={(e) => {setProjectTitle(e.target.value)}}></input>
                </div>

                <div className='form-group'>
                    <select placeholder='Project Category' className='form-control' value={ workPackageCategory } onChange={(e) => {setworkPackageCategory(e.target.value)}}> { category.map(s =><option value={s} key={s}>{s}</option> )} </select>
                </div>

                <div className='form-group'>
                    <textarea placeholder='Project Content' className="form-control" value={ projectDes } onChange={(e) => {setProjectDes(e.target.value)}}  />
                </div>

                <div className='form-group row'>

                    {/* <div className='col-sm-2'>
                       <label>Budget: </label>       
                    </div> */}

                    <div className='col-sm-6'>
                        <input placeholder='Budget' className='form-control' value={ budgetValue } onChange={(e) => {setBudgetValue(e.target.value)}}></input>
                    </div>

                    <div className='col-sm-6'>
                        <input placeholder='Budget Tolorance' className='form-control' value={ budgetTolerance } onChange={(e) => {setBudgetTolerance(e.target.value)}}></input>
                    </div>

                </div>

                <div className='form-group row'>

                    <div className='col-sm-6'>
                        <input placeholder='Time' className='form-control' value={ timeValue } onChange={(e) => {setTimeValue(e.target.value)}}></input>
                    </div>

                    <div className='col-sm-6'>
                        <input placeholder='Time Tolorance' className='form-control' value={ timeTolerance } onChange={(e) => {setTimeTolerance(e.target.value)}}></input>
                    </div>

                </div>

                <div className='form-group'>
                    <input placeholder='Motivation: 50%' className='form-control' value={ motivationValue } onChange={(e) => {setMotivationValue(e.target.value)}}></input>
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

            <div className='form-group'>
                <input placeholder='Workpackage Name' className='form-control' value={wpName} onChange={(e) => {setWPName(e.target.value)}}></input>
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
                            <tr><th>Name</th><th>Type</th><th>Quality</th><th>value1</th><th>Acceptable Quality</th><th>value2</th></tr>
                        </thead>
                            <tbody>
                            {
                                workPackageArray.map((val, key) => {
                                    return (
                                        <tr key={key}>
                                            <td>{val.packageName}</td>
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
})

const mapStateToProps  = (state) => (
    {
        
    }
)
export default connect(mapStateToProps, {saveBriefData}, null, {forwardRef: true})(Brief)