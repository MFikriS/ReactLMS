import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Dashboard = () => {
    const [authenticated, setauthenticated] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const loggedInUser = localStorage.getItem("authenticated");
        if (loggedInUser) {
            setauthenticated(loggedInUser);
        }
    }, []);

    if (!authenticated) {
        alert("You not login, please login");
        return <Navigate replace to="/login" />;
    } else {
    return (
        <>
        
        <h1>Dashboard</h1>
        </>
    )
    }
}

export default Dashboard;