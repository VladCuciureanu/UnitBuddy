import BooleanOption from "./primitives/boolean-option"
import MeasurementSystemSwitch from "./special/measurement-system"

export type OptionProp = {
  name: string
  value: string | number | boolean
  onChange: (value: string | number | boolean) => any
}

export default function Option(props: OptionProp) {
  switch (props.name) {
    case "measurementSystem":
      return (
        <MeasurementSystemSwitch
          name={props.name}
          value={props.value}
          onChange={props.onChange}
        />
      )
  }

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
      return <div>unknown</div>
  }
}
