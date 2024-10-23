import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';

const Cube = (props: JSX.IntrinsicElements['mesh']) => {
	const ref = useRef({} as Mesh);

	useFrame(() => {
		if (ref.current) {
			ref.current.rotation.x += 0.02;
			ref.current.rotation.y += 0.02;
			ref.current.rotation.z += 0.02;
		}
	});

	return (
		<mesh ref={ref} {...props}>
			<boxGeometry args={[4, 4, 4]} />
			<meshLambertMaterial color="#ff0000" />
		</mesh>
	);
};

export default Cube;
