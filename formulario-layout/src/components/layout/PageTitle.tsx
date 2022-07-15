interface PageTitleProps {
    main: string
    sub?: string
}

export default function PageTitle(props: PageTitleProps) {
    return (
        <div className={`flex flex-col mb-7`}>
            <span className="text-zinc-300 font-black text-3xl">
                {props.main}
            </span>
            {props.sub && (
                <span className="text-zinc-400 text-sm">
                    {props.sub}
                </span>
            )}
        </div>
    )
}