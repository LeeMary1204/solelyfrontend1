import React from 'react'
import { Card } from '../../components'
import { useScrollTop } from '../../hooks'
import img1 from '../../imgs/1.avif'
import img2 from '../../imgs/2.webp'
import img3 from '../../imgs/3.avif'
import img4 from '../../imgs/4.avif'


export default function Home () {

  useScrollTop()

  return (
    <>
      <div className="mainContent">
        <div className="gridList">
          <div className="boxes">
            <div className="box">
              <img src={img1} alt="" height={131} width={275} />
              <h2 className='title'>美国</h2>
              <h2>Intern职位</h2>
              <p>每日更新</p>
            </div>
            <div className="box">
              <img src={img2} alt="" height={131} width={275} />
              <h2 className='title'>美国</h2>
              <h2>NewGrad职位</h2>
              <p>每日更新</p>
            </div>
            <div className="box">
              <img src={img3} alt="" height={131} width={275} />
              <h2 className='title'>加拿大</h2>
              <h2>Intern职位</h2>
              <p>每日更新</p>
            </div>
            <div className="box">
              <img src={img4} alt="" height={131} width={275} />
              <h2 className='title'>加拿大</h2>
              <h2>NewGrad职位</h2>
              <p>每日更新</p>
            </div>
          </div>
        </div>
        <Card />
      </div>
    </>
  )
}
