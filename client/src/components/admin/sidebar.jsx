"use client"
import {
  Home,
  Users,
  Star,
  AlertCircle,
  BarChart3,
  Settings,
  CreditCard,
  ShoppingBag,
  LogOut,
  ChevronLeft,
  ChevronRight,
  PenToolIcon as Tool,
} from "lucide-react"

const menuItems = [
  { icon: Home, label: "Dashboard", active: true },
  { icon: Users, label: "User Management", active: false },
  { icon: Star, label: "Reviews", active: false },
  { icon: AlertCircle, label: "Complaints", active: false },
  { icon: BarChart3, label: "Analytics", active: false },
  { icon: CreditCard, label: "Payments", active: false },
  { icon: ShoppingBag, label: "Orders", active: false },
  { icon: Settings, label: "Settings", active: false },
]

export function Sidebar({ isCollapsed, setIsCollapsed, activeItem, setActiveItem }) {
  return (
    <div
      className={`bg-gray-900 text-white transition-all duration-300 flex flex-col ${isCollapsed ? "w-16" : "w-64"} min-h-screen`}
    >
      {/* Header */}
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center">
              <Tool className="mr-2" size={24} />
              <h1 className="text-xl font-bold">HomeServe</h1>
            </div>
          )}
          {isCollapsed && <Tool className="mx-auto" size={24} />}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1 rounded-lg hover:bg-gray-700 transition-colors"
          >
            {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4 flex-1 overflow-y-auto">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.label}>
              <button
                onClick={() => setActiveItem(item.label)}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                  activeItem === item.label
                    ? "bg-blue-600 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                <item.icon size={20} />
                {!isCollapsed && <span>{item.label}</span>}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t border-gray-700 flex justify-center">
        <button
          className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-300 hover:bg-red-600 hover:text-white transition-colors"
          onClick={() => console.log("Logout clicked")}
        >
          <LogOut size={20} />
          {!isCollapsed && <span>Logout</span>}
        </button>
      </div>
    </div>
  )
}
