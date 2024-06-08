import React from "react";
import ReactDOM from "react-dom/client";

const App = () =>{
    return <>
            <h1>問題</h1>
            <h2>問題1</h2>
            <p>内容</p>
           </>;
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />)