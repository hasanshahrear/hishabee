"use client"

import { Chart } from "primereact/chart"
import { useEffect, useState } from "react"

export function PieChart() {
  const [chartData, setChartData] = useState({})
  const [chartOptions, setChartOptions] = useState({})

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement)
    const data = {
      labels: ["Mac", "Linux", "Windows"],
      datasets: [
        {
          data: [540, 325, 702],
          backgroundColor: [
            documentStyle.getPropertyValue("--black-900"),
            documentStyle.getPropertyValue("--orange-400"),
            documentStyle.getPropertyValue("--green-500"),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue("--black-900"),
            documentStyle.getPropertyValue("--orange-400"),
            documentStyle.getPropertyValue("--green-400"),
          ],
        },
      ],
    }
    const options = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
          },
        },
      },
    }

    setChartData(data)
    setChartOptions(options)
  }, [])

  return (
    <div className="shadow-xl p-8 rounded-lg bg-white">
      <Chart
        type="pie"
        data={chartData}
        options={chartOptions}
        pt={{
          root: {
            className: "w-full max-h-[376px]",
          },
        }}
      />
    </div>
  )
}
