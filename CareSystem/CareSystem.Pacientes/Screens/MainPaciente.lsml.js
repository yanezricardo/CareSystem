/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.MainPaciente.created = function (screen) {
    //var nombre = screen.Paciente.Nombre + " " + screen.Paciente.Apellido;
    //screen.details.displayName = nombre;
};
myapp.MainPaciente.ShowViewPacienteDatosDeIdentificacion_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/user-contact_card-75.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '140px',
        'height': '120px'
    });
};
myapp.MainPaciente.ShowViewPacienteHistoriaClinica_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/user-folder-64.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '140px',
        'height': '120px'
    });
};
myapp.MainPaciente.ShowViewPacienteHistoriaNutricional_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/user-bell_service-75.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '140px',
        'height': '120px'
    });
};
myapp.MainPaciente.ShowViewCitasDePaciente_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/user-calendar-64.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '140px',
        'height': '120px'
    });
};
myapp.MainPaciente.CurrentPaciente_render = function (element, contentItem) {

    var control = $("<ul class='msls-listview' id='autocomplete' data-role='listview' data-inset='true' data-filter-theme='b' data-filter='true' data-filter-placeholder='buscar paciente...'></ul");
    control.appendTo(element);
    var ctrl = $(element).find("[data-role='listview']");
    $(element).css({
        'margin-top': '20px',
        'margin-bottom': '20px'
    });

    var dataSource;
    ctrl.on("listviewbeforefilter", function (e, data) {
        var $ul = $(this),
            $input = $(data.input),
            value = $input.val(),
            html = "";
        $ul.html("");
        contentItem.screen.Paciente = undefined;
        if (value && value.length > 0) {
            $ul.html("<li><div class='ui-loader'><span class='ui-icon ui-icon-loading'></span></div></li>");
            $ul.listview("refresh");
            contentItem.screen.details.dataWorkspace.NutricionDB.Pacientes
                .filter("substringof('" + value + "', Nombre) eq true or substringof('" + value + "', Apellido) eq true")
                .execute()
                .done(oncomplete, onError, onProgress);
        }
        function oncomplete(result) {
            dataSource = result.results;
            for (var i = 0; i < result.results.length; i++) {
                html += "<li>" + result.results[i].Nombre + " " + result.results[i].Apellido + "</li>";
            }
            $ul.html(html);
            $('ul.msls-listview li').click(onSelectedItem);
            $ul.listview("refresh");
            $ul.trigger("updatelayout");            
        }
        function onError(error) {
            console.log("error :" + error);
        }
        function onProgress(line) {
            console.log(line.Nombre);
        }
        function onSelectedItem() {
            var selected = $(this).text();
            $input.val(selected);
            $ul.html("");

            var value;
            dataSource.forEach(function (item) {
                if ((item.Nombre + " " + item.Apellido) == selected) {
                    value = item;
                    return;
                }
            });

            contentItem.screen.Paciente = value;
        }
    });
};

