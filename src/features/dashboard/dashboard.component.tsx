"use client"

import { CustomDataTable } from "./data-table"
import { HorizontalBar } from "./horizontal-bar"
import { PieChart } from "./pie-chart"

export function Dashboard() {
  return (
    <div className="container">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-6 lg:col-span-4 text-center">
          <PieChart />
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-8">
          <HorizontalBar />
        </div>
        <div className="col-span-12">
          <CustomDataTable />
        </div>
      </div>
    </div>
  )
}
