import type { Joke } from "../types/joke.ts";
import JokeCard from "../components/JokeCard.tsx";
import { useEffect, useState } from "react";

function JokePage() {
    const [jokes, setJokes] = useState<Joke[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [jokeIndex,setJokeIndex]=useState<number>(0);

    useEffect(()=>{
        fetch("https://official-joke-api.appspot.com/jokes/programming/ten")
        .then((res)=>res.json())
        .then((data:Joke[])=>{
            setJokes(data);
            setLoading(false);
        })
        .catch((err)=>{
            console.error("Error fetching Jokes:",err);
            setLoading(false);
        })
    },[])
    return (
        <div className="joke-container">
            <h1>😂 Joke Viewer</h1>
            {
                loading ? <p>Jokes Loading...</p>
                :<div>
                    <JokeCard joke={jokes[jokeIndex]} />
                    <div className="jokes-btn">
                    <button disabled={jokeIndex===0} onClick={()=>{if(jokeIndex>0) setJokeIndex(prev=>prev-1)}}>Prev</button>
                    <button disabled={jokeIndex===jokes.length-1} onClick={()=>{if(jokeIndex < jokes.length) setJokeIndex(prev=>prev+1)}}>Next</button>
                    </div>
                </div>
            }
        </div>
    );
}

export default JokePage;
