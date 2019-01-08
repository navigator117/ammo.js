Ammo().then(function(Ammo) {
    var collisionConfiguration = new Ammo.btDefaultCollisionConfiguration();
    var dispatcher = new Ammo.btCollisionDispatcher(collisionConfiguration);
    var broadphase = new Ammo.btDbvtBroadphase();
    var solver = new Ammo.btSequentialImpulseConstraintSolver();
    var dynamicsWorld = new Ammo.btDiscreteDynamicsWorld(dispatcher, broadphase, solver, collisionConfiguration);
    dynamicsWorld.setGravity(new Ammo.btVector3(0, -10, 0));
    var importer = new Ammo.btBulletWorldImporter(dynamicsWorld);
    importer.loadFile("./lowPolyCity.bullet", "./lowPolyCity.bullet.out");
    for (var i = 0; i < 135; i++) {
        dynamicsWorld.stepSimulation(1/60, 10);
    }
    Ammo.destroy(dynamicsWorld);
    Ammo.destroy(solver);
    Ammo.destroy(broadphase);
    Ammo.destroy(dispatcher);
    Ammo.destroy(collisionConfiguration);
    print('ok.')
});

