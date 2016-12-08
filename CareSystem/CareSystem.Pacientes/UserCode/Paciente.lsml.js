/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.Paciente.created = function (entity) {
    entity.FechaNacimiento = new Date("1/1/1950");
    entity.Direccion = new myapp.Direccion();

    msls.promiseOperation(CallGetUserName).then(function PromiseSuccess(PromiseResult) {
        // Set the result of the CallGetUserName function to the 
        // UserName of the entity
        entity.UserName = PromiseResult;
    });

    // This function will be wrapped in a Promise object
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
};