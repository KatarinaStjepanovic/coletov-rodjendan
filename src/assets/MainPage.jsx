import React from 'react'
import { Link } from 'react-router-dom'

function MainPage() {
  return (
    <>
    <img className='topLeftImg' src='/Sofija/TopLeft.png'/>
    <div className="grayDiv"></div>
    <div className="iLoveYou">I love you</div>
    <div className="happyB">Happy Birthday</div>
    <div className="name">Cole</div>
    <img src="/Sofija/butterfly1.png" alt="butterfly" className="butterfly1" />
    <img src="/Sofija/Banner.png" alt="banner" className="banner" />
    <img src="/Sofija/butterfly2.png" alt="butterfly" className="butterfly2" />
    <div className='grid'>
      <div className='leftPic'>
        <img src="/Sofija/1.png" alt="Frame1" className="frame1" />
      </div>
    <div className="text1">Za najsladju curu na svijetu</div>
    <div className="text2">I moju najbolju prijateljicu</div>
    <div className="rightPic">
    <img src="/Sofija/2.png" alt="Frame1" className="frame2" />
    </div>
    </div>
    <img src="/Sofija/butterfly1.png" alt="Butterfly" className="butterfly3" />
    <img src="/Sofija/Button.png" alt="Pattern" className="buttonPattern" />
  <Link to={"/letter"} style={{textDecoration: "none"}}>
    <div className='button'>Letter for you</div>
  </Link>

  <img src="/Sofija/BottomRight.png" alt="Paper" className="bottomLeft" />
    
    </>
  )
}

export default MainPage