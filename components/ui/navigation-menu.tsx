"use client"

import * as React from "react"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"
import { Phone, Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn(
      "fixed top-0 left-0 w-full z-50 flex items-center justify-between bg-white shadow-md",
      className
    )}
    {...props}
  >
    {children}
  </NavigationMenuPrimitive.Root>
))
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName

const navigationMenuTriggerStyle = cva(
  "inline-flex items-center justify-center text-sm font-medium text-slate-700 hover:text-yellow-500 transition-colors"
)

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn("hidden md:flex items-center gap-6", className)}
    {...props}
  />
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

const NavigationMenuItem = NavigationMenuPrimitive.Item
const NavigationMenuLink = NavigationMenuPrimitive.Link

// ✅ Call Button
const CallMenuItem = () => (
  <NavigationMenuItem>
    <NavigationMenuLink
      href="tel:0414713777"
      className={cn(
        "bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold flex items-center gap-2 rounded-full px-4 py-2 transition"
      )}
    >
      <Phone className="h-4 w-4" />
      Call Now
    </NavigationMenuLink>
  </NavigationMenuItem>
)

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  return (
    <NavigationMenu>
      {/* Left Logo */}
      <div className="flex items-center gap-2 ml-4">
        <span className="text-xl font-bold text-yellow-500">🔑 Locksmith</span>
      </div>

      {/* Desktop Menu */}
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" passHref legacyBehavior>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/about" passHref legacyBehavior>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/services" passHref legacyBehavior>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Services
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/contact" passHref legacyBehavior>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/emergency-car-locksmith" passHref legacyBehavior>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Emergency
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/car-key-replacement" passHref legacyBehavior>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Car Key Replacement
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/ignition-repair" passHref legacyBehavior>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Ignition Repair
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

       
      </NavigationMenuList>

      {/* Right Call Button (Desktop) */}
      <div className="hidden md:block mr-4">
        <CallMenuItem />
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="md:hidden p-2 mr-4 rounded-md hover:bg-yellow-100"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start px-6 py-4 space-y-4 md:hidden">
          <Link href="/" className="text-slate-700 hover:text-yellow-500">
            Home
          </Link>
          <Link href="/about" className="text-slate-700 hover:text-yellow-500">
            About
          </Link>
          <Link href="/services" className="text-slate-700 hover:text-yellow-500">
            Services
          </Link>
          <Link href="/contact" className="text-slate-700 hover:text-yellow-500">
            Contact
          </Link>
          <Link href="/emergency-car-locksmith" className="text-slate-700 hover:text-yellow-500">
            Emergency
          </Link>
          <Link href="/car-key-replacement" className="text-slate-700 hover:text-yellow-500">
            Car Key Replacement
          </Link>
          <Link href="/ignition-repair" className="text-slate-700 hover:text-yellow-500">
            Ignition Repair
          </Link>
          <Link href="/transponder-programming" className="text-slate-700 hover:text-yellow-500">
            Transponder Programming
          </Link>
          <Link href="/broken-key-extraction" className="text-slate-700 hover:text-yellow-500">
            Broken Key Extraction
          </Link>
          <a
            href="tel:0414713777"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold rounded-full px-5 py-2 flex items-center gap-2 justify-center"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
        </div>
      )}
    </NavigationMenu>
  )
}
