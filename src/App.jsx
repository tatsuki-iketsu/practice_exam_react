import React,{useState} from "react"
import ExamDisplay from "./components/ExamSet";



const App =() =>{
    const [num,setNum] = useState(0);
    const [textShowFlug,setTextShowFlag] = useState(true); 
    return (
        <>    
            <ExamDisplay />                
        </>
        );
};

export default App;

