import React from "react"
import ColorfulMessage from "./components/ColorfulMessage"
import PropsMessage from "./components/ColorfulMessage copy";
const App =() =>{
    const onClickButten1 = ()=> alert('正解です');
    const onClickButten2 = ()=> alert('残念！不正解です');
    const onClickButten3 = ()=> alert('残念！不正解です');
    // const contentstyle = {
    //     color :'green' ,
    //     fontSize : '40px'
    // };
    // const contentRedStyel = {
    //     color :'green' ,
    //     fontSize : '40px'
    // }
    return (
        <>
                <h1 style={{color:'pink' }}>問題</h1>
                <ColorfulMessage color='green' message='世界！'/>
                <PropsMessage color='green'>PROPS渡し</PropsMessage>
                <button onClick={onClickButten1}>回答1</button>
                <button onClick={onClickButten2}>回答2</button>
                <button onClick={onClickButten3}>回答3</button>
               </>
        );
};

export default App;