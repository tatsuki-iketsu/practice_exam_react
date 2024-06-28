import React from "react";
import Data from '../exam/exam.json';
import { useState } from 'react';
import { useEffect } from 'react';

const NO_SELECTED = "回答が選択されていません"
// const [examData,setExamData] = useState(Data);

const ExamDisplay = () =>{
  const [examData,setExamData] = useState(Data);                     // 問題を格納
  const [ansDisplay,setAnsDisplay] = useState([]);                   // 正解と選択肢を格納
  const [trueOrFalseDisplay,settrueOrFalseDisplay] = useState([]);   // 正解か不正解かを格納
  const [tipDisplay,setTipDisplay] = useState([]);                   // 解説を格納
  const [allExam,setallExam] = useState(0);                          // 合計数
  const [allTrue,setallTrue] = useState(0);                          // 正解数
  const [allFalse,setallFalse] = useState(0);                        // 不正解数

  // 初回シャッフル
  useEffect(() => {
    shuffleExam1(examData);
  }, []);


// 内側シャッフル　TODO：外側に入れる
const abc = ["A","B","C","D","E","F","G"];
const shuffleExam =(selectAnswers)=> {
    for (let ia = selectAnswers.length - 1; ia > 0; ia--) {
      const jb = Math.floor(Math.random() * (ia + 1));
      [selectAnswers[ia], selectAnswers[jb]] = [selectAnswers[jb], selectAnswers[ia]];
    }
    selectAnswers.map((selectAnswer,i)=>{
      selectAnswer.item = abc[i];
    })
  }

// 外側シャッフル
const shuffleExam1=(examData)=> {

    for (let i = examData.setExams.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [examData.setExams[i], examData.setExams[j]] = [examData.setExams[j], examData.setExams[i]];
      shuffleExam(examData.setExams[i].selectAnswers);
    }
    const shuffleExamData = { ...examData};
    setExamData((examData) =>{return shuffleExamData});

    // 回答、正解不正解、解説の格納
    let c_ansDisplay = [];
    let c_trueOrFalseDisplay = [];
    for(let i = 0; i < examData.setExams.length;i++){
      c_ansDisplay = [...c_ansDisplay,`(問題${i+1}の回答がここに表示されます)`]
      c_trueOrFalseDisplay = [...c_trueOrFalseDisplay,`(問題${i+1}の正解/不正解がここに表示されます)`]

    };
    setAnsDisplay(c_ansDisplay);
    settrueOrFalseDisplay(c_trueOrFalseDisplay);
    const all = examData.setExams.length;
    setallExam(all);
    setallTrue(0);
    setallFalse(0);
    alert(`問題をシャッフルします。問題数${examData.setExams.length}`);
  }
  // 問題と回答のセット
    // const examData = Data;　// ここでusestateを入れるといいのかも
    // 回答取得
      // 回答を取得し配列に格納
      const correctAnswerSetCreate = (setExam)=> {
      // 回答を格納する配列
      const answers = []

      const ansArray = setExam.selectAnswers.map((selectAnswer) => { 
        if(selectAnswer.correctAnswer){
          answers.push(selectAnswer.item);
        }
      } );

    }
    
    // 単一回答の表示
    const onClickAnser = (setExams)=> {

      return "aa";
    };

    // 複数回答の表示
    const selectedAnserGet = (selectedChecks,setExam,index) => {

      // 選択した回答を格納する配列
      const selectedAns = []
      // 正しい回答を格納する配列
      const answers = []

      // querySelectorAllから選択した回答の文字列連結し配列に格納
      if(selectedChecks.length == 0 ){
        // 回答なし
        return NO_SELECTED;   
      }
        // 回答あり、複数数制限なし
        {selectedChecks.forEach((check) => (
          selectedAns.push(check.value)
              ))}

              setExam.selectAnswers.map((selectAnswer) => { 
                if(selectAnswer.correctAnswer){
                  answers.push(selectAnswer.item);
                }
              } );
        
              setAnsDisplay(ansDisplay.map((ans, i) => (i === index ? `正しい回答：${answers}/選択した回答：${selectedAns}` : ans)));
              if(answers.toString() == selectedAns.toString()){
                settrueOrFalseDisplay(trueOrFalseDisplay.map((trueOrFalse, i) => (i == index ? "正解！！" : trueOrFalse)));
                setallTrue(allTrue+1);
                }else{
                  settrueOrFalseDisplay(trueOrFalseDisplay.map((trueOrFalse, i) => (i == index ? "残念…" : trueOrFalse)));
                  setallFalse(allFalse+1);
                }
 
    };

    // 複数選択ボタン押下時アクション
    const selectedCheck = (setExam,name,index)=> {    
        let checks = document.querySelectorAll(
            `input[name=${name}]:checked`
          );
          selectedAnserGet(checks,setExam,index);
    };
    console.log(examData);
    console.log(examData.setExams[0].setitem);

    // 改行変換
    const MultiLineBody = ( body ) => {
      const texts = body.split('\n').map((item, index) => {
        return (
          <React.Fragment key={index}>
            {item}
            <br />
          </React.Fragment>
        );
      });
      return <span>{texts}</span>;
    };

    return (
    <>
    <p>ここに問題文を記述します。</p>
    {/* <input type="button" onclick={shuffleExam(examData.setExams[0].selectAnswers)} > */}
    {/* <input type="button" onClick={shuffleExam(examData.setExams[0].selectAnswers)} value="リセット" /> */}
    <input type="button" onClick={() => shuffleExam1(examData)} value="リセット" />

  {examData.setExams.map((setExam,index) => (
    <>
  <div>
  <form name= {setExam.setItem}>
    <h2>問題</h2>
    <p>問題：{MultiLineBody(setExam.question)}</p>
      {setExam.selectAnswers.map((Answer) => (
        <>
          <p>
            <input
              type="checkbox"
              name = {setExam.setItem}
              id = {setExam.setItem + Answer.item}
              value ={Answer.item}
            />
            <label htmlFor={setExam.setItem + Answer.item}>{Answer.item}：{MultiLineBody(Answer.content)}</label>
          </p>
        </>
      ))}
        
        </form>
        <button onClick={()=>selectedCheck(setExam,setExam.setItem,index)}>回答を確認</button>
      </div>
      <div>{ansDisplay[index]}</div>
      <div>{trueOrFalseDisplay[index]}</div>
      </>
    ))}
      <p>残問題数：{allExam-allTrue-allFalse}</p>
      <p>正解数：{allTrue}</p>
      <p>不正解数：{allFalse}</p>
      <p>正解率：{allTrue/(allTrue+allFalse)*100}%</p>      
      </>
);
};
export default ExamDisplay;