import React from 'react'
import wxcode from '../../imgs/wxCode.png'
export default function Card () {
  return (
    <>
      <section className='card'>
        <div className="container">
          <div className="boxes">
            <div className="box">
              <h2>明星导师团师资</h2>
              <ul>
                <li><h6>FLAG资深面试官</h6></li>
                <li><h6>TOP2 CS / 北美名校 CS</h6></li>
                <li><h6>人均刷题1500+</h6></li>
                <li><h6>已帮助300+学员斩获北美顶级offer</h6></li>
              </ul>
              <img src={wxcode} alt="" width={283} height={283} />
              <h2 className='bottom-text'>可扫码咨询客服</h2>
            </div>
            <div className="box">
              <div className="title">
                <h3>咨询&nbsp;1V1&nbsp;1小时</h3>
                <span>适用于SDE/MLE零基础学员</span>
              </div>
              <div className="boxContent">
                <p>
                  <span><del>$568</del></span>
                  $298
                </p>
                <ul>
                  <li>全面解读面试流程</li>
                  <li>面试准备指导</li>
                  <li>个人问题诊断</li>
                </ul>
              </div>
            </div>
            <div className="box">
              <div className="title">
                <h3>Mock模拟面试&nbsp;1小时</h3>
                <span>适用于未来一个月开始面试的学员</span>
              </div>
              <div className="boxContent">
                <p>
                  <span><del>$568</del></span>
                  $298
                </p>
                <ul>
                  <li>FLAG面试官亲授</li>
                  <li>1V1真实面试体验</li>
                  <li>快速补齐短板</li>
                </ul>

              </div>
              <div className='leetcode'>LeetCode 刷题数大于200题者可再获得$20减免</div>
            </div>
            <div className="box">
              <div className="title">
                <h3>简历精修&nbsp;1小时</h3>
                <span>适用于投简历老是石沉大海的学员</span>
              </div>
              <div className="boxContent">
                <p>
                  <span>$668</span>
                  $398
                </p>
                <ul>
                  <li>FLAG面试官亲授</li>
                  <li>根据学员背景和职位量身定制</li>
                  <li>简历内推快人一步</li>
                </ul>
              </div>
              <div className='leetcode'>LeetCode 刷题数大于200题者可再获得$20减免</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
