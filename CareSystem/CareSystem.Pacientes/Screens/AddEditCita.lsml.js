/// <reference path="../GeneratedArtifacts/viewModel.js" />

//myapp.AddEditCita.RowTemplate_render = function (element, contentItem) {
//    contentItem.dataBind("value", function (value) {
//        var paciente = contentItem.value;
//        var cedula = " ";
//        if (paciente !== undefined) {
//            cedula = "(" + paciente.Cedula + ")";
//        }
//        var nombre = "Seleccione un paciente...";
//        if (paciente !== undefined) {
//            nombre = paciente.Nombre;
//        }
//        var apellido = " ";
//        if (paciente !== undefined) {
//            apellido = paciente.Apellido;
//        }        
//        $(element).empty();
//        $('<span style="float:left">' + cedula + " " + nombre + " " + apellido + "</span>").appendTo($(element));

//        contentItem.onchange = function () {
//            if (value) {
//                contentItem.screen.Cita.Direccion = contentItem.screen.Cita.Paciente.Direccion.AvCalleSector;
//            }
//        };
//    });
//    contentItem.dataBind("value.Direccion", function (value) {
//        if (value && (contentItem.screen.Cita.Direccion === undefined || contentItem.screen.Cita.Direccion === null)) {
//            contentItem.screen.Cita.Direccion = contentItem.screen.Cita.Paciente.Direccion.AvCalleSector;
//        }
//    });
//};
myapp.AddEditCita.Paciente_render = function (element, contentItem) {
    contentItem.dataBind("value", function (newValue) {
        element.innerHTML = "";
        var itemTemplate = $("<div></div>");
        var nombre = contentItem.value.Nombre + " " + contentItem.value.Apellido;
        var linea = $("<h2>").text(nombre);
        linea.appendTo($(itemTemplate));
        itemTemplate.appendTo($(element));
    });
    contentItem.dataBind("value.Direccion", function (value) {
        if (value && contentItem.screen.Cita.Paciente.Direccion) {
            var direccion = contentItem.screen.Cita.Paciente.Direccion;
            var linea = (direccion.AvCalleSector ? direccion.AvCalleSector + ", " : "") +
                (direccion.Urbanizacion ? direccion.Urbanizacion + ", " : "") +
                (direccion.CasaQuintaApto ? direccion.CasaQuintaApto + ", " : "") +
                (direccion.Municipio ? direccion.Municipio + ", " : "") +
                (direccion.Estado ? direccion.Estado + ". " : ". ") +
                (direccion.PuntoDeReferencia ? direccion.PuntoDeReferencia + "." : ".");
            contentItem.screen.Cita.Direccion = linea;
        }
    });
};