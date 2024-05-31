import { BriefcaseIcon, ChartBarIcon,  } from "@heroicons/react/16/solid"
import VisionMissionCard from "../ui/VisionMissionCard"


const VisionMission = () => {
  return (
    <div className="pt-12 px-5">
      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <VisionMissionCard
            icon={<BriefcaseIcon className="w-12 h-12" />}
            title="Vision"
            description="A Prosperous and Peaceful World, A future where the United Nations is more effective because more Rwandans are engaged global citizens, dedicated to achieving the purpose of the United Nation."
          />
          <VisionMissionCard
            icon={<ChartBarIcon className="w-12 h-12" />}
            title="Mission"
            description="Our mission is to actively champion and advocate for the aims and ideals set forth by the United Nations. Through our initiatives and collaborations, we aim to foster a global environment where cooperation, understanding, and sustainable development thrive"
          />
        </div>
      </div>
    </div>
  )
}

export default VisionMission
