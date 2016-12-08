/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditComida.Delete_execute = function (screen) {
    screen.Comida.deleteEntity();
    return myapp.commitChanges().then(null, function fail(e) {
        myapp.cancelChanges();
        throw e;
    });
};
