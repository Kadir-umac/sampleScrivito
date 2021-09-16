import * as Scrivito from 'scrivito';

const FileUploadWidget = Scrivito.provideWidgetClass('FileUploadWidget',{
    attributes:{
        successContent: 'widgetlist',
        failureContent: 'widgetlist'
    }
})

export default FileUploadWidget
