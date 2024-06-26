import Image from 'next/image'

interface CardProps {
  date: string
  views: number
  likes: number
  title: string
  description: string
  imageUrl: string
}

const Card: React.FC<CardProps> = ({
  date,
  views,
  likes,
  title,
  description,
  imageUrl,
}) => {
  return (
    <div
      className=" overflow-hidden hover:shadow-lg flex flex-wrap flex-grow-0 flex-shrink-0 w-1/3 max-w-[33.333333%] bg-white px-4rounded-[10px] border border-[#DBDBDB] transition-all duration-200 ease-in-out mb-5"
      style={{ height: 'calc(100% - 24px)' }}
    >
      <Image src={imageUrl} alt={title} width={500} height={300} className='align-middle border-none' />
      <div className="p-6">
        <div className="text-sm text-gray-600">{date}</div>
        <div className="font-bold text-xl my-2">{title}</div>
        <p className="text-gray-700 text-base mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600">
            <span className="mr-2">👁 {views}</span>
            <span>❤️ {likes}</span>
          </div>
          <button className="text-red-500 hover:text-red-700 text-sm">
            Keep Reading →
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
