'use client';
import { useState } from 'react';
import Image from 'next/image';
function LoadingImage({
  image,
  sizes,
}: {
  image: string;
  sizes?: string;
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <Image
        src={image}
        fill
        sizes={sizes}
        placeholder="empty"
        onLoadingComplete={() => setIsLoaded(true)}
        alt="character image"
        className={`z-[5] object-cover ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <div className="w-full h-full flex items-center justify-center">
        <span className={`${isLoaded ? 'hidden' : ''} spinner`}></span>
      </div>
    </>
  );
}

export default LoadingImage;
