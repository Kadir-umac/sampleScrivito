import * as React from "react";
import * as Scrivito from "scrivito";

import { FilePond } from "react-filepond";
import "filepond/dist/filepond.min.css";

class FileUploadWidgetComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      files: [],
      inSubmit: false,
      renderSuccess: false,
      renderFailure: false,
    };
  }

  onChange(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.setState({ inSubmit: true });
    var formData = new FormData();
    formData.append("email", this.state.email);
    for (var i = 0; i < this.state.files.length; i++) {
      formData.append("files", this.state.files[i]);
    }

    fetch("https://hookb.in/your_path", {
      method: "POST",
      body: formData,
    })
      .then(response => response.json())
      .then(response => {
        this.pond.removeFiles();
        this.setState({
          renderSuccess: true,
          renderFailure: false,
          inSubmit: false,
        });
      })
      .catch(error => {
        this.setState({
          renderSuccess: false,
          renderFailure: true,
          inSubmit: false,
        });
      });
  }

  submitSuccess() {
    if (Scrivito.isInPlaceEditingActive() || this.state.renderSuccess)
      return (
        <div className="form-group">
          <Scrivito.ContentTag
            content={this.props.widget}
            attribute="successContent"
          />
        </div>
      );
  }
  submitFailure() {
    if (Scrivito.isInPlaceEditingActive() || this.state.renderFailure)
      return (
        <div className="form-group">
          <Scrivito.ContentTag
            content={this.props.widget}
            attribute="failureContent"
          />
        </div>
      );
  }

  render() {
    var submitDisabled =
      this.state.files.length===0 || !this.state.email || this.state.inSubmit;
    return (
      <div className="container">
        <form
          encType="multipart/form-data"
          onSubmit={e => this.onFormSubmit(e)}
        >
          <div className="form-group floating-label">
            <label htmlFor="email">E-mail address</label>
            <input
              className="form-control form-control-lg"
              placeholder="E-mail"
              type="email"
              name="email"
              id="email"
              required
              onChange={e => this.onChange(e)}
            />
          </div>
          <div className="form-group floating-label">
            <div className="form-control form-control-lg">
              <FilePond
                labelIdle='<span class="filepond--label-action">Browse files</span> or drag &amp; drop them here'
                ref={ref => (this.pond = ref)}
                allowMultiple={true}
                maxFiles={3}
                onupdatefiles={fileItems => {
                  this.setState({
                    files: fileItems.map(fileItem => fileItem.file),
                  });
                }}
              />
            </div>
          </div>
          {this.submitFailure()}
          <div className="form-group">
            <button
              className={`btn btn-block btn-primary ${
                submitDisabled ? " disabled" : ""
              }`}
              disabled={submitDisabled}
              type="submit"
            >
              Submit
            </button>
          </div>
          {this.submitSuccess()}
        </form>
      </div>
    );
  }
}

Scrivito.provideComponent("FileUploadWidget", FileUploadWidgetComponent);