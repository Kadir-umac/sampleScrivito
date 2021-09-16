import * as React from 'react';
import * as Scrivito from 'scrivito';

Scrivito.provideComponent('ListItemWidget', ({ widget }) =>
  <Scrivito.WidgetTag tag='li' className={ widget.get('cssClass') || 'list-group-item' }>
    <Scrivito.ContentTag content={ widget } attribute='content' />
  </Scrivito.WidgetTag>
);