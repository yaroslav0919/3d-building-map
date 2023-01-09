import { Html } from "@react-three/drei";
import React, { useEffect, useState } from "react";
import data from "../data/markers.json";

const Markers = () => {
	const icons = [
		{ type: 1, url: "/images/hotel-icon.png", title: "hotel" },
		{ type: 2, url: "/images/well-icon.png", title: "well" },
	];

	return (
		<group position={[0, 0, 0]}>
			{data.markers.map(({ x, y, type }, i) => (
				<Html
					distanceFactor={10}
					rotation={[0, 0, 0]}
					position={[x, y, 0]}
					key={i}
				>
					<img
						src={icons[type - 1].url}
						width={600}
						height={800}
						alt={icons[type - 1].title}
						style={{ transform: "rotateX(0deg)" }}
					/>
				</Html>
			))}
		</group>
	);
};

export default Markers;
