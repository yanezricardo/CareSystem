
myapp.Main.NuevoPaciente_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/user-triangular_bandage-64.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '140px',
        'height': '120px'
    });
};
myapp.Main.ShowBrowsePacientes_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/user-triangular_bandage2-64.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '140px',
        'height': '120px'
    });
};
myapp.Main.ShowEstadisticas_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/user-line_chart-75.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '140px',
        'height': '120px'
    });
};
myapp.Main.Acciones_postRender = function (element, contentItem) {
    msls.promiseOperation(CallGetUserName).then(function PromiseSuccess(PromiseResult) {
        var titleContainer = $(document).find(".msls-buttons-row");
        titleContainer.append("<div style='font-size:10px;'>" + PromiseResult + "</div>");
    });
};
function CallGetUserName(operation) {
    $.ajax({
        type: 'post',
        data: {},
        url: '../web/GetUserName.ashx',
        success: operation.code(function AjaxSuccess(AjaxResult) {
            operation.complete(AjaxResult);
        })
    });
}
