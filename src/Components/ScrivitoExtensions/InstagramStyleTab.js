import * as React from 'react';
import * as Scrivito from 'scrivito';

class InstagramStyleTab extends React.Component {
  constructor(props) {
    super(props);
    this.setInstagramStyle = this.setInstagramStyle.bind(this);
  }

  setInstagramStyle(event) {
    const style = event.target.value;
    this.props.widget.update({ instagramStyle: style === '' ? null : style });
  }

  render() {
    const InstagramStyles = [
      { value: '', title: 'None' },
      { value: 'filter-1977', title: '1977' },
      { value: 'filter-aden', title: 'Aden' },
      { value: 'filter-amaro', title: 'Amaro' },
      { value: 'filter-ashby', title: 'Ashby' },
      { value: 'filter-brannan', title: 'Brannan' },
      { value: 'filter-brooklyn', title: 'Brooklyn' },
      { value: 'filter-charmes', title: 'Charmes' },
      { value: 'filter-clarendon', title: 'Clarendon' },
      { value: 'filter-crema', title: 'Crema' },
      { value: 'filter-dogpatch', title: 'Dogpatch' },
      { value: 'filter-earlybird', title: 'Earlybird' },
      { value: 'filter-gingham', title: 'Gingham' },
      { value: 'filter-ginza', title: 'Ginza' },
      { value: 'filter-hefe', title: 'Hefe' },
      { value: 'filter-helena', title: 'Helena' },
      { value: 'filter-hudson', title: 'Hudson' },
      { value: 'filter-inkwell', title: 'Inkwell' },
      { value: 'filter-kelvin', title: 'Kelvin' },
      { value: 'filter-juno', title: 'Kuno' },
      { value: 'filter-lark', title: 'Lark' },
      { value: 'filter-lofi', title: 'Lo-Fi' },
      { value: 'filter-ludwig', title: 'Ludwig' },
      { value: 'filter-maven', title: 'Maven' },
      { value: 'filter-mayfair', title: 'Mayfair' },
      { value: 'filter-moon', title: 'Moon' },
      { value: 'filter-nashville', title: 'Nashville' },
      { value: 'filter-perpetua', title: 'Perpetua' },
      { value: 'filter-poprocket', title: 'Poprocket' },
      { value: 'filter-reyes', title: 'Reyes' },
      { value: 'filter-rise', title: 'Rise' },
      { value: 'filter-sierra', title: 'Sierra' },
      { value: 'filter-skyline', title: 'Skyline' },
      { value: 'filter-slumber', title: 'Slumber' },
      { value: 'filter-stinson', title: 'Stinson' },
      { value: 'filter-sutro', title: 'Sutro' },
      { value: 'filter-toaster', title: 'Toaster' },
      { value: 'filter-valencia', title: 'Valencia' },
      { value: 'filter-vesper', title: 'Vesper' },
      { value: 'filter-walden', title: 'Walden' },
      { value: 'filter-willow', title: 'Willow' },
      { value: 'filter-xpro-ii', title: 'X-Pro II' },
    ];

    const widget = this.props.widget;

    return (
      <div className="scrivito_tab_content">
        <div className="scrivito_tab_pane active">
          <div className='group'>
            <div className="scrivito_detail_content">
              <div className="scrivito_detail_label">
                <span>Style</span>
              </div>
              <div className="item_content">
                {/* <select value={widget.get('instagramStyle') || ''} onChange={this.setInstagramStyle}>
                  {
                    InstagramStyles.map(style => {
                      return (
                        <option key={style.value} value={style.value}>
                          {style.title}
                        </option>
                      );
                    })
                  }
                </select> */}
                {InstagramStyles.map(style => {
                  return (<div>
                    <input type='checkbox' name={style.title} onChange={this.setInstagramStyle} />
                    <label htmlFor={style.title}>{style.title}</label>
                    <img src="https://images.pexels.com/photos/6800551/pexels-photo-6800551.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                      className={widget.get('instagramStyle')}
                    />
                  </div>)
                })

                }


              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

Scrivito.registerComponent('InstagramStyleTab', InstagramStyleTab);