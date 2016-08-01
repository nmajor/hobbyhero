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
