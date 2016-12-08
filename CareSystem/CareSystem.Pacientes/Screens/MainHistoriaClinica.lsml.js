/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.MainHistoriaClinica.ShowBrowseFichasClinicas_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '140px',
        'height': '120px'
    });
};
myapp.MainHistoriaClinica.ShowBrowseExamenesParaclinico_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '140px',
        'height': '120px'
    });
};
myapp.MainHistoriaClinica.ShowEvaluacionesAntropometricas_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '140px',
        'height': '120px'
    });
};
myapp.MainHistoriaClinica.Paciente_render = function (element, contentItem) {
    contentItem.dataBind("value", function (newValue) {
        element.innerHTML = "";
        var itemTemplate = $("<div></div>");
        var nombre = contentItem.value.Nombre + " " + contentItem.value.Apellido;
        var linea = $("<h2>").text(nombre);
        linea.appendTo($(itemTemplate));
        itemTemplate.appendTo($(element));
    });
};