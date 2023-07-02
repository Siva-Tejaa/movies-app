import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const BodySkeleton = () => {
  return (

        <SkeletonTheme baseColor="#252525" highlightColor="#444">
            <Skeleton className='h-[180px] w-[165px] laptop:h-[230px] rounded-none' />
            <Skeleton className='w-[165px]'/>
            <Skeleton width={80} />
        </SkeletonTheme>

  )
}

export default BodySkeleton;