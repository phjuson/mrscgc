export default function Flyer() {
  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white w-full h-full p-8 flex flex-col items-center font-sans">
      {/* Header */}
      <h1 className="text-5xl font-extrabold text-yellow-400 mb-2 tracking-wide">Ride Together. Arrive in Style.</h1>
      <h2 className="text-3xl italic text-gray-200 mb-6">South Rim Grand Canyon Overnight Tour</h2>

      {/* Hero Image */}
      <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl mb-8 border-4 border-yellow-400">
        <img
          src="https://tse4.mm.bing.net/th/id/OIP.PA8ZVNzRUcuYGA8yNquLIAHaEK?pid=Api"
          alt="Grand Canyon Sprinter"
          className="w-full object-cover"
        />
      </div>

      {/* Itinerary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mb-10">
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg border-l-4 border-yellow-400">
          <h3 className="text-2xl font-semibold text-yellow-400 mb-3">Day 1: Los Angeles → Grand Canyon</h3>
          <ul className="list-disc list-inside text-base leading-relaxed">
            <li>Morning pickup in LA</li>
            <li>Scenic Route 66 stopovers</li>
            <li>Sunset at Mather Point or Hopi Point 🌅</li>
            <li>Overnight stay inside park or Tusayan</li>
          </ul>
        </div>
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg border-l-4 border-yellow-400">
          <h3 className="text-2xl font-semibold text-yellow-400 mb-3">Day 2: Grand Canyon → Los Angeles</h3>
          <ul className="list-disc list-inside text-base leading-relaxed">
            <li>Optional sunrise rim walk 🌄</li>
            <li>Desert View Drive photo stops</li>
            <li>Route 66 lunch in Williams/Kingman</li>
            <li>Evening return to LA</li>
          </ul>
        </div>
      </div>

      {/* Package Details */}
      <div className="bg-gray-900 border border-yellow-400 rounded-2xl p-8 shadow-xl max-w-4xl mb-10">
        <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Package Includes</h3>
        <ul className="list-disc list-inside text-base leading-relaxed">
          <li>Private 14-seat Sprinter Van + professional driver</li>
          <li>1-night hotel accommodation (double occupancy)</li>
          <li>National Park group entry fee</li>
          <li>Bottled water & onboard snacks</li>
          <li>Pickup & drop-off in Greater LA</li>
        </ul>
      </div>

      {/* Pricing */}
      <div className="bg-yellow-400 text-black rounded-2xl p-8 text-center shadow-xl mb-10 max-w-md">
        <h3 className="text-3xl font-extrabold mb-2">$340 – $420 per person</h3>
        <p className="text-md font-medium">Based on 12–14 guests, hotel tier & dates</p>
      </div>

      {/* Contact */}
      <div className="bg-gray-800 border border-yellow-400 text-center rounded-2xl px-8 py-6 shadow-2xl">
        <p className="text-2xl font-bold mb-2">📞 (949) 870-5313</p>
        <p className="text-lg mb-2">🌐 MyRideSoCal.com</p>
        <p className="mt-3 font-extrabold text-yellow-400 uppercase tracking-wide">Book Now – Limited Seats!</p>
      </div>
    </div>
  );
}
