import { transform, isEqual, isArray, isObject } from 'lodash'

export function difference(origObj: any, newObj: any) {
  function changes(newObj: object, origObj: { [x: string]: any }) {
    let arrayIndexCounter = 0
    return transform(newObj, function (result, value, key) {
      if (!isEqual(value, origObj[key])) {
        let resultKey = isArray(origObj) ? arrayIndexCounter++ : key
        result[resultKey] =
          isObject(value) && isObject(origObj[key])
            ? changes(value, origObj[key])
            : value
      }
    })
  }

  return changes(newObj, origObj)
}

export function realmToPlainObject(realmObj: any) {
  return JSON.parse(JSON.stringify(realmObj))
}

export function formatAsCurrency(
  number: {
    toLocaleString: (
      arg0: string,
      arg1: { style: string; currency: string },
    ) => any
  },
  locale = 'pt-BR',
  currency = 'BRL',
) {
  return number.toLocaleString(locale, {
    style: 'currency',
    currency: currency,
  })
}
