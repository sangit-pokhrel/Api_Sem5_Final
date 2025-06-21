// src/components/dashboard/pages/HomeDashboard.jsx
import {
    Users,
    ShoppingCart,
    DollarSign,
    TrendingUp,
} from "lucide-react"
import StatsCard from "./stats-card"
import SimpleChart from "./chart"
import RecentOrders from "./recent-orders"

export default function HomeDashboard() {
    const statsData = [
        {
            title: "Total Users",
            value: "10",
            change: "89%",
            changeType: "positive",
            icon: Users,
            color: "bg-blue-500",
        },
        {
            title: "Total Orders",
            value: "0",
            change: "0%",
            changeType: "positive",
            icon: ShoppingCart,
            color: "bg-green-500",
        },
        {
            title: "Revenue",
            value: "Nrs. 0",
            change: "0%",
            changeType: "positive",
            icon: DollarSign,
            color: "bg-purple-500",
        },
        {
            title: "Growth Rate",
            value: "0%",
            change: "0%",
            changeType: "negative",
            icon: TrendingUp,
            color: "bg-orange-500",
        },
    ]

    const chartData = [
        { label: "Jan", value: 0 },
        { label: "Feb", value: 0 },
        { label: "Mar", value: 0 },
        { label: "Apr", value: 0 },
        { label: "May", value: 0 },
    ]

    const trafficData = [
        { label: "Desktop", value: 30 },
        { label: "Mobile", value: 10 },
        { label: "Tablet", value: 0 },
    ]

    return (
        <div className="container mx-auto px-6 py-8">
            {/* Page Title */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-gray-600 mt-2">Welcome back! Here's what's happening with your business today.</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {statsData.map((stat, index) => (
                    <StatsCard key={index} {...stat} />
                ))}
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <SimpleChart data={chartData} title="Monthly Revenue" />
                <SimpleChart data={trafficData} title="Traffic Sources" />
            </div>

            {/* Activity Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <div className="lg:col-span-2">
                    <RecentOrders />
                </div>

                <div className="space-y-6">
                    {/* Quick Stats */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-600">Active Users</span>
                                <span className="text-sm font-medium text-gray-900">1,234</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-600">Pending Orders</span>
                                <span className="text-sm font-medium text-gray-900">56</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-600">Total Products</span>
                                <span className="text-sm font-medium text-gray-900">789</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-600">Low Stock Items</span>
                                <span className="text-sm font-medium text-red-600">12</span>
                            </div>
                        </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                        <div className="space-y-3">
                            {[
                                { label: "New user registered", time: "2 minutes ago", color: "bg-blue-500" },
                                { label: "Order #12345 completed", time: "5 minutes ago", color: "bg-green-500" },
                                { label: "Product stock updated", time: "10 minutes ago", color: "bg-yellow-500" },
                                { label: "Payment received", time: "15 minutes ago", color: "bg-purple-500" },
                            ].map((activity, i) => (
                                <div key={i} className="flex items-start space-x-3">
                                    <div className={`w-2 h-2 ${activity.color} rounded-full mt-2`}></div>
                                    <div>
                                        <p className="text-sm text-gray-900">{activity.label}</p>
                                        <p className="text-xs text-gray-500">{activity.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
