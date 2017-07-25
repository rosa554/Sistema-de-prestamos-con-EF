$(document).ready(function () {
    $('#ClientesTable').jtable({
        title: 'Clientes Detalles',
        actions: {
            listAction: '/Clientes/GetStudentMarks',
            createAction: '/Clientes/Create',
            updateAction: '/Clientes/Edit',
            deleteAction: '/Clientes/Delete'
        },
        fields: {
            ID: {
                key: true,
                list: false
            },
            Nombre: {
                title: 'Nombre',
                width: '15%'
            },
            Apellidos: {
                title: 'Apellidos',
                width: '45%'
            },
            Direccion: {
                title: 'Direccion',
                width: '15%',
            }
        }
    });
    $('#ClientesTable').jtable('reload');
});  