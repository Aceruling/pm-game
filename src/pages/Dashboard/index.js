import React, {useRef} from "react";
import { Link } from "react-router-dom"; 
import './index.scss';
import Brief from '../Brief'
import CreateTask from '../CreateTask';
import ResourceCard from '../ResourceCard';
import CreateRisk from '../CreateRisk';
import CreateEmail from '../CreateEmail';

const Dashboard = (props) => {
    const [status, setStatus] = React.useState(0);
    const pageRef = useRef();
    const onPrev = () => {
        if(status === 0) {
            pageRef.current.savePageData()    
        }
        setStatus(status > 0 ? status - 1 : 0 )
    }

    const onNext = () => {
        if(status === 0) {
            pageRef.current.savePageData()    
        }
        setStatus(status < 4 ? status + 1 : 4 )
    }
    return (
        <div className="flex full-container">
            <div className="sidebar">
                <nav id="navbar-example" className="navbar navbar-light bg-light flex-column">
                    <a className="navbar-brand" href="#">Dashboard Page</a>
                    <nav className="nav nav-pills flex-column">
                        <a className={`nav-link ${status === 0 ? "active" : ""}`}>Create Project Brief </a>
                        <a className={`nav-link ${status === 1 ? "active" : ""}`}>Project Tasks</a>
                        <a className={`nav-link ${status === 2 ? "active" : ""}`}>Resource Cards</a>
                        <a className={`nav-link ${status === 3 ? "active" : ""}`}>Risk Pool</a>
                        <a className={`nav-link ${status === 4 ? "active" : ""}`}>Emails</a>
                    </nav>
                </nav>
            </div>
            <main className="form-container flex flex-column">
                <div className="form-input">
                { status === 0 ?    <Brief ref={pageRef}/>
                : status === 1 ?  <CreateTask ref={pageRef} />
                : status === 2 ?  <ResourceCard ref={pageRef} />
                : status === 3 ?  <CreateRisk ref={pageRef} />
                : status === 4 ?  <CreateEmail ref={pageRef} />
                : <></>
                }
                </div>
                <div className="footer flex">
                    <div className="control-panel flex">
                        <button type="button" class="btn btn-outline-warning" onClick={onPrev}>Prev</button>
                        <button type="button" class="btn btn-outline-info" onClick={onNext}>Next</button>
                    </div>
                </div>
            </main>
        </div>
    );
}
export default Dashboard