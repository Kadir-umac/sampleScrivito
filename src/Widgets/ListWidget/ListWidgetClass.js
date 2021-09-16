import * as Scrivito from 'scrivito';

Scrivito.provideWidgetClass('ListWidget', {
  attributes: {
    items: ['widgetlist', { only: 'ListItemWidget' }],
    cssClass: 'string',
  },
});