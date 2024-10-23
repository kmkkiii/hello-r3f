import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';

const Sphere = (props: JSX.IntrinsicElements['mesh']) => {
	const ref = useRef({} as Mesh);
	let step = 0;

	useFrame(() => {
		if (ref.current) {
			step += 0.04;
			ref.current.position.x = 20 + 10 * Math.cos(step);
			ref.current.position.y = 2 + 10 * Math.abs(Math.sin(step));
		}
	});

	return (
		<mesh ref={ref} {...props}>
			<sphereGeometry args={[4, 20, 20]} />
			<meshLambertMaterial color="#7777ff" />
		</mesh>
	);
};

export default Sphere;
