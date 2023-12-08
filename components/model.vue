<template>
    <canvas id="logoModel" class="logoModel"></canvas>
</template>
<script>
    import * as THREE from "three";
    import { OrbitControls } from "three/addons/controls/OrbitControls.js";
    import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
    import { RGBELoader } from "three/addons/loaders/RGBELoader";
    export default {
        mounted() {
            const el = this.$el;
            function init() {
                console.log(window.innerWidth);
                const width = window.innerWidth;
                const height = window.innerHeight;

                // レンダラーを作成
                console.log(el);
                const renderer = new THREE.WebGLRenderer({
                    canvas: el,
                    alpha: true
                });
                renderer.setSize(width, height);
                renderer.setPixelRatio(window.devicePixelRatio);

                // シーンを作成
                const scene = new THREE.Scene();

                // カメラを作成
                const camera = new THREE.PerspectiveCamera(45, width / height);
                // カメラの初期座標を設定（X座標:0, Y座標:0, Z座標:0）
                camera.position.set(0, 0, 700);
                const controls = new OrbitControls(camera, el);


                // GLSLローダー
                const loader = new GLTFLoader();
                loader.load("../_nuxt/assets/logo.glb", function(gltf) {
                    const model = gltf.scene;
                    model.position.set(0, -0, 0);
                    model.scale.set(200, 200, 200);
                    scene.add(model);
                    console.log(model);
                    
                    // アニメーションを再生するイベントを設定する
                    renderer.setAnimationLoop(() => {
                        model.rotation.x += 0.01;
                        model.rotation.y += 0.01;
                        // renderer.render(scene, camera);
                    });
                })

                new RGBELoader ().load('../_nuxt/assets/1k.hdr', function (texture) {
                texture.mapping = THREE.EquirectangularReflectionMapping;
                texture.opacity = 0.03;
                //scene.background = texture;
                scene.environment = texture; // 解像度の低いテクスチャを使用
                })


                // レンダリング
                renderer.render(scene, camera);

                tick();

                function tick() {
                    requestAnimationFrame(tick);
                    // 箱を回転させる
                    controls.update();
                    // レンダリング
                    renderer.render(scene, camera);

                }
            }

            init();

        }
        
    }
</script>
<style>
    #logoModel {
        position: fixed;
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
        pointer-events: none;
        z-index: -2;
    }
</style>