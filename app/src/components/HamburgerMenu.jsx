import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import PropTypes from "prop-types"
import { useState } from "react"
import { NavLink } from "react-router"
import { useArrowKeyNav } from "../hooks/useArrowKeyNav"

export function HamburgerMenu({ items = [] }) {
  const [isOpen, setIsOpen] = useState(false)
  const navRef = useArrowKeyNav({ orientation: "vertical" })

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            className="size-11 text-white hover:bg-blue-700 hover:text-white focus-visible:ring-white"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          />
        }
      >
        <Menu aria-hidden="true" className="h-5 w-5" />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Menú</SheetTitle>
        </SheetHeader>
        <nav ref={navRef} aria-label="Navegación principal móvil" className="flex flex-col gap-2 p-4">
          {items.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end
              className={({ isActive }) => [
                "flex min-h-11 items-center rounded-md px-3 py-2 text-base font-medium transition-colors",
                "hover:bg-accent hover:text-accent-foreground focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-blue-700",
                isActive ? "bg-blue-100 text-blue-950" : "text-foreground",
              ].join(" ")}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

HamburgerMenu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ),
}
