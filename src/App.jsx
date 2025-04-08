import React,{useState} from "react"
import ExamDisplay from "./components/ExamSet";
import Fotter from "./Fotter";



const App =() =>{
    const [num,setNum] = useState(0);
    const [textShowFlug,setTextShowFlag] = useState(true); 
    return (
        <>    
            <ExamDisplay />                
            <Fotter />
        </>
        );
};

export default App;

