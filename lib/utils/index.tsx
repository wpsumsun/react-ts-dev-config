type Falsy = false | 0 | "" | null | undefined
export function classnames(names: (string | Falsy)[]) {
    return names.filter(Boolean).join(' ')
}