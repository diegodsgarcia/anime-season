import { useState } from 'react'

import { InfoCircle } from '@styled-icons/fa-solid/InfoCircle'
import { Github } from '@styled-icons/icomoon/Github'
import { Twitter } from '@styled-icons/icomoon/Twitter'

import Portal from 'components/Portal'

import * as S from './styled'

export default function Info() {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <S.Info onClick={() => setOpen(true)}>
        <InfoCircle />
      </S.Info>
      <Portal selector="#__next">
        <S.Overlay isOpen={isOpen} onClick={() => setOpen(false)}>
          <S.Container
            onClick={(e) => {
              e.stopPropagation()
            }}
          >
            <h2>About more</h2>
            <p>
              This is an open source project, started by the developer{' '}
              <a
                href="https://github.com/diegodsgarcia/"
                target="_blank"
                rel="noopener noreferrer"
              >
                diegodsgarcia
              </a>
              , you can see more and contribute below
            </p>
            <p>
              You can see more about the
              <a href="https://anime-season-doc.netlify.com/">API here</a>
            </p>
            <S.SocialLinks>
              <a
                href="https://github.com/diegodsgarcia/anime-season"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github />
              </a>
              <a
                href="https://twitter.com/diegodsgarcia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter />
              </a>
            </S.SocialLinks>
          </S.Container>
        </S.Overlay>
      </Portal>
    </>
  )
}
