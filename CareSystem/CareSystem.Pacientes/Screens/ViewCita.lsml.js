/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.ViewCita.Delete_execute = function (screen) {
    screen.Cita.deleteEntity();
    return myapp.commitChanges().then(null, function fail(e) {
        myapp.cancelChanges();
        throw e;
    });
};