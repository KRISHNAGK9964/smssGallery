import React from "react";

const ImageCard = ({ image, view }) => {
  const tags = image.tags.split(",");
  return (
    <div className={"flex  rounded-lg bg-cyan-50 shadow-3xl"}>
      <img className=" rounded " src={image.webformatURL} alt="Random" />
      {view === "list" && (
        <div className="max-w-sm px-6 py-4">
          <div className="font-bold text-red-600 text-xl mb-2">
            Photo by {image.user}
          </div>
          <ul>
            <li>
              <strong className="inline-flex items-center m-2 px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Views
              </strong>
              {image.views}
            </li>
            <li>
              <strong className="inline-flex items-center m-2 px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Downloads:{" "}
              </strong>
              {image.downloads}
            </li>
            <li>
              <strong className="inline-flex items-center m-2 px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Likes{" "}
              </strong>
              {image.likes}
            </li>
          </ul>
        </div>
      )}
      {view === "list" && (
        <div className="px-6 py-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center m-2 px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageCard;
