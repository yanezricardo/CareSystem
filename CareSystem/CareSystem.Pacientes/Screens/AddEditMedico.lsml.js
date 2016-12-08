/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditMedico.Delete_execute = function (screen) {
    screen.Medico.deleteEntity();
    return myapp.commitChanges().then(null, function fail(e) {
        myapp.cancelChanges();
        throw e;
    });
};