import React from 'react';

const ImageCard = ({ image }) => {
  const tags = image.tags.split(",");
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-md mt-10">
      {/* Add a container with fixed dimensions */}
      <div className="h-64 w-full overflow-hidden">
        <img
          src={image.webformatURL}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-green-600 text-xl mb-3">
          Photo by {image.user}
        </div>
        <ul>
          <li>
            <strong>Downloads: {image.downloads} </strong>
          </li>
          <li>
            <strong>Collections: {image.collections}</strong>
          </li>
          <li>
            <strong>Likes: {image.likes}</strong>
          </li>
        </ul>
      </div>
      <div className="px-5 py-3">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-red-400 rounded-full px-3 py-2 text-sm text-center font-semibold text-black-500 mr-3 mb-3"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;