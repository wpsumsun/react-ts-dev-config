type Falsy = false | 0 | '' | null | undefined

export function classnames(names: (string | Falsy)[]) {
  return names.filter(Boolean).join(' ')
}

export function completeClass(prefix: string) {
  return function (name?: string) {
    return [prefix, name].filter(Boolean).join('-')
  }
}
