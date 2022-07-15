interface RowProps {
    col?: number
    sm?: number
    md?: number
    lg?: number
    xl?: number
    xl2?: number
    noSpace?: boolean
    children: any
    className?: string
}

export default function Row(props: RowProps) {
    return (
        <div className={`
            grid grid-cols-${props.col ?? 1}
            ${props.noSpace ? '' : 'gap-x-3 gap-y-3 mb-3'}
            ${props.sm ? `sm:grid-cols-${props.sm}` : ''}
            ${props.md ? `md:grid-cols-${props.md}` : ''}
            ${props.lg ? `lg:grid-cols-${props.lg}` : ''}
            ${props.xl ? `xl:grid-cols-${props.xl}` : ''}
            ${props.xl2 ? `2xl:grid-cols-${props.xl2}` : ''}
            ${props.className ?? ''}
        `}>
            {props.children}
        </div>
    )
}