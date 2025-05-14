import React, { useState, useEffect } from "react";
import ExamDisplay from "./components/ExamDisplay";
import Fotter from "./Fotter";
import Header from "./Header";


const App =() =>{

    const [totalCount,setTotalCount] = useState(0);    // 合計数
    const [trueCount,setTrueCount] = useState(0);           // 正解数
    const [falseCount,setFalseCount] = useState(0);         // 不正解数

    console.log(`App描画/問題数:${totalCount}-/正解数::${trueCount}-/不正解数::${falseCount}`);

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
            {/* <input type="button" onClick={() => countUpdate(1)} value="テスト関数" />  TODO削除予定*/}
            <header><Header totalCount={totalCount} trueCount={trueCount} falseCount={falseCount} countUpdate={countUpdate} countReset={countReset}/></header>
            {/* <input type="button" onClick={() => countUpdate(totalCount,trueCount + 1,falseCount)} value="正解追加" TODO削除予定/>
            <input type="button" onClick={() => countUpdate(totalCount,trueCount,falseCount + 1)} value="誤り追加" TODO削除予定/>
            <input type="button" onClick={() => countReset(totalCount)} value="リセット" /> TODO削除予定*/}
            <main><ExamDisplay countUpdate={countUpdate} countReset={countReset} /></main>
            <Fotter />
        </>
        );
};

export default App;

