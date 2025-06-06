import { TrendingUp, TrendingDown } from "lucide-react"

export function StatsCard({ title, value, change, changeType, icon: Icon, color }) {
  const isPositive = changeType === "positive"

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">{value}</p>
          <div className="flex items-center mt-2">
            {isPositive ? (
              <TrendingUp className="text-green-500" size={16} />
            ) : (
              <TrendingDown className="text-red-500" size={16} />
            )}
            <span className={`text-sm ml-1 ${isPositive ? "text-green-500" : "text-red-500"}`}>{change}</span>
            <span className="text-sm text-gray-500 ml-1">vs last month</span>
          </div>
        </div>
        <div className={`p-3 rounded-full ${color}`}>
          <Icon size={24} className="text-white" />
        </div>
      </div>
    </div>
  )
}
