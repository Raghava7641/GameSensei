import React from 'react'
import { Chart } from 'react-google-charts'

// export const data = [
//   ['Task', 'Hours per Day'],
//   ['Work', 11],
//   ['Eat', 2],
//   ['Commute', 2],
//   ['Watch TV', 2],
//   ['Sleep', 7],
// ]

export const options = {
  title: 'Video Game Sales by Region',
}

export default function DetailChart(props) {
  const { chartData } = props
  console.log(chartData)
  const data = [
    ['Region', 'Sales'],
    ['North America', chartData.NA_Sales],
    ['Europe', chartData.EU_Sales],
    ['Japan', chartData.JP_Sales],
    ['Other', chartData.Other_Sales],
  ]

  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={'100%'}
      height={'400px'}
    />
  )
}
