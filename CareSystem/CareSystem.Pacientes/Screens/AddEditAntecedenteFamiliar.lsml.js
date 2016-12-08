/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditAntecedenteFamiliar.Delete_execute = function (screen) {
    screen.AntecedenteFamiliar.deleteEntity();
    return myapp.commitChanges().then(null, function fail(e) {
        myapp.cancelChanges();
        throw e;
    });
};