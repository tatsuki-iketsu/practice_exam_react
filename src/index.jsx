import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// サイト全体のcss
import "./components/css/index.css";

// router系のimport
import { BrowserRouter, Route, Routes, Link ,element,Navigate} from 'react-router-dom';
import urlList from "./UrlList"; // URLリストのimport

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
// 解説用URLを格納する二次元Objcet
const explanationData = urlList();

root.render(
<BrowserRouter basename="/practiceexam/Java17silverTest/">
    <Routes>
    <Route exact path='/' element={<App />} />
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




