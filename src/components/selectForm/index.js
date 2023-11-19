import React, { useRef, useState } from 'react'
import http from '../../utils/axios'
import { useDispatch, useSelector } from 'react-redux'
import { filterJobList } from '../../redux/reducer/jobReducer'
export default function SelectForm () {

  const [roles, setRoles] = useState([])
  const [types, setTypes] = useState([])
  const [company, setCompany] = useState('')

  const jobList = useSelector(state => state.job.jobList)

  const dispatch = useDispatch()

  const reset = () => {
    dispatch(filterJobList({ filterList: jobList }))
  }

  const search = async () => {

    console.log('jobInfo :: ', { roles, types, company })
    console.log('jobList :; ', jobList)
    var result = jobList.filter(element => {
      let flag = true, flag1 = true, flag2 = true
      if (company !== "") {
        flag = element.company.toLowerCase().indexOf(company.toLowerCase()) !== -1 ? true : false
      }
      if (roles.length !== 0) {
        flag1 = roles.includes(element.role) ? true : false
      }
      if (types.length !== 0) {
        flag2 = types.includes(element.jobType) ? true : false
      }

      return flag && flag1 && flag2

    })

    console.log('selectForm : ', result)
    dispatch(filterJobList({ filterList: result }))
  }

  const changeType = (e) => {
    const type = e.target.value
    var list = types
    if (list.includes(type)) {
      var index = list.indexOf(type)
      list.splice(index, 1)
    } else {
      list.push(type)
    }
    setTypes([...list])


  }

  const changeRole = (e) => {
    const role = e.target.value
    var list = roles
    if (list.includes(role)) {
      var index = list.indexOf(role)
      list.splice(index, 1)
    } else {
      list.push(role)
    }
    setRoles([...list])


  }

  const changeCompany = (e) => {
    setCompany(e.target.value)

  }

  return (
    <>
      <div className="form">
        <form method='post'>
          <div className="formList">
            <div className="formLabel">
              <label htmlFor="location">🌍 Loc:</label>
            </div>
            <div className="formCols">
              <label>
                <input type="checkbox" name="location" id="location" checked />
                <span>US</span>
              </label>
            </div>
          </div>
          <div className="formList">
            <div className="formLabel">
              <label htmlFor="role">🛠️ Role:</label>
            </div>
            <div className="formCols">
              <label>
                <input type="checkbox" name="role" id="role" value="software developer" onChange={changeRole} />
                <span>SoftWare Developer Engineer</span>
              </label>
              <label>
                <input type="checkbox" name="role" id="role" value="frontend developer" onChange={changeRole} />
                <span>Frontend Developer Engineer</span>
              </label>
              <label>
                <input type="checkbox" name="role" id="role" value="fullstack developer" onChange={changeRole} />
                <span>FullStack Developer Engineer</span>
              </label>
            </div>
          </div>
          <div className="formList">
            <div className="formLabel">
              <label htmlFor="Type">🧑‍💻 Experience:</label>
            </div>
            <div className="formCols">
              <label>
                <input type="checkbox" name="Type" id="Type" value="internship" onChange={changeType} />
                <span>INTERNSHIP</span>
              </label>
              <label>
                <input type="checkbox" name="Type" id="Type" value="entry level" onChange={changeType} />
                <span>ENTRY LEVEL</span>
              </label>
              <label>
                <input type="checkbox" name="Type" id="Type" value="mid-senior level" onChange={changeType} />
                <span>MID-SENIOR LEVEL</span>
              </label>
            </div>
          </div>
          <div className="formList">
            <div className="formLabel">
              <label htmlFor="company">🏠 Company:</label>
            </div>
            <div className="formCols">
              <div className="searchBox">
                <input type="text" name="company" placeholder='Company Name Search' onChange={changeCompany} />
                <button className='search' type='button' onClick={search}>Search</button>
                <button className='reset' type='reset' onClick={reset}>Reset</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
