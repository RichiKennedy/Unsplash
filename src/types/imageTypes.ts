interface Urls {
  full: string;
  raw: string;
  regular: string;
  small: string;
}
interface ProfileImage {
  large: string;
  medium: string;
  small: string;
}

interface User {
  name: null | string;
  profile_image: ProfileImage;
  links: Links
}
interface Links {
  html: string;
}

export interface ImageType {
  urls: Urls;
  alt_description: string;
  id: number;
  user: User;
  views: number;
  downloads: number;
  likes: number;
}
