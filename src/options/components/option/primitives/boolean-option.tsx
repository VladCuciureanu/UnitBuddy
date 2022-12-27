import styled from "styled-components"
import type { OptionProps } from ".."

export default function BooleanOption(props: OptionProps) {
  const label = chrome.i18n.getMessage(`settings_${props.name}`)
  const description = chrome.i18n.getMessage(
    `settings_${props.name}_description`
  )

  return (
    <Container>
      <Wrapper>
        <Label>{`${label}`}</Label>
        <input
          type={"checkbox"}
          checked={props.value as boolean}
          onChange={() => props.onChange(!props.value)}
        />
      </Wrapper>
      {description ? <Description>{description}</Description> : <></>}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;

  &:not(:last-child) {
    border-bottom: 1px solid hsla(var(--colors-lowContrast), 0.2);
  }
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
const Label = styled.h2`
  font-size: 0.95rem;
`
const Description = styled.p`
  color: hsl(var(--colors-lowContrast));
  font-size: 0.85rem;
  font-weight: 400;
`
