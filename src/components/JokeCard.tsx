import type { Joke } from "../types/joke.ts";
import './jokeCard.css';
type JokeCardProps = {
    joke: Joke;
};

const JokeCard = ({ joke }: JokeCardProps) => {
    return (
        <div className="joke-card">
            <h3>{joke.setup}</h3>
            <p>{joke.punchline}</p>
        </div>
    );
};

export default JokeCard;
