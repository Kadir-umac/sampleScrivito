import * as Scrivito from 'scrivito';

Scrivito.provideWidgetClass('ListItemWidget', {
  attributes: { 
    content: 'widgetlist',
    cssClass: 'string',
  },

  onlyInside: 'ListWidget',
});