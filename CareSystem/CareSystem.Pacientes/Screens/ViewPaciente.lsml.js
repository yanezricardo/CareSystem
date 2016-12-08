/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.ViewPaciente.RowTemplate_render = function (element, contentItem) {
    contentItem.dataBind("value.Nombre", function (newValue) {
        element.innerHTML = "";
        var itemTemplate = $("<div></div>");
        var nombre = contentItem.value.Nombre + " " + contentItem.value.Apellido;
        var relacionConPaciente = "";
        if (contentItem.value.RelacionConPaciente !== undefined && contentItem.value.RelacionConPaciente !== null) {
            relacionConPaciente = " (" + contentItem.value.RelacionConPaciente + ")"
        }
        var linea = $("<h2>").text(nombre + relacionConPaciente);
        linea.appendTo($(itemTemplate));
        itemTemplate.appendTo($(element));
    });
};
myapp.ViewPaciente.RowTemplate1_render = function (element, contentItem) {
    contentItem.dataBind("value.Nombre", function (newValue) {
        element.innerHTML = "";
        var itemTemplate = $("<div></div>");
        var nombre = contentItem.value.Nombre + " " + contentItem.value.Apellido;
        var especialidad = "";
        if (contentItem.value.Especialidad !== undefined && contentItem.value.Especialidad !== null) {
            especialidad = " (" + contentItem.value.Especialidad + ")"
        }
        var linea = $("<h2>").text(nombre + especialidad);
        linea.appendTo($(itemTemplate));
        itemTemplate.appendTo($(element));
    });
};
myapp.ViewPaciente.RowTemplate5_render = function (element, contentItem) {
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
myapp.ViewPaciente.Delete_execute = function (screen) {
    screen.Paciente.deleteEntity();
    return myapp.commitChanges().then(null, function fail(e) {
        myapp.cancelChanges();
        throw e;
    });
};
function createSiNoParagraph(element, contentItem) {
    var span = $("<span style='font-size: smaller;'/>").appendTo($(element));
    contentItem.dataBind("value", function (newValue) {
        var value = "No";
        if (newValue !== false && newValue !== undefined) {
            value = "Si";
        }
        $(span).text(value);
    });
}

myapp.ViewPaciente.EsConsumoTipico_render = function (element, contentItem) {
    createSiNoParagraph(element, contentItem);
};
myapp.ViewPaciente.OmiteComidas_render = function (element, contentItem) {
    createSiNoParagraph(element, contentItem);
};