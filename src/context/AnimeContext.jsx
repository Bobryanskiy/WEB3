import React, { createContext, useState } from 'react'

export const AnimeContext = createContext()

export const AnimeProvider = ({ children }) => {
  const [animes, setAnimes] = useState([])
  const [selectedAnime, setSelectedAnime] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')
  const [isSearched, setIsSearched] = useState(false);

  return (
    <AnimeContext.Provider value={{ animes, selectedAnime, errorMessage, isSearched, setAnimes, setSelectedAnime, setErrorMessage, setIsSearched }}>
      {children}
    </AnimeContext.Provider>
  )
}