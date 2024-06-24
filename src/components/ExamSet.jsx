import React from "react";
import Data from '../exam/exam.json';
import { useState } from 'react';

const NO_SELECTED = "回答が選択されていません"

const ExamDisplay = () =>{
  const [ansDisplay,setAnsDisplay] = useState("選択してボタンを押してください");
  const [trueOrFalseDisplay,settrueOrFalseDisplay] = useState("ここに回答が表示されます");

// シャッフル
const abc = ["A","B","C","D","E","F","G"];
const shuffleExam=(selectAnswers)=> {
    for (let i = selectAnswers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [selectAnswers[i], selectAnswers[j]] = [selectAnswers[j], selectAnswers[i]];
    }
    selectAnswers.map((selectAnswer,i)=>{
      selectAnswer.item = abc[i];
    })
    return selectAnswers;
  }
  // 問題と回答のセット
    const examData = Data;
    console.log('シャッフルゲーム');
    console.log(examData.setExams[0].selectAnswers);
    shuffleExam(examData.setExams[0].selectAnswers);
    // shuffleExam(examData.setExams.selectAnswers);
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

      
      // 確認用
      alert(`回答：${answers}`);
      // 確認用
    
    }
    
    // 単一回答の表示
    const onClickAnser = (setExams)=> {

      return "aa";
    };

    // 複数回答の表示
    const selectedAnserGet = (selectedChecks,setExam) => {
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
        
              setAnsDisplay(`正しい回答：${answers}/選択した回答：${selectedAns}`);
              if(answers.toString() == selectedAns.toString()){
                settrueOrFalseDisplay("正解！！");
                // alert(`正しい回答：${answers}`);
                // alert(`選択した回答：${selectedAns.toString()}`) ;
                // alert(`正解！`);
                }else{
                  settrueOrFalseDisplay("残念…");
                  // alert(`正しい回答：${answers}`);
                  // alert(`選択した回答：${selectedAns.toString()}`) ;
                  // alert(`誤り！`);
              }
 
    };

    // 複数選択ボタン押下時アクション
    const selectedCheck = (setExam,name)=> {    
        let checks = document.querySelectorAll(
            `input[name=${name}]:checked`
          );
          selectedAnserGet(checks,setExam);
          // // 回答取得確認用
          // alert(`${correctAnswerSetCreate(setExam)}`);
    };
    console.log(examData);
    console.log(examData.setExams[0].setitem);
    return (
    <>
    <p>ここに問題文を記述します。</p>
    {/* <button onClick={()=>shuffleExam(examData.setExams[0].selectAnswers)}>リセット</button> */}
    {/* <div>
    <input type="radio" id="a" name="drone" value="huey" />
    <label htmlFor={examData.setExams[0].selectAnswers[0].item}><span>{examData.setExams[0].selectAnswers[0].item}:{examData.setExams[0].selectAnswers[0].content}</span></label>
    <button onClick={()=>onClickAnser(examData.setExams[0].selectAnswers[0])}>回答を確認する</button>
  </div> */}

  {examData.setExams.map((setExam) => (
    <>
  <div>
  <form name= {setExam.setItem}>
    <p>問題：{setExam.question}</p>
      {setExam.selectAnswers.map((Answer) => (
        <>
          <p>
            <input
              type="checkbox"
              name = {setExam.setItem}
              id = {Answer.item}
              value ={Answer.item}
            />
            <label htmlFor={Answer.item}>{Answer.item}：{Answer.content}</label>
          </p>
        </>
      ))}
        
        </form>
        <button onClick={()=>selectedCheck(setExam,setExam.setItem)}>確認</button>
      </div>
      <div>{ansDisplay}</div>
      <div>{trueOrFalseDisplay}</div>
      </>
    ))}
      
      </>
);
};
export default ExamDisplay;