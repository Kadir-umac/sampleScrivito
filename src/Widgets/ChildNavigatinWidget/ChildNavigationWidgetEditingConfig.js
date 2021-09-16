import * as Scrivito from 'scrivito';
import pageListWidgeticon from '../../assets/images/link_list_widget.svg';

Scrivito.provideEditingConfig('ChildNavigationWidget',{
    title: 'Child Navigation',
    description: 'Display a navigation from child of a page',
    thumbnail:`${pageListWidgeticon}`,
    attributes:{
        parentPage: {
            title: 'Parent page ',
            description: 'Leave emtty for parent page'
        }
    },
    properties:[
        'parentpage'
    ],
});