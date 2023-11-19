import { useState } from 'react'
import { useSelector } from 'react-redux'

export default function usePagination (itemsPerPage) {

  const [itemOffset, setItemOffset] = useState(0)
  const filterList = useSelector(state => state.job.filterList) || []
  console.log('pagination :: ', filterList)

  const endOffset = itemOffset + itemsPerPage
  const jobs = filterList.slice(itemOffset, endOffset)

  const pageCount = Math.ceil(filterList?.length / itemsPerPage)

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filterList?.length
    setItemOffset(newOffset)
  }

  return {
    handlePageClick, pageCount, jobs
  }
}






