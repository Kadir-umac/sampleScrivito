import * as Scrivito from 'scrivito';

Scrivito.provideObjClass('Product', {
    attributes: {
        title: 'string',
        description: 'html',
        orderCode: 'string',
        price: 'float',
        tags: 'stringlist',
        image: 'reference',
    },
});