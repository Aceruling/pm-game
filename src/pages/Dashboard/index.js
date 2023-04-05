import React from "react";
import { Link } from "react-router-dom"; 
import './index.scss';
import Brief from '../Brief'
import CreateTask from '../CreateTask';
import ResourceCard from '../ResourceCard';
import CreateRisk from '../CreateRisk';
import CreateEmail from '../CreateEmail';

const Dashboard = (props) => {
    const [status, setStatus] = React.useState(0);

    const onPrev = () => {
        setStatus(status > 0 ? status - 1 : 0 )
    }

    const onNext = () => {
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
                { status === 0 ?    <Brief />
                : status === 1 ?  <CreateTask />
                : status === 2 ?  <ResourceCard />
                : status === 3 ?  <CreateRisk />
                : status === 4 ?  <CreateEmail />
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