import React from 'react';

function Prodcut(props) {
      const ProdcutData = [
        {id:1,pic:"/img/1533857587_img3.jpg",title:"제품소개"},
        {id:2,pic:"/img/1681856154_img1.jpg",title:"제품소개"},
        {id:3,pic:"/img/1999502962_img2.jpg",title:"제품소개"},
    ]
        const path = process.env.PUBLIC_URL;
    return (
        <>
        <div className='MAIN'  style={{margin:"0",backgroundColor:"#f0f0f0"}}>
              <div className="MAINTitle">
            <img src="/img/bg_ico1.png" alt="" />
            <h3>Prodcut</h3>
            <p>미광디자인이 만들어낸 <br /> 창의적인 제품을 소개합니다</p>
            <img src="/img/tit_ico2.png" alt="" />
            </div >
        {ProdcutData.map((cd)=> <div className='prodcut' style={{margin:"0 15px",width:"260px"}}> <div className='prodcutImg'><img style={{height:"265px"}} src={ path + cd.pic} alt={cd.title} /></div><p style={{width:"350px" ,margin:0}}>{cd.title}</p></div>)}
        </div>      
        
        </>
    );
}

export default Prodcut;