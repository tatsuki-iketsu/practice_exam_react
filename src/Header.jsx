import React,{useState} from "react"

const Header =(props) =>{
    const [totalCount,setTotalCount] = useState(0);                          // 合計数
    const [restCount,setRestCount] = useState(0);                          // 残問題数
    const [trueCount,setTrueCount] = useState(0);                          // 正解数
    const [falseCount,setFalseCount] = useState(0);                        // 不正解数
    const [answerRate,setAnswerRate] = useState(`-`);                    // 正解率

    console.log( `Header表示` );

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
            console.log( `Header問題数更新:`);
            console.log( {props} );
            const sum = (Math.round(props.trueCount / (props.trueCount + props.falseCount) * 10000)) / 100;
            setAnswerRate(`${sum}%`);
            const rest = (props.totalCount - (props.trueCount + props.falseCount));
            console.log( {rest});
            setRestCount(rest);
        }

        setTotalCount(props.totalCount);
        setTrueCount(props.trueCount);
        setFalseCount(props.falseCount);
    }, [props]);

    return (
        <div className="header">  
            <h1 id="h1">Java SE silver17 練習問題</h1>
            <div id="count">
                <span className="paddingRight15">残問題数：{restCount}/{totalCount}</span><span className="paddingRight15">正解率：{answerRate}</span><br className="br-sp" />
                <span className="paddingRight15">正解数：{trueCount}</span><span className="paddingRight15">不正解数：{falseCount}</span>
                {/* <div><input type="button" onClick={() => countReset(totalCount)} value="正答率リセット" /></div> TODO削除予定*/}
            </div>
        </div>
        );
};

export default Header;

