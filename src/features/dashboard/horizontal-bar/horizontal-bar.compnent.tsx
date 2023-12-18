"use client"
import { Chart } from "primereact/chart"
import { useEffect, useState } from "react"

export function HorizontalBar() {
  const [chartData, setChartData] = useState({})
  const [chartOptions, setChartOptions] = useState({})

  useEffect(() => {
    const textColor = "#5B9A8B"
    const textColorSecondary = "#445069"
    const surfaceBorder = "#F7E987"
    const data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Apple Market Share",
          backgroundColor: "#3559E0",
          borderColor: "#3559E0",
          data: [65, 59, 80, 81, 56, 55, 40],
        },
        {
          label: "Windows Market Share",
          backgroundColor: "#FF9800",
          borderColor: "#FF9800",
          data: [28, 48, 40, 19, 86, 27, 90],
        },
      ],
    }
    const options = {
      indexAxis: "y",
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            fontColor: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
            font: {
              weight: 500,
            },
          },
          grid: {
            display: false,
            drawBorder: false,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
      },
    }

    setChartData(data)
    setChartOptions(options)
  }, [])

  return (
    <div className="shadow-xl p-8 rounded-lg bg-white">
      <Chart type="bar" data={chartData} options={chartOptions} />
    </div>
  )
}
