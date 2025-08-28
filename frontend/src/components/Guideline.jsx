
const Guideline = () => {
  return (
    <div className='bg-fuchsia-50 min-h-screen rounded-[10px]'>
      <h1 className='font-bold text-3xl ml-4 pt-4'>
        Donors & Recipients
      </h1>
      <h1 className="font-bold text-xl ml-4 pt-4">
        Donations Guidelines
      </h1>
      <div className="mt-6 ml-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border-2 flex flex-col bg-white justify-center pl-2 border-gray-700 rounded-2xl w-[38vw] h-[30vh]">
            <h1 className="font-medium mb-4 text-xl">Eligibility</h1>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Minimum age: 18 years; maximum varies by type.</li>
            <li>Weight &gt;= 50 kg (typical for blood donation).</li>
            <li>No major infections/illness at the time of donation.</li>
            <li>Follow local legal & medical regulations for organ donation.</li>
          </ul>
        </div>
        <div className="border-2 flex flex-col bg-white justify-center pl-2 border-gray-700 rounded-2xl w-[38vw] h-[30vh]">
            <h1 className="font-medium mb-4 text-xl">Safety</h1>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>All equipment is sterile and single-use for blood donations.</li>
            <li>Organ donation requires comprehensive screening & compatibility checks.</li>
            <li>Hydrate well; avoid heavy exertion immediately after donating blood.</li>
          </ul>
        </div>
        <div className="border-2 flex flex-col bg-white justify-center pl-2 border-gray-700 rounded-2xl w-[38vw] h-[30vh]">
            <h1 className="font-medium mb-4 text-xl">FAQs</h1>
          <details className="mb-2"><summary className="cursor-pointer font-medium">How often can I donate blood?</summary><p className="text-sm text-gray-600 mt-1">Typically every 3 months (men) and 4 months (women), subject to medical advice.</p></details>
          <details className="mb-2"><summary className="cursor-pointer font-medium">Is organ donation safe?</summary><p className="text-sm text-gray-600 mt-1">Living donation is carefully evaluated; deceased donation follows consent and medical protocols.</p></details>
          <details><summary className="cursor-pointer font-medium">Will I get paid?</summary><p className="text-sm text-gray-600 mt-1">Most jurisdictions do not allow payment for organs; blood donations are voluntary.</p></details>
        </div>
        <div className="border-2 flex flex-col bg-white justify-center pl-2 border-gray-700 rounded-2xl w-[38vw] h-[30vh]">
            <h1 className="font-medium mb-4 text-xl">Documentations</h1>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Valid photo ID and contact details.</li>
            <li>Medical history and current medications.</li>
            <li>Consent forms as per hospital/NGO policies.</li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Guideline