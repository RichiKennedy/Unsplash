interface Urls {
  full: string;
  small: string;
}
interface Profile_image {
  large: string;
  medium: string;
  small: string;
}

interface User {
  name: null | string;
  profile_image: Profile_image;
}

export interface imageType {
  urls: Urls;
  alt_description: string;
  id: number;
  user: User;
}
