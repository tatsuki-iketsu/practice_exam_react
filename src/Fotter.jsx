import urlList from "./UrlList";
import { Link} from 'react-router-dom';

/////////////////////////////////////////////////////////
//////////// 学習用ページへのリンク集のフッター ////////////
/////////////////////////////////////////////////////////

// 解説用URLを格納する二次元Objcet
const explanationData = urlList();
const Fotter =() =>{
    return (
        <div className="fotter" id="fotter">
            <div>▼JavaSilver17試験対策問題　解説ページ</div>
            <Link to='/'>Top</Link> / 
            {explanationData.map((page) => {
                return (
                    <Link to ={page.url}>{ page.pageName }</Link>
                )
            })}
        </div>
    );
};

export default Fotter;

