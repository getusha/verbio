type textInputPropTypes = {
    type: string,
    value: string,
    onChange?: React.ChangeEventHandler,
    placeholder?: string,
    command?: boolean
}

const TextInput = ({type, value, onChange, placeholder, command} : textInputPropTypes) => {
    return (
        <input type={type} placeholder={placeholder} value={value} onChange={onChange} className={`${command ? "text-green-400 " : "" } outline-none rounded-md w-full mt-auto px-4 py-4 bg-neutral-800 text-white`} />
    )
}

export default TextInput;