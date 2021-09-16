import * as React from 'react';
import * as Scrivito from 'scrivito';

const ParentLink = Scrivito.connect(props => {
    let target = props.page;
    if (!target || !target.parent()) {
      return null;
    }
  
    if (target.id() === Scrivito.currentPage().id()) {
      target = target.parent();
    }
  
    return (
      <div className='parent'>
        <Scrivito.LinkTag to={ target }>
          { target.get('title') }
        </Scrivito.LinkTag>
      </div>
    );
});
function renderChild(child){
    let className = ''

    if (child.id() === Scrivito.currentPage().id()) {
        className= 'strong'
    }

    return(
      <li className={ `fa fa-caret-right ${className}` } >
            <Scrivito.LinkTag to={child}>
                {child.get('title')}
            </Scrivito.LinkTag>
            {newFlag(child)}
        </li>
    )
}

const currentDate = Date.now()
const fortnight = 1000 * 60 * 60 * 24 * 1 

const newFlag = (child) =>{
  const createdAt = child.createdAt()

  if (createdAt && currentDate - createdAt < fortnight) {
    return(
      <i className="fa fa-star fa-1x small initialism">New</i>
    )
  }
}


Scrivito.provideComponent('ChildNavigationWidget', ({ widget }) => {
  let parentPage = widget.get('parentPage');

  if (!parentPage) {
    parentPage = widget.obj();
  }

  return (
  <div className='childNav'>
    <Scrivito.ContentTag
      tag='h4'
      className='title'
      content={ widget }
      attribute='navTitle'
    />
    <ParentLink page={ parentPage } />

    <Scrivito.ChildListTag
      tag='ul'
      className='page-list'
      parent={ parentPage }
      renderChild={ renderChild }
    />
  </div>
  );
}); 