import BooleanOption from "./primitives/boolean-option"

export type OptionProp = {
  name: string
  value: string | number | boolean
  onChange: (value: string | number | boolean) => any
}

export default function Option(props: OptionProp) {
  switch (typeof props.value) {
    case "string":
      return <div>string</div>
    case "number":
      return <div>number</div>
    case "boolean":
      return (
        <BooleanOption
          name={props.name}
          value={props.value}
          onChange={props.onChange}
        />
      )
    default:
      return (
        <div>{`Unknown option type for option ${
          props.name
        }: ${typeof props.value}`}</div>
      )
  }
}
