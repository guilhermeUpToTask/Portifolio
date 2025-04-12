import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const SpaceShip = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create spaceship
    const createSpaceship = () => {
      const group = new THREE.Group();

      // Main body
      const bodyGeometry = new THREE.ConeGeometry(1, 3, 32);
      const bodyMaterial = new THREE.MeshPhongMaterial({ 
        color: 0x3498db,
        shininess: 100
      });
      const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
      body.rotation.x = Math.PI / 2;
      group.add(body);

      // Wings
      const wingGeometry = new THREE.BoxGeometry(3, 0.1, 1);
      const wingMaterial = new THREE.MeshPhongMaterial({ 
        color: 0x2980b9,
        shininess: 100
      });
      
      const leftWing = new THREE.Mesh(wingGeometry, wingMaterial);
      leftWing.position.set(0, 0, -1);
      group.add(leftWing);

      const rightWing = new THREE.Mesh(wingGeometry, wingMaterial);
      rightWing.position.set(0, 0, 1);
      group.add(rightWing);

      // Engine
      const engineGeometry = new THREE.CylinderGeometry(0.5, 0.2, 1, 32);
      const engineMaterial = new THREE.MeshPhongMaterial({ 
        color: 0xe74c3c,
        emissive: 0xff0000,
        emissiveIntensity: 0.5
      });
      const engine = new THREE.Mesh(engineGeometry, engineMaterial);
      engine.position.set(0, -1.5, 0);
      group.add(engine);

      return group;
    };

    const spaceship = createSpaceship();
    scene.add(spaceship);

    // Add lights
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Add stars
    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.1,
    });

    const starsVertices = [];
    for (let i = 0; i < 10000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      starsVertices.push(x, y, z);
    }

    starsGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(starsVertices, 3)
    );

    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // Orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate spaceship
      spaceship.rotation.y += 0.01;
      spaceship.rotation.x += 0.005;

      // Rotate stars
      stars.rotation.y += 0.0005;

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      scene.remove(spaceship);
      scene.remove(stars);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 -z-10" />;
};

export default SpaceShip; 