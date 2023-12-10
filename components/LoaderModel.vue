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
                const width = window.innerWidth;
                const height = window.innerHeight;
                
                // レンダラーを作成
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
                camera.position.set(0, 0, 1200);
                const controls = new OrbitControls(camera, el);

                new RGBELoader ().load('1k.hdr', function (texture) {
                    texture.mapping = THREE.EquirectangularReflectionMapping;
                    texture.opacity = 0;
                    //scene.background = texture;
                    scene.environment = texture; // 解像度の低いテクスチャを使用
                })
                
                // GLSLローダー
                const loader = new GLTFLoader();
                loader.load('logo.glb', function(gltf) {
                    const model = gltf.scene;
                    model.position.set(0, 0, 0);
                    model.scale.set(200, 200, 200);

                    model.traverse((object) => {
                        if (object.isMesh) {
                            // object.material.transparent = false;
                            const aoMap = new THREE.TextureLoader().load('aoMap.png')
                            aoMap.flipY = false;
                            object.material.roughness = 0.3;
                            object.material.opacity = 0.97;
                            object.material.aoMap = aoMap;
                            object.material.aoMapIntensity = 0.8;
                            object.material.transparent =  true;
                            object.material.reflectivity = 1;
                            object.material.envMap = scene.environment;
                        }
                    });

                    scene.add(model);
                
                    
                    // アニメーションを再生するイベントを設定する
                    renderer.setAnimationLoop(() => {
                        model.rotation.x += 0.01;
                        model.rotation.y += 0.01;
                        // renderer.render(scene, camera);
                    });
                })

                // レンダリング
                renderer.render(scene, camera);
                window.addEventListener('resize', onResize);

                    function onResize() {
                    // サイズを取得
                    const width = window.innerWidth;
                    const height = window.innerHeight;

                    // レンダラーのサイズを調整する
                    renderer.setPixelRatio(window.devicePixelRatio);
                    renderer.setSize(width, height);

                    // カメラのアスペクト比を正す
                    camera.aspect = width / height;
                    camera.updateProjectionMatrix();
                    }

                tick();

                function tick() {
                    requestAnimationFrame(tick);
                    // 箱を回転させる
                    controls.update();
                    // レンダリング
                    renderer.render(scene, camera);


                }
                (error) => {
                    // オブジェクトの読み込みが失敗したタイミングで実行
                    console.log(error)
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
        transition: .6s linear;
        opacity: 1;
        filter: saturate(1.1);
    }

    #logoModel.isFocused {
        filter: blur(40px);
        opacity: 0.75;
    }
</style>