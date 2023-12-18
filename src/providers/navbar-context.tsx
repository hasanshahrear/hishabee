"use client"

import { createContext, useContext, useEffect, useState } from "react"

type TNavbarContextData = {
  isToggled: boolean
  toggle: () => void
}

const NavbarContext = createContext<TNavbarContextData>({
  isToggled: false,
  toggle: () => {},
})

export function useNavbarContext() {
  const context = useContext(NavbarContext)
  return context
}

type TNavbarContextProviderProps = {
  children: React.ReactNode
}

export function NavbarContextProvider({
  children,
}: TNavbarContextProviderProps) {
  const [isToggled, setIsToggled] = useState<boolean>(false)

  const toggle = () => {
    setIsToggled((prev) => !prev)
  }

  const contextValue: TNavbarContextData = {
    isToggled,
    toggle,
  }

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches
      setIsToggled(isMobile)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <NavbarContext.Provider value={contextValue}>
      {children}
    </NavbarContext.Provider>
  )
}
