import React from "react";

import explanationPagestyles from '../css/explanationPage.module.css'
// import practiceExamReactStyles from '../css/practiceExamReact.module.css'

const compileAnrRun = () =>{

  return (
    <>
    <div className={explanationPagestyles.explanationBody}>
      <div className={explanationPagestyles.pageTitle}>
        <h2>JavaSilver17試験対策問題　解説ページ</h2>
      </div>

      <h3 className={explanationPagestyles.sectionTitle}>コンパイル、実行</h3>
      <h4 className={explanationPagestyles.paragraphTitle}>コンパイル</h4>
      <div className={explanationPagestyles.paragrapContents}>
        Javaのコンパイルと実行についてです。 
        <h5 className={explanationPagestyles.itemTitle}>-dオプション</h5>
        <div className={explanationPagestyles.itemContents}>
          コンパイルしたデータを保存するディレクトリを設定するオプション。<br />
          -dの直後にスペース、パスを記述する。<br />
          相対パス、絶対パスともに可能。<br />
          省略可能なオプション。<br />
        </div>
        <div class="sampleFile">
          （例）  
            <div class="marginLeft10">
              <div class="filename">ファイル1:Main.java</div>
                <div class="block">
                  パス
                    <pre>
                      <code>
                        <span>samplefolder\Main.java</span>
                      </code>
                    </pre>              
                    Main.javaファイルのコード
                    <pre>
                      <code>
                        <span class="numberLow">package com.trigger</span>
                        <span class="numberLow">import com.action.Print</span>
                        <span class="numberLow"></span>
                        <span class="numberLow">public class Main {'{'}</span>
                        <span class="numberLow">    public static void main(String[] args) {'{'}</span>
                        <span class="numberLow">        Test.print()</span>
                        <span class="numberLow">    {'}'}</span>
                        <span class="numberLow">{'}'}</span>
                      </code>
                    </pre>              
                  </div>
            </div>
            <div class="marginLeft10">
                <div class="filename">ファイル2:Print.java</div>
                <div class="block">
                    パス                  
                    <pre>
                      <code>
                        <span class="numberLow">samplefolder\Print.java</span>
                      </code>
                    </pre>              
                Print.javaの中身
                <pre>
                  <code>
                    <span class="numberLow">package com.action</span>
                    <span class="numberLow"></span>
                    <span class="numberLow">public class Test {'{'}</span>
                    <span class="numberLow">    public static void print() {'{'}</span>
                    <span class="numberLow">        System.out.println("Display")</span>
                    <span class="numberLow">    {'}'}</span>
                    <span class="numberLow">{'}'}</span>
                  </code>
                </pre>
                </div>                    
            </div>
            上記のsamplefolderで実行できるコンパイルコマンド
            <div class="filename">コマンド例1</div>
              <div class="block">
                現在のディレクトリにあるすべてのjavaファイルをコンパイルしたクラスファイル保存する<br />
                <pre>
                    <code>
                      <span>javac <span class="pointBarRed">-d .</span> <span class="pointBarBlue">*.java</span></span>
                    </code>
                  </pre>
                  ↓<br />
                  <code>
                    <span class="pointBarRed">-d .</span>
                  </code>
                  →現在のディレクトリ（.）をコンパイルしたクラスファイルの保存先とする<br />
                  <code>
                      <span class="pointBarBlue">*.java</span>
                  </code>
                  →曖昧検索(*)で.java形式のファイルすべてコンパイルする
              </div>
              <div class="filename">コマンド例2</div>
              <div class="block">
                現在のディレクトリにふたつのファイルをコンパイルしたクラスファイルを保存する<br />
                <pre>
                    <code>
                      <span>javac <span class="pointBarRed">-d bin</span> <span class="pointBarBlue">Main.java Print.java</span></span>
                    </code>
                  </pre>
                  ↓<br />
                  <code>
                    <span class="pointBarRed">-d bin</span>
                  </code>
                  →binフォルダをコンパイルしたクラスファイルの保存先とする<br />
                  　※binフォルダがなければ作成する<br />
                  <code>
                      <span class="pointBarBlue">Main.java Print.java</span>
                  </code>
                  →コンパイルするファイルをスペースで区切ったファイル名で指定
              </div>
              <div class="filename">コマンド例3</div>
              <div class="block">
                現在のディレクトリにPrint.javaをコンパイルしたクラスファイルのみを保存する<br />
                <pre>
                    <code>
                      <span>javac <span class="pointBarBlue">Print.java</span></span>
                    </code>
                  </pre>
                  ↓<br />
                  省略できる-dオプションを指定していないので、実行したディレクトリをクラスファイルを保存先とする<br />
                  <code>
                      <span class="pointBarBlue">Print.java</span>
                  </code>
                  →コンパイルするファイルをファイル名でひとつだけ指定
              </div>
        </div> 
      </div>
    </div>
    </>
    
  );
};
export default compileAnrRun
;