import React from 'react'

const Header = ({ title }) => {
  return (
    <header className="uk-container uk-margin-large-top">
      <h1 className="uk-heading-small uk-heading-line uk-text-center">
        <span>{title}</span>
      </h1>
    </header>
  )
}

export default Header