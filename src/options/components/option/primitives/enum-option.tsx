import styled from "styled-components"

import type { OptionProp } from ".."

type EnumOptionProp = OptionProp & {
  options: string[]
}

export default function EnumOption(props: EnumOptionProp) {
  return (
    <Container>
      {props.options.map((option) => (
        <OptionButton
          key={option}
          optionKey={option}
          onClick={(value) => props.onChange(value)}
        />
      ))}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1.25rem;
  margin-bottom: 1.75rem;
`

function OptionButton(props: {
  optionKey: string
  onClick: (value: string) => any
}) {
  return (
    <OptionButtonWrapper onClick={props.onClick(props.optionKey)}>
      <h3>{props.optionKey}</h3>
      <p>{"yeet"}</p>
    </OptionButtonWrapper>
  )
}

const OptionButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 0.5rem;
  background-color: hsla(var(--colors-lowContrast), 0.1);
  padding: 1rem;
  gap: 1rem;
  & h3 {
    font-weight: 600;
  }
  & p {
    color: hsla(var(--colors-highContrast), 0.7);
  }
`
