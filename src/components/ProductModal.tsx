import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

interface ProductModalProps {
  name: string;
  price: number;
  description: string;
  image: string;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({
  name,
  price,
  description,
  image,
  onClose,
}) => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    renderer.setClearColor(0x000000, 0); // Set background to transparent
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5).normalize();
    scene.add(directionalLight);

    // Load GLB model
    const loader = new GLTFLoader();
    loader.load(
      "src/assets/3D_model_order/accurate_3d_scan_of_small_porcelean_tea_cup.glb",
      (gltf) => {
        scene.add(gltf.scene);
      },
      undefined,
      (error) => {
        console.error("Error loading GLB model:", error);
      }
    );

    camera.position.z = 60;

    // OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Enable smooth damping
    controls.dampingFactor = 1;
    controls.enableZoom = true; // Enable zoom

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update(); // Update controls
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <button onClick={onClose} className="text-red-500 float-right">
          X
        </button>
        <div ref={mountRef} className="w-full h-64" />
        <h2 className="text-xl font-bold mt-4">{name}</h2>
        <p className="text-sm text-gray-500">{description}</p>
        <p className="text-lg font-bold mt-2">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductModal;
