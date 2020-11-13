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
  options,
  onChange = () => null
}: SelectProps) {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Select onChange={(e) => onChange(e.target.value)}>
        {options.map(({ label, value, selected }) => (
          <S.Option key={value} value={value} selected={selected}>
            {label}
          </S.Option>
        ))}
      </S.Select>
    </S.Container>
  )
}
