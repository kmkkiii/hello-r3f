import './App.css';
import { Canvas } from '@react-three/fiber';
import { Stats } from '@react-three/drei';

import Cube from './components/Cube';
import Sphere from './components/Sphere';
import { SpotLight } from 'three';
import { useRef } from 'react';
import PerspectiveCamera from './components/ PerspectiveCamera';

function App() {
	const spotLightRef = useRef<SpotLight>(null);

	return (
		<div id="canvas-container">
			<Canvas
				onCreated={(state) => {
					state.gl.setClearColor('#EEEEEE');
					state.gl.setSize(window.innerWidth, window.innerHeight);
				}}
				shadows
			>
				<Stats />
				<PerspectiveCamera
					args={[45, window.innerWidth / window.innerHeight, 0.1, 1000]}
					position={[-30, 40, 30]}
					castShadow
				/>
				<axesHelper args={[20]} />
				<mesh position={[15, 0, 0]} rotation-x={-0.5 * Math.PI} receiveShadow>
					<planeGeometry args={[60, 20]} />
					<meshLambertMaterial color="#ffffff" />
				</mesh>
				<Cube position={[-4, 3, 0]} castShadow />
				<Sphere position={[20, 4, 2]} castShadow />
				<spotLight
					ref={spotLightRef}
					position={[-20, 30, -5]}
					color="#ffffff"
					intensity={2000}
					castShadow
				/>
				{spotLightRef.current && (
					<cameraHelper args={[spotLightRef.current.shadow.camera]} />
				)}
			</Canvas>
		</div>
	);
}

export default App;
