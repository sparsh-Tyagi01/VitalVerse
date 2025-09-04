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
    <div className="bg-fuchsia-50 min-h-screen rounded-[10px]">
      <h1 className="font-bold text-3xl ml-4 pt-4">Donors & Recipients</h1>
      <h1 className="font-bold text-xl ml-4 pt-4">Find Match</h1>

      <div className="flex justify-around items-center shadow-[0px_0px_3px_black] rounded-[10px] h-15 mx-4 mt-6 p-2">
        <input
          type="text"
          placeholder="Search by name/type"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-500 pl-2 focus:outline-none h-8 rounded-[5px]"
        />
        <select
          className="border border-gray-500 h-8 rounded-[5px] w-40"
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
        >
          <option>Any</option>
          <option>Donor</option>
          <option>Recipient</option>
        </select>
        <select
          className="border border-gray-500 h-8 rounded-[5px] w-40"
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
          className="rounded-[5px] bg-green-800 font-medium text-white px-6 h-8"
        >
          Search
        </motion.button>
      </div>

      <div className="flex flex-wrap gap-4 ml-4 mt-6">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div
              key={user.email}
              className="w-[25vw] h-[30vh] bg-white hover:shadow-[0px_0px_3px_gray] shadow-md rounded-2xl flex flex-col justify-center items-start pl-4"
            >
              <h1 className="font-medium">{user.name}</h1>
              <h3 className="text-sm">
                {user.role} • {user.type} • {user.subtype}
              </h3>
              <p className="text-gray-600">
                {user.email} • {user.phone}
              </p>
              <div className="mt-4">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="py-1 px-4 mr-4 rounded-[5px] text-white font-medium bg-blue-600 cursor-pointer"
                >
                  View
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="py-1 px-4 rounded-[5px] text-white font-medium bg-green-700 cursor-pointer"
                >
                  Request
                </motion.button>
              </div>
            </div>
          ))
        ) : (
          <p className="ml-4 text-gray-600">No matches found.</p>
        )}
      </div>
    </div>
  )
}

export default FindMatch
