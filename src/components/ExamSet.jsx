import React from "react";

const ExamDisplay = () =>{
    const selectAnswer = [
        {
            item :'A',
            content : '選択肢1',
            correctAnswer:true
        },
        {
            item :'B',
            content : '選択肢2',
            correctAnswer:true
        },
        {
            item :'C',
            content : '選択肢2',
            correctAnswer:false
        }
    ]
    const setExam = {
        setItem : '問題1',
        question : '問題内容',
        multipleAnswers : true,
        selectAnswers : {selectAnswer}

    }
    const onClickAnser = (selectAnswer)=> alert(`ボタンを押した${selectAnswer.item}`);
 
    return (
    <>
    <p>ここに問題文を記述します。</p>

    <div>
    <input type="radio" id="a" name="drone" value="huey" />
    <label htmlFor={selectAnswer[0].item}><span>{selectAnswer[0].item}:{selectAnswer[0].content}</span></label>
    <button onClick={()=>onClickAnser(selectAnswer[0])}>回答を確認する</button>
  </div>


    </>
);
};
export default ExamDisplay;