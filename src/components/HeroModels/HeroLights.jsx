import React from 'react'
import * as THREE from 'three'

const HeroLights = () => {
    return (
        <>
            <spotLight position={[1, 2, 5]}
            intensity={15}/>

            <primitive
                object={new THREE.RectAreaLight('#A259FF', 2, 8, 2)}
                position={[1, 3, 4]}
                intensity={5}
                rotation={[-Math.PI / 4, Math.PI / 4, 0]}
            />
        </>
    )
}
export default HeroLights
