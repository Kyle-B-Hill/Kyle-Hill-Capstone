import "./Footer.scss"
import { useNavigate } from "react-router-dom";



function Footer() {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem("credentials");
        console.log(localStorage);
        navigate("/");
    }
  return (


    <footer className="footer">
        <div className='footer__item'>Profile</div>
        <div className='footer__item'>Palominos</div>
        <div className='footer__item'>Edit Profile</div>
        <div className='footer__item' onClick={logout}>Logout</div>
    </footer>
  )
}

export default Footer