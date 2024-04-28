const Jobs = ({result}) => {
    // console.log('result : ', props.result);
    return (
        <>
            <div className="text-primary/90 text-base font-semibold px-2 py-2">{result.length} jobs found</div>
            {result}
        </>
    )
}

export default Jobs;