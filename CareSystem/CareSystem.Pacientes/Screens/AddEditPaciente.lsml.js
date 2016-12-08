/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditPaciente.Delete_execute = function (screen) {
    screen.Paciente.deleteEntity();
    return myapp.commitChanges().then(null, function fail(e) {
        myapp.cancelChanges();
        throw e;
    });
};
myapp.AddEditPaciente.MedicosTemplate_render = function (element, contentItem) {
    contentItem.dataBind("value.Nombre", function (newValue) {
        element.innerHTML = "";
        var itemTemplate = $("<div></div>");
        var nombre = contentItem.value.Nombre + " " + contentItem.value.Apellido;
        var especialidad = "";
        if (contentItem.value.Especialidad !== undefined && contentItem.value.Especialidad !== null) {
            especialidad = " (" + contentItem.value.Especialidad + ")"
        }
        var linea = $("<span>").text(nombre + especialidad);
        linea.appendTo($(itemTemplate));
        itemTemplate.appendTo($(element));
    });
};
myapp.AddEditPaciente.PersonasContactoTemplate_render = function (element, contentItem) {
    contentItem.dataBind("value.Nombre", function (newValue) {
        element.innerHTML = "";
        var itemTemplate = $("<div></div>");
        var nombre = contentItem.value.Nombre + " " + contentItem.value.Apellido;
        var relacionConPaciente = "";
        if (contentItem.value.RelacionConPaciente !== undefined && contentItem.value.RelacionConPaciente !== null) {
            relacionConPaciente = " (" + contentItem.value.RelacionConPaciente + ")"
        }
        var linea = $("<span>").text(nombre + relacionConPaciente);
        linea.appendTo($(itemTemplate));
        itemTemplate.appendTo($(element));
    });
};
myapp.AddEditPaciente.Antecedente_Delete_execute = function (screen) {
    screen.getAntecedentes().then(function (antecedente) {
        antecedente.deleteSelected();
    });
};
myapp.AddEditPaciente.AntecedenteFamiliar_Delete_execute = function (screen) {
    screen.getAntecedentesFamiliares().then(function (antecedente) {
        antecedente.deleteSelected();
    });
};

myapp.AddEditPaciente.AntecedentesFamiliaresDetail_render = function (element, contentItem) {
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
myapp.AddEditPaciente.created = function (screen) {
    if (!screen.Paciente.Direccion) {
        screen.Paciente.Direccion = new myapp.Direccion();
    }
};