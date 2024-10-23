import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { PerspectiveCameraProps, useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import { PerspectiveCamera as ThreePerspectiveCamera } from 'three';

const PerspectiveCameraWithLookAt = (props: PerspectiveCameraProps) => {
	const cameraRef = useRef<ThreePerspectiveCamera | null>(null);
	const { scene } = useThree();

	useFrame(() => {
		if (cameraRef.current) {
			cameraRef.current.lookAt(scene.position);
		}
	});

	return (
		<>
			<PerspectiveCamera ref={cameraRef} makeDefault {...props} />
			<OrbitControls target={[0, 0, 0]} makeDefault />
		</>
	);
};

export default PerspectiveCameraWithLookAt;
