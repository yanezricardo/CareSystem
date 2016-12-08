/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.Cita.created = function (entity) {
    entity.Inicio = new Date().addHours(1);;
    entity.Fin = new Date().addHours(2);
    entity.Prioridad = "Normal";
    
    
};

Date.prototype.addHours = function (h) {
    this.setHours(this.getHours() + h);
    this.setMinutes(0, 0, 0);
    return this;
}

