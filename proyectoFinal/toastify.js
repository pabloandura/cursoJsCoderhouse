function logEntry(){
    Toastify({
        text: "Thank you.",
        duration: 3000,
        gravity: "bottom", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: 'blanchedalmond',
          color: 'black'
        },
        onClick: function(){} // Callback after click
      }).showToast();
};

function logFail(){
    Toastify({
        text: "Logging failed.",
        duration: 3000,
        gravity: "bottom", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: 'crimson',
          color: 'black'
        },
        onClick: function(){} // Callback after click
      }).showToast();
};