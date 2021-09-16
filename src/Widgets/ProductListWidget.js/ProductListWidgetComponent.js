import * as React from 'react';
import * as Scrivito from 'scrivito';
import ProductView from '../../Components/ProductView';

Scrivito.provideComponent('ProductListWidget', ({ widget }) => {
  const containerClass = `container bg-${widget.get('bgColor') || 'white'}`;
  const products = Scrivito.getClass('Product').all().order('title', 'asc');
  if (!products) {
  	return <p>No Products available. Create some using the Content Browser.</p>;
  }
  return (
    <div className={ containerClass }>
      {
        [...products].map(product => {
          return <ProductView key={ product.id } product={ product } />;
        })
      }
    </div>
  );
});