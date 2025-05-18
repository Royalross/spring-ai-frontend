import './App.css'
import {useState} from 'react'
import ImageGenerator from "./components/ImageGenerator.tsx";
import ChatComponent from "./components/ChatComponent.tsx";
import RecipeGenerator from "./components/RecipeGenerator.tsx";

export default function App() {
    const [activeTab, setActiveTab] = useState('image-generator');

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
    }

    return (
        <div className="App">
            <button className={activeTab === 'image-generator' ? 'active' : ''}
                    onClick={() => handleTabChange('image-generator')}>Image Generator
            </button>
            <button className={activeTab === 'chat' ? 'active' : ''}
                    onClick={() => handleTabChange('chat')}>Ask AI
            </button>
            <button className={activeTab === 'recipe-generator' ? 'active' : ''}
                    onClick={() => handleTabChange('recipe-generator')}>Recipe Generator
            </button>

            <div>
                {/* if the left side is true, render right  */}
                {activeTab === 'image-generator' && <ImageGenerator/>}
                {activeTab === 'chat' && <ChatComponent/>}
                {activeTab === 'recipe-generator' && <RecipeGenerator/>}
            </div>
        </div>


    );

}


