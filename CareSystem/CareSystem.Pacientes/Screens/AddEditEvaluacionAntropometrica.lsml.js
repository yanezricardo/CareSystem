/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditEvaluacionAntropometrica.IndicadoresContent_render = function (element, contentItem) {
    contentItem.dataBind("value.Talla", function (newValue) {
        createTable(element, contentItem);
    });
    contentItem.dataBind("value.PesoActual", function (newValue) {
        createTable(element, contentItem);
    });
};

function createTable(element, contentItem) {
    var entity = contentItem.value;

    var constanteParaPesoIdeal = 45.5;
    if (entity.Paciente.Sexo === 0) {//masculino
        constanteParaPesoIdeal = 48;
    }
    var pesoIdeal = constanteParaPesoIdeal + ((entity.Talla - 152) * 2.2) / 2.5;
    var IMCIdeal = pesoIdeal / Math.pow(entity.Talla / 100, 2);
    var porcentajePesoIdeal = (entity.PesoActual / pesoIdeal) * 100;
    var pesoAjustado = ((entity.PesoActual - pesoIdeal) * 0.25) + pesoIdeal;
    var IMCAjustado = pesoAjustado / Math.pow(entity.Talla / 100, 2);
    var pesoRecomendado = 0;
    var areaMuscularDelHueso = 0;

    if (pesoIdeal === Infinity || pesoIdeal === -Infinity) {
        pesoIdeal = 0;
    }
    if (IMCIdeal === Infinity || IMCIdeal === -Infinity) {
        IMCIdeal = 0;
    }
    if (porcentajePesoIdeal === Infinity || porcentajePesoIdeal === -Infinity) {
        porcentajePesoIdeal = 0;
    }
    if (pesoAjustado === Infinity || pesoAjustado === -Infinity) {
        pesoAjustado = 0;
    }
    if (IMCAjustado === Infinity || IMCAjustado === -Infinity) {
        IMCAjustado = 0;
    }

    var control = $("<div />");
    var header = '<div class="msls-vauto msls-control-header"><div class="msls-text"><span class="id-element">Indicadores</span></div></div>';

    var table = '<table data-role="table" class="ui-responsive table-stroke">' +
        '<thead>' +
        '<tr>' +
            '<th></th>' +
            '<th></th>' +
        '</tr>' +
        '</thead>' +
        '<tbody>' +
            createTableRow("Peso Ideal:", pesoIdeal.toFixed(2) + " kg") +
            createTableRow("IMC Ideal:", IMCIdeal.toFixed(2) + " kg") +
            createTableRow("% Peso Ideal:", porcentajePesoIdeal.toFixed(2) + " kg") +
            createTableRow("Peso Ajustado:", pesoAjustado.toFixed(2) + " kg") +
            createTableRow("IMC Ajustado:", IMCAjustado.toFixed(2) + " kg/m2") +
            createTableRow("Peso recomendado:", pesoRecomendado.toFixed(2) + " kg") +
            createTableRow("Área Muscular del Brazo (Corregida por Hueso):   ", areaMuscularDelHueso.toFixed(2)) +
    '</tbody>' +
    '</table>';

    $(element).empty();
    $(control).append($(header));
    $(control).append($(table));
    $(control).appendTo($(element));
}

function createTableRow(nombre, valor) {
    var row = '<tr>' +
                    '<td style="text-align:left;">' + nombre + '</td>' +
                    '<td>' + valor + '</td>' +
                '</tr>';
    return row;
}