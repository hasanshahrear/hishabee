import { CustomDataTable } from "./data-table"
import { HorizontalBar } from "./horizontal-bar"
import { PieChart } from "./pie-chart"

export function Dashboard() {
  return (
    <div className="container">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-4">
          <PieChart />
        </div>
        <div className="col-span-8">
          <HorizontalBar />
        </div>
        <div className="col-span-12">
          <CustomDataTable />
        </div>
      </div>
    </div>
  )
}
