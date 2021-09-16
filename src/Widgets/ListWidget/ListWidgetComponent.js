import * as React from 'react';
import * as Scrivito from 'scrivito';

Scrivito.provideComponent('ListWidget', ({ widget }) =>
  <Scrivito.ContentTag
      tag='ul' 
      attribute='items'
      content={ widget }
      className={ widget.get('cssClass') || 'list-group' }
    />
);