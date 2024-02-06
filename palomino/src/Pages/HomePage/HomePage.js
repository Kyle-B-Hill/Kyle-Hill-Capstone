import { postUserLogin } from "../../Utils/api-utils"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./HomePage.scss";


const HomePage = () => {

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = event.target;
        const password = form.password.value;
        const username = form.username.value;
        if (!username || !password) {
            alert("You must fill out all fields");
            return;
        };
        try {
            const userCredentials = await axios.post(postUserLogin(), {
                user_name: username,
                password: password
            })
            console.log(userCredentials.data[0].age);
            localStorage.setItem("credentials", JSON.stringify(userCredentials.data[0]));
            console.log(JSON.parse(localStorage.getItem("credentials")))
            navigate("/user")
        } catch (err) {
            console.log("Error", err)
        }     
    }


    return (
        <>
        <section className="home-page">
            <div className="home-page__display--picture"></div>
            <div className="home-page-welcome-container">
                <h2 className="home-page-welcome-message">Welcome to Palomino!</h2>
                <h4 className="home-page-welcome-slogan">Shared Interests, Endless Connections.</h4>
            </div>
            <div className="home-page__form--container">
                <form onSubmit={handleSubmit}>
                    <p className="home-page__login">Log In</p>
                    <div className="home-page__input-box">
                        <label>                           
                            <input type="text" name="username" placeholder="Username"/>
                        </label>
                    </div>
                    <div className="home-page__input-box">
                        <label>                        
                            <input type="password" name="password" placeholder="Password"/>
                        </label>
                    </div>
                    <button className="home-page__button-enter">Log In</button>
                </form>
            </div>          
        </section>
        </>
    )
}

export default HomePage;