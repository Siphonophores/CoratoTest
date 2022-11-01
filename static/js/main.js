$(document).ready(function() {
    $('#tabla_crud').DataTable( {
        "lengthMenu": [[5 , 10 , -1], [5, 10 , "All"]],
        order: [[ 0, 'desc' ]]
    } );

    $('#tabla_crud2').DataTable( {
        "lengthMenu": [[5 , 10 , -1], [5, 10 , "All"]],
        order: [[ 0, 'desc' ]]
    } );


    $('#tabla_crud3').DataTable( {
        "lengthMenu": [[5 , 10 , -1], [5, 10 , "All"]],
        order: [[ 0, 'desc' ]]
    } );

    $('#tabla_crud4').DataTable( {
        "lengthMenu": [[5 , 10 , -1], [5, 10 , "All"]],
        order: [[ 0, 'desc' ]]
    } );


    $('#tabla_crud5').DataTable( {
        "lengthMenu": [[5 , 10 , -1], [5, 10 , "All"]],
        order: [[ 0, 'desc' ]]
    } );

    $('#tabla_crud6').DataTable( {
        "lengthMenu": [[5 , 10 , -1], [5, 10 , "All"]],
        order: [[ 0, 'desc' ]]
    } );


    $('#tabla_crud7').DataTable( {
        "lengthMenu": [[5 , 10 , -1], [5, 10 , "All"]],
        order: [[ 0, 'desc' ]]
    } );


    $('#tabla_crud8').DataTable( {
        "lengthMenu": [[5 , 10 , -1], [5, 10 , "All"]],
        order: [[ 0, 'desc' ]]
    } );


    $('#tabla_crud9').DataTable( {
        "lengthMenu": [[5 , 10 , -1], [5, 10 , "All"]],
        order: [[ 0, 'desc' ]]
    } );


    $('#tabla_crud10').DataTable( {
        "lengthMenu": [[5 , 10 , -1], [5, 10 , "All"]],
        order: [[ 0, 'desc' ]]
    } );


    $('#tabla_crud_show_all').DataTable( {
        "lengthMenu": [[-1], ["All"]],
        order: [[ 0, 'desc' ]],
        dom: 'frti',
    } );

    $('#tabla_articulos').DataTable( {
        "lengthMenu": [[1], [1]],
        "info":false
    } );

    $('#tabla_ordenes').DataTable( {
        "lengthMenu": [[5 , 10 , -1], [5, 10 , "All"]],
    } );

    $('#tabla_ordenes_procesadas').DataTable( {
        "lengthMenu": [[5 , 10 , -1], [5, 10 , "All"]],
    } );

    $('#tabla_ordenes_all').DataTable( {
        "lengthMenu": [[5 , 10 , -1], [5, 10 , "All"]],
    } );


    $('#tabla_ordenes_all_admin').DataTable( {
        "lengthMenu": [[5 , 10 , -1], [5, 10 , "All"]],
    } );


    $('#tabla_imprimible').DataTable( {
        "lengthMenu": [[5 , 10 , -1], [5, 10 , "All"]],
        dom: 'Blfrtip',
        watermark: 'SOLENCO soluciones en construccion',
        buttons: ['print']
    } );


    $('#tabla_imprimible_imagen').DataTable( {
        "lengthMenu": [[5 , 10 , -1], [5, 10 , "All"]],
        dom: 'Blfrtip',
        buttons: [
        {
            extend: 'pdfHtml5',
            customize: function ( doc ) {
                doc.content.splice( 1, 0, {
                    margin: [ 0, -50, 0, 5 ],
                    alignment: 'center',
                    image: 'data:image/jpeg;base64,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',
                    width: 150,
                    height: 150

                } );
            }
        }]
    });

    $('#tabla_imprimible_remision').DataTable( {
        "lengthMenu": [[100 , -1], [100 , "All"]],
        dom: 'Bfrt',
        buttons: ['print']
    } );

    $('#tabla_minimal').DataTable( {
        "lengthMenu": [[100 , -1], [100 , "All"]],
        dom: 'r'
    } );

    $('#tabla_excel').DataTable( {
        "lengthMenu": [[5 , 10 , -1], [5, 10 , "All"]],
        dom: 'Blfrtip',
        buttons: ['excel']
    } );


    $('#tabla_excel_imagen').DataTable( {
        "lengthMenu": [[5 , 10 , -1], [5, 10 , "All"]],
        dom: 'Blfrtip',
        buttons: [
        {
            extend: 'excelHtml5',
            customize: function ( doc ) {
                doc.content.splice( 1, 0, {
                    margin: [ 0, -50, 0, 5 ],
                    alignment: 'center',
                    image: 'data:image/jpeg;base64,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',
                    width: 150,
                    height: 150

                } );
            }
        }]
    });



    $('#tabla_pdf').DataTable( {
        "lengthMenu": [[5 , 10 , -1], [5, 10 , "All"]],
        dom: 'Blfrtip',
        watermark: 'SOLENCO soluciones en construccion',
        buttons: ['pdf']
    } );

    $('#tabla_copy').DataTable( {
        "lengthMenu": [[5 , 10 , -1], [5, 10 , "All"]],
        dom: 'Blfrtip',
        buttons: ['copy']
    } );

    $('#tabla_all_buttons').DataTable( {
        "lengthMenu": [[5 , 10 , -1], [5, 10 , "All"]],
        dom: 'Blfrtip',
        watermark: 'SOLENCO soluciones en construccion',
        buttons: ['copy', 'excel', 
                {
                    extend: 'pdfHtml5',
                    customize: function ( doc ) {
                        doc.content.splice( 1, 0, {
                          margin: [ 0, -50, 0, 5 ],
                          alignment: 'center',
                          image: 'data:image/jpeg;base64,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',
                          width: 150,
                          height: 150

                        });
                    }
                }

                , 'print']
    });

    $('#tabla_colvis').DataTable( {
        "lengthMenu": [[5 , 10 , -1], [5, 10 , "All"]],
        dom: 'Blfrtip',
        buttons: ['colvis']
    } );

    $('#sidebarCollapse').on('click', function () {
     $('#sidebar').toggleClass('active');
    });

    $('#sidebar').toggleClass('active');


  //const btnDelete = document.querySelectorAll(".btn-delete");
  //const btnUpdate = document.querySelectorAll(".btn-update");
  //const btnSalir = document.querySelectorAll(".btn-salir");
  //console.log(btnDelete);
  //console.log(btnUpdate);
  //console.log(btnSalir);

//   if(btnDelete) {
//    const btnArray = Array.from(btnDelete);
//    btnArray.forEach((btn) => { 
//     btn.addEventListener("click", (e) => {
//      if(!confirm('Seguro desea eliminar???')) {
//       e.preventDefault();
//     }
//   });
//   });
//  }

//  if(btnUpdate){
//    const btnArray = Array.from(btnUpdate);
//    btnArray.forEach((btn)=>{
//     btn.addEventListener("click" ,(e)=>{
//      if(!confirm('Seguro desea actualizar? esto sobreescribe el dato anterior!')){
//       e.preventDefault();
//     }

//   });
//   });

//   }

//  if(btnSalir){
//   const btnArray = Array.from(btnSalir);
//   btnArray.forEach((btn)=>{
//     btn.addEventListener("click" ,(e)=>{
//      if(!confirm('Seguro desea salir? se perderan todos los cambios no guardados!')){
//       e.preventDefault();
//     }

//   });
//   });

// }


    $(".eliminar").confirm({
        title: 'Seguro desea eliminar ?',
        content: 'Confirma que desea eliminar? Esto genera un borrado de arrastre y borra todo lo relacionado con este item! ',
        buttons: {
            confirm: function () {
              location.href = this.$target.attr('href');
          },
          cancel: function () {
            $.alert('Item no eliminado!');
        }
    }
    });

    $(".cancelar").confirm({
        title: 'Seguro desea cancelar ?',
        content: 'Confirma que desea cancelar? Esto cancela todos items relacionados! ',
        buttons: {
            confirm: function () {
              location.href = this.$target.attr('href');
          },
          cancel: function () {
            $.alert('Item no cancelado!');
            }
        }
    });

    $(".dinero").each(function(){
        $(this).html( formatter.format( $(this).html() )  )
    });

});


const formatter = new Intl.NumberFormat('es-MX', {
  style: 'currency',
  currency: 'MXN',
  minimumFractionDigits: 0
})



function imprimir_tabla_javascript() {
    var divToPrint=document.getElementById("tabla_imprimir_javascript");
    newWin = window.open("");
    newWin.document.write(divToPrint.outerHTML);
    newWin.print();
    newWin.close();
}


function ShowAlert(title, message, type, redirect){

    // Tipos:
    // Success
    // Info
    // Warning
    // Error 
    
    if (redirect){
      toastr[type](message, title, {
          positionClass: 'toast-top-right',
          closeButton: true,
          //progressBar: true,
          newestOnTop: true,
          rtl: $("body").attr("dir") === "rtl" || $("html").attr("dir") === "rtl",
          timeOut: '20000',
          showDuration: '10000',
          hideDuration: '1000',
          showEasing: 'swing',
          hideEasing: 'linear',
          showMethod: 'fadeIn',
          hideMethod: 'fadeOut',
          onHidden: function () {
            window.location.assign(redirect);
        }
    });
  }
  else{
      toastr[type](message, title, {
          positionClass: 'toast-top-right',
          closeButton: true,
          //progressBar: true,
          newestOnTop: true,
          rtl: $("body").attr("dir") === "rtl" || $("html").attr("dir") === "rtl",
          timeOut: '20000',
          showDuration: '10000',
          hideDuration: '1000',
          showEasing: 'swing',
          hideEasing: 'linear',
          showMethod: 'fadeIn',
          hideMethod: 'fadeOut'
      });

  }

}

function input_check_decimal(e) {
    tecla = (document.all) ? e.keyCode : e.which;

    //Tecla de retroceso para borrar, siempre la permite
    if (tecla == 8) {
        return true;
    }

    // Patrón de entrada, en este caso solo acepta numeros y letras
    patron = /[0-9.0-9]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}




function input_check_integer(e) {
    tecla = (document.all) ? e.keyCode : e.which;
    //alert(tecla);
    //Tecla de retroceso para borrar, siempre la permite
    if (tecla == 8) {
        return true;
    }

    // Patrón de entrada, en este caso solo acepta numeros y letras
    patron = /[0-9]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}


function input_check_text(e) {
    tecla = (document.all) ? e.keyCode : e.which;

    //Tecla de retroceso para borrar, siempre la permite
    if (tecla == 8) {
        return true;
    }

    // Patrón de entrada, en este caso solo acepta numeros y letras
    patron = /[_a-zA-Z]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}
