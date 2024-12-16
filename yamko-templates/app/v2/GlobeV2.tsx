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

        const geometry = new THREE.SphereGeometry(2, 8, 8);

        const edgeMaterial = new THREE.MeshBasicMaterial({
            color: 'rgb(255, 200, 225)',
            wireframe: true,
            transparent: true,
            opacity: 1,
        });
        const edges = new THREE.Mesh(geometry, edgeMaterial);
        scene.add(edges);

        camera.position.z = 4;

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
            edges.rotation.x += 0.0005;
            edges.rotation.y += 0.001;

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
                    width: '20vw',
                    height: '20vw',
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
    margin-left: 50vw;
    margin-top: calc(30vw * (1080/1920));
    opacity: 0.2;
    z-index: 999;
`;
