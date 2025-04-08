import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// サイト全体のcss
import "./components/css/index.css";

// router系のimport
import { BrowserRouter, Route, Routes, Link ,element,Navigate} from 'react-router-dom';

import compileAnrRun from "./components/explanationPage/CompileAnrRun";
import collection from "./components/explanationPage/Collection";

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
// root.render(<App />)
// 解説用URLを格納する二次元Objcet
const explanationData = [
    { pageID: 1, url: "/compileandrun" ,component:compileAnrRun},
    { pageID: 2, url: "/collection" ,component:collection}
    // { pageID: 3, url: "/page3" ,component:ExamTest},
    // { pageID: 4, url: "/page4" ,component:ExamTest},
    // { pageID: 5, url: "/page5" ,component:ExamTest}
  ];
root.render(
<BrowserRouter>
    <Routes>
    <Route exact path='practiceexam/Java17silverTest/' element={<App />} />
    {explanationData.map((page) => (
    <Route
        key={page.pageID}  
        path={`/${page.url}`}
        element={<page.component />}
    />
    ))}
    </Routes>
    <Link to='/'>Back To Top</Link>
</BrowserRouter>
)




