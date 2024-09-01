"use client"

import { useState, useEffect } from "react"

interface Complaint {
  id: number
  title: string
  description: string
  status: "open" | "closed" | "pending"
}

export default function AdminComplaintCenter() {
  const [complaints, setComplaints] = useState<Complaint[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const response = await fetch("/api/complaints/")  // Update this to your API endpoint
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        const data: Complaint[] = await response.json()
        setComplaints(data)
      } catch (error) {
        console.error("Error fetching complaints:", error)
        setError("Failed to fetch complaints. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    fetchComplaints()
  }, [])

  if (loading) {
    return (
      <div className="w-full max-w-6xl mx-auto p-6">
        <h2 className="text-lg font-bold mb-4">Complaints</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p>Loading complaints...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="w-full max-w-6xl mx-auto p-6">
        <h2 className="text-lg font-bold mb-4">Complaints</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-red-500">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <h2 className="text-lg font-bold mb-4">Complaints</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <table className="w-full">
          <thead>
            <tr className="border-b border-muted">
              <th className="text-left font-medium py-3">Title</th>
              <th className="text-left font-medium py-3">Description</th>
              <th className="text-left font-medium py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {complaints.length > 0 ? (
              complaints.map((complaint) => (
                <tr key={complaint.id} className="border-b border-muted">
                  <td className="py-3">
                    <a href="#" className="font-medium hover:underline">
                      {complaint.title}
                    </a>
                  </td>
                  <td className="py-3">{complaint.description}</td>
                  <td className="py-3">
                    <span
                      className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                        complaint.status === "open"
                          ? "bg-blue-100 text-blue-800"
                          : complaint.status === "closed"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {complaint.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className="py-3 text-center">No complaints available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
