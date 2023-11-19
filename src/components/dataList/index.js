import React from 'react'
import { showDate } from '../../utils/utils'
import ReactPaginate from 'react-paginate'
import { usePagination } from '../../hooks'

export default function DataList () {

  const { handlePageClick, pageCount, jobs } = usePagination(6)

  return (
    <>
      <div className="dataList">
        <table cellSpacing={0}>
          <thead>
            <tr>
              <th className='job'>💼 Job (Click to apply)</th>
              <th className='company'>🏢 Company  </th>
              <th className='date'>📅 Date</th>
              <th className='loc'>📍 Loc</th>
              <th className='role'>👥 Role</th>
              <th className='type'>📦 Type</th>

              <th className='applied'>✅ Applied?</th>
            </tr>
          </thead>
          <tbody>
            {
              jobs && jobs.map((data, index) => (
                <tr key={index}>
                  <td><a href={data.descriptionURL}>{data.job}</a></td>
                  <td>{data.company}</td>
                  <td>{showDate()}</td>
                  <td>US</td>
                  <td>{data.role}</td>
                  <td>{data.jobType}</td>
                  {/* <td>
                    <a href="javascript:void(0);">Add #Tag</a> */}
                  {/* <div className="show">
                      <div className="showContainer">
                        <button className='btn1'>No-Sponsor</button>
                        <button className='btn2'>US Citizen</button>
                        <button className='btn3'>Closed</button>
                      </div>
                    </div> */}
                  {/* </td> */}
                  <td><input type="checkbox" name="" id="" /></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      <div className="pagination">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< prev"
          renderOnZeroPageCount={null}
        />
      </div>
    </>
  )
}
