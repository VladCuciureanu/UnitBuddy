import * as t from "io-ts"
import { makeEnumRuntimeType, withDefault } from "~/shared/helpers/runtime"
import { MeasurementSystems } from "./enums"

export const UnitBuddySettings = t.type({
  measurementSystem: withDefault(
    makeEnumRuntimeType<MeasurementSystems>(MeasurementSystems),
    MeasurementSystems.Metric
  ),
  useComma: withDefault(t.boolean, true),
  useMM: withDefault(t.boolean, false),
  useRounding: withDefault(t.boolean, true),
  useMO: withDefault(t.boolean, false),
  useGiga: withDefault(t.boolean, false),
  useSpaces: withDefault(t.boolean, true),
  useKelvin: withDefault(t.boolean, false),
  useBold: withDefault(t.boolean, false),
  useBrackets: withDefault(t.boolean, false),
  exclusiveMode: withDefault(t.boolean, false),
  convertBracketed: withDefault(t.boolean, false),
  matchIn: withDefault(t.boolean, false),
  includeQuotes: withDefault(t.boolean, true),
  includeImproperSymbols: withDefault(t.boolean, true)
})

export interface ExtensionSettings extends t.TypeOf<typeof UnitBuddySettings> {}
