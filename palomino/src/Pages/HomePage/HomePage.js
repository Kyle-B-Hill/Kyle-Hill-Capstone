import { postUserLogin } from "../../Utils/api-utils"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./HomePage.scss";


const HomePage = () => {

    const navigate = useNavigate();
    // const { userId } = useParams();
    // const [users, setUsers] = useState([]);
    // const [selectedUser, setSelectedUser ] = useState([]);

    // const getUsers = async () => {
    //     try {
    //         let res = await axios.get(getUsersEndpoint());
    //         setUsers(res.data)
    //         console.log(res.data)
    //     } catch (err) {
    //         console.log("Users error", err);
    //     }
    // }

    // useEffect(() => {
    //     getUsers();
    // },[]);

    // console.log("These should be users:", users);

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
                    <label>
                        Username: <input type="text" name="username"/>
                    </label>
                    <label>
                        Password: <input type="password" name="password" />
                    </label>
                    <button>Log In</button>
                </form>
            </div>
            {/* <div className="home-page__card--container">
                <div className="home-page__card--container">
                    <a className="home-page__login">Log in</a>
                    <div className="inputBox">
                        <input type="text" required="required"/>
                        <span className="user">Username</span>
                    </div>
                    <div className="inputBox">
                        <input type="password" required="required"/>
                        <span>Password</span>
                    </div>
                    <button className="enter">Enter</button>
                </div>
            </div> */}
            
        </section>
        </>
    )
}

export default HomePage;