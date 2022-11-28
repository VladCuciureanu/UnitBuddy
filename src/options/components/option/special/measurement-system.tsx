import type { OptionProp } from ".."
import EnumOption from "../primitives/enum-option"

export default function MeasurementSystemSwitch(props: OptionProp) {
  return (
    <EnumOption
      name={props.name}
      value={props.value}
      options={["metric", "imperial"]}
      onChange={props.onChange}
    />
  )
}
