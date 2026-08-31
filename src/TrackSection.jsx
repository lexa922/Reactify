import { useState, Suspense } from 'react';
import { fetchTracksResource } from './TrackResources';
import TrackList from './TrackList';
import TracksSkeleton from './Skeletons';

const LIMIT = 7;

function TrackSection() {
    const [offset, setOffset] = useState(0);

    const [tracksPromise, setTracksPromise] = useState(() => fetchTracksResource(LIMIT, 0));

    function handleNextPage() {
        const nextOffset = offset + LIMIT;
        setOffset(nextOffset);
        setTracksPromise(fetchTracksResource(LIMIT, nextOffset));
    }

    function handlePrevPage() {
        if (offset === 0) return;
        const prevOffset = Math.max(0, offset - LIMIT);
        setOffset(prevOffset);
        setTracksPromise(fetchTracksResource(LIMIT, prevOffset));
    }

    return (
        <div className="track-section">
            <h2>Список треків</h2>

            <Suspense fallback={<TracksSkeleton />}>
                <TrackList tracksPromise={tracksPromise} />
            </Suspense>

            <div className="pagination-controls">
                <button className='pagination-control-button' onClick={handlePrevPage} disabled={offset === 0}>
                    ←
                </button>
                <span>{Math.floor(offset / LIMIT) + 1}</span>
                <button className='pagination-control-button' onClick={handleNextPage}>
                     →
                </button>
            </div>
        </div>
    );
}

export default TrackSection;