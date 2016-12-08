/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.ViewPacienteDatosDeIdentificacion.PersonasContactoTemplate_render = function (element, contentItem) {
    contentItem.dataBind("value.Nombre", function (newValue) {
        element.innerHTML = "";
        var itemTemplate = $("<div></div>");
        nombreContacto(contentItem).appendTo($(element));
        telefonosContacto(contentItem).appendTo($(element));
    });
};
myapp.ViewPacienteDatosDeIdentificacion.MedicosTemplate_render = function (element, contentItem) {
    contentItem.dataBind("value.Nombre", function (newValue) {
        element.innerHTML = "";
        var itemTemplate = $("<div></div>");
        nombreMedico(contentItem).appendTo($(element));
        telefonosMedico(contentItem).appendTo($(element));
    });
};
function nombreContacto(contentItem) {
    var nombre = contentItem.value.Nombre + " " + contentItem.value.Apellido;
    var relacionConPaciente = "";
    if (contentItem.value.RelacionConPaciente !== undefined && contentItem.value.RelacionConPaciente !== null) {
        relacionConPaciente = " (" + contentItem.value.RelacionConPaciente + ")"
    }
    return $("<span>").text(nombre + relacionConPaciente);
}
function telefonosContacto(contentItem) {
    var telefonos = $("<div></div>");
    var celular = $('<a class="id-element ui-link" href="tel:' + contentItem.value.TelefonoCelular + '" target="_blank">' + contentItem.value.TelefonoCelular + '</a>');
    var local = $('<a class="id-element ui-link" href="tel:' + contentItem.value.TelefonoHabitacion + '" target="_blank">' + contentItem.value.TelefonoHabitacion + '</a>');
    celular.appendTo($(telefonos));
    $('<span> / <span/>').appendTo($(telefonos));
    local.appendTo($(telefonos));
    return telefonos;
}
function nombreMedico(contentItem) {
    var nombre = contentItem.value.Nombre + " " + contentItem.value.Apellido;
    var especialidad = "";
    if (contentItem.value.Especialidad !== undefined && contentItem.value.Especialidad !== null) {
        especialidad = " (" + contentItem.value.Especialidad + ")"
    }
    return $("<span>").text(nombre + especialidad);
}

function telefonosMedico(contentItem) {
    var telefonos = $("<div></div>");
    var celular = $('<a class="id-element ui-link" href="tel:' + contentItem.value.TelefonoCelular + '" target="_blank">' + contentItem.value.TelefonoCelular + '</a>');
    var local = $('<a class="id-element ui-link" href="tel:' + contentItem.value.TelefonoConsultorio + '" target="_blank">' + contentItem.value.TelefonoConsultorio + '</a>');
    celular.appendTo($(telefonos));
    $('<span> / <span/>').appendTo($(telefonos));
    local.appendTo($(telefonos));
    return telefonos;
}