/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditPersonaContacto.Delete_execute = function (screen) {
    screen.PersonaContacto.deleteEntity();
    return myapp.commitChanges().then(null, function fail(e) {
        myapp.cancelChanges();
        throw e;
    });
};