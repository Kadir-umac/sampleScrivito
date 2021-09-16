import * as Scrivito from 'scrivito';

Scrivito.provideEditingConfig('ListWidget', {
  title: 'List Widget',
  properties: ['cssClass'],
  attributes: {
    cssClass: {
      title: 'List CSS class',
    },
  },
});