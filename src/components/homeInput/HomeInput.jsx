/* eslint-disable max-len */
import React, { Component } from 'react';
import firebase from '../app/Firebase';

export default class Home extends Component {
 
  constructor(props){
    super(props);
    this.state = {
      files : null
    };
  }

    fileSelectHandle = (files) => {
      this.setState({
        files
      });
    }

    fileUploadHandle = () => {
      const bucketName = 'images';
      const file = this.state.files[0];
      const storageRef = firebase.storage().ref(`${bucketName}/${file.name}`);
      const uploadTask = storageRef.put(file);
      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        () => {
          const DownloadURL = uploadTask.snapshot.Reference.getDownloadURL;
        });
    }

    showImage = () => {
      const storageRef = firebase.storage().ref();
      const spaceRef = storageRef.child('images/' + this.state.files[0].name).getDownloadURL().then((url) => {
        console.log(url);
        document.getElementById('new-img').src = url;
      });
    }
    

    render() {
      return (
        <>
          <div> 
            <input type="file" onChange={(e) => {this.fileSelectHandle(e.target.files);}} /> 
            <button onClick={this.fileUploadHandle}>upload</button>
            <img id="new-img"/>
          </div>
        </>
      );
    }
}
