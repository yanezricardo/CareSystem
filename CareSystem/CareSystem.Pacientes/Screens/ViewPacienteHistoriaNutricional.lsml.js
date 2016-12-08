/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.ViewPacienteHistoriaNutricional.Paciente_render = function (element, contentItem) {
    contentItem.dataBind("value", function (newValue) {
        element.innerHTML = "";
        var itemTemplate = $("<div></div>");
        var nombre = contentItem.value.Nombre + " " + contentItem.value.Apellido;
        var linea = $("<h2>").text(nombre);
        linea.appendTo($(itemTemplate));        
        itemTemplate.appendTo($(element));
    });
};