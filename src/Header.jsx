import React,{useState} from "react"

const Header =(props) =>{
    const [totalCount,setTotalCount] = useState(0);                          // 合計数
    const [restCount,setRestCount] = useState(0);                          // 残問題数
    const [trueCount,setTrueCount] = useState(0);                          // 正解数
    const [falseCount,setFalseCount] = useState(0);                        // 不正解数
    const [answerRate,setAnswerRate] = useState(`-`);                    // 正解率

    // // 正解率の更新
    // const countUpdate = (inTotal,inRest,inTrue,inFalse) =>{
    //     setTotalCount(inTotal);
    //     setRestCount(inTotal);
    //     setTrueCount(inTrue);
    //     setFalseCount(inFalse);
    // }
    alert( `Header` );

    // App.jsに問題数を渡す関数
    const countReset = (inTotal,inTrue,inFalse) => {
        props.countReset(inTotal);
    };


    // 問題数のいずれかが変更されると再計算
    React.useEffect(() => {
        // 正解、誤りともに0なら初期設定
        if(props.trueCount + props.falseCount == 0){
            setRestCount(props.totalCount);
            setAnswerRate(`-`);
        } else{
            // const sum ={allTrue/(allTrue+allFalse)*100}
            console.log( `Header問題数更新:`);
            console.log( {props});
            const sum = (Math.round(props.trueCount / (props.trueCount + props.falseCount)*10000)) / 100;
            alert( `sum:${sum}` );
            setAnswerRate(`${sum}%`);
            const rest = (props.totalCount - (props.trueCount + props.falseCount));
            alert( `rest:` );
            console.log( {rest});
            setRestCount(rest);
        }

        setTotalCount(props.totalCount);
        setTrueCount(props.trueCount);
        setFalseCount(props.falseCount);
    }, [props]);
    
    // React.useEffect(() => {
    //     setTotalCount(props.totalCount);
    //     setRestCount(props.totalCount);
    //     setTrueCount(props.trueCount);
    //     setFalseCount(props.falseCount);
    // }, []);
    

    
    // React.useEffect(() => {
    //         setTotalCount(props.totalCount);
    //         setRestCount(props.restCount);
    //         setTrueCount(props.trueCount);
    //         setFalseCount(props.totalFalse);
    //     }, []);
    
    // const firstSet = (inNumber) =>{
    //     setallTrue(allTrue + inNumber);
    // }
    // <input type="button" onClick={() => shuffleExam1(examData,false)} value="リセット" />
    React.useEffect(() => {
        // console.log('Hello world!');
        // firstSet(props.number);
        // console.log(`props:${props}1`);
        // console.log(`props.allExam:${props.allExam}1`);
        // setallExam(props.totalCount);
        // setallTrue(props.trueCount);
        // setallFalse(props.falseCount);
        // if(!(props.trueCount + props.falseCount == 0)){
        //     // const sum ={allTrue/(allTrue+allFalse)*100}
        //     alert( `trueCount:${trueCount}` );
        //     let sum = (allTrue/(allTrue+allFalse))*100;
        //     // let sum = (props.falseTrue/(props.falseTrue+props.falseCount))*100;
        //     alert( `sum:${sum}` );
        //     setAnswerRate(`${sum}%`);
        // }
        // alert( `props.allExam:${allExam}` );
    }, []);

    return (
        <>  
        <h1 id="h1">Java SE silver17 練習問題</h1>
        <p id="bottom">残問題数：{restCount}/{totalCount}　正解数：{trueCount}　不正解数：{falseCount}　正解率：{answerRate}</p>
        <input type="button" onClick={() => countReset(totalCount)} value="正答率リセット" />
        <div> </div>
        </>
        );
};

export default Header;

