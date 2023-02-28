export type destinationObjType = {
  name: string
  images: {
    png: string
    webp: string
  }
  description: string
  distance: string
  travel: string
}

export type crewObjType = {
  name: string
  images: {
    png: string
    webp: string
  }
  role: string
  bio: string
}

export type technologyObjType = {
  name: string
  images: {
    portrait: string
    landscape: string
  }
  description: string
}
