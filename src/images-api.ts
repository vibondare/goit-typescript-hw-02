import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

export type unsplashImageData = {
  alt_description: string;
  alternative_slugs?: Object | null;
  asset_type: string;
  breadcrumbs: Object[] | null;
  color: string;
  created_at: string;
  current_user_collections?: Array<any> | null;
  description: string;
  height?: number;
  id: string;
  liked_by_user?: boolean;
  likes: number;
  links: {
    download: string;
    download_location?: string;
    html: string;
    self: string;
  };
  promoted_at?: string;
  slug: string;
  sponsorship?: any;
  tags?: Object[];
  topics_submissions?: Object;
  updated_at?: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    small_s3?: string;
    thumb: string;
  };
  user: Object;
  width?: number;
};

type unsplashResponse = {
  results: unsplashImageData[];
  total: number;
  total_pages: number;
};

export const fetchImages = async (
  searchQuery: string,
  currentPage: number,
  apiKey: string
): Promise<unsplashImageData[]> => {
  const response: AxiosResponse<unsplashResponse> = await axios.get(
    "/search/photos",
    {
      params: {
        query: searchQuery,
        per_page: 12,
        page: currentPage,
        client_id: apiKey,
        orientation: "landscape",
      },
    }
  );
  return response.data.results;
};
