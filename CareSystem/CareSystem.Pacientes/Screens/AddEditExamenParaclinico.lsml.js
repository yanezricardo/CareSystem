/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditExamenParaclinico.Delete_execute = function (screen) {
    screen.ExamenParaclinico.deleteEntity();
    return myapp.commitChanges().then(null, function fail(e) {
        myapp.cancelChanges();
        throw e;
    });
};