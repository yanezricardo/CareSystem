/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditHabitoPsicobiologico.Delete_execute = function (screen) {
    screen.HabitoPsicobiologico.deleteEntity();
    return myapp.commitChanges().then(null, function fail(e) {
        myapp.cancelChanges();
        throw e;
    });
};