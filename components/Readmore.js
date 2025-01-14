import { useState } from 'react';

export default function ReadMore({ text, maxLength = 100 }) {
  return text;
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  // Function to strip HTML tags
  const stripHTMLTags = (html) => {
    return html.replace(/<[^>]*>/g, '');
  };

  const plainText = stripHTMLTags(text);
  const displayText = isExpanded ? plainText : plainText.slice(0, maxLength);

  return (
    <div>
      <p>{displayText}{!isExpanded && '...'}</p>
      <button onClick={toggleReadMore}>
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
    </div>
  );
}