import React from 'react'
import ReactApexchart from 'react-apexcharts'
import { useTheme } from '@mui/material/styles'

export default function JobTrend ({ list }) {

  const theme = useTheme()
  const series = list[0] || []
  const options = {
    chart: {
      sparkline: { enabled: true },
      animations: { enabled: false }
    },
    stroke: {
      width: 6,
      colors: [theme.palette.background.paper]
    },
    legend: { show: true },
    tooltip: { enabled: true },
    dataLabels: { enabled: false },
    labels: list[1] || [],
    colors: [
      theme.palette.success.main,
      theme.palette.primary.main,
      theme.palette.secondary.main,
      theme.palette.info.main
    ],
    grid: {
      padding: {
        top: -7,
        bottom: 5
      }
    },
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          size: '75%',
          labels: {
            show: true,
            name: {
              offsetY: 17,
              fontSize: '14px',
              color: theme.palette.text.disabled,
              fontFamily: theme.typography.fontFamily
            },
            value: {
              offsetY: -17,
              fontSize: '24px',
              color: theme.palette.text.primary,
              fontFamily: theme.typography.fontFamily
            },
            total: {
              show: true,
              label: list[2] || "",
              fontSize: '14px',
              color: theme.palette.text.disabled,
              fontFamily: theme.typography.fontFamily
            }
          }
        }
      }
    }
  }

  return (
    <div id="chart">
      <ReactApexchart options={options} series={series} type="donut" width={400} />
    </div>)
}
