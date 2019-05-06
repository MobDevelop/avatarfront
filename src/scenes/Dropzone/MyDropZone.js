import React from "react";
import Dropzone from "react-dropzone";
import "./MyDropZone.scss";

export class MyDropzone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDragEnter: false
    };
  }

  onDrop = files => {
    /* if (files.length === 0 || files[0].type.indexOf("image") < 0)
      window.alert(
        "This file is not a image file or you have uploaded more than 1 files"
      );
    else {*/
    this.props.receiveFile(files[0]);
    // }
    this.setState({ isDragEnter: false });
  };
  render() {
    return (
      <div>
        <Dropzone
          onDrop={this.onDrop.bind(this)}
          multiple={false}
          accept=""
          onDragEnter={() => this.setState({ isDragEnter: true })}
          onDragLeave={() => this.setState({ isDragEnter: false })}
        >
          {({ getRootProps, getInputProps }) => (
            <div
              {...getRootProps()}
              className={
                this.state.isDragEnter ? "fileDragEnter" : "originDrop"
              }
            >
              <input {...getInputProps()} />
              {!this.state.isDragEnter ? (
                <p>
                  Drag and drop a image here,
                  <br />
                  or click to select a image
                </p>
              ) : (
                <p>Drop that file Here</p>
              )}
            </div>
          )}
        </Dropzone>
      </div>
    );
  }
}
