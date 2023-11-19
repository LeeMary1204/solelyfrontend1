import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import icon from '../../imgs/icon.svg'
export default function Header () {


  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="navList">
            <ul className='navContent'>
              <li>
                <a href="javascript:void(0);">
                  <img src={icon} alt="" width={30} height={30} />
                  <h1>solely</h1>
                </a>
              </li>
              <li>
                <Link to="/">首页</Link>
              </li>
              <li><a href="javascript:void(0);">简历代投</a></li>
              <li><a href="javascript:void(0);">Software职位（日更）<i></i></a>
                <div className="showContent">
                  <ul>
                    <li><Link to="/job">Software 美国</Link></li>
                  </ul>
                </div>
              </li>
              <li><a href="javascript:void(0);">FullStack职位（日更）</a>
                {/* 
                <i></i>
                <div className="showContent">
                  <ul>
                    <li><Link to="/job/FullStack">FullStack 美国</Link></li>
                  </ul>
                </div> */}
              </li>
              <li><a href="javascript:void(0);">Frontend职位（日更）</a>
                {/*
                <i></i>
                <div className="showContent">
                  <ul>
                    <li><Link to="/job/Frontend">Frontend 美国</Link></li>
                  </ul>
                </div> */}
              </li>
              <li><a href="javascript:void(0);">GHC等重要材料</a></li>
            </ul>
          </div>
          {/* <div className="buttonList">
            <button type='button' className='btn'>
              <span>Job Alert</span>
            </button>
            <button type='button' className='btn'>
              <span><i></i>Google Login</span>
            </button>
          </div> */}
        </div>
      </div>
    </>
  )
}
