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
            setCurrentMatch(0);
        }
        
    }

    return (
        <>
            {loadMatches && (
                <section>        
                    <p>This is find matches page {Activity}</p>
                    <p>Your match is {loadMatches[currentMatch].user_name}</p>
                    <p>This is their bio {loadMatches[currentMatch].bio}</p>
                    <button onClick={incrementLoadMatches}>Next</button>
                < Footer />
                </section>
            )}
        </>
    )
    

}

export default FindMatches;
