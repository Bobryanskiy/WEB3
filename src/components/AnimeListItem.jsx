import React from 'react'

const AnimeListItem = ({ anime, onSelectAnime }) => {
  return (
    <li onClick={() => onSelectAnime(anime.id)}>
      {anime.title.romaji}
    </li>
  )
}

export default AnimeListItem