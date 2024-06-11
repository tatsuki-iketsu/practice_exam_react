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
            correctAnswer:fale
        }
    ]
    const setExam = {
        setItem : '問題1',
        question : '問題内容',
        multipleAnswers : true,
        selectAnswers : {selectAnswer}

    } 
    return "a"
};
export default ExamDisplay;