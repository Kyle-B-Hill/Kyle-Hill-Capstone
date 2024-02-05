import "./UserPage.scss";
import Footer from "../../Components/Footer/Footer"
import { useEffect, useState } from "react";
import { getUserEndpoint, getUserEnjoysEndpoint } from "../../Utils/api-utils"
import axios from "axios";


const UserPage = () => {
 
    const [user, setUser] = useState(null);
    const [activities, setActivities] = useState(null);

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

    return (
        <>
            {activities && (
                <section className="user-page">
                    <p>Hello {user.user_name}</p>
                    <div className="user-page__display-picture"></div>
                    <p>First activity {activities[0].activity_name}</p>
                    <p>Second activity {activities[1].activity_name}</p>
                    <p>Third activity {activities[2].activity_name}</p>
                < Footer />
                </section>
            )}
        </>
    )
}

export default UserPage;