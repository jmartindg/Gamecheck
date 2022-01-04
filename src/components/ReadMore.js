import React, { useState } from "react";

const ReadMore = ({ children, maxCharacterCount = 100 }) => {
  const [isTruncated, setIsTruncated] = useState(true);

  const text = children;
  const resultString = isTruncated ? text.slice(0, maxCharacterCount) : text;

  const toggleIsTruncated = () => {
    setIsTruncated(!isTruncated);
  };

  return (
    <div>
      <p className="leading-6">{resultString}</p>
      <span onClick={toggleIsTruncated} className="text-sm cursor-pointer px-2 py-1 bg-gray-300">
        {isTruncated ? <>Read More &darr;</> : <>Read Less &uarr;</>}
      </span>
    </div>
  );
};

export default ReadMore;
