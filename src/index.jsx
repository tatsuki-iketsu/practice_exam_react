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
    <BrowserRouter basename={process.env.REACT_APP_BASENAME}>
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
    <br/>
    <div className="fotter">`{explanationData[0].url}``{process.env.REACT_APP_BASENAME}`
            <div>▼JavaSilver17試験対策問題　解説ページ</div>
            {explanationData.map((Data) => {
                const urlPass = `/${ Data.url }`
            return (
                <>
                <p>◆<Link to={urlPass}>{ Data.pageName }</Link></p>
                </>
                )
            })}
        </div>

    ◆<Link to='/'>{explanationData[0].url}</Link>
    ◆<Link to='/'>name:{process.env.REACT_APP_BASENAME}</Link>
    ◆<Link to='/'>link:{process.env.REACT_APP_BASELINK}</Link>
</BrowserRouter>
)




