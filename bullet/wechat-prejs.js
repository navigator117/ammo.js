Module['instantiateWasm'] = function instantiateWasm(imports, successCallback)
{
    console.log('instantiateWasm: instantiating asynchronously');
    var wasmInstantiate = WebAssembly.instantiate(new Uint8Array(worker['libbulled3d.wechat.wasm']), imports).then(function(output) {
        console.log('wasm instantiation succeeded');
        Module.testWasmInstantiationSucceeded = 1;
        successCallback(output.instance);
    }).catch(function(e) {
        console.log('wasm instantiation failed! ' + e);
    });
    return {}; // Compiling asynchronously, no exports.
}
