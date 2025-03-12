import React,{useState} from "react"
import ColorfulMessage from "./components/ColorfulMessage"
import PropsMessage from "./components/ColorfulMessage copy";
import ExamDisplay from "./components/ExamSet";
const App =() =>{
    const [num,setNum] = useState(0);
    const [textShowFlug,setTextShowFlag] = useState(true); 
    const [showModal, setShowModal] = useState(false); // ResultsModal

    const onClickButten1 = ()=> alert('正解です');
    const onClickButten2 = ()=> alert('残念！不正解です');
    const onClickButten3 = ()=> alert('残念！不正解です');
    const onClickCountUp = ()=> setNum(num + 10) ;
    const onClickshowFlugCjange = ()=> setTextShowFlag(!textShowFlug) ;
    return (
        <>
                {/* <h1 style={{color:'pink' }}>問題</h1>
                <ColorfulMessage color='green' message='世界！'/>
                <PropsMessage color='green'>PROPS渡し</PropsMessage>
                <button onClick={onClickButten1}>回答1</button>
                <button onClick={onClickButten2}>回答2</button>
                <button onClick={onClickButten3}>回答3</button>
                <button onClick={onClickCountUp}>加算</button>
                <button onClick={onClickshowFlugCjange}>表示非表示</button>
                <p>{num}</p> */}
                <ExamDisplay />
                {/* {textShowFlug && <p>TRUEなので表示されています</p>} */}
                
               </>
        );
};

export default App;