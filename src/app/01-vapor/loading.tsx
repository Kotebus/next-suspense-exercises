import LibraryGameCardSkeleton from "@/components/LibraryGameCardSkeleton";
import {range} from "@/utils";
import LibraryGameWrapper from "@/components/LibraryGameWrapper/LibraryGameWrapper";

const skeletonRange = range(15);

function VaporLoading() {
    return (
        <LibraryGameWrapper>
                {skeletonRange.map((i) => <LibraryGameCardSkeleton key={i}/>)}
        </LibraryGameWrapper>
    );
}

export default VaporLoading;