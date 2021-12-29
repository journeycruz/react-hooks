import React from 'react';

const HookTemplate = ({ title, description, usage, stackBlitz }) => {
  return (
    <div>
      <p className="title montserrat-semi">{title}</p>
      <hr />
      <p className="text raleway-medium">{description}</p>
      <iframe src={stackBlitz} frameBorder="0"></iframe>
      <p className="text raleway-medium">{usage}</p>
    </div>
  );
};

export default HookTemplate;
