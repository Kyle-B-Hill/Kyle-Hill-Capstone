import "./UserPage.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import logo from "../../Assets/logo/palomino-high-resolution-logo.png"
import { getUserEndpoint } from "../../Utils/api-utils"

const UserPage = () => {

    const [user, setUser] = useState([])

    const getUser = async () => {
        try {
            let res = await axios.get(getUserEndpoint(user.id));
            setUser(res.data);

            console.log(res.data);
        } catch (err) {
            console.log("Error", err);
        }
    }
    useEffect(() => {
        getUser();
    }, []);

    return (
        <>
            <section className="user-page">
                <div className="user-page__header">
                    <button>Logout</button>
                    <button>Edit Profile</button>
                </div>
                <div className="user-page__display-picture"></div>

            </section>
        </>
    )
}

export default UserPage;