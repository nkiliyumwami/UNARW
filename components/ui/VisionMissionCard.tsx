const VisionMissionCard = ({ icon, title, description }:any) => {
  return (
    <div className="p-6 bg-blue-50 rounded-lg shadow-md flex items-start space-x-4">
      <div className="text-blue-500 flex-shrink-0">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="mt-2 text-gray-700">{description}</div>
      </div>
    </div>
  )
}

export default VisionMissionCard
