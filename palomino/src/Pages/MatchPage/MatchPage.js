import "./MatchPage.scss"
import { useEffect, useState } from "react";
import { getUserMatches } from "../../Utils/api-utils"
import axios from "axios";
import Footer from "../../Components/Footer/Footer";

function MatchPage() {

    const [matches, setMatches] = useState(null)
    
    const [currentMatch, setCurrentMatch] = useState(0)

    const getMatches = async (id) => {
        if (!id) {
            return;
        }
        try {
            let res = await axios.get(getUserMatches(id));
            setMatches(res.data);
            console.log(res.data);
        } catch (err) {
            console.log("Error", err);
        }
    }

    useEffect(() => {
        const userId = JSON.parse(localStorage.getItem("credentials")).id;
        console.log(userId);
        getMatches(userId);
    }, []);

    const incrementMatch = () => {
        if (matches.length > currentMatch + 1) {
            setCurrentMatch(currentMatch + 1);
        } else {
            setCurrentMatch(0);
        }
        
    }
    

    const mockPhotos = ["https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/2800/Keeley-Jones.Ted-Lasso.webp", 
    "https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F16902bec-f4cc-4c43-95b1-c42600eb6994_570x370.png", 
    "https://pbs.twimg.com/profile_images/1429153823847636992/oJZIOjbZ_400x400.jpg", 
    "https://tv-fanatic-res.cloudinary.com/iu/s--sS762lZs--/f_auto,q_auto/v1597103665/jamie-on-the-pitch-ted-lasso-s1e3", 
    "https://pyxis.nymag.com/v1/imgs/05a/fb0/9d4503c219f04cb9e035d0e916a09db4b7-ted-lasso-brendan-hunt.rhorizontal.w700.jpg" ]

    return (
        <>
            {matches && (
                <section className="match-page">
                    <h1 className="match-page__title">These Are Your Palominos!</h1>
                    {/* <div className="match-page__display-picture"></div> */}
                    <img className="match-page__display-picture"
                    src={mockPhotos[currentMatch]}
                    alt="new"
                    />
                        <div className="match-page__info-container">
                            <p className="match-page__info-name">This is {matches[currentMatch].user_name}</p>
                            <p className="match-page__info-info">They are {matches[currentMatch].age} years old and live in {matches[currentMatch].city}</p>
                            <p className="match-page__info-bio">{matches[currentMatch].bio}</p>
                            <p className="match-page__info-contact">You can reach them at {matches[currentMatch].email}!</p>
                        </div>
                    <div className="match-page__button-container">
                    <button className="match-page__button-remove"> Remove Palomino </button>
                        <button className="match-page__button-next" onClick={incrementMatch}> ➡️ </button>
                    </div>
                < Footer />
                </section>
            )}
        </>
    )
}

export default MatchPage;