import * as Scrivito from 'scrivito';

Scrivito.provideEditingConfig('ListItemWidget', {
  title: 'List Item Widget',
  properties: ['cssClass'],
  attributes: {
    cssClass: {
      title: 'List item CSS class',
    },
  },
});