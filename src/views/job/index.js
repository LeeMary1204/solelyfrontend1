import React, { useEffect, useState } from 'react'
import { Card, SelectForm, DataList, JobTrend } from '../../components'
import { useJobTrend } from '../../hooks'
import { useDispatch, useSelector } from 'react-redux'
import { changeJobList } from '../../redux/reducer/jobReducer'
import http from '../../utils/axios'
import { showDate } from '../../utils/utils'
import { useScrollTop } from '../../hooks'

export default function Job () {

  const dispatch = useDispatch()
  useScrollTop()

  const getData = async () => {
    await http.get('/getAllJobs').then((response) => {
      var jobList = response?.jobs || []
      dispatch(changeJobList({ jobList }))
    })
  }

  useEffect(() => {
    getData()
  }, [])

  const { trendList1, trendList2 } = useJobTrend()

  return (
    <>
      <div className="mainContent">
        <Card />
        <div className="adContent">
          <strong>
            Haooffer provides real-time tracking of job opportunities from over 🚀
            <span>30,000 companies</span>
            🚀, ensuring you have access to the latest job postings.
          </strong>
        </div>
        <div className="adTitle">
          <h1>
            Work Trends for <span>{showDate()}</span>
          </h1>
        </div>
        <div className="jobTrends">

          <div className="jobTrend left">
            {
              trendList1 && (<JobTrend list={trendList1}></JobTrend>)
            }
          </div>
          <div className="jobTrend right">

            {
              trendList2 && (<JobTrend list={trendList2}></JobTrend>)
            }
          </div>
        </div>

        <SelectForm />
        <DataList />
      </div>
    </>
  )
}
