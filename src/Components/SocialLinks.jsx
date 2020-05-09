import React from 'react';

const SocialLinks = props => {
  return (
    <div className="social">
      <a
        href="https://twitter.com/BodakeSandesh"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to author's Twitter profile"
      >
        {' '}
        <i className="fab fa-twitter" />
      </a>
      <a
        id="profile-link"
        href="https://github.com/sandeshbodake?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to author's GitHub Profile"
      >
        {' '}
        <i className="fab fa-github" />
      </a>
      <a
        id="profile-link"
        href="https://medium.com/@sandeshbodake121"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to author's Medium Profile"
      >
        {' '}
        <i className="fab fa-medium" />
      </a>
      <a
        id="profile-link"
        href="https://www.facebook.com/sandesh.bodake.75"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to author's Facebook Profile"
      >
        {' '}
        <i className="fab fa-facebook" />
      </a>
    </div>
  );
};

export default SocialLinks;
