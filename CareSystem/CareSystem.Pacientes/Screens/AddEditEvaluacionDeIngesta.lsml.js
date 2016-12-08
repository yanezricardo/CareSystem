/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditEvaluacionDeIngesta.Delete_execute = function (screen) {
    screen.EvaluacionNutricional.deleteEntity();
    return myapp.commitChanges().then(null, function fail(e) {
        myapp.cancelChanges();
        throw e;
    });
};
