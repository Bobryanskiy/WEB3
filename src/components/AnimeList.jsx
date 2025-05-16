import React from 'react'
import AnimeListItem from './AnimeListItem'
import './AnimeList.css'

const AnimeList = ({ animes, onSelectAnime, isSearched }) => {
  
  if (isSearched && animes.length === 0) {
    return <p>Аниме не найдено</p>
  }

  return (
    <ul id="anime-list">
      {animes.map((anime) => (
        <AnimeListItem key={anime.id} anime={anime} onSelectAnime={onSelectAnime} />
      ))}
    </ul>
  )
}

export default AnimeList