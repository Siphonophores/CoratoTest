$(document).ready(function() {
	
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
   
};
