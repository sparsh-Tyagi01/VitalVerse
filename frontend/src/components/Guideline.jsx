const Guideline = () => {
  return (
    <div className="bg-gray-900 min-h-screen rounded-[10px] text-white px-6 py-6">
      {/* Header */}
      <h1 className="font-bold text-3xl">Donors & Recipients</h1>
      <h2 className="font-semibold text-xl text-gray-300 mt-2">Donations Guidelines</h2>

      {/* Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Eligibility */}
        <div className="flex flex-col bg-gray-800 border border-gray-700 rounded-2xl p-5 shadow-md">
          <h3 className="font-semibold text-xl mb-3 text-indigo-400">Eligibility</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>Minimum age: 18 years; maximum varies by type.</li>
            <li>Weight ≥ 50 kg (typical for blood donation).</li>
            <li>No major infections/illness at the time of donation.</li>
            <li>Follow local legal & medical regulations for organ donation.</li>
          </ul>
        </div>

        {/* Safety */}
        <div className="flex flex-col bg-gray-800 border border-gray-700 rounded-2xl p-5 shadow-md">
          <h3 className="font-semibold text-xl mb-3 text-green-400">Safety</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>All equipment is sterile and single-use for blood donations.</li>
            <li>Organ donation requires comprehensive screening & compatibility checks.</li>
            <li>Hydrate well; avoid heavy exertion immediately after donating blood.</li>
          </ul>
        </div>

        {/* FAQs */}
        <div className="flex flex-col bg-gray-800 border border-gray-700 rounded-2xl p-5 shadow-md">
          <h3 className="font-semibold text-xl mb-3 text-yellow-400">FAQs</h3>
          <details className="mb-2">
            <summary className="cursor-pointer font-medium text-gray-200 hover:text-indigo-400 transition">
              How often can I donate blood?
            </summary>
            <p className="text-sm text-gray-400 mt-1">
              Typically every 3 months (men) and 4 months (women), subject to medical advice.
            </p>
          </details>
          <details className="mb-2">
            <summary className="cursor-pointer font-medium text-gray-200 hover:text-indigo-400 transition">
              Is organ donation safe?
            </summary>
            <p className="text-sm text-gray-400 mt-1">
              Living donation is carefully evaluated; deceased donation follows consent and medical protocols.
            </p>
          </details>
          <details>
            <summary className="cursor-pointer font-medium text-gray-200 hover:text-indigo-400 transition">
              Will I get paid?
            </summary>
            <p className="text-sm text-gray-400 mt-1">
              Most jurisdictions do not allow payment for organs; blood donations are voluntary.
            </p>
          </details>
        </div>

        {/* Documentation */}
        <div className="flex flex-col bg-gray-800 border border-gray-700 rounded-2xl p-5 shadow-md">
          <h3 className="font-semibold text-xl mb-3 text-blue-400">Documentation</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>Valid photo ID and contact details.</li>
            <li>Medical history and current medications.</li>
            <li>Consent forms as per hospital/NGO policies.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Guideline
