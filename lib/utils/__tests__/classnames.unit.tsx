import { classnames } from '../index'

describe('classnames', () => {
    it('接受0个class', () => {
        const names = classnames([])
        expect(names).toEqual('')
    })
    it('接受一个class', () => {
        const names = classnames(['a'])
        expect(names).toEqual('a')
    })
    it('接受两个class', () => {
        const names = classnames(['a', 'b'])
        expect(names).toEqual('a b')
    })
    it('接受多个class', () => {
        const names = classnames(['a', 'b', undefined, 'c', false, null])
        expect(names).toEqual('a b c')
    })
})