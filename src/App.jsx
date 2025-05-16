import React, { useContext } from 'react'
import { AnimeProvider, AnimeContext } from './context/AnimeContext'
import useFetchAnime from './hooks/useFetchAnime'
import SearchBar from './components/SearchBar'
import AnimeList from './components/AnimeList'
import AnimeDetails from './components/AnimeDetails'
import ErrorMessage from './components/ErrorMessage'
import './index.css'

const App = () => {
  const { animes, selectedAnime, errorMessage, setErrorMessage, isSearched } = useContext(AnimeContext)
  const { fetchAnime, fetchAnimeDetails } = useFetchAnime()

  const handleSearch = (searchTerm) => {
    if (searchTerm.trim()) {
      fetchAnime({ search: searchTerm })
      setErrorMessage('')
    }
  }

  const handleSelectAnime = (animeId) => {
    fetchAnimeDetails(animeId)
  }

  return (
    <div id="app">
      <h1>Поиск Аниме</h1>
      <SearchBar onSearch={handleSearch} />
      {errorMessage && <ErrorMessage message={errorMessage} />}
      <AnimeList animes={animes} onSelectAnime={handleSelectAnime} isSearched={isSearched} />
      <AnimeDetails anime={selectedAnime} />
    </div>
  )
}

const WrappedApp = () => (
  <AnimeProvider>
    <App />
  </AnimeProvider>
)

export default WrappedApp