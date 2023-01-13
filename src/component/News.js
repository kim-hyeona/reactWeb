import React from 'react';
import { Link } from 'react-router-dom'

function News(props) {
    const newsData = [
        {id:"1",title:"제휴문의"},
        {id:"2",title:"서비스 및 AS안내"},
        {id:"3",title:"신제품 출시"},
        {id:"4",title:"제휴문의"},
    ]


    let today = new Date();   

    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1;  // 월
    let date = today.getDate();  // 날짜

    const timeTxt = year + ' - ' + month + ' - ' + date


    return (
        <>
         <div className='MAIN'>
              <div className="MAINTitle">
                <img src="/img/bg_ico1.png" alt="" />
                <h3>NEWS</h3>
                <p>미광디자인이 전하는 <br /> 다양한 소식을 확인하세요</p>
                <img src="/img/tit_ico3.png" alt="" />
              </div>

              <table>
                <th>공지사항 <img src="/img/bt_more.png" alt="+" /></th>
                {newsData.map((item)=> <tr><td>· {item.title}</td><td>{timeTxt}</td></tr>)}
              </table>

               <table>
                <th>자주하는 질문<img src="/img/bt_more.png" alt="+" /></th>
                {newsData.map((item)=> <tr><td>· {item.title}</td><td>{timeTxt}</td></tr>)}
              </table>

        
         </div>   
        </>
    );
}

export default News;