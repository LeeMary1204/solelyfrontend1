import { createSlice } from '@reduxjs/toolkit'

export const jobSlice = createSlice(
  {
    name: 'job',
    initialState: {
      jobList: [],
      filterList: []
    },
    reducers: {
      changeJobList: (state, param) => {
        const { jobList } = param.payload
        console.log('param.payload:: ', param.payload)
        state.jobList = [...jobList]
        state.filterList = [...jobList]
        console.log('state.jobList :: ', state.jobList)
      },
      filterJobList: (state, param) => {
        const { filterList } = param.payload
        console.log('param.payload:: ', param.payload)
        state.filterList = [...filterList]
        console.log('state.filterList :: ', state.filterList)
      },
    }
  }
)

export const { changeJobList, filterJobList } = jobSlice.actions
const jobReducer = jobSlice.reducer
export default jobReducer