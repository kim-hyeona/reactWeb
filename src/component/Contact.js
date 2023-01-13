import { Link } from 'react-router-dom'

function Contact(props) {

    const btndata =[
        {id:1,txt:"온라인문의"},
        {id:2,txt:"찾아오시는길"}
    ]
    const path = process.env.PUBLIC_URL;
    return (
        <div>
        <div style={{backgroundColor:"#f0f0f0"}} className='MAIN'>
            <div className="MAINTitle">
                <img src="/img/bg_ico1.png" alt="" />
                <h3>CONTACT</h3>
                <p>무엇이든 물어보세요<br/>정성껏 상담해 드리겠습니다.</p>
                <img src="/img/tit_ico4.png" alt="" />
            </div>
            
            <div  className='adds contactBox'>
             <strong>010-3217-3646</strong>
             <p>평일 09:00~18:00/토,일,공휴일 휴무</p>
            </div>

            <div  style={{margin:0}} className="map contactBox">
             
            {btndata.map((item)=><div className='contactBtn' key={item.id}>
                <Link>{item.txt}</Link>
            </div>
            )}

            </div>
            
        </div>  
        </div>
    );
}

export default Contact;