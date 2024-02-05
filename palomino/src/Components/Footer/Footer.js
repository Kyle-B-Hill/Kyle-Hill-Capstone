import "./Footer.scss"
import React from 'react'



function Footer() {
    // add on click function, within that localStorage.removeItem("credentials")

    const logout = () => {
        localStorage.removeItem("credentials")
        console.log(localStorage)
        // stick navigate in here as well
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