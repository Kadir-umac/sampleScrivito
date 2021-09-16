import * as Scrivito from 'scrivito';

Scrivito.provideEditingConfig('ProductListWidget', {
  title: 'Product List Widget',
  properties: ['bgColor'],
  attributes: {
    bgColor: {
      title: 'Background color',
    },
  },
});