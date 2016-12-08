/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditAntecedente.created = function (screen) {
    // Write code here.

};
myapp.AddEditAntecedente.Delete_execute = function (screen) {
    screen.Antecedente.deleteEntity();
    return myapp.commitChanges().then(null, function fail(e) {
        myapp.cancelChanges();
        throw e;
    });
};