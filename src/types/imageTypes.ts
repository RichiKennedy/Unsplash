interface Urls {
  full: string
  raw: string
  regular: string
  small: string
}
interface ProfileImage {
  large: string
  medium: string
  small: string
}

interface User {
  name: null | string
  profile_image: ProfileImage
  links: Links
  for_hire: boolean
}
interface Links {
  html: string
  download_location: string
}

interface Location {
  city: string
  country: string
}

export interface ImageType {
  urls: Urls
  alt_description: string
  id: string
  user: User
  views: number
  downloads: number
  likes: number
  location: Location
  links: Links
  description: string
}
