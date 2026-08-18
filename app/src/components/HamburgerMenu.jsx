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
import { useId, useState } from "react"
import { NavLink } from "react-router"

export function HamburgerMenu({ items = [] }) {
  const [isOpen, setIsOpen] = useState(false)
  const menuId = useId()

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="size-11 text-white hover:bg-blue-700 hover:text-white focus-visible:ring-white"
          aria-expanded={isOpen}
          aria-controls={menuId}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          <Menu aria-hidden="true" className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" id={menuId}>
        <SheetHeader>
          <SheetTitle>Menú</SheetTitle>
        </SheetHeader>
        <nav aria-label="Navegación principal móvil" className="flex flex-col gap-2 p-4">
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
