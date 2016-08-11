import React from 'react';
import Helmet from 'react-helmet';

export function buildHobbyHelmet(hobby) {
  return (<Helmet
    title={hobby.name}
    titleTemplate={'dathobby.com - %s'}
    meta={[
      { name: 'description', content: this.hobby.desc },
    ]}
  />);
}

export function youTubeIdFromUrl(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/; // eslint-disable-line
  return url.match(regExp)[2];
}
