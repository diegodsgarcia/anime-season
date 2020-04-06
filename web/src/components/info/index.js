import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import * as S from './styled'

import { Github } from '@styled-icons/icomoon/Github'
import { Twitter } from '@styled-icons/icomoon/Twitter'

function Info() {
  const [isOpen, setOpen] = useState(false)

  function renderAbout() {
    return ReactDOM.createPortal(
      <S.Overlay onClick={(e) => setOpen(false)}>
        <S.Container onClick={(e => { e.stopPropagation(); })}>
          <h2>About more</h2>
          <p>
            This is an open source project,
            started by the developer <a href="https://github.com/diegodsgarcia/" target="_blank" rel="noopener noreferrer">diegodsgarcia</a>,
            you can see more and contribute below
          </p>
          <S.SocialLinks>
            <a href="https://github.com/diegodsgarcia/anime-season" target="_blank" rel="noopener noreferrer">
              <Github />
            </a>
            <a href="https://twitter.com/diegodsgarcia" target="_blank" rel="noopener noreferrer">
              <Twitter />
            </a>
          </S.SocialLinks>
        </S.Container>
      </S.Overlay>,
      document.body)
  }

  return (
    <>
      <S.ButtonInfo onClick={() => setOpen(true)} />
      {isOpen && renderAbout()}
    </>
  )
}

export default Info
