const dropZone = document.getElementById('drop-zone');
const content = document.getElementById('content');

const reader = new FileReader();

if (window.FileList && window.File) {
  dropZone.addEventListener('dragover', event => {
    event.stopPropagation();
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
  });
  
  dropZone.addEventListener('drop', event => {
    content.innerHTML = '';
    event.stopPropagation();
    event.preventDefault();
    const files = event.dataTransfer.files;
    console.log(files);
    
    reader.readAsDataURL(files[0]);
  
    reader.addEventListener('load', (event) => {
      content.innerHTML = '';
      const img = document.createElement('img');
      img.style.height = '400px';
      img.style.width = '400px';
      content.appendChild(img);
      img.src = event.target.result;
      img.alt = file.name;
      
    });
  }); 
}




document.getElementById("uploadBtn").onchange = function () {
    document.getElementById("uploadFile").value = this.files[0].name;
};

function rotate_Card(btn) {
  var $card = $(btn).closest('.card-container');
  console.log($card);
  if ($card.hasClass('hover')) {
    $card.removeClass('hover');
  } else {
    $card.addClass('hover');
  }
}

function refreshCalcDisplay(sender){
  var display = document.getElementById("calc-display");

  if(sender.innerHTML=="=")
  {
    display.innerHTML = eval(display.innerHTML.replace("%","/100"));
  }
  else if (sender.innerHTML=="C")
  {
    display.innerHTML = display.innerHTML.slice(0,-1);
  }
  else if (sender.innerHTML=="AC")
  {
    display.innerHTML = "";
  }
  else if (sender.innerHTML=="()")
  {//Need to be completed
    /*
    var lastChar = display.innerHTML[display.innerHTML.length-1];
    if(lastChar=="."){
      display.innerHTML = display.innerHTML + "0*(";
    }else if(lastChar=="("){
      display.innerHTML = display.innerHTML + "(";
    }else if(lastChar=="+" || lastChar=="-" || lastChar=="*" || lastChar=="/"){
      display.innerHTML = display.innerHTML + "(";
    }else {
      display.innerHTML = display.innerHTML + ")";
    }
    */
  }
  else
  {
    if(display.innerHTML.length>16)
    {
      if( $('#alertdiv').length==0)
      {
        $('#alert_placeholder')
        .append('<div id="alertdiv" class="alert alert-warning"><a class="close" data-dismiss="alert">×</a><span>You reach display\'s text limit! :(</span></div>');
        setTimeout(function(){$("#alertdiv").remove();}, 5000);
      }
    }
    else
    {
      display.innerHTML = display.innerHTML+sender.innerHTML;
    }
  }
}

function hiddenAllotherHome(sender){
  $( ".cardshome" ).each(function() {
      if ($( this ).hasClass('flipped')) {
        $( this ).removeClass( "flipped");
        console.log($(this));
        }
      else{
        console.log($(this));
      }

  });
  $( ".cardscourses" ).each(function() {
      if ($( this ).hasClass('flipped')) {
        console.log($(this));
        }
      else{
        $( this ).addClass( "flipped");
        console.log($(this));
      }
  });
  $( ".cardsocial" ).each(function() {
      if ($( this ).hasClass('flipped')) {
        }
      else{
        $( this ).addClass( "flipped");
      }
  });
  $( ".cardacadproj" ).each(function() {
      if ($( this ).hasClass('flipped')) {
        }
      else{
        $( this ).addClass( "flipped");
      }
  });
  $(".demo-drawer").attr('aria-hidden', 'true');
  $(".demo-drawer").removeClass('is-visible');
  $(".mainspan").text('Home');
}

function hiddenAllotherCourses(sender){
  $( ".cardshome" ).each(function() {
      if ($( this ).hasClass('flipped')) {
        }
      else{
        $( this ).addClass( "flipped");
      }
  });
  $( ".cardscourses" ).each(function() {
      if ($( this ).hasClass('flipped')) {
        $( this ).removeClass( "flipped");
        }
      else{
      }
  });
  $( ".cardsocial" ).each(function() {
      if ($( this ).hasClass('flipped')) {
        }
      else{
        $( this ).addClass( "flipped");
      }
  });
  $( ".cardacadproj" ).each(function() {
      if ($( this ).hasClass('flipped')) {
        }
      else{
        $( this ).addClass( "flipped");
      }
  });
  $(".demo-drawer").attr('aria-hidden', 'true');
  $(".demo-drawer").removeClass('is-visible');
  $(".mainspan").text('Courses');
}

function hiddenAllotherSocial(sender){
  $( ".cardshome" ).each(function() {
      if ($( this ).hasClass('flipped')) {
        }
      else{
        $( this ).addClass( "flipped");
      }
  });
  $( ".cardscourses" ).each(function() {
      if ($( this ).hasClass('flipped')) {
        }
      else{
        $( this ).addClass( "flipped");
      }
  });
  $( ".cardsocial" ).each(function() {
      if ($( this ).hasClass('flipped')) {
        $( this ).removeClass( "flipped");
        }
      else{
      }
  });
  $( ".cardacadproj" ).each(function() {
      if ($( this ).hasClass('flipped')) {
        }
      else{
        $( this ).addClass( "flipped");
      }
  });
  $(".demo-drawer").attr('aria-hidden', 'true');
  $(".demo-drawer").removeClass('is-visible');
  $(".mainspan").text('Social');
}

function hiddenAllotherAcadProj(sender){
  $( ".cardshome" ).each(function() {
      if ($( this ).hasClass('flipped')) {
        }
      else{
        $( this ).addClass( "flipped");
      }
  });
  $( ".cardscourses" ).each(function() {
      if ($( this ).hasClass('flipped')) {
        }
      else{
        $( this ).addClass( "flipped");
      }
  });
  $( ".cardsocial" ).each(function() {
      if ($( this ).hasClass('flipped')) {
        }
      else{
        $( this ).addClass( "flipped");
      }
  });
  $( ".cardacadproj" ).each(function() {
      if ($( this ).hasClass('flipped')) {
        $( this ).removeClass( "flipped");
        }
      else{
      }
  });
  $(".demo-drawer").attr('aria-hidden', 'true');
  $(".demo-drawer").removeClass('is-visible');
  $(".mainspan").text('Academic Projects');
}

$(".entrada" ).change(function(){
  var sigx = $("#sigx").val();
  var sigy = $("#sigy").val();
  var tauxy = $("#tau").val();
  var theta = $("#teta").val();
  if(sigx && sigy && tauxy && theta){
    drawChart3(parseFloat(sigx),parseFloat(sigy),parseFloat(tauxy),parseFloat(theta));
  }
});

$(".entrada1" ).change(function(){
  var sigx1 = $("#sigx1").val();
  var sigy1 = $("#sigy1").val();
  var tauxy1 = $("#tau1").val();
  var sige1 = $("#sige1").val();
  if(sigx1 && sigy1 && tauxy1 && sige1){
    drawChart4(parseFloat(sigx1),parseFloat(sigy1),parseFloat(tauxy1),parseFloat(sige1));
  }
});

var $rows = $('#table tr');
$('#search').keyup(function() {

    var val = '^(?=.*\\b' + $.trim($(this).val()).split(/\s+/).join('\\b)(?=.*\\b') + ').*$',
        reg = RegExp(val, 'i'),
        text;

    $rows.show().filter(function() {
        text = $(this).text().replace(/\s+/g, ' ');
        return !reg.test(text);
    }).hide();
});


$('#erfcalc').change(function() {
  var tipo = $("#tipo").val();
  var D = parseFloat($("#D").val());
  var t = parseFloat($("#t").val());
  var L = parseFloat($("#L").val());
  var d = parseFloat($("#d").val());
  var sige = parseFloat($("#sige").val());
  var sigu = parseFloat($("#sigu").val());
  var p= parseFloat($("#p").val());
  var pfb31g;
  var pfdnv;
  var erfb31g;
  var erfdnv;
  
  if (D && t && L && d && sige && p && sigu) {
	if (L>(Math.pow((20*D*t),0.5))){
        pfb31g=1.1*sige*((2*t)/D)*(1-d/t);
	}
    else{
        M=(1+0.8*Math.pow(Math.pow(L,2)/(D*t),0.5));
        pfb31g=1.1*sige*((2*t)/D)*((1-(2*d/(3*t)))/(1-(2*d/(3*t*M))));
	}
	erfb31g=p/pfb31g;
    M=(1+0.31*Math.pow(Math.pow(L,2)/(D*t),0.5));
    pfdnv=sigu*(2*t/(D-t))*((1-d/t)/(1-d/(t*M)));
    erfdnv=p/pfdnv;
    document.getElementById("erfoutput").innerHTML = "ERF<sub>B31G</sub> = "
        +erfb31g.toFixed(2).toString()+"; ERF<sub>DNV</sub> = "+erfdnv.toFixed(2).toString();
  }
});


$(".estrutural1").click(function() {
    if (document.getElementById("chkbox1").checked==true){
        document.getElementById("cb1").click();
    }
    if (document.getElementById("chkbox2").checked==true){
        document.getElementById("cb2").click();
    }
    if (document.getElementById("chkbox3").checked==true){
        document.getElementById("cb3").click();
    }
    if (document.getElementById("chkbox4").checked==true){
        document.getElementById("cb4").click();
    }
});

$(".estrutural2").click(function() {
    if (document.getElementById("chkbox5").checked==true){
        document.getElementById("cb5").click();
    }
    if (document.getElementById("chkbox6").checked==true){
        document.getElementById("cb6").click();
    }
    if (document.getElementById("chkbox7").checked==true){
        document.getElementById("cb7").click();
    }
    if (document.getElementById("chkbox8").checked==true){
        document.getElementById("cb8").click();
    }
});

(function() {

  window['counter'] = 0;
  var snackbarContainer = document.querySelector('#toast-message');
  var showToastButton = document.querySelector('#show-toast');
  showToastButton.addEventListener('click', function() {
    'use strict';
    var data = {
      message: 'Copyright 2016 - Adriano Dayvson Marques Ferreira. Todas as ferramentas presentes na página são para fins acadêmicos. O autor não se responsabiliza pelo uso de qualquer ferramenta ou informação contida no site.',
      timeout: 8000,
    };
    snackbarContainer.MaterialSnackbar.showSnackbar(data);
  });
}());