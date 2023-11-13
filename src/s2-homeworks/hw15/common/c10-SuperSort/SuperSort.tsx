import React from 'react'

// добавить в проект иконки и импортировать
const downIcon = '[\\/]'
const upIcon = '[/\\]'
const noneIcon = '[--]'

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    // console.log('purechange', sort, down, up)
    // return up

    // console.log('sort', sort)
    // console.log('down', down)
    // console.log('up', up)


    if (sort === down) {
        return up
    } else if (sort === up) {
        return ''
    } else {
        return down
    }

    // return up
    // const newSort =
    // return newSort
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value // '0tech' or '0developer'
    const down = '1' + value // '1tech' or '1developer'

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    // console.log(sort, 'sortt')
    // console.log(down, 'downn')
    // console.log(up, 'upp')

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon
    // console.log(icon, 'icon')
    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            {/*сделать иконку*/}
            {/*<img*/}
            {/*    id={id + '-icon-' + sort}*/}
            {/*    src={icon}*/}
            {/*/>*/}

            {icon} {/*а это убрать*/}
        </span>
    )
}

export default SuperSort
