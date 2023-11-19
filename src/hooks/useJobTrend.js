import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function useJobTrend () {

  const [trendList1, setTrendList1] = useState([])
  const [trendList2, setTrendList2] = useState([])

  const jobList = useSelector(state => state.job.jobList)

  useEffect(() => {
    JobTrend1()
    JobTrend2()
  }, [jobList])

  const JobTrend1 = () => {

    var result = jobList.filter(element => {
      return element.role === 'frontend developer'
    })
    var result1 = jobList.filter(element => {
      return element.role === 'software developer'
    })
    var result2 = jobList.filter(element => {
      return element.role === 'fullstack developer'
    })

    var result3 = [[result?.length, result1?.length, result2?.length], ['frontend', 'software', 'fullstack'], 'Job Role']
    setTrendList1([...result3])
  }

  const JobTrend2 = () => {
    var result = jobList.filter(element => {
      return element.jobType === 'internship'
    })
    var result1 = jobList.filter(element => {
      return element.jobType === 'entry level'
    })
    var result2 = jobList.filter(element => {
      return element.jobType === 'mid-senior level'
    })
    var result3 = [[result?.length, result1?.length, result2?.length], ['internship', 'entry level', 'mid-senior level'], 'Job Experience']
    setTrendList2([...result3])
  }


  return { trendList1, trendList2 }
}
