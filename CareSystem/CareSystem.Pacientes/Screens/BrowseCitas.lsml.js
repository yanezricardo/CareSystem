﻿/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.BrowseCitas.RowTemplate_postRender = function (element, contentItem) {
    if (contentItem.value) {
        var prioridad = contentItem.value.Prioridad;
        if (prioridad === "Alta") {
            $(element).parent("li").css("background", '#F6C3B7');
        }
        if (prioridad === "Baja") {
            $(element).parent("li").css("background", '#F6EAB7');
        }
    }
};
myapp.BrowseCitas.RowTemplate_render = function (element, contentItem) {
    setLanguage();
    var title = $("<h3>" + moment(contentItem.value.Inicio).format("MMM D, h:mm") + "-" + moment(contentItem.value.Fin).format("h:mma") + "</h3>");
    var subTitle = $("<span>" + contentItem.value.Paciente.Nombre + " " + contentItem.value.Paciente.Apellido + " - " + contentItem.value.Paciente.TelefonoCelular + "</span>");
    var tituloCita = contentItem.value.Titulo;
    
    var itemTemplate = $("<div> </div>");
    title.appendTo($(itemTemplate));
    subTitle.appendTo($(itemTemplate));
    itemTemplate.appendTo($(element));
};

function setLanguage() {
    moment.lang('es', {
        months: "Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre".split("_"),
        monthsShort: "Ene._Feb._Mar._Abr._May._Jun._Jul._Ago._Sep._Oct._Nov._Dic.".split("_"),
        weekdays: "Domingo_Lunes_Martes_Miércoles_Jueves_Viernes_Sábado".split("_"),
        weekdaysShort: "Dom._Lun._Mar._Mié._Jue._Vie._Sáb.".split("_"),
        weekdaysMin: "Do_Lu_Ma_Mi_Ju_Vi_Sá".split("_"),
        longDateFormat: {
            LT: "H:mm",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY LT",
            LLLL: "dddd, D [de] MMMM [de] YYYY LT"
        },
        calendar: {
            sameDay: function () {
                return '[hoy a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            nextDay: function () {
                return '[mañana a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            nextWeek: function () {
                return 'dddd [a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            lastDay: function () {
                return '[ayer a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            lastWeek: function () {
                return '[el] dddd [pasado a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: "en %s",
            past: "hace %s",
            s: "unos segundos",
            m: "un minuto",
            mm: "%d minutos",
            h: "una hora",
            hh: "%d horas",
            d: "un día",
            dd: "%d días",
            M: "un mes",
            MM: "%d meses",
            y: "un año",
            yy: "%d años"
        },
        ordinal: '%dº',
        week: {
            dow: 1, // Monday is the first day of the week.
            doy: 4  // The week that contains Jan 4th is the first week of the year.
        }
    });
}
