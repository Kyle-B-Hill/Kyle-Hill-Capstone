import "./UserPage.scss";
import Footer from "../../Components/Footer/Footer"
import { useEffect, useState } from "react";
import { getUserEndpoint, getUserEnjoysEndpoint } from "../../Utils/api-utils"
import axios from "axios";
import { useNavigate } from "react-router-dom";



const UserPage = () => {
 
    
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [activities, setActivities] = useState(null);
    // const [currentActivity, setCurrentActivity] = useState(null);

    const getUser = async (id) => {
        if (!id) {
            return;
        }
        try {
            let res = await axios.get(getUserEndpoint(id));
            setUser(res.data);
            console.log(res.data);
            
        } catch (err) {
            console.log("Error", err);
        }
    }
    useEffect(() => {
        const userId = JSON.parse(localStorage.getItem("credentials")).id;
        console.log(userId);
        getUser(userId);
    }, []);
    
    const getActivities = async (id) => {
        if (!id) {
            return;
        }
        try {
            let res = await axios.get(getUserEnjoysEndpoint(id))
            setActivities(res.data);
            console.log(res.data);
        } catch (err) {
            console.log("Error", err)
        }
    }

    useEffect(() => {
        const userId = JSON.parse(localStorage.getItem("credentials")).id;
        console.log(userId);
        getActivities(userId);
    }, []);

    console.log("These should be the activities:", activities);

    const findMatchesOneLink = () => {
        // setCurrentActivity(activities[0].activity_name)
        navigate("/enjoys/" + activities[0].activity_name)
    }
    const findMatchesTwoLink = () => {
        // setCurrentActivity(activities[1].activity_name)
        navigate("/enjoys/" + activities[1].activity_name)
    }
    const findMatchesThreeLink = () => {
        // setCurrentActivity(activities[2].activity_name)
        navigate("/enjoys/" + activities[2].activity_name)
    }

   
    

    return (
        <>
            {activities && (
                <section className="user-page">
                    <div className="user-page__display-picture"></div>
                    <h2 className="user-page__welcome">Hello {user.user_name}!</h2>
                    <div className="user-page__activities-container">
                        <h3 className="user-page__activities-title">Your Currently Selected Activies</h3>
                        <div className="user-page__activities-sub-container">
                            <p className="user-page__activities" onClick={findMatchesOneLink}>{activities[0].activity_name}</p>
                            <p className="user-page__activities" onClick={findMatchesTwoLink}>{activities[1].activity_name}</p>
                            <p className="user-page__activities" onClick={findMatchesThreeLink}>{activities[2].activity_name}</p>
                        </div>
                        <h3 className="user-page__activities-subtitle">Click On An Activity Find New Palominos!</h3>
                    </div>
                    
                < Footer />
                </section>
            )}
        </>
    )
}

export default UserPage;