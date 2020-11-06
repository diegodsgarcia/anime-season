import { useState, useEffect, MouseEvent } from 'react'
import ReactDOM from 'react-dom'

import Overlay from 'components/Overlay'

import * as S from './styled'

type SelectOption = {
  label: string
  value: string
}

export type SelectProps = {
  options: SelectOption[]
  placeholder: string
  value: SelectOption
  onClick: (value: SelectOption) => void
}

export default function Select({
  options,
  placeholder,
  value,
  onClick
}: SelectProps) {
  const [isOpenDropdown, setOpenDropdown] = useState(false)
  const [selectValue, setSelectValue] = useState(
    value || { label: '', value: '' }
  )

  useEffect(() => {
    setSelectValue(value || { label: '', value: '' })
  }, [value])

  function onFocus() {
    setOpenDropdown(true)
  }

  function onSelect(
    event: MouseEvent<HTMLSpanElement, globalThis.MouseEvent>,
    value: SelectOption
  ) {
    event.stopPropagation()
    setSelectValue(value)
    setOpenDropdown(false)
    onClick(value)
  }

  function renderOptions(options: SelectOption[]) {
    return ReactDOM.createPortal(
      <Overlay
        className={isOpenDropdown ? '--open' : '--closed'}
        onClick={() => {
          setOpenDropdown(false)
        }}
      >
        <S.Options>
          {options.map(({ label, value }, i) => (
            <S.Option
              key={i}
              onClick={(event) => onSelect(event, { label, value })}
              className={value === selectValue.value ? '--selected' : ''}
            >
              {label}
            </S.Option>
          ))}
        </S.Options>
      </Overlay>,
      document.body
    )
  }

  return (
    <S.Container>
      <S.Label>{placeholder}</S.Label>
      <S.Placeholder onClick={onFocus}>{selectValue?.label}</S.Placeholder>
      {renderOptions(options)}
    </S.Container>
  )
}
