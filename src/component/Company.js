import React from 'react';
import styled from 'styled-components'

function Company(props) {
    const companyData = [
        {id:1,pic:"/img/ico1.png",title:"회사소개",txt:"고객만족 극대화를 목표로 최고의 기업이 되겠습니다."},
        {id:2,pic:"/img/ico2.png",title:"사업소개",txt:"최고의 솔루션으로 성공적인 비즈니스를 실현해 드립니다."},
        {id:3,pic:"/img/ico3.png",title:"제품소개",txt:"지속적인 연구개발을 통한 품질 향상에 노력하고 있습니다."},
    ]
    const path = process.env.PUBLIC_URL;
    return (
        <>
      
        <div className='MAIN'>
              <div className="MAINTitle">
            <img src="/img/bg_ico1.png" alt="" />
            <h3>COMPANY</h3>
            <p>고객감동을 위해 최선을 다하는 기업</p>
            <img src="/img/tit_ico1.png" alt="" />
        </div>
       {companyData.map((cd)=> <div> <img src={path + cd.pic} alt={cd.title} /><h4>{cd.title}</h4><p>{cd.txt}</p> </div>)}
        </div>
        </>
    );
}

export default Company;