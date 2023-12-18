"use client"

import { useNavbarContext } from "@/providers"
import { Button } from "primereact/button"
import { TieredMenu } from "primereact/tieredmenu"
import { useRef } from "react"

export function TopBarNavigation() {
  const menu = useRef<any>(null)
  const { toggle } = useNavbarContext()

  const items = [
    {
      label: "Edit Profile",
      icon: "pi pi-fw pi-pencil",
    },
    {
      label: "Notifications",
      icon: "pi pi-bell",
    },
    {
      label: "Logout",
      icon: "pi pi-fw pi-power-off",
    },
  ]

  return (
    <div className="h-[70px] bg-white border bottom-1 p-2 flex items-center justify-between px-8">
      <div>
        <Button
          icon="pi pi-bars"
          aria-label="Menu Collapse"
          className="bg-[#ffcb05] border-none text-white rounded-lg p-3"
          onClick={() => toggle()}
        />
      </div>
      <div className="card flex justify-content-center">
        <TieredMenu model={items} popup ref={menu} breakpoint="767px" />
        <Button
          label="Hasan"
          icon="pi pi-user"
          onClick={(e: any) => menu && menu.current && menu.current.toggle(e)}
          className=" bg-[#ffcb05] text-black border-none rounded-full py-1 px-3"
        />
      </div>
    </div>
  )
}
