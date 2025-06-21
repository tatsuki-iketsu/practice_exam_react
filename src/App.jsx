import React, { useState, useEffect } from "react";
import ExamDisplay from "./components/ExamDisplay";
import Fotter from "./Fotter";
import Header from "./Header";

//////////////////////////////////////////
//////////// アプリの全体的な枠 ////////////
//////////////////////////////////////////

const App =() =>{

    const [totalCount,setTotalCount] = useState(0);    // 合計数
    const [trueCount,setTrueCount] = useState(0);      // 正解数
    const [falseCount,setFalseCount] = useState(0);    // 不正解数

    console.log(`App描画/問題数:${totalCount}-/正解数::${trueCount}-/不正解数::${falseCount}`);

    // コールバック関数
    // 正答率更新
    const countUpdate =(inTotal,inTrue,inFalse) =>{
        console.log(`正答率リセット:${totalCount}`);
        setTotalCount(inTotal);
        setTrueCount(inTrue);
        setFalseCount(inFalse);
    }
    // 正答率リセット
    const countReset =(inTotal) =>{
        countUpdate(inTotal,0,0)
    }

    return (
        <>   
            <header><Header totalCount={totalCount} trueCount={trueCount} falseCount={falseCount} countUpdate={countUpdate} countReset={countReset}/></header>
            <main><ExamDisplay countUpdate={countUpdate} countReset={countReset} /></main>
            <Fotter />
        </>
        );
};

export default App;

