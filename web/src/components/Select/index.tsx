import * as S from './styled'

export type SelectOption = {
  label: string
  value: string
  selected?: boolean
}

export type SelectProps = {
  label: string
  value: string
  options: SelectOption[]
  onChange?: (value: string) => void
}

export default function Select({
  label,
  value,
  options,
  onChange = () => null
}: SelectProps) {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Select onChange={(e) => onChange(e.target.value)}>
        {options.map((option) => (
          <S.Option
            key={option.value}
            value={option.value}
            selected={option.value.toLowerCase() === value.toLowerCase()}
          >
            {option.label}
          </S.Option>
        ))}
      </S.Select>
    </S.Container>
  )
}
