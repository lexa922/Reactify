function TracksSkeleton(){
    function renderSkeleton(){
        return(
            <div className='track-card'>
                <div className='track-image-wrapper skeleton-img'>
                </div>

                <div className='track-info'>
                    <div className='skeleton-text track-name'></div>
                    <div className='skeleton-text'></div>
                </div>

            </div>
        )
    }

    return (
        <div>
            {renderSkeleton()}
            {renderSkeleton()}
            {renderSkeleton()}
            {renderSkeleton()}
            {renderSkeleton()}
            {renderSkeleton()}
            {renderSkeleton()}
        </div>
    )
}

export default TracksSkeleton;

export function SearchSkeleton(){
    return (
        TracksSkeleton()
    )
}