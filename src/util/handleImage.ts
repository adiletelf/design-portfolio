import React from 'react'

export const handleImage = (image: string, coloredImage: string) => {
  return {
    src: image,
    onMouseMove: (e: React.MouseEvent<HTMLImageElement>) => { e.currentTarget.src = coloredImage },
    onMouseOut: (e: React.MouseEvent<HTMLImageElement>) => { e.currentTarget.src = image }
  }
}
