import "./MatchPage.scss"
import { useEffect, useState } from "react";
import { getUserMatches } from "../../Utils/api-utils"
import axios from "axios";

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
    

    console.log("matches console log", matches);

    return (
        <>
            {matches && (
                <section>
                    <p>This is the match page</p>
                    <p>Your match is {matches[currentMatch].user_name}</p>
                    <button onClick={incrementMatch}>Next</button>
                </section>
            )}
        </>
    )
}

export default MatchPage;