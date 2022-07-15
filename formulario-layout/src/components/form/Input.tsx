interface InputProps {
    label?: any
    value?: any
    placeholder?: any
}

export default function Input(props: InputProps) {
    return (
        <div className="flex flex-col">
            {props.label && (
                <label className="text-zinc-300 text-lg mb-1">
                    {props.label}
                </label>
            )}
            <input
                value={props.value}
                placeholder={props.placeholder}
                className={`
                    bg-zinc-700 px-4 py-2 rounded-md
                    text-lg outline-none focus:border
                    border-blue-500
                `}
            />
        </div>
    )
}