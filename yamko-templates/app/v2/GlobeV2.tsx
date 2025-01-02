'use client';

import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import * as THREE from 'three';

export const GlobeV2: React.FC = () => {
    const mountRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!mountRef.current) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        mountRef.current.appendChild(renderer.domElement);

        scene.background = null;

        // Frame
        const globeRadius = 2;
        // const geometry = new THREE.SphereGeometry(globeRadius, 16, 16);
        // const edgeMaterial = new THREE.MeshBasicMaterial({
        //     color: 'rgb(200, 255, 150)',
        //     wireframe: true,
        //     transparent: true,
        //     opacity: 1,
        // });
        // const edges = new THREE.Mesh(geometry, edgeMaterial);
        // scene.add(edges);

        // Ring
        const ringRadius = globeRadius * 2;
        const ringGeometry = new THREE.TorusGeometry(ringRadius, .5, 2, 6);
        const ringMaterial = new THREE.MeshBasicMaterial({
            color: 'rgb(0, 0, 0)',
            wireframe: true,
            transparent: true,
            opacity: 1,
        });
        const ring = new THREE.Mesh(ringGeometry, ringMaterial);
        ring.rotation.x = (Math.PI / 2) + .25;
        ring.rotation.y += .5;
        scene.add(ring);

        camera.position.z = 8;

        const resize = () => {
            if (!mountRef.current) return;

            const containerWidth = mountRef.current.clientWidth;
            const containerHeight = mountRef.current.clientHeight;

            renderer.setSize(containerWidth, containerHeight);

            camera.aspect = containerWidth / containerHeight;
            camera.updateProjectionMatrix();
        };

        let resizeTimeout: NodeJS.Timeout;
        const onResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                resize();
            }, 250);
        };

        window.addEventListener('resize', onResize);

        resize();

        const animate = () => {
            requestAnimationFrame(animate);
            // edges.rotation.x += 0.0005;
            // edges.rotation.y -= 0.001;

            // ring.rotation.x += 0.0005; 
            ring.rotation.z += 0.001; 
            renderer.render(scene, camera);
        };

        animate();

        return () => {
            renderer.dispose();
            window.removeEventListener('resize', onResize);
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
        };
    }, []);

    return (
        <GlobeContainer>
            <div
                ref={mountRef}
                style={{
                    width: '500px',
                    height: '500px',
                    objectFit: 'contain',
                }}
            />
        </GlobeContainer>
    );
};

const GlobeContainer = styled.div`
    scale: 1;
    height: fit-content;
    width: fit-content;
    margin-left: 250px;
    // margin-top: calc(30vw * (1080/1920));
    opacity: 1;
    z-index: 999;
`;
