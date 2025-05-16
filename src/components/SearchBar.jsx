import React from 'react'
import './SearchBar.css'

const SearchBar = ({ onSearch }) => {
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onSearch(event.target.value)
    }
  }

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Введите название аниме..."
        onKeyPress={handleKeyPress}
      />
      <button className="search-button" onClick={() => onSearch(document.querySelector('.search-input').value)}>
        Поиск
      </button>
    </div>
  )
}

export default SearchBar