import ReactDOM from "react-dom/client";
import App from "./App";

//////////////////////////////////////////
//////////// index ///////////////////////
//////////////////////////////////////////

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
        <Route path='/' element={<App />} />
        {explanationData.map((page,index) => (
        <Route
            key={index} 
            path={page.url}
            element={page.component}
        />
        ))}
    </Routes>
</BrowserRouter>
)