import React from "react";
import { Link } from "react-router-dom"; 

const Dashboard = (props) => {
    return (
        <div>
            <h1>Dashboard page</h1>
            <p>Create Project Brief</p>
            <p>Project Tasks</p>
            <p>Resource Cards</p>
            <p>Risk Pool</p>
            <p>Emails</p>
            <Link to="/brief" className="btn btn-primary">Start</Link>
        </div>
    );
}
export default Dashboard