import axios from 'axios'
import { AnimeContext } from '../context/AnimeContext'
import { useContext } from 'react'

const useFetchAnime = () => {
  const { setAnimes, setSelectedAnime, setErrorMessage, setIsSearched } = useContext(AnimeContext)

  const fetchAnime = async (variables) => {
    try {
      const query = `
        query ($id: Int, $search: String) {
          Page(page: 1, perPage: 10) {
            media(id: $id, type: ANIME, search: $search) {
              id
              title {
                romaji
              }
            }
          }
        }
      `
      const response = await axios.post('https://graphql.anilist.co ', {
        query,
        variables,
      })
      setAnimes(response.data.data.Page.media)
      setSelectedAnime(null)
    } catch (error) {
      console.error('Ошибка при получении данных:', error)
      setErrorMessage('Произошла ошибка при поиске аниме')
    } finally {
      setIsSearched(true);
    }
  }

  const fetchAnimeDetails = async (animeId) => {
    try {
      const query = `
        query ($id: Int) {
          Media(id: $id, type: ANIME) {
            title {
              romaji
            }
            description
            coverImage {
              large
            }
            genres
            averageScore
          }
        }
      `
      const variables = {
        id: animeId,
      }
      const response = await axios.post('https://graphql.anilist.co ', {
        query,
        variables,
      })
      setSelectedAnime(response.data.data.Media)
    } catch (error) {
      console.error('Ошибка при получении данных:', error)
      setErrorMessage('Произошла ошибка при загрузке деталей аниме')
    }
  }

  return { fetchAnime, fetchAnimeDetails }
}

export default useFetchAnime