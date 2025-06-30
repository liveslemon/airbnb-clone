import React from 'react';

const LinkItem = ({ name, country }) => {
  return (
    <a href={`/${name.toLowerCase().replace(/\s+/g, '-')}`} className="link-item">
      {name}
      <div className="link-country">{country}</div>
    </a>
  );
};

export default LinkItem;
