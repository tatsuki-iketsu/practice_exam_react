import React from "react"
const App =() =>{
    const onClickButten1 = ()=> alert('正解です');
    const onClickButten2 = ()=> alert('残念！不正解です');
    const onClickButten3 = ()=> alert('残念！不正解です');
    const contentstyle = {
        color :'green' ,
        fontSize : '40px'
    };
    const contentRedStyel = {
        color :'green' ,
        fontSize : '40px'
    }
    return (
        <>
                <h1 style={{color:'pink' }}>問題</h1>
                <h2 style={contentstyle}>問題1</h2>
                <p style={contentRedStyel}>内容ここに問題を入れますよ</p>
                <button onClick={onClickButten1}>回答1</button>
                <button onClick={onClickButten2}>回答2</button>
                <button onClick={onClickButten3}>回答3</button>
               </>
        );
};

export default App;