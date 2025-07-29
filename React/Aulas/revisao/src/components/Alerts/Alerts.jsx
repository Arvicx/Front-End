const Alert = (props) =>{
    return(
        <>
        <div className="bg-red-100 m-3 p-3 rounded">
        <h1>{props.msg}</h1>
        </div>
        </>
    )
}

export default Alert