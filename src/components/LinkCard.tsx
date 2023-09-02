import React, { useRef, useEffect, useState } from 'react';

type LinkProps = {
  title: string;
  url: string;
  thumbnail?: string;
};

const LinkCard: React.FC<LinkProps> = ({ title, url, thumbnail }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="relative m-4 flex aspect-video flex-col items-center overflow-hidden rounded-lg bg-zinc-100 shadow-lg hover:bg-zinc-200 dark:bg-zinc-700 dark:hover:bg-zinc-600"
    >
      <div className="absolute h-full w-full flex-shrink-0">
        {thumbnail && (
          <img
            src={thumbnail}
            alt={`${title} thumbnail`}
            className="m-0 h-full w-full border-none object-cover"
          />
        )}
      </div>
      <h2 className="absolute bottom-0 w-full flex-none self-stretch bg-black bg-opacity-50 p-2 text-center text-2xl text-white text-opacity-80 backdrop-blur backdrop-filter">
        {title}
      </h2>
    </a>
  );
};

export default LinkCard;