import React,{useState} from "react"
import ExamDisplay from "./components/ExamDisplay";
import Fotter from "./Fotter";
import Header from "./Header";



const App =() =>{
    const [num,setNum] = useState(0);
    const [textShowFlug,setTextShowFlag] = useState(true); 
    return (
        <>    
            <header><Header /></header>
            <main><ExamDisplay /></main>
            <Fotter />
        </>
        );
};

export default App;

