import { useState } from "react";
import {  BrowserRouter ,  Routes,  Route,  Link  } from "react-router-dom";
import "./web.css"


function Nav(props) {

    const navData = [
        {id:1, title:"회사소개", list:["인사말","연혁","조직도","둘러보기","찾아오시는 길"]},
        {id:2, title:"사업소개", list:["사업분야","사업안내","소개/설명 01","소개/설명 02","갤러리01","갤러리02"]},
        {id:3, title:"제품소개", list:["제품소개1","제품소개2","제품소개3","제품소개4","제품소개5","제품소개6"]},
        {id:4, title:"온라인 문의", list:["QnA","1:1문의"]},
        {id:5, title:"고객센터", list:["공지사항","자주하는 질문","갤러리","자유게시판","대리점안내"]},
        {id:6, title:"온라인샵", list:["구매","렌탈","소모품"]},

    ];

    const util = [
        {id:1,name:"HOME"},
        {id:2,name:"LOGIN"},
        {id:3,name:"JOIN"},
        {id:4,name:"MYPAGE"},
    ]

    const [navList,setnavList] = useState();
  

    return (
        <nav>
          <h1><img src="./img/logo.jpg" alt="logo" /></h1>

            <label>
                제품검색 <input type="text" />
                <button><img src="./img/btn_product_search.gif" alt="" /></button>
            </label>

            <ul className="restar">
               {util.map((text)=>
               <li>{text.name}</li>
               )}
            </ul>

            <ul className="menu">
                {navData.map((item,idx) =>{
                    const active = idx === navList ? 'active':'';
                    // const inlist = <li><Link>{item.list}</Link></li>
                    return(
                        <li>
                            <Link>
                                {item.title}
                            </Link>
                           <ul className="menuSub">
                            {item.list.map((list) => {
                                return(
                                    <li>
                                        <Link>
                                            {[list]}
                                        </Link>
                                    </li>
                                )
                            })}
                           </ul>
                        </li>
                    )
                })}
            </ul>

            
        </nav>
    );
}

export default Nav;