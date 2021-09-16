import * as Scrivito from 'scrivito';

Scrivito.provideWidgetClass('ProductListWidget', {
  attributes: {
    bgColor: ['enum', { values: ['primary', 'secondary', 'info', 'light'] }],
  },
});