// app/api/media/route.ts

import { NextRequest, NextResponse } from 'next/server'
import cloudinary from '../../../lib/cloudinary'

export async function GET(req: NextRequest) {
  const results = await cloudinary.v2.search
    .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
    .sort_by('public_id', 'desc')
    .max_results(400)
    .execute()
    
    const reducedResults = results.resources.map(
      (result:any, index:any) => ({
      id: index,
      height: result.height,
      width: result.width,
      public_id: result.public_id,
      format: result.format,
    })
  )

  // const blurImagePromises = reducedResults.map((image) =>
  //   getBase64ImageUrl(image)
  // )

  // const imagesWithBlurDataUrls = await Promise.all(blurImagePromises)

  // for (let i = 0; i < reducedResults.length; i++) {
  //   reducedResults[i].blurDataUrl = imagesWithBlurDataUrls[i]
  // }

  return NextResponse.json(reducedResults)
}
