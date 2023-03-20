import React from 'react';
import Image from 'next/image';

type Props = {
  title: string;
  img: string;
  type?: string;
};

export const ProductCard: React.FC<Props> = ({ title, img, type }) => {
  const [isImageLoaded, setIsImageLoaded] = React.useState(false);
  return (
    <div className="flex flex-col border border-primary bg-white w-64 gap-y-4 py-4 rounded-lg">
      <div className="flex justify-center">
        <Image
          src={img}
          alt={`Picture of ${title}`}
          width={150}
          height={200}
          className={`${!isImageLoaded ? 'animate-pulse' : ''}`}
          placeholder="blur"
          loading="lazy"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOM+QIAAbIBUl+3LQMAAAAASUVORK5CYII="
          onLoad={() => setIsImageLoaded(true)}
        />
      </div>
      <hr className="border border-separator mx-4" />
      <div className="flex justify-between mx-4 h-14">
        <h5 className="text-xl font-light line-clamp-2">{title}</h5>
        {type && (
          <div>
            <p
              className={`font-light text-sm text-white p-1 bg-${type.toLowerCase()} rounded-sm`}
            >
              {type.toUpperCase()}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
