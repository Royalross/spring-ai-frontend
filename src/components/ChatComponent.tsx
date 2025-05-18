import {useState} from "react";

export default function ChatComponent() {
    const [prompt, setPrompt] = useState('');
    const [chatReponses, setChatReponses] = useState('');

    const askAI = async () => {
        try {
            const response = await fetch(`http://localhost:8080/ask-ai?prompt=${encodeURIComponent(prompt)}`);
            const data = await response.text();
            console.log(data);
            setChatReponses(data);
        } catch (e) {
            console.error("Error Chat:", e);
        }
    };

    return (
        <div>
            <h2> Lets Talk to Open Ai </h2>
            <input type="text" value={prompt} onChange={(e) =>
                setPrompt(e.target.value)}
                   placeholder="Enter your message here"/>
            <button onClick={askAI}>Ask AI</button>
            <div className="output">
                <p>{chatReponses}</p>
            </div>
        </div>

    )
}