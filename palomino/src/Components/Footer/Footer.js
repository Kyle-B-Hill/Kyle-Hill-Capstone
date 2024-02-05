import "./Footer.scss"
import { useNavigate } from "react-router-dom";



function Footer() {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem("credentials");
        console.log(localStorage);
        navigate("/");
    }
    const editProfileLink = () => {
        navigate("/Edit");
    }
    const profileLink = () => {
        navigate("/user")
    }
    const palominosLink = () => {
        navigate("/Palominos")
    }
  return (


    <footer className="footer">
        <div className='footer__item' onClick={profileLink}>Profile</div>
        <div className='footer__item' onClick={palominosLink}>Palominos</div>
        <div className='footer__item' onClick={editProfileLink}>Edit Profile</div>
        <div className='footer__item' onClick={logout}>Logout</div>
    </footer>
  )
}

export default Footer