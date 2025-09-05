import { useState } from "react"
import { motion } from "motion/react"

const FindMatch = () => {
  const users = [
    { name: "Ramesh Kumar", role: "Donor", type: "Organ", subtype: "Kidney", email: "ramesh@example.com", phone: "+91 9100010001" },
    { name: "Priya Sharma", role: "Donor", type: "Blood", subtype: "A+", email: "priya@example.com", phone: "+91 9100010002" },
    { name: "Imran Ali", role: "Donor", type: "Blood", subtype: "O-", email: "imran@example.com", phone: "+91 9100010003" },
    { name: "Kavita Mehra", role: "Donor", type: "Organ", subtype: "Liver", email: "kavita@example.com", phone: "+91 9100010004" },
    { name: "Rahul Verma", role: "Recipient", type: "Organ", subtype: "Kidney", email: "rahul@example.com", phone: "+91 9100010005" },
    { name: "Sneha Gupta", role: "Recipient", type: "Blood", subtype: "A+", email: "sneha@example.com", phone: "+91 9100010006" },
    { name: "Ankit Rao", role: "Recipient", type: "Blood", subtype: "O-", email: "ankit@example.com", phone: "+91 9100010007" },
  ]

  const [search, setSearch] = useState("")
  const [roleFilter, setRoleFilter] = useState("Any")
  const [typeFilter, setTypeFilter] = useState("Any")
  const [filteredUsers, setFilteredUsers] = useState(users)

  const handleSearch = () => {
    let results = users.filter((user) => {
      const matchesSearch =
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.type.toLowerCase().includes(search.toLowerCase()) ||
        user.subtype.toLowerCase().includes(search.toLowerCase())

      const matchesRole = roleFilter === "Any" || user.role === roleFilter
      const matchesType = typeFilter === "Any" || user.type === typeFilter

      return matchesSearch && matchesRole && matchesType
    })

    setFilteredUsers(results)
  }

  return (
    <div className="bg-gray-900 min-h-screen py-6 px-6 rounded-[10px] text-white">
      {/* Header */}
      <div className="mb-6">
        <h1 className="font-bold text-3xl text-white">Donors & Recipients</h1>
        <h2 className="font-semibold text-lg text-gray-300 mt-1">Find Match</h2>
      </div>

      {/* Filters Section */}
      <div className="flex flex-wrap gap-4 items-center bg-gray-800 shadow-md rounded-xl p-4 mb-6">
        <input
          type="text"
          placeholder="Search by name/type"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-gray-700 border border-gray-600 pl-3 pr-2 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-400 flex-1"
        />
        <select
          className="bg-gray-700 border border-gray-600 py-2 px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
        >
          <option>Any</option>
          <option>Donor</option>
          <option>Recipient</option>
        </select>
        <select
          className="bg-gray-700 border border-gray-600 py-2 px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
        >
          <option>Any</option>
          <option>Blood</option>
          <option>Organ</option>
        </select>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handleSearch}
          className="rounded-lg bg-indigo-600 hover:bg-indigo-700 transition text-white font-semibold px-6 py-2 shadow-md"
        >
          Search
        </motion.button>
      </div>

      {/* User Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <motion.div
              key={user.email}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800 shadow-md rounded-xl p-5 flex flex-col justify-between"
            >
              <div>
                <h1 className="font-semibold text-lg text-white">{user.name}</h1>
                <p className="text-sm text-gray-400 mt-1">
                  {user.role} • {user.type} • {user.subtype}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {user.email} • {user.phone}
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 py-2 rounded-lg text-white font-medium bg-blue-600 hover:bg-blue-700 transition"
                >
                  View
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 py-2 rounded-lg text-white font-medium bg-green-600 hover:bg-green-700 transition"
                >
                  Request
                </motion.button>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-gray-400 text-center col-span-full">No matches found.</p>
        )}
      </div>
    </div>
  )
}

export default FindMatch
