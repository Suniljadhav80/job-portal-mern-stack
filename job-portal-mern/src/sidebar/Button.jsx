const Button = ({onClickHnadler, value, title}) => {
    return (
        <>
            <button className="px-4 py-2 text-sm font-semibold border  bg-white text-primary hover:bg-blue-700 hover:text-white" value={value} onClick={onClickHnadler}>{title}</button>
        </>
    )
}

export default Button;