/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditFichaClinica.Delete_execute = function (screen) {
    screen.FichaClinica.deleteEntity();
    return myapp.commitChanges().then(null, function fail(e) {
        myapp.cancelChanges();
        throw e;
    });
};
myapp.AddEditFichaClinica.Delete_canExecute = function (screen) {
    
};
myapp.AddEditFichaClinica.AntecedentesFamiliares1Template_render = function (element, contentItem) {
    contentItem.dataBind("value.Enfermedad", function (newValue) {
        element.innerHTML = "";
        var itemTemplate = $("<div></div>");
        var enfermedad = contentItem.value.Enfermedad;
        var tratada = contentItem.value.Tratada;
        var parentesco = contentItem.value.Parentesco;
        var vive = contentItem.value.Vive == true ? "vivo" : "fallecido";
        var edad = contentItem.value.Edad;
        var linea = $("<span>").text(parentesco + " de " + edad + " años de edad, " + vive + ". Reporta: " + enfermedad + " tratada.");
        linea.appendTo($(itemTemplate));
        itemTemplate.appendTo($(element));
    });
};
myapp.AddEditFichaClinica.created = function (screen) {
    if (!screen.FichaClinica.OtrosHabitos) {
        screen.FichaClinica.OtrosHabitos = new myapp.OtrosHabitos();
    }
};