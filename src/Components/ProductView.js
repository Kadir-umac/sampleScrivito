import * as React from 'react';
import * as Scrivito from 'scrivito';

function ProductView({ product })  {
  return (
    <div className='row'>
      <div className='col-sm-2'><Scrivito.ImageTag content={ product } attribute='image' /></div>
      <div className='col-sm-9'>
        <Scrivito.ContentTag tag='h3' content={ product } attribute='title' />
        <Scrivito.ContentTag tag='h5' content={ product } attribute='description' />
      </div>
      <div className='col-sm-1'>
        <h3><small>$ </small>{ product.get('price') }</h3>
        <Scrivito.ContentTag tag='small' content={ product } attribute='orderCode' />
      </div>
    </div>
  );
};

export default Scrivito.connect(ProductView);