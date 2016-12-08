/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.FichaClinica.created = function (entity) {
    entity.Fecha = new Date();
    entity.FechaColocacionTratamientoNutricional = new Date();
    entity.OtrosHabitos = new myapp.OtrosHabitos();
};