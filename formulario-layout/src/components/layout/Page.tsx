interface PageProps {
    children: any
}

export default function Page(props: PageProps) {
    return (
        <div className={`
            flex flex-col justify-center items-center
            h-screen bg-zinc-900 text-zinc-100
        `}>
            <div className="w-max-[1200px]">
                {props.children}
            </div>
        </div>
    )
}