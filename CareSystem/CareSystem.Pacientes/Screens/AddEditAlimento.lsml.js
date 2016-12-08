/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditAlimento.Delete_execute = function (screen) {
    screen.Alimento.deleteEntity();
    return myapp.commitChanges().then(null, function fail(e) {
        myapp.cancelChanges();
        throw e;
    });
};