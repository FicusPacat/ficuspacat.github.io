$(function() {
  var layout = $(".mdl-layout__content");
  var st = 0;
  $( layout ).scroll(function() {
      st = $(layout).scrollTop();
      AOS.refresh();
      /*console.log(st);*/
  });
  
});

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
  var D = parseFloat($("#De").val());
  var t = parseFloat($("#tn").val());
  var L = parseFloat($("#Lt").val());
  var d = parseFloat($("#dp").val());
  var sige = parseFloat($("#siges").val());
  var sigu = parseFloat($("#sigut").val());
  var p= parseFloat($("#press").val());
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


  function rotateCard(bt) {
    var $card =  $(bt).closest('.card');
    if ($card.hasClass('flipped')) {
        $card.removeClass('flipped');
    }
    else {
    $card.addClass('flipped');
    }
    console.log($card);
    }
	
/*	
document.getElementById("file1").onchange = function () {
    document.getElementById("uploadFile").value = this.files[0].name;
	export const file1 = event.target.files[0];
	//const storageRef = ref(storage,'pitally/' + file.name);
	//uploadBytes(storageRef, file).then((snapshot) => {
	//  console.log('Uploaded a blob or file!');
	//})
};


document.getElementById("file2").onchange = function () {
    document.getElementById("uploadFile2").value = this.files[0].name;
	//console.log(this.files[0].name);
	export const file2 = event.target.files[0];
    //const storageRef = firebase.storage().ref('pitally/' + file.name);
	//const storageRef = ref(storage,'pitally/' + file.name);
	//uploadBytes(storageRef, file).then((snapshot) => {
	 // console.log('Uploaded a blob or file!');
	})
};
*/
/*
const form = document.querySelector("#contact-form");

form.addEventListener('submit', (event) => {
	event.preventDefault();
	if (document.getElementById("judge1").checked==true){
		judge1 = form.judge[0].value;
	} else{
		judge1 = '';
	}
	if (document.getElementById("judge2").checked==true){
		judge2 = form.judge[1].value;
	} else{
		judge2 = '';
	}
	if (document.getElementById("judge3").checked==true){
		judge3 = form.judge[2].value;
	} else{
		judge3 = '';
	}
	if (document.getElementById("judge4").checked==true){
		judge4 = form.judge[3].value;
	} else{
		judge4 = '';
	}
    let novoCliente = {
		judge1 : judge1,
		judge2 : judge2,
		judge3 : judge3,
		judge4 : judge4,
		file1: form.uploadFile.value,
		file2: form.uploadFile2.value,
        diameter: form.diameter.value,
        thickness: form.thickness.value,
        sige: form.sige.value,
		sigu: form.sigu.value,
		poper: form.poper.value,		
    }
    console.log(novoCliente)

})*/