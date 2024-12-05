import axios, { AxiosError } from "axios";
const TMDB_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMDE3M2ZmZjhhMWE4YjQ3MDlmYjFmZmI4YzU5MmIyOSIsIm5iZiI6MTczMzE0NzU5NC4wMjQ5OTk5LCJzdWIiOiI2NzRkYmJjYTU2MmIwMzBiYjVhZGQ2OWQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.4nKHx-z3Ad-dzLVDgeP3Gy1uRXhq53-eBB1sXgDl9nU"
const url = "https://api.themoviedb.org/3/"
const app = axios.create({
    baseURL: `${url}`,
    headers: {
      "Content-Type": "application/json",
        Accept: "application/json",
      Authorization: `Bearer ${TMDB_KEY}`
    },
});
  
export const getContent = async(
    contentType: "movie" | "tv" = "movie",
    includeAdult: boolean = false,
    includeVideo: boolean = false,
    page: number = 1
) => {
    try {
        console.log(TMDB_KEY + "")
        const response = await app.get(`discover/${contentType}`, {
            params: {
                include_adult: includeAdult,
                include_video: includeVideo,
                language : "fr-FR",
                page: page,
                sort_by:"popularity.desc",
            }
        });
        
        return response.data;
        
    } catch (error) {
        if (error instanceof AxiosError) { 
            console.log(error.request)
        }
        else console.error(error);
    }
}

export const getTrendingMovies = async () => {
    try {
        const response = await app.get("trending/movie/day", {
            params: {
                language : "fr-FR",
            }
        });
        return response.data;
    } catch (error) {
        
    }
}
export const getTrendingTv = async () => {
    try {
        const response = await app.get("trending/tv/day", {
            params: {
                language : "fr-FR",
            }
        });
        return response.data;
    } catch (error) {
        
    }
}
export const getTrendingPeople = async () => {
    try {
        const response = await app.get("trending/person/day", {
            params: {
                language : "fr-FR",
            }
        });
        return response.data;
    } catch (error) {
        console.log("error")
        
    }
}
export const getMovieDetail = async (movieId: string) => {
    try {
        const response = await app.get(`movie/${movieId}`, {
            params: {
                language: "fr-FR",
                
            }
        });
        return response.data;
        
    } catch (error) {
        if (error instanceof AxiosError) { 
            console.log(error.request)
        }
        else console.error(error);
    
        
    }
} 

export const searchContent = async (query: string, include_adult: boolean = false, language: string = "fr-FR", page: number = 1) => {
    try {
        const response = await app.get(`search/multi`, {
            params: {
                query: query,
                include_adult: include_adult,
                language: "fr-FR",
                page: page,
            }
        });
        return response.data;
        
    } catch (error) {
        if (error instanceof AxiosError) {
            console.error(error.request)
        
        }
    }
}


export const setImageUrl = (imageName: string | null, width: number = 500) => {
    if (imageName) {
        const res = `https://image.tmdb.org/t/p/w${width}/${imageName}`
    return res
        
        
    }
    return null;
}