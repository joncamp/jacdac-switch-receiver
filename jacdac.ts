// auto-generated, do not edit.
namespace myModules {

    //% fixedInstance block="relay2"
    export const relay2 = new modules.RelayClient("relay2");


    // start after main
    control.runInParallel(function() {
            myModules.relay2.start();
        
    })
}
    