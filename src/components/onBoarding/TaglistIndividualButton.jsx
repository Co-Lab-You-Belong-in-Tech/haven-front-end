import { useRef, useState } from "react";

const TaglistIndivdualButton = (props) => {
    //Taglist if Button Clicked Function Component// 
    
    const [tagButtonSelected, setTagButtonSelected] = useState(false); 
    const tagButtonRef = useRef();
    
    //Taglist Button Clicked function Handler// 
    const buttonClicked = (event) => {

        // Taglist if user Wishes to Add to Search 
        if (tagButtonSelected === false) {
            tagButtonRef.current.classList.add("clickedTagButton");
            setTagButtonSelected(true);
        }
        else {
            //Taglist if user wishes to remove from search
            tagButtonRef.current.classList.remove("clickedTagButton");
            setTagButtonSelected(false); 
        }
        
    }
    return (
        <button ref={tagButtonRef} onClick={buttonClicked} className={props.ButtonClass} value={props.InterestName}>{props.InterestName}
        </button>
    )
}
export default TaglistIndivdualButton; 