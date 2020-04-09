import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import Overlay from '../../styled/overlay'
import * as S from './styled'

import { Github } from '@styled-icons/icomoon/Github'
import { Twitter } from '@styled-icons/icomoon/Twitter'

function Info() {
  const [isOpen, setOpen] = useState(false)

  function renderAbout() {
    return ReactDOM.createPortal(
      <Overlay onClick={(e) => setOpen(false)} className={isOpen ? '--open' : '--closed'}>
        <S.Container onClick={(e => { e.stopPropagation(); })}>
          <h2>About more</h2>
          <p>
            This is an open source project,
            started by the developer <a href="https://github.com/diegodsgarcia/" target="_blank" rel="noopener noreferrer">diegodsgarcia</a>,
            you can see more and contribute below
          </p>
          <p>
            You can see more about the <a href="https://anime-season-doc.netlify.com/">API here</a>
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
      </Overlay>,
      document.body)
  }

  return (
    <>
      <S.ButtonInfo onClick={() => setOpen(true)} />
      {renderAbout()}
    </>
  )
}

export default Info
