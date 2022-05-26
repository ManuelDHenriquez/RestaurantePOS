<?php
header('Location: /Restaurante/menu/menu.html');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Punto de Ventas</title>
    <link rel="icon" type="image/png" sizes="16x16" href="../img/iconos/logo.ico">
    <link href="../fontawesome/css/all.min.css" rel="stylesheet">
    <link href="../bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="../select2/dist/css/select2.min.css" rel="stylesheet">
    <link href="../jqueryUI/jquery-ui.min.css" rel="stylesheet">
    <style>
        footer {
            background-color: black;
            position: fixed;
            bottom: 0;
            width: 100%;
            color: white;
        }
        html {
            min-height: 100%;
            position: relative;
        }
        body {
            margin: 0;
            margin-bottom: 40px;
        }
    </style>
</head>
<body>
    <div id="error"></div>
    <div class="container" id="informacion">
        <div class="container my-5 text-end" id="btnPunto_ventas">
            <button type="button" class="btn btn-success btn-sm" id="btnCobrar">
                <i class="fa-solid fa-money-bill-wave"></i>&nbsp;Pagar
            </button>
        </div>
        <div class="container border border-secondary my-5 rounded" >
            <div class="row">
                <div class="col-12">
                    <div class="row">
                        <div class="col-6 mt-3">
                            <div class="row">
                                <div class="col-2">
                                    <label for="txtCliente" >Cliente</label>
                                </div>
                                <div class="col-10">
                                    <input type="text" class="col-sm-12" name="cliente" id="txtCliente" onkeydown="limpiar_rtn()" placeholder="Consumidor Final">
                                </div>
                            </div>
                        </div>
                        <div class="col-6 mt-3">
                            <div class="row">
                                <div class="col-2">
                                    <label for="txtRTN" >RTN</label>
                                </div>
                                <div class="col-10">
                                    <input type="text" class="col-sm-12" name="cliente" id="txtRTN" onkeydown="limpiar_cl()">
                                </div>
                            </div>
                        </div>
                        <div class="col-4 my-2">
                            <div class="row">
                                <div class="col-3">
                                    <label for="txtCantidad">Cantidad</label>
                                </div>
                                <div class="col-9">
                                    <input type="number" class="col-sm-12 text-end" name="txtCantidad" id="txtCantidad" min="1" step="1" value="1">
                                </div>
                            </div>
                        </div>
                        <div class="col-8 my-2">
                            <div class="row">
                                <div class="col-2">
                                    <label for="slcProducto" >Producto</label>
                                </div>
                                <div class="col-10">
                                    <input type="text" class="col-sm-12" name="txtProductos" id="txtProductos">
                                    <!--<select name="productos" id="slcProductos" class="col-lg-12"></select>-->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <table width="100%" class="text-end my-3">
                        <tr>
                            <td width="80%" ><strong>Total Factura</strong></td>
                            <td width="20%" class="totalFac" style="font-weight: bold;"></td>
                        </tr>
                    </table>
                    <table class="table table-hover table-sm">
                        <thead class="text-center">
                            <tr>
                                <th width="10"></th>
                                <th width="25%">Cantidad</th>
                                <th width="25%">Producto</th>
                                <th width="20%">Precio Unitario</th>
                                <th width="20%">Total</th>
                            </tr>
                        </thead>
                        <tbody id="tbProductos"></tbody>
                    </table>
                </div>
            
            </div>
        </div>
    </div>
</body>
<script type="text/javascript" src="../js/jquery-3.6.0.js"></script>
<script type="text/javascript" src="../sweetalert2/dist/sweetalert2.all.min.js"></script>
<script type="text/javascript" src="../JS/conectar.js"></script>
<script type="text/javascript" src="../bootstrap/bootstrap/bootstrap.min.js"></script>
<script type="text/javascript" src="../select2/dist/js/select2.min.js"></script>
<script type="text/javascript" src="../jqueryUI/jquery-ui.min.js"></script>
<script type="text/javascript" src="../jQueryMask/dist/jquery.mask.min.js"></script>
<script type="text/javascript" src="../JS/punto_ventas/autocomplete.js"></script>
<script type="text/javascript" src="../JS/punto_ventas/productos.js"></script>
<script type="text/javascript" src="../JS/verificar_sesion.js"></script>
<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
<script src="https://cdn.linearicons.com/free/1.0.0/svgembedder.min.js"></script>
<script src="https://unpkg.com/react@18/umd/react.production.min.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js" crossorigin></script>
<script>
    var total_factura = 0;
    var fila_productos = 0;
    var filas_actuales = 0;
    var id_producto = 0,nombre_producto = "",precio_producto = 0,desc_producto = "",porcentaje_isv_producto = 0, precio_unitario = 0;
    var productos = [];
    //cargar_productos();
    jQuery(document).ready(function($){
        $(document).ready(function() {
            $('#slcProductos').select2();
            buscar_x_nombre();
            buscar_x_rtn();
            cargar_productos()
            //$('.totalFac').mask("000,000,000,000,000.00", {reverse: true});
            $('.Money').mask("000.000.000.000.000,00", {reverse: true});
            //$(".totalFac").toFixed(2);
            //verificar_sesion();
        });
    });

    $(".totalFac").html("L. "+total_factura.toFixed(2));
    
    $("#btnCobrar").click(function(){
        $.ajax({
            url : '/Restaurante/php/punto_venta/crear_factura.php',
            data : {
                productos: productos
            },
            type : 'POST',
            dataType : 'json',

            success : function(json) {
                Swal.fire(
                    'Simón',
                    'Productos enviados',
                    'success'
                );                
            },
            error : function(json) {
                Swal.fire(
                    'Error',
                    'Error en la conexión con el servidor',
                    'error'
                );
            },

            // código a ejecutar sin importar si la petición falló o no
            complete : function(xhr, status) {
                /*Swal.fire(
                    'Bien!',
                    'Conexión éxitosa',
                    'success'
                )
                //alert('Petición realizada');*/
            }
        });
    });
    function verificar_sesion(){
        $.ajax({
            url : '../php/verificar_sesion.php',
            data : {},
            type : 'POST',
            dataType : 'json',

            success : function(json) {
                if(json == 1){
                //window.location.href = "../login.html";
                console.log("Conexion segura");
                }else{
                    $(document).prop('title', 'Usuario no Autorizado');
                    $('#informacion').html("");
                    $('#error').load('../error_login.html');
                }
            },
            error : function(json) {
            },

            // código a ejecutar sin importar si la petición falló o no
            complete : function(xhr, status) {
                /*Swal.fire(
                    'Bien!',
                    'Conexión exitosa',
                    'success'
                )
                //alert('Petición realizada');*/
            }
        });
        }
    
</script>
</html>