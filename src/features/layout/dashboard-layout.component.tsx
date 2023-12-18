"use client"

import { SidebarNavigation, TopBarNavigation } from "."

type TProps = {
  children: React.ReactNode
}

export function DashboardLayout({ children }: TProps) {
  return (
    <div className="flex h-screen overflow-hidden">
      <SidebarNavigation />
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <TopBarNavigation />
        <div className="p-5">{children}</div>
      </div>
    </div>
  )
}
