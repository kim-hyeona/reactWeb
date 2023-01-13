import React from 'react';

function Footer(props) {
    const footerData = [
        {id:1, text:"개인정보처리방침"},
        {id:2, text: "이메일무단수집거부"},
    ]
    const footerIcon = [
        {id:1, alt:"facebook", img:"./img/facebook.png"},
        {id:2, alt:"instagram", img:"./img/instagram.png"},
        {id:3, alt:"youtube", img:"./img/youtube.png"},
        {id:4, alt:"blog", img:"./img/blog.png"},
        {id:5, alt:"kakaotalk", img:"./img/kakaotalk.png"},
    ]
    const footerDiv = [
        {id:1 , txt:" 주소 : 서울시 중구 태평로 1가 우리빌딜주식회사 "},
        {id:2 , txt:" 대표 : 홍길동 "},
        {id:3 , txt:" 사업자등록번호 : 000-00-000 "},
        
    ]
    const footerDiv2 = [
        {id:1 , txt:"전화 : 02)123-4567 "},
        {id:2 , txt:"팩스 : 02)123-4567"},
        {id:3, txt:" 이메일 : phlink@nate.com"},
    ]
    const path = process.env.PUBLIC_URL;
    return (
        <footer>
            <ul className='footer1'>
            {footerData.map((item)=><li className='footerline' key={item.id}>{item.text}</li>)}
            <li className='icon'>
                {footerIcon.map((icon)=> <img src={path + icon.img} alt={icon.alt} /> )}
            </li>
            </ul>
            
            <div className='footerdiv'>
            <h2><img src="./img/logo.jpg" alt="logo" /></h2>
            <div>
            <ul>{footerDiv.map((item)=> <li key={item.id}>{item.txt}</li>)}</ul>
            <ul>{footerDiv2.map((item)=> <li key={item.id}>{item.txt}</li>)}</ul>
            <p>Copyright © 미광디자인. All rights reserved. <strong> Desig by MG</strong></p>
            </div>
            </div>
            

        </footer>
    );
}

export default Footer;