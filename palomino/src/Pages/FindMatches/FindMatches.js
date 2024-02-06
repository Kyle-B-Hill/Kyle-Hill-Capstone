import "./FindMatches.scss"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFindMatchesEndpoints } from "../../Utils/api-utils";
import axios from "axios";
import Footer from "../../Components/Footer/Footer";


const FindMatches = () => {

    const {Activity} = useParams(); 
    const [loadMatches, setLoadMatches] = useState(null)
    const [currentMatch, setCurrentMatch] = useState(1)

    console.log(Activity);

    const getLoadMatches = async (Activity) => {
        try {
            let res = await axios.get(getFindMatchesEndpoints(Activity));
            setLoadMatches(res.data);
            console.log(res.data);
        } catch (err) {
            console.log("Error", err)
        }
    }
    useEffect(() => {
        getLoadMatches(Activity)
    }, []);

    const incrementLoadMatches = () => {
        if (loadMatches.length > currentMatch + 1) {
            setCurrentMatch(currentMatch + 1);
        } else {
            setCurrentMatch(1);
        }
        
    }

    const addPalomino = () => {
        incrementLoadMatches();
    }

    const removePalomino = () => {
        incrementLoadMatches();
    }

    const mockPhotos = ["https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/2800/Keeley-Jones.Ted-Lasso.webp", 
    "https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F16902bec-f4cc-4c43-95b1-c42600eb6994_570x370.png", 
    "https://pbs.twimg.com/profile_images/1429153823847636992/oJZIOjbZ_400x400.jpg", 
    "https://tv-fanatic-res.cloudinary.com/iu/s--sS762lZs--/f_auto,q_auto/v1597103665/jamie-on-the-pitch-ted-lasso-s1e3", 
    "https://pyxis.nymag.com/v1/imgs/05a/fb0/9d4503c219f04cb9e035d0e916a09db4b7-ted-lasso-brendan-hunt.rhorizontal.w700.jpg" ]


    return (
        <>
            {loadMatches && (
                <section className="findmatches-page">
                    <h1 className="findmatches-page__title">These are your new Palominos that also enjoy {Activity}!</h1>        
                    {/* <div className="findmatches-page__display-picture"></div> */}
                    <img className="findmatches-page__display-picture"
                    src={mockPhotos[currentMatch]}
                    alt="new"
                    />
                        <div className="findmatches-page__info-container">
                            <p className="findmatches-page__info-name">This is {loadMatches[currentMatch].user_name}</p>
                            <p className="findmatches-page__info-info">They are {loadMatches[currentMatch].age} years old and live in {loadMatches[currentMatch].city}</p>
                            <p className="findmatches-page__info-bio">{loadMatches[currentMatch].bio}</p>
                        </div>
                    <div className="findmatches-page__buton-container">
                        <button className="findmatches-page__buton" onClick={removePalomino}> 👎 </button>
                        <button className="findmatches-page__buton" onClick={incrementLoadMatches}> ➡️ </button>
                        <button className="findmatches-page__buton" onClick={addPalomino}> 👍 </button>
                    </div>
                < Footer />
                </section>
            )}
        </>
    )
    

}

export default FindMatches;
