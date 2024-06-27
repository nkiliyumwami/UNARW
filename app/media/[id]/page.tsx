import Image from 'next/image'

export default async function PhotoPage({
  params,
}: {
  params: { id: string }
}) {
  const photoId = parseInt(params.id)

//   let currentPhoto: ImageProps = {
//     id: photoId,
//     height: results[photoId].height,
//     width: results[photoId].width,
//     public_id: results[photoId].public_id,
//     format: results[photoId].format,
//   }
//  const currentPhotoUrl = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_2560/${currentPhoto.public_id}.${currentPhoto.format}`


  return (
    <main className="mx-auto max-w-[1960px] p-4">
      {/* <Image src={currentPhotoUrl} alt={`Image ${photoId}`} width={720} height={520}/> */}
    </main>
  )
}

