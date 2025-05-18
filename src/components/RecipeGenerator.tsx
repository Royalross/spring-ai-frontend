import {useState} from "react";
import ReactMarkdown from 'react-markdown';

export default function RecipeGenerator() {
    const [ingredients, setIngredients] = useState('');
    const [cuisine, setcuisine] = useState("any");
    const [dietaryRestriction, setdietaryRestriction] = useState('');
    const [recipe, setRecipe] = useState('');

    const createRecipe = async () => {
        try {
            const response = await fetch(
                `http://localhost:8080/recipe-creator?ingredients=${ingredients}&dietaryRestriction=${dietaryRestriction}&cuisine=${cuisine}`
            );
            const data = await response.text();
            console.log(data);
            setRecipe(data);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div>
            <h2> Recipe Generator Component </h2>
            <input type="text"
                   value={ingredients}
                   onChange={(e) => setIngredients(e.target.value)}
                   placeholder="Enter ingredients (comma seprated)"
            />

            <input type="text"
                   value={cuisine}
                   onChange={(e) => setcuisine(e.target.value)}
                   placeholder="Enter cuisine"
            />
            <input type="text"
                   value={dietaryRestriction}
                   onChange={(e) => setdietaryRestriction(e.target.value)}
                   placeholder="Enter dietary restrictions"
            />
            <button onClick={createRecipe}>Create Recipe</button>

            <div className="output">
                {/*<pre className="recipe-text"> {recipe}</pre> */}
                <ReactMarkdown>{recipe}</ReactMarkdown>
            </div>
        </div>
    )
}