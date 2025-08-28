import React, { useMemo, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

// Unified Donors & Recipients Portal (All pages in one component)
// - Dashboard (stats, chart, recent activity)
// - Register (Donor/Recipient; Blood/Organ)
// - Find Match (filters + results)
// - Requests (table + status controls)
// - History (filters + list)
// - Guidelines (eligibility, safety, FAQs)
// - Support (contact form)

const COLORS = ["#4F46E5", "#10B981", "#F59E0B", "#EF4444", "#6366F1", "#22C55E"]; // indigo, green, amber, red, indigo-500, emerald

export default function DonorsRecipientsPortal() {
  // ---- Mock Data Stores ----
  const [people, setPeople] = useState([
    // Donors
    { id: 1, name: "Ramesh Kumar", role: "Donor", type: "Organ", groupOrOrgan: "Kidney", email: "ramesh@example.com", phone: "+91 90000 10001" },
    { id: 2, name: "Priya Sharma", role: "Donor", type: "Blood", groupOrOrgan: "A+", email: "priya@example.com", phone: "+91 90000 10002" },
    { id: 3, name: "Imran Ali", role: "Donor", type: "Blood", groupOrOrgan: "O-", email: "imran@example.com", phone: "+91 90000 10003" },
    { id: 4, name: "Kavita Mehra", role: "Donor", type: "Organ", groupOrOrgan: "Liver", email: "kavita@example.com", phone: "+91 90000 10004" },
    // Recipients
    { id: 5, name: "Rahul Verma", role: "Recipient", type: "Organ", groupOrOrgan: "Kidney", email: "rahul@example.com", phone: "+91 90000 20001" },
    { id: 6, name: "Sneha Gupta", role: "Recipient", type: "Blood", groupOrOrgan: "A+", email: "sneha@example.com", phone: "+91 90000 20002" },
    { id: 7, name: "Ankit Rao", role: "Recipient", type: "Blood", groupOrOrgan: "O-", email: "ankit@example.com", phone: "+91 90000 20003" },
  ]);

  const [requests, setRequests] = useState([
    { id: 1, name: "Rahul Verma", type: "Organ", detail: "Kidney", status: "Pending", createdAt: "2025-08-20" },
    { id: 2, name: "Sneha Gupta", type: "Blood", detail: "A+", status: "Approved", createdAt: "2025-08-21" },
    { id: 3, name: "Ankit Rao", type: "Blood", detail: "O-", status: "Completed", createdAt: "2025-08-19" },
  ]);

  const [history, setHistory] = useState([
    { id: 101, summary: "Blood donation: John → Priya (A+)", date: "2025-08-21", status: "Success" },
    { id: 102, summary: "Organ match: Ramesh → Kavita (Kidney)", date: "2025-08-18", status: "Success" },
    { id: 103, summary: "Blood request by Sneha (A+) approved", date: "2025-08-22", status: "Approved" },
  ]);

  const [activePage, setActivePage] = useState("Dashboard");

  // ---- Derived Stats ----
  const totals = useMemo(() => {
    const donors = people.filter(p => p.role === "Donor").length;
    const recipients = people.filter(p => p.role === "Recipient").length;
    const activeRequests = requests.filter(r => r.status !== "Completed").length;
    const completed = requests.filter(r => r.status === "Completed").length;
    return { donors, recipients, activeRequests, completed };
  }, [people, requests]);

  const pieData = useMemo(() => ([
    { name: "Donors", value: totals.donors },
    { name: "Recipients", value: totals.recipients },
    { name: "Active Requests", value: totals.activeRequests },
    { name: "Completed", value: totals.completed },
  ]), [totals]);

  // ---- Page: Dashboard ----
  const Dashboard = () => (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <StatCard label="Donors" value={totals.donors} />
        <StatCard label="Recipients" value={totals.recipients} />
        <StatCard label="Active Requests" value={totals.activeRequests} />
        <StatCard label="Completed" value={totals.completed} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow border">
          <h3 className="text-lg font-semibold mb-4">Donation Overview</h3>
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie data={pieData} dataKey="value" outerRadius={90} label>
                {pieData.map((entry, i) => (
                  <Cell key={entry.name} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow border">
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
          <ul className="space-y-3 text-sm">
            {history.slice(0, 5).map(item => (
              <li key={item.id} className="p-3 bg-gray-50 rounded-lg border">
                <div className="font-medium text-gray-800">{item.summary}</div>
                <div className="text-gray-500 text-xs">{item.date} — {item.status}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  // ---- Page: Register ----
  const Register = () => {
    const [form, setForm] = useState({
      name: "",
      role: "Donor",
      type: "Blood",
      groupOrOrgan: "A+",
      email: "",
      phone: "",
    });

    const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
    const organs = ["Kidney", "Liver", "Heart", "Lung", "Pancreas", "Cornea"];

    const onSubmit = (e) => {
      e.preventDefault();
      if (!form.name || !form.email || !form.phone) return alert("Please fill all required fields.");
      const id = Math.max(0, ...people.map(p => p.id)) + 1;
      setPeople(prev => [...prev, { id, ...form }]);
      setHistory(prev => [{ id: Date.now(), summary: `${form.role} registered: ${form.name} (${form.type} ${form.groupOrOrgan})`, date: new Date().toISOString().slice(0,10), status: "Registered" }, ...prev]);
      alert("Registration saved (mock). You can wire this to your API later.");
      setForm({ name: "", role: "Donor", type: "Blood", groupOrOrgan: "A+", email: "", phone: "" });
    };

    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Register as Donor or Recipient</h1>
        <form onSubmit={onSubmit} className="bg-white p-6 rounded-2xl shadow border max-w-xl space-y-4">
          <Field label="Full Name" required>
            <input value={form.name} onChange={e=>setForm({...form, name:e.target.value})} className="w-full border rounded-lg p-2" placeholder="Enter your name" />
          </Field>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Role" required>
              <select value={form.role} onChange={e=>setForm({...form, role:e.target.value})} className="w-full border rounded-lg p-2">
                <option>Donor</option>
                <option>Recipient</option>
              </select>
            </Field>
            <Field label="Type" required>
              <select value={form.type} onChange={e=>{
                const newType = e.target.value;
                setForm(f=>({...f, type:newType, groupOrOrgan: newType==="Blood"? bloodGroups[0] : organs[0]}));
              }} className="w-full border rounded-lg p-2">
                <option>Blood</option>
                <option>Organ</option>
              </select>
            </Field>
          </div>
          <Field label={form.type === "Blood" ? "Blood Group" : "Organ"} required>
            {form.type === "Blood" ? (
              <select value={form.groupOrOrgan} onChange={e=>setForm({...form, groupOrOrgan:e.target.value})} className="w-full border rounded-lg p-2">
                {bloodGroups.map(g=> <option key={g}>{g}</option>)}
              </select>
            ) : (
              <select value={form.groupOrOrgan} onChange={e=>setForm({...form, groupOrOrgan:e.target.value})} className="w-full border rounded-lg p-2">
                {organs.map(g=> <option key={g}>{g}</option>)}
              </select>
            )}
          </Field>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Email" required>
              <input type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} className="w-full border rounded-lg p-2" placeholder="you@example.com" />
            </Field>
            <Field label="Phone" required>
              <input value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} className="w-full border rounded-lg p-2" placeholder="+91 XXXXX XXXXX" />
            </Field>
          </div>
          <button className="w-full bg-indigo-600 text-white py-2 rounded-lg shadow hover:bg-indigo-700">Submit</button>
        </form>
      </div>
    );
  };

  // ---- Page: Find Match ----
  const FindMatch = () => {
    const [q, setQ] = useState("");
    const [role, setRole] = useState("Any"); // Donor/Recipient/Any
    const [type, setType] = useState("Any"); // Blood/Organ/Any

    const filtered = useMemo(() => {
      return people.filter(p => {
        const hitQ = !q || p.name.toLowerCase().includes(q.toLowerCase()) || p.groupOrOrgan.toLowerCase().includes(q.toLowerCase());
        const hitRole = role === "Any" || p.role === role;
        const hitType = type === "Any" || p.type === type;
        return hitQ && hitRole && hitType;
      });
    }, [q, role, type, people]);

    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Find Match</h1>
        <div className="bg-white p-4 rounded-2xl shadow border mb-4 grid grid-cols-1 sm:grid-cols-4 gap-3">
          <input value={q} onChange={e=>setQ(e.target.value)} className="border rounded-lg p-2" placeholder="Search by name / group / organ" />
          <select value={role} onChange={e=>setRole(e.target.value)} className="border rounded-lg p-2">
            <option>Any</option>
            <option>Donor</option>
            <option>Recipient</option>
          </select>
          <select value={type} onChange={e=>setType(e.target.value)} className="border rounded-lg p-2">
            <option>Any</option>
            <option>Blood</option>
            <option>Organ</option>
          </select>
          <button onClick={()=>{}} className="bg-emerald-600 text-white rounded-lg p-2 hover:bg-emerald-700">Search</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(p => (
            <div key={p.id} className="bg-white p-4 rounded-2xl shadow border">
              <div className="font-semibold text-gray-800">{p.name}</div>
              <div className="text-sm text-gray-600">{p.role} • {p.type} • {p.groupOrOrgan}</div>
              <div className="text-xs text-gray-500 mt-1">{p.email} • {p.phone}</div>
              <div className="mt-3 flex gap-2">
                <button className="px-3 py-1 rounded bg-indigo-600 text-white text-sm">View</button>
                <button className="px-3 py-1 rounded bg-green-600 text-white text-sm">Request</button>
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="text-gray-500">No results found. Try different filters.</div>
          )}
        </div>
      </div>
    );
  };

  // ---- Page: Requests ----
  const Requests = () => {
    const [statusFilter, setStatusFilter] = useState("All");

    const list = useMemo(() => {
      return requests.filter(r => statusFilter === "All" || r.status === statusFilter);
    }, [requests, statusFilter]);

    const updateStatus = (id, status) => {
      setRequests(prev => prev.map(r => r.id === id ? { ...r, status } : r));
      if (status === "Completed") {
        const rec = requests.find(r => r.id === id);
        if (rec) setHistory(prev => [{ id: Date.now(), summary: `${rec.type} ${rec.detail} request for ${rec.name} completed`, date: new Date().toISOString().slice(0,10), status: "Success" }, ...prev]);
      }
    };

    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Donation Requests</h1>
        <div className="flex flex-wrap gap-2 mb-3">
          {["All", "Pending", "Approved", "Completed"].map(s => (
            <button key={s} onClick={()=>setStatusFilter(s)} className={`px-3 py-1 rounded-full text-sm border ${statusFilter===s?"bg-indigo-600 text-white":"bg-white"}`}>{s}</button>
          ))}
        </div>
        <div className="bg-white rounded-2xl shadow border overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="p-3">ID</th>
                <th className="p-3">Name</th>
                <th className="p-3">Type</th>
                <th className="p-3">Detail</th>
                <th className="p-3">Status</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {list.map(r => (
                <tr key={r.id} className="border-b">
                  <td className="p-3">{r.id}</td>
                  <td className="p-3">{r.name}</td>
                  <td className="p-3">{r.type}</td>
                  <td className="p-3">{r.detail}</td>
                  <td className="p-3">
                    <span className={`px-2 py-1 rounded text-xs ${r.status==="Pending"?"bg-yellow-100 text-yellow-700": r.status==="Approved"?"bg-blue-100 text-blue-700":"bg-green-100 text-green-700"}`}>{r.status}</span>
                  </td>
                  <td className="p-3 flex gap-2">
                    <button onClick={()=>updateStatus(r.id, "Approved")} className="px-3 py-1 rounded bg-blue-600 text-white text-sm">Approve</button>
                    <button onClick={()=>updateStatus(r.id, "Completed")} className="px-3 py-1 rounded bg-green-600 text-white text-sm">Complete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  // ---- Page: History ----
  const HistoryPage = () => {
    const [q, setQ] = useState("");
    const [status, setStatus] = useState("All");

    const list = useMemo(() => history.filter(h => {
      const okQ = !q || h.summary.toLowerCase().includes(q.toLowerCase());
      const okS = status === "All" || h.status === status;
      return okQ && okS;
    }), [q, status, history]);

    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Donation History</h1>
        <div className="bg-white p-4 rounded-2xl shadow border mb-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <input className="border rounded-lg p-2" placeholder="Search in history" value={q} onChange={e=>setQ(e.target.value)} />
          <select className="border rounded-lg p-2" value={status} onChange={e=>setStatus(e.target.value)}>
            <option>All</option>
            <option>Success</option>
            <option>Approved</option>
          </select>
          <button className="rounded-lg p-2 border">Reset</button>
        </div>
        <div className="space-y-3">
          {list.map(h => (
            <div key={h.id} className="bg-white p-4 rounded-2xl shadow border">
              <div className="font-medium text-gray-800">{h.summary}</div>
              <div className="text-xs text-gray-500">{h.date} • {h.status}</div>
            </div>
          ))}
          {list.length === 0 && <div className="text-gray-500">No records found.</div>}
        </div>
      </div>
    );
  };

  // ---- Page: Guidelines ----
  const Guidelines = () => (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Donation Guidelines</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card title="Eligibility">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Minimum age: 18 years; maximum varies by type.</li>
            <li>Weight &gt;= 50 kg (typical for blood donation).</li>
            <li>No major infections/illness at the time of donation.</li>
            <li>Follow local legal & medical regulations for organ donation.</li>
          </ul>
        </Card>
        <Card title="Safety">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>All equipment is sterile and single-use for blood donations.</li>
            <li>Organ donation requires comprehensive screening & compatibility checks.</li>
            <li>Hydrate well; avoid heavy exertion immediately after donating blood.</li>
          </ul>
        </Card>
        <Card title="FAQs">
          <details className="mb-2"><summary className="cursor-pointer font-medium">How often can I donate blood?</summary><p className="text-sm text-gray-600 mt-1">Typically every 3 months (men) and 4 months (women), subject to medical advice.</p></details>
          <details className="mb-2"><summary className="cursor-pointer font-medium">Is organ donation safe?</summary><p className="text-sm text-gray-600 mt-1">Living donation is carefully evaluated; deceased donation follows consent and medical protocols.</p></details>
          <details><summary className="cursor-pointer font-medium">Will I get paid?</summary><p className="text-sm text-gray-600 mt-1">Most jurisdictions do not allow payment for organs; blood donations are voluntary.</p></details>
        </Card>
        <Card title="Documentation">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Valid photo ID and contact details.</li>
            <li>Medical history and current medications.</li>
            <li>Consent forms as per hospital/NGO policies.</li>
          </ul>
        </Card>
      </div>
    </div>
  );

  // ---- Page: Support ----
  const Support = () => {
    const [ticket, setTicket] = useState({ name: "", email: "", message: "" });
    const submit = (e) => {
      e.preventDefault();
      if (!ticket.name || !ticket.email || !ticket.message) return alert("Please fill all fields");
      alert("Support ticket submitted (mock). We'll reach out shortly.");
      setTicket({ name: "", email: "", message: "" });
    };

    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Support</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card title="Contact Form">
            <form onSubmit={submit} className="space-y-3">
              <input className="w-full border rounded-lg p-2" placeholder="Your Name" value={ticket.name} onChange={e=>setTicket({...ticket, name:e.target.value})} />
              <input className="w-full border rounded-lg p-2" placeholder="Email" type="email" value={ticket.email} onChange={e=>setTicket({...ticket, email:e.target.value})} />
              <textarea className="w-full border rounded-lg p-2" rows={5} placeholder="How can we help?" value={ticket.message} onChange={e=>setTicket({...ticket, message:e.target.value})} />
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg">Submit</button>
            </form>
          </Card>
          <Card title="Emergency & Helplines">
            <div className="space-y-2 text-sm">
              <p>📞 Emergency: <span className="font-medium">+91 98765 43210</span></p>
              <p>📧 Email: support@vitalverse.org</p>
              <p>🕒 Available 24×7 for urgent cases.</p>
            </div>
          </Card>
        </div>
      </div>
    );
  };

  // ---- Layout Helpers ----
  function StatCard({ label, value }) {
    return (
      <div className="p-5 bg-white rounded-2xl shadow border">
        <div className="text-sm text-gray-500">{label}</div>
        <div className="text-2xl font-bold text-gray-800">{value}</div>
      </div>
    );
  }

  function Field({ label, required, children }) {
    return (
      <label className="block">
        <div className="text-sm text-gray-700 mb-1">
          {label} {required && <span className="text-red-600">*</span>}
        </div>
        {children}
      </label>
    );
  }

  function Card({ title, children }) {
    return (
      <div className="bg-white p-6 rounded-2xl shadow border">
        <h3 className="text-lg font-semibold mb-3">{title}</h3>
        {children}
      </div>
    );
  }

  // ---- Router (State-based) ----
  const render = () => {
    switch (activePage) {
      case "Dashboard": return <Dashboard/>;
      case "Register": return <Register/>;
      case "Find Match": return <FindMatch/>;
      case "Requests": return <Requests/>;
      case "History": return <HistoryPage/>;
      case "Guidelines": return <Guidelines/>;
      case "Support": return <Support/>;
      default: return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-indigo-700 text-white p-4 fixed h-full">
        <h2 className="text-xl font-bold mb-6">Donors & Recipients</h2>
        <nav className="space-y-2">
          {["Dashboard", "Register", "Find Match", "Requests", "History", "Guidelines", "Support"].map(item => (
            <button
              key={item}
              onClick={()=>setActivePage(item)}
              className={`w-full text-left px-3 py-2 rounded transition ${activePage===item?"bg-indigo-500":"hover:bg-indigo-600"}`}
            >{item}</button>
          ))}
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 ml-64 overflow-y-auto">
        {render()}
      </main>
    </div>
  );
}
