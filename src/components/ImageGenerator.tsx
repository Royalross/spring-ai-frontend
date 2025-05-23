import {useState} from "react";

export default function ImageGenerator() {
    const [prompt, setPrompt] = useState('');
    const [imageUrls, setImageUrls] = useState([]);

    const generateImage = async () => {
        try {
            const response = await fetch(`http://localhost:8080/generate-image?prompt= ${prompt}`)
            const urls = await response.json();
            setImageUrls(urls);
        } catch (e) {
            console.error("Error generating image:", e)
        }
    }
    return (
        <div className={"tab-content"}>
            <h2> Generate Image</h2>
            <input type="text"
                   value={prompt}
                   onChange={(e) => setPrompt(e.target.value)}
                   placeholder="Enter prompt for image generation"/>
            <button onClick={generateImage}>Generate Image</button>

            <div className="image-grid">
                {imageUrls.map((url, index) => (
                    <img src={url} key={index} alt="image ${index}"/>))}
                {[...Array(4 - imageUrls.length).keys()].map(((_, index) => (
                    <div key={index + imageUrls.length} className="empty-image-slot"></div>
                )))}
            </div>
        </div>
    )
}