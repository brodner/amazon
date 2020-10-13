import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import NavComponent from "./components/NavComponent";
import firebase from "firebase/app";
import "firebase/auth";
import config from "./config";
import ofer1 from "./img/ofer1.jpg";
import ofer2 from "./img/ofer2.jpg";
import ofer3 from "./img/ofer3.jpg";
import {
  FirebaseAuthConsumer,
  FirebaseAuthProvider,
} from "@react-firebase/auth";

class App extends Component {
  render() {
    return (
      <div>
        <FirebaseAuthProvider firebase={firebase} {...config}>
          <NavComponent user="Brodner"></NavComponent>
          <button
            onClick={() => {
              const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
              firebase.auth().signInWithPopup(googleAuthProvider);
            }}
          >
            Sign In with Google
          </button>
          <FirebaseAuthConsumer>
            {({ isSignedIn, user, providerId }) => {
              return (
                <pre style={{ height: 300, overflow: "auto" }}>
                  {JSON.stringify({ isSignedIn, user, providerId }, null, 2)}
                </pre>
              );
            }}
          </FirebaseAuthConsumer>
          <div className="container-fluid p-0">
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100" src={ofer1} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={ofer2} alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={ofer3} alt="Third slide" />
              </Carousel.Item>
            </Carousel>
            <div className="row m-0 position-absolute" style={{ top: "25rem" }}>
              <div className="col-md-3 col-sm-12">
                <div className="bg-light p-3">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita unde mollitia officiis esse! Corporis, odio vel
                    officiis nobis nesciunt illum doloribus expedita quo vitae
                    repudiandae reprehenderit quas? Eaque ex doloribus tempore
                    totam neque, corporis minus repellendus praesentium ab
                    voluptatibus quasi cupiditate cumque molestiae ullam dolorum
                    sed reprehenderit ratione harum numquam. Iste recusandae
                    perspiciatis molestiae ab vitae facilis aspernatur,
                    laboriosam nesciunt cupiditate, aperiam quia ipsam obcaecati
                    alias eius nemo quaerat cumque. Eligendi, minima dolorem
                    perferendis quis quia dolores sunt ut at.
                  </p>
                </div>
              </div>
              <div className="col-md-3 col-sm-12">
                <div className="bg-light p-3">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita unde mollitia officiis esse! Corporis, odio vel
                    officiis nobis nesciunt illum doloribus expedita quo vitae
                    repudiandae reprehenderit quas? Eaque ex doloribus tempore
                    totam neque, corporis minus repellendus praesentium ab
                    voluptatibus quasi cupiditate cumque molestiae ullam dolorum
                    sed reprehenderit ratione harum numquam. Iste recusandae
                    perspiciatis molestiae ab vitae facilis aspernatur,
                    laboriosam nesciunt cupiditate, aperiam quia ipsam obcaecati
                    alias eius nemo quaerat cumque. Eligendi, minima dolorem
                    perferendis quis quia dolores sunt ut at.
                  </p>
                </div>
              </div>
              <div className="col-md-3 col-sm-12">
                <div className="bg-light p-3">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita unde mollitia officiis esse! Corporis, odio vel
                    officiis nobis nesciunt illum doloribus expedita quo vitae
                    repudiandae reprehenderit quas? Eaque ex doloribus tempore
                    totam neque, corporis minus repellendus praesentium ab
                    voluptatibus quasi cupiditate cumque molestiae ullam dolorum
                    sed reprehenderit ratione harum numquam. Iste recusandae
                    perspiciatis molestiae ab vitae facilis aspernatur,
                    laboriosam nesciunt cupiditate, aperiam quia ipsam obcaecati
                    alias eius nemo quaerat cumque. Eligendi, minima dolorem
                    perferendis quis quia dolores sunt ut at.
                  </p>
                </div>
              </div>
              <div className="col-md-3 col-sm-12">
                <div className="bg-light p-3">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita unde mollitia officiis esse! Corporis, odio vel
                    officiis nobis nesciunt illum doloribus expedita quo vitae
                    repudiandae reprehenderit quas? Eaque ex doloribus tempore
                    totam neque, corporis minus repellendus praesentium ab
                    voluptatibus quasi cupiditate cumque molestiae ullam dolorum
                    sed reprehenderit ratione harum numquam. Iste recusandae
                    perspiciatis molestiae ab vitae facilis aspernatur,
                    laboriosam nesciunt cupiditate, aperiam quia ipsam obcaecati
                    alias eius nemo quaerat cumque. Eligendi, minima dolorem
                    perferendis quis quia dolores sunt ut at.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FirebaseAuthProvider>
      </div>
    );
  }
}

export default App;
