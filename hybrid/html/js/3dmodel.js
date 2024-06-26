if (WEBGL.isWebGLAvailable() === false) {
    document.body.appendChild(WEBGL.getWebGLErrorMessage());
}
var container, stats, controls;
var camera, scene, renderer, light, bbox;
var rotating = true;

init();
animate();

pauseRotation();

function init() {
    if (!modelUrl) {
        return false;
    }
    container = document.createElement('div');
    document.body.appendChild(container);

    scene = new THREE.Scene();
    bbox = new THREE.Box3();

    // 环境光
    // scene.background = new THREE.Color( 0xffffff );
    // light = new THREE.HemisphereLight(0xbbbbff, 0x444422, 1.5);
    // light.position.set(0, 1, 0);
    // scene.add(light);
    var loader = new THREE.GLTFLoader();

    loader.load(modelUrl, function (gltf) {
        gltf.scene.name = '3dmodel';
        this.setContent(gltf.scene);

        scene.add(gltf.scene);
    }, undefined, function (e) {
        console.error(e);
    });
    // 光源 平行光
    var light = new THREE.DirectionalLight();
    light.position.set(200, 500, 300);
    scene.add(light);
    
    // 光源 聚光灯
    // var spotLight = new THREE.SpotLight( 0xFFFFFF, 1, 100);
    // spotLight.position.set(0,4,0);  
    // scene.add(spotLight);
    
    // 光源 环境光
    var ambient = new THREE.AmbientLight(0xffffff);
    scene.add(ambient)


    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    // 透明度
    renderer.setClearAlpha(0);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);//canvas 宽高
    renderer.gammaOutput = true;
    container.appendChild(renderer.domElement);
    window.addEventListener('resize', onWindowResize, false);


    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.01, 1000);

    controls = new THREE.OrbitControls(camera);
    // to disable pan
    controls.enablePan = false;
    // to disable zoom
    controls.enableZoom = false;
    controls.target.set(0, 0, 0);
    controls.update();
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}
//
function animate() {
    requestAnimationFrame(animate);
    if (rotating) {
        scene.rotation.y += -0.005;
    } else {
        scene.rotation.y = scene.rotation.y;
    }

    renderer.render(scene, camera);
}

function pauseRotation() {
    var modelBorder = document.getElementById("modelBorder");
    modelBorder.addEventListener("mouseenter", function (event) {
        rotating = false;
    });
    modelBorder.addEventListener("mouseleave", function (event) {
        rotating = true;
    });
    modelBorder.addEventListener('touchmove', function (e) {
        rotating = false;
    }, false);
    modelBorder.addEventListener('touchstart', function (e) {
        rotating = false;
    }, false);
    modelBorder.addEventListener('touchend', function (e) {
        rotating = true;
    }, false);

}

function setContent(object) {

    object.updateMatrixWorld();
    const box = new THREE.Box3().setFromObject(object);
    const size = box.getSize(new THREE.Vector3()).length();
    const boxSize = box.getSize();
    const center = box.getCenter(new THREE.Vector3());

    object.position.x += object.position.x - center.x;
    object.position.y += object.position.y - center.y;
    object.position.z += object.position.z - center.z;

    this.camera.position.copy(center);
    if (boxSize.x > boxSize.y) {
        this.camera.position.z = boxSize.x * -2.85
    } else {
        this.camera.position.z = boxSize.y * -2.85
    }
    this.camera.lookAt(0, 0, 0);
}