"use client"

import { useNavbarContext } from "@/providers"
import Image from "next/image"
import { Menu } from "primereact/menu"
import { MenuItem } from "primereact/menuitem"

export function SidebarNavigation() {
  const { isToggled } = useNavbarContext()
  let items: MenuItem[] = [{ label: "Dashboard", icon: "pi pi-th-large" }]

  return (
    <div
      className={`flex h-screen w-[230px] flex-col bg-[#ffcb05] text-black p-3 items-center pt-5 duration-1500 ease-linear transition-all  ${
        isToggled ? " absolute -left-80" : ""
      }`}
    >
      <Image src="/assets/images/logo.svg" height="26" width="120" alt="logo" />
      <br />
      <Menu model={items} className="bg-transparent border-none" />
    </div>
  )
}
