import React from 'react'
import './AnimeDetails.css'

const AnimeDetails = ({ anime }) => {
  if (!anime) return null

  return (
    <div id="anime-details">
      <img src={anime.coverImage.large} alt={anime.title.romaji} style={{ maxWidth: '200px', marginRight: '20px', verticalAlign: 'top', borderRadius: '4px' }} />
      <div>
        <h2>{anime.title.romaji}</h2>
        <p><strong>Описание:</strong> {anime.description ? anime.description.replace(/<br>/g, '\n') : 'Нет описания'}</p>
        <p><strong>Жанры:</strong> {anime.genres.join(', ')}</p>
        <p><strong>Средний рейтинг:</strong> {anime.averageScore || 'Нет данных'}</p>
      </div>
    </div>
  )
}

export default AnimeDetails