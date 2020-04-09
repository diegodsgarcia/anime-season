import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import Overlay from '../../styled/overlay'
import * as S from './styled'

function Select({
  options,
  placeholder,
  value,
  onClick,
}) {
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

  function onSelect(event, value) {
    event.stopPropagation()
    setSelectValue(value)
    setOpenDropdown(false)
    onClick(value)
  }

  function renderOptions(options) {
    return ReactDOM.createPortal(
      <Overlay
        className={isOpenDropdown ? '--open' : '--closed'}
        onClick={() => {
          setOpenDropdown(false)
        }}>
        <S.Options>
          {options.map(({ label, value }, i) => (
            <S.Option
              value={value}
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

Select.propTypes = {
  placeholder: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    })
  ).isRequired,
  value: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  }),
  onClick: PropTypes.func,
  onCloseClick: PropTypes.func,
}

export default Select
