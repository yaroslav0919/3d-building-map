import { ang2Rad } from "../helper/math"

export const orbitControlProps = {
    target: [-50, 0, 8],
    minPolarAngle: ang2Rad(90),
    maxPolarAngle: ang2Rad(85),
    maxDistance: 100,
    minDistance: 10,
}