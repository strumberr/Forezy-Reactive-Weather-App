import React, { Component } from "react";

class DesktopNotification extends Component {
  constructor() {
    super();
    this.showNotification = this.showNotification.bind(this);
  }

  componentDidMount() {
    if (!("Notification" in window)) {
      console.log("Browser does not support desktop notification");
    } else {
      Notification.requestPermission();
    }
  }

  showNotification() {
    var options = {
      body: 'This is a friendly reminder to bring an umbrella.',
      icon: '/assets/other/Group 100.png',
      dir: 'ltr',
    };

    var notification = new Notification('It might rain today!', options);
  }


  render() {
    return (
      <div>
        <button onClick={this.showNotification}>Show notification</button></div>
    );
  }
}

export default DesktopNotification;
