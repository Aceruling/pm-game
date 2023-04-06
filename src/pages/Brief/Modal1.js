import React, { useEffect, useState, useRef } from "react";

const Modal = (props) => {
    return (
        <div>
            <h1>Dashboard page</h1>
        </div>
    );
}
export default Dashboard

{/* <Modal isOpen={modalIsOpen} onAfterOpen={() => afterOpenModal("other")} onRequestClose={() => closeModal("other")} style={customStyles} contentLabel="Example Modal">
                    <h2 ref={(_subtitle) => (subtitle1 = _subtitle)}>{modalTitle}</h2>
                    <form>
                        <label>{valueTitle}</label>
                        <input className="form-control" value={value} onChange={(e) => {setvalue(e.target.value)}}/>
                        <label>{toleranceTitle}</label>
                        <input className="form-control" value={tolerance} onChange={(e) => {settolerance(e.target.value)}}/>
                    </form>
                    <div className='row'>
                        <button className="btn btn-success m-2 col-5" onClick={saveModal}>save</button>
                        <button className="btn btn-success m-2 col-5" onClick={() => closeModal("other")}>close</button>
                    </div>
                    
                </Modal>
                <Modal isOpen={scopeModalIsOpen} onAfterOpen={() => afterOpenModal("Scope")} onRequestClose={() => closeModal("Scope")} style={customStyles} contentLabel="Example Modal">
                <h1 ref={(_subtitle) => (subtitle2 = _subtitle)}>{modalTitle}</h1>
                <div className='row m-2'>
                    <label>Work Package Type: </label>
                    <select className='form-control' value={ wpType } onChange={(e) => {setWPType(e.target.value)}}> { workPackage.map(s =><option value={s} key={s}>{s}</option> )} </select>
                </div>
                <div className='row m-2'>
                    <label>Quality</label>
                    <div className='form-control col-5'>
                            <label>Name</label>
                            <input className="form-control" value={wpTypeName1} onChange={(e) => {setWPTypeName1(e.target.value)}}/>
                            <label>Value</label>
                            <input className="form-control" value={wpTypeValue1} onChange={(e) => {setWPTypeValue1(e.target.value)}}/>
                    </div>
                    <label>Acceptable Quality</label>
                    <div className='form-control col-5'>
                            <label>Name</label>
                            <input className="form-control" value={wpTypeName2} onChange={(e) => {setWPTypeName2(e.target.value)}}/>
                            <label>Value</label>
                            <input className="form-control" value={wpTypeValue2} onChange={(e) => {setWPTypeValue2(e.target.value)}}/>
                    </div>
                    <div className='row'>
                        <button className="btn btn-success m-2 col-3" onClick={addModal}>Add</button>
                        {/* <button className="btn btn-success m-2 col-3" onClick={saveModal}>save</button> */}
                        <button className="btn btn-success m-2 col-3" onClick={() => closeModal("Scope")}>close</button>
                    </div>
                    <div className='row'>
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

                </Modal> */}