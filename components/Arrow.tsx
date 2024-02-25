type arrowParams = {
    direction: string,
    complete: boolean
}

export default function Arrow(params: arrowParams) {
    const {direction, complete} = params;

    return (
        <div className={`arrow ${direction}`}>
            <div className={`arrow-tail ${direction} ${complete ? 'complete' : ''}`}></div>
            <div className={`arrow-head ${direction} ${complete ? 'complete' : ''}`}></div>
        </div>
    )
}