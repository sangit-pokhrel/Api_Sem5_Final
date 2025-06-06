"use client"

import { useState } from "react"
import { Search, Star, Filter, ThumbsUp, ThumbsDown, Flag } from "lucide-react"

// Sample review data
const reviews = [
  {
    id: 1,
    user: "John Smith",
    service: "Plumbing Repair",
    provider: "Mike's Plumbing",
    rating: 5,
    comment: "Excellent service! Fixed my leaking sink quickly and professionally.",
    date: "2024-01-15",
    helpful: 12,
    unhelpful: 1,
  },
  {
    id: 2,
    user: "Sarah Johnson",
    service: "House Cleaning",
    provider: "CleanPro Services",
    rating: 4,
    comment: "Good cleaning service, but missed a few spots under the furniture.",
    date: "2024-01-12",
    helpful: 8,
    unhelpful: 2,
  },
  {
    id: 3,
    user: "David Brown",
    service: "Electrical Work",
    provider: "PowerFix Electric",
    rating: 5,
    comment: "Very professional and knowledgeable. Fixed all our electrical issues.",
    date: "2024-01-10",
    helpful: 15,
    unhelpful: 0,
  },
  {
    id: 4,
    user: "Emily Davis",
    service: "Lawn Mowing",
    provider: "Green Thumb Landscaping",
    rating: 2,
    comment: "Showed up late and did a rushed job. Not satisfied with the service.",
    date: "2024-01-08",
    helpful: 3,
    unhelpful: 7,
  },
  {
    id: 5,
    user: "Michael Wilson",
    service: "Carpet Cleaning",
    provider: "Fresh Carpets Inc",
    rating: 4,
    comment: "Good job overall. Carpets look much better now. Would use again.",
    date: "2024-01-05",
    helpful: 9,
    unhelpful: 1,
  },
]

export function Reviews() {
  const [searchTerm, setSearchTerm] = useState("")
  const [ratingFilter, setRatingFilter] = useState("All")

  const filteredReviews = reviews.filter(
    (review) =>
      (review.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
        review.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
        review.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
        review.comment.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (ratingFilter === "All" || review.rating === Number.parseInt(ratingFilter)),
  )

  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star key={i} size={16} className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} />
      ))
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h2 className="text-xl font-semibold text-gray-900">Customer Reviews</h2>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search reviews..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="relative">
              <select
                className="pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                value={ratingFilter}
                onChange={(e) => setRatingFilter(e.target.value)}
              >
                <option value="All">All Ratings</option>
                <option value="5">5 Stars</option>
                <option value="4">4 Stars</option>
                <option value="3">3 Stars</option>
                <option value="2">2 Stars</option>
                <option value="1">1 Star</option>
              </select>
              <Filter
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                size={16}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="divide-y divide-gray-200">
        {filteredReviews.length > 0 ? (
          filteredReviews.map((review) => (
            <div key={review.id} className="p-6 hover:bg-gray-50">
              <div className="flex justify-between">
                <div>
                  <div className="flex items-center mb-2">
                    <div className="flex mr-2">{renderStars(review.rating)}</div>
                    <span className="text-sm text-gray-500">• {review.date}</span>
                  </div>
                  <h3 className="font-medium text-gray-900">{review.user}</h3>
                  <p className="text-sm text-gray-500 mb-2">
                    {review.service} by {review.provider}
                  </p>
                  <p className="text-gray-700">{review.comment}</p>
                </div>
                <div>
                  <button className="p-1 text-gray-400 hover:text-red-500">
                    <Flag size={16} />
                  </button>
                </div>
              </div>
              <div className="flex items-center mt-4 space-x-4">
                <button className="flex items-center text-sm text-gray-500 hover:text-gray-700">
                  <ThumbsUp size={14} className="mr-1" />
                  <span>Helpful ({review.helpful})</span>
                </button>
                <button className="flex items-center text-sm text-gray-500 hover:text-gray-700">
                  <ThumbsDown size={14} className="mr-1" />
                  <span>Not Helpful ({review.unhelpful})</span>
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="p-6 text-center text-gray-500">No reviews found matching your criteria.</div>
        )}
      </div>
      <div className="px-6 py-4 flex items-center justify-between border-t border-gray-200">
        <div className="text-sm text-gray-500">
          Showing <span className="font-medium">{filteredReviews.length}</span> of{" "}
          <span className="font-medium">{reviews.length}</span> reviews
        </div>
        <div className="flex space-x-2">
          <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
            Previous
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
