const Input = (props) => {
    return (
        <input
            type={props.type}
            placeholder={props.placeholder}
            onChange={props.onChange}
            value={props.value}
            className="w-[300px] h-[40px] border-2 rounded-md border-gray-500 p-2 text-[16px] focus:outline-blue-700"
        />
    )
}

export default Input;