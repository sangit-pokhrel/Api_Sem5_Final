export function SimpleChart({ data, title }) {
  const maxValue = Math.max(...data.map((item) => item.value))

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      <div className="space-y-3">
        {data.map((item, index) => (
          <div key={index} className="flex items-center">
            <div className="w-20 text-sm text-gray-600">{item.label}</div>
            <div className="flex-1 mx-4">
              <div className="bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(item.value / maxValue) * 100}%` }}
                ></div>
              </div>
            </div>
            <div className="w-16 text-sm font-medium text-gray-900 text-right">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
