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

myapp.ViewEvaluacionDeIngesta.EsConsumoTipico_render = function (element, contentItem) {
    createSiNoParagraph(element, contentItem);
};
myapp.ViewEvaluacionDeIngesta.OmiteComidas_render = function (element, contentItem) {
    createSiNoParagraph(element, contentItem);
};

myapp.ViewEvaluacionDeIngesta.Id_render = function (element, contentItem) {
    var comidaId = contentItem.value;
    contentItem.application.activeDataWorkspace.NutricionDB.AlimentosByComidaId(comidaId).execute().then(function (promise) {
        var results = promise.results;
        var totalLacteos = 0;
        var totalVegetales = 0;
        var totalFrutas = 0;
        var totalPanCereales = 0;
        var totalCarnes = 0;
        var totalGrasas = 0;
        var totalAzucar = 0;
        var totalAgua = 0;
        var totalOtros = 0;
        results.forEach(function (alimento) {
            totalLacteos += parseFloat(alimento.Lacteos);
            totalVegetales += parseFloat(alimento.Vegetales);
            totalFrutas += parseFloat(alimento.Frutas);
            totalPanCereales += parseFloat(alimento.PanCereales);
            totalCarnes += parseFloat(alimento.Carnes);
            totalGrasas += parseFloat(alimento.Grasas);
            totalAzucar += parseFloat(alimento.Azucar);
            totalAgua += parseFloat(alimento.Agua);
            totalOtros += parseFloat(alimento.Otros);
        });

        var table = '<table data-role="table" id="my-table" data-mode="columntoggle"class="ui-responsive table-stroke">' +
            '<thead>' +
            '<tr>' +
                '<th></th>' +
                '<th style="width:12%"> Total </th>' +
                '<th style="width:12%"> Nivel </th>' +
                '<th style="width:12%"> Recomendado </th>' +
            '</tr>' +
            '</thead>' +
            '<tbody>' +
                createTotalAlimentosTableRow("Lacteos: ", totalLacteos, " - ", " - ") +
                createTotalAlimentosTableRow("Vegetales: ", totalVegetales, " - ", " - ") +
                createTotalAlimentosTableRow("Frutas: ", totalFrutas, " - ", " - ") +
                createTotalAlimentosTableRow("Pan/Cereales: ", totalPanCereales, " - ", " - ") +
                createTotalAlimentosTableRow("Carnes: ", totalCarnes, " - ", " - ") +
                createTotalAlimentosTableRow("Grasas: ", totalGrasas, " - ", " - ") +
                createTotalAlimentosTableRow("Azucar: ", totalAzucar, " - ", " - ") +
                createTotalAlimentosTableRow("Agua: ", totalAgua, " - ", " - ") +
                createTotalAlimentosTableRow("Otros: ", totalOtros, " - ", " - ") +
            '</tbody>' +
        '</table>';

        $(table).appendTo($(element));

    });
};

function createTotalAlimentosTableRow(nombre, total, nivel, recomendado) {
    var row = '<tr>' +
                    '<th>' + nombre + '</th>' +
                    '<td>' + total + '</td>' +
                    '<td>' + nivel + '</td>' +
                    '<td>' + recomendado + '</td>' +
                '</tr>';
    return row;
}