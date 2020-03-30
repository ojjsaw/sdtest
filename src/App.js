import React, { Component } from "react";
import "./styles.css";
import * as THREE from "three";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

class App extends Component {
  componentDidMount() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    this.mount.appendChild(renderer.domElement);

    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    var animate = function() {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();
  }

  render() {
    return (
      <Container className="p-3">
        <Jumbotron>
          <h1 className="header">Welcome To Jeetas</h1>
        </Jumbotron>
        <Jumbotron>
          <div ref={ref => (this.mount = ref)} />;
        </Jumbotron>
      </Container>
    );
    //return
  }
}

export default App;
