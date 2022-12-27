import styled from "styled-components"
import type { OptionProps } from ".."

type EnumOptionProp = OptionProps & {
  type: { [id: string]: string }
}

export default function EnumOption(props: EnumOptionProp) {
  return (
    <Container>
      {Object.keys(props.type).map((option) => {
        const currentValue = props.value
        const optionValue = props.type[option]
        const active = currentValue === optionValue
        const label = chrome.i18n.getMessage(
          `settings_${props.name}_${optionValue}`
        )
        const description = chrome.i18n.getMessage(
          `settings_${props.name}_${optionValue}_description`
        )
        return (
          <OptionButtonWrapper
            onClick={() => props.onChange(optionValue)}
            key={optionValue}>
            <Checkbox active={active} />
            <h3>{label}</h3>
            <p>{description}</p>
          </OptionButtonWrapper>
        )
      })}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1.25rem;
  margin-bottom: 1.75rem;
  cursor: pointer;
  font-size: 0.95rem;
`

const OptionButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 0.5rem;
  background-color: hsla(var(--colors-lowContrast), 0.1);
  padding: 1rem;
  gap: 0.75rem;
  & h3 {
    font-weight: 600;
  }
  & p {
    color: hsla(var(--colors-highContrast), 0.7);
  }
  & svg {
    margin-top: -0.125rem;
    margin-bottom: -0.125rem;
    max-height: 1.4rem;
    .outer-circle {
      fill: transparent;
      stroke: hsla(var(--colors-highContrast), 1);
      stroke-width: 0.1rem;
    }
  }
`

function Checkbox(props: { active: boolean }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <circle className="outer-circle" cx="8" cy="8" r="7" />
      {props.active && (
        <circle className="inner-circle" cx="8" cy="8" r="4.3" />
      )}
    </svg>
  )
}
