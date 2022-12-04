import * as t from "io-ts"

export function makeEnumRuntimeType<T extends Object>(srcEnum: object) {
  const enumValues = new Set(Object.values(srcEnum))
  return new t.Type<T, string>(
    "Enum",
    (value: any): value is T => Boolean(value && enumValues.has(value)),
    (value, context) => {
      if (!value || !enumValues.has(value)) return t.failure(value, context)

      return t.success(value as any as T)
    },
    (value) => value.toString()
  )
}

export function withDefault<A, O, I>(type: t.Type<A, O, I>, defaultValue: I) {
  return new t.Type<A, O, I>(
    type.name,
    type.is,
    (v, context) => {
      return type.validate(v != null ? v : defaultValue, context)
    },
    type.encode
  )
}
