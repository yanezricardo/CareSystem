/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.ViewFichaClinica.Deambula_render = function (element, contentItem) {
    createSiNoParagraph(element, contentItem);
};

myapp.ViewFichaClinica.EstadoFisicoDependiente_render = function (element, contentItem) {
    createSiNoParagraph(element, contentItem);
};
myapp.ViewFichaClinica.EstadoMentalDeteriorado_render = function (element, contentItem) {
    createSiNoParagraph(element, contentItem);
};
myapp.ViewFichaClinica.EstadoMentalDepresivo_render = function (element, contentItem) {
    createSiNoParagraph(element, contentItem);
};
myapp.ViewFichaClinica.RiesgoUlceraPorPresion_render = function (element, contentItem) {
    createSiNoParagraph(element, contentItem);
};
myapp.ViewFichaClinica.ToleranciaTratamientoNutricional_render = function (element, contentItem) {
    createSiNoParagraph(element, contentItem);
};
myapp.ViewFichaClinica.UsaBomba_render = function (element, contentItem) {
    createSiNoParagraph(element, contentItem);
};
myapp.ViewFichaClinica.PoseeEquipoMedico_render = function (element, contentItem) {
    createSiNoParagraph(element, contentItem);
};
myapp.ViewFichaClinica.ViaAdministracionApta_render = function (element, contentItem) {
    createSiNoParagraph(element, contentItem);
};
function createSiNoParagraph(element, contentItem) {
    var span = $("<span/>").appendTo($(element));
    contentItem.dataBind("value", function (newValue) {
        var value = "No";
        if (newValue !== false && newValue !== undefined) {
            value = "Si";
        }
        $(span).text(value);
    });
}