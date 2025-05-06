import React from "react";

import explanationPagestyles from '../css/explanationPage.module.css'
// import practiceExamReactStyles from '../css/practiceExamReact.module.css'

const Collection = () =>{

  return (
    <>
    <div className={explanationPagestyles.explanationBody}>
      <div className={explanationPagestyles.pageTitle}>
        <h2>JavaSilver17試験対策問題　解説ページ</h2>
      </div>

      <h3 className={explanationPagestyles.sectionTitle}>クラスの定義とインスタンス</h3>
      <h4 className={explanationPagestyles.paragraphTitle}>クラス宣言</h4>
      <div className={explanationPagestyles.paragrapContents}>
        メソッドの引数
        <h5 className={explanationPagestyles.itemTitle}>mainメソッドの引数</h5>
        <div className={explanationPagestyles.itemContents}>
          <p>mainメソッドのみ、引数は以下のどちらかしか設定できない。</p>
          <list>
            <li>String型の配列</li> 
            <li>String型の可変長引数</li> 
          </list>

        </div>
        <div class="sampleFile">
          （例）  
            <div class="marginLeft10">
              <div class="filename">型の例</div>
                <div class="block">
                mainメソッドの引数例（配列型）
                  <pre>
                    <code>
                      <div className="otherCode">
                        <span class="numberLow">public class Main {'{'}</span>
                        <span class="numberLow">    public static void main(String[] args) {'{'}</span>
                        <span class="numberLow">        for(String s:args)  {'{'}</span>
                        <span class="numberLow">            System.out.println(s);</span>
                        <span class="numberLow">        {'}'}</span>
                        <span class="numberLow">    {'}'}</span>
                        <span class="numberLow">{'}'}</span>
                      </div>
                    </code>
                  </pre>              
                  mainメソッドの引数例（可変長引数型）
                  <pre>
                    <code>
                      <div className="otherCode">
                        <span class="numberLow">public class Main {'{'}</span>
                        <span class="numberLow">    public static void main(String... args) {'{'}</span>
                        <span class="numberLow">        for(String s:args)  {'{'}</span>
                        <span class="numberLow">            System.out.println(s);</span>
                        <span class="numberLow">        {'}'}</span>
                        <span class="numberLow">    {'}'}</span>
                        <span class="numberLow">{'}'}</span>
                      </div>
                    </code>
                  </pre>              
                  mainメソッドの引数例（String型以外はコンパイルエラーとなる）
                  <pre>
                    <code>
                      <div className="otherCode">
                        <span class="numberLow">public class Main {'{'}</span>
                        <span class="numberLow "><span className="fontred">&#10006;  public static void main(int[] args) {'{'}</span></span>
                        <span class="numberLow">        for(int s:args)  {'{'}</span>
                        <span class="numberLow">            System.out.println(s);</span>
                        <span class="numberLow">        {'}'}</span>
                        <span class="numberLow">    {'}'}</span>
                        <span class="numberLow">{'}'}</span>
                      </div>
                    </code>
                  </pre>              
                  </div>

                  
            </div>
        </div> 

        <h5 className={explanationPagestyles.itemTitle}>main以外のメソッドの引数</h5>
        <div className={explanationPagestyles.itemContents}>
          <p>main以外のメソッドでは、引数は以下が設定できる。</p>
          <list>
          <li>型</li> 
          <li>クラス</li> 
          <li>型の配列</li> 
          <li>型やクラスの可変長引数</li> 
          </list>

        </div>
        <div class="sampleFile">
          （例）  
            <div class="marginLeft10">
              <div class="filename">型の例</div>
                <div class="block">
                main以外のメソッドの引数例（int型の配列）
                  <pre>
                    <code>
                      <div className="otherCode">
                        <span class="numberLow">public class Main {'{'}</span>
                        <span class="numberLow">    public static void main(String[] args) {'{'}</span>
                        <span class="numberLow">        int[] intArray= {'{'}1, 2, 3{'}'};</span>
                        <span class="numberLow">            new Main().printa(intArray);</span>
                        <span class="numberLow">        {'}'}</span>
                        <span class="numberLow">    </span>
                        <span class="numberLow">        void printa(int[] args) {'{'}</span>
                        <span class="numberLow">            for(int i:args) {'{'}</span>
                        <span class="numberLow">            System.out.println(i);</span>
                        <span class="numberLow">        {'}'}</span>
                        <span class="numberLow">    {'}'}</span>
                        <span class="numberLow">{'}'}</span>
                      </div>
                    </code>
                  </pre>              
                  main以外のメソッドの引数例（int型の可変長引数）
                  <pre>
                    <code>
                      <div className="otherCode">
                        <span class="numberLow">public class Main {'{'}</span>
                        <span class="numberLow">    public static void main(String[] args) {'{'}</span>
                        <span class="numberLow">        int[] intArray= {'{'}1, 2, 3{'}'};</span>
                        <span class="numberLow">            new Main().printa(intArray);</span>
                        <span class="numberLow">        {'}'}</span>
                        <span class="numberLow">    </span>
                        <span class="numberLow">        void printa(int... args) {'{'}</span>
                        <span class="numberLow">            for(int i:args) {'{'}</span>
                        <span class="numberLow">            System.out.println(i);</span>
                        <span class="numberLow">        {'}'}</span>
                        <span class="numberLow">    {'}'}</span>
                        <span class="numberLow">{'}'}</span>
                      </div>
                    </code>
                  </pre>              
                  </div>
            </div>
        </div> 
      </div>

    </div>
    </>
    
  );
};
export default Collection
;