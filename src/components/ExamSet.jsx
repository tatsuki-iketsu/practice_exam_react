import React from "react";

// const [selectedItem, setselectedItem] = useState(['A', 'B', 'C'])
const array = ["a","b"]

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
    // const element = document.getElementById('mycheckbox');
    
    const onClickAnser = (selectAnswer)=> alert(`ボタンを押した${array}`);
    const selectedCheck = ()=> {    
        let a = document.querySelectorAll(
            'input[name="ccc"]:checked'
          );
            console.log(a[0].value);    
          alert(`ボタンを押した${a[0].value}`);
            // console.log(event);    
        // このあたりでチェックボックスを受けとる
        // element.checked
        // https://www.javadrive.jp/javascript/form/index3.html
        // if(e){
        //     alert(`true`);
        // }else{
        //     alert(`false`);
        // }
        // array.push(selectAnswer)

        // array.push(e)
    };
 
    return (
    <>
    <p>ここに問題文を記述します。</p>

    <div>
    <input type="radio" id="a" name="drone" value="huey" />
    <label htmlFor={selectAnswer[0].item}><span>{selectAnswer[0].item}:{selectAnswer[0].content}</span></label>
    <button onClick={()=>onClickAnser(selectAnswer[0])}>回答を確認する</button>
  </div>

  <div>
  <form name="aaa">
      <input
        type="checkbox"
        name = 'ccc'
        id="disable-button-checkbox"
        value = "vavava"
        // onChange={(e) => selectedCheck(e,"ABC")}
      />
      <label htmlFor="disable-button-checkbox">Disabled button</label>
      </form>
      <button onClick={()=>selectedCheck()}>確認</button>
    </div>

    </>
);
};
export default ExamDisplay;