$(document).ready(function(){

    $('#tc').click(function(){
        let c="";
        let e="";
        let f="";
        let g="";

        c+="<h1 id='tex'>Salario por hora:</h1>"; c+=$('#Cargo').val(); c+=" $"
        c+="<h1 id='tex'>Salario en tiempo completo es:</h1>";
        c+=($('#Cargo').val()*40); c+=" $"
        c+="<br><input type='button' value='Ok' id='close'>"
        $("#msg").html(c);
        $("#bkg").show(1000);
        $("#msg").show(1000);

        $("#close").click(function(){
        $("#bkg").hide(1000);
        $("#msg").hide(1000);
        });


        $('#btnCalcular').click(function(){
            var valor=$('#Cargo').val()*$('#diur').val();
            var valor2=$('#Cargo').val()*$('#noctur').val();
            var valor3=$('#Cargo').val()*$('#domini').val();
    
            if($('#diur').val()<=12){
                e+="<h1 id='tex'>Salario total</h1>";
                e+=(($('#Cargo').val()*40)+($('#Cargo').val()*$('#diur').val())+valor*0.1); e+=" $"
                e+="<br><input type='button' value='Ok' id='close'>"
                $("#msg").html(e);
                $("#bkg").show(1000);
                $("#msg").show(1000);

                $("#close").click(function(){
                $("#bkg").hide(1000);
                $("#msg").hide(1000);
                });
                //alert(($('#Cargo').val()*40)+($('#Cargo').val()*$('#diur').val())+valor*0.1);
            }else{
                e+="<h1 id='tex'>Error: supera el número de horas permitido</h1>";
                e+="<br><input type='button' value='Ok' id='close'>"
                $("#msg").html(e);
                $("#bkg").show(1000);
                $("#msg").show(1000);

                $("#close").click(function(){
                $("#bkg").hide(1000);
                $("#msg").hide(1000);
                });
                //alert("error");
            }
            if($('#noctur').val()<=12){

                f+="<h1 id='tex'>Salario total</h1>";
                f+=(($('#Cargo').val()*40)+($('#Cargo').val()*$('#diur').val())+(valor*0.1) + valor2*0.2); f+=" $"
                f+="<br><input type='button' value='Ok' id='close'>"
                $("#msg").html(f);
                $("#bkg").show(1000);
                $("#msg").show(1000);

                $("#close").click(function(){
                $("#bkg").hide(1000);
                $("#msg").hide(1000);
                });
                //alert(($('#Cargo').val()*40)+($('#Cargo').val()*$('#diur').val())+(valor*0.1) + valor2*0.2);
            }else{

                f+="<h1 id='tex'>Error: supera el número de horas permitido</h1>";
                f+="<br><input type='button' value='Ok' id='close'>"
                $("#msg").html(f);
                $("#bkg").show(1000);
                $("#msg").show(1000);

                $("#close").click(function(){
                $("#bkg").hide(1000);
                $("#msg").hide(1000);
                });
                //alert("error");
            }
            if($('#domini').val()<=12){

                g+="<h1 id='tex'>Salario total</h1>";
                g+=(($('#Cargo').val()*40)+($('#Cargo').val()*$('#diur').val())+(valor*0.1) + (valor2*0.2) + valor3*0.3); g+=" $"
                g+="<br><input type='button' value='Ok' id='close'>"
                $("#msg").html(g);
                $("#bkg").show(1000);
                $("#msg").show(1000);

                $("#close").click(function(){
                $("#bkg").hide(1000);
                $("#msg").hide(1000);
                });
                //alert(($('#Cargo').val()*40)+($('#Cargo').val()*$('#diur').val())+(valor*0.1) + (valor2*0.2) + valor3*0.3);
            }else{

                g+="<h1 id='tex'>Error: supera el número de horas permitido</h1>";
                g+="<br><input type='button' value='Ok' id='close'>"
                $("#msg").html(g);
                $("#bkg").show(1000);
                $("#msg").show(1000);

                $("#close").click(function(){
                $("#bkg").hide(1000);
                $("#msg").hide(1000);
                });
                //alert("error");
            }
        });

    });

    $('#mt').click(function(){
        let d="";
        let h="";
        let i="";
        let j="";

        d+="<h1 id='tex'>Salario por hora:</h1>"; d+=$('#Cargo').val(); d+=" $";
        d+="<h1 id='tex'>Salario en medio tiempo es:</h1>";
        d+=($('#Cargo').val()*6); d+=" $"
        d+="<br><input type='button' value='Ok' id='close2'>"
        $("#msg").html(d);
        $("#bkg").show(1000);
        $("#msg").show(1000);

        $("#close2").click(function(){
        $("#bkg").hide(1000);
        $("#msg").hide(1000);
        });


        $('#btnCalcular').click(function(){
            var valor=$('#Cargo').val()*$('#diur').val();
            var valor2=$('#Cargo').val()*$('#noctur').val();
            var valor3=$('#Cargo').val()*$('#domini').val();
    
            if($('#diur').val()<=12){
                h+="<h1 id='tex'>Salario en medio tiempo es:</h1>";
                h+=(($('#Cargo').val()*6)+($('#Cargo').val()*$('#diur').val())+valor*0.1); h+=" $"
                h+="<br><input type='button' value='Ok' id='close2'>"
                $("#msg").html(h);
                $("#bkg").show(1000);
                $("#msg").show(1000);

                $("#close2").click(function(){
                $("#bkg").hide(1000);
                $("#msg").hide(1000);
                });

                //alert(($('#Cargo').val()*6)+($('#Cargo').val()*$('#diur').val())+valor*0.1);
            }else{
                h+="<h1 id='tex'>Error: supera el número de horas permitido</h1>";
                h+="<br><input type='button' value='Ok' id='close'>"
                $("#msg").html(h);
                $("#bkg").show(1000);
                $("#msg").show(1000);

                $("#close").click(function(){
                $("#bkg").hide(1000);
                $("#msg").hide(1000);
                });
                //alert("error");
            }


            if($('#noctur').val()<=12){
                i+="<h1 id='tex'>Salario en medio tiempo es:</h1>";
                i+=(($('#Cargo').val()*6)+($('#Cargo').val()*$('#diur').val())+(valor*0.1) + valor2*0.2); i+=" $"
                i+="<br><input type='button' value='Ok' id='close2'>"
                $("#msg").html(i);
                $("#bkg").show(1000);
                $("#msg").show(1000);

                $("#close2").click(function(){
                $("#bkg").hide(1000);
                $("#msg").hide(1000);
                });
                //alert(($('#Cargo').val()*6)+($('#Cargo').val()*$('#diur').val())+(valor*0.1) + valor2*0.2);
            }else{
                i+="<h1 id='tex'>Error: supera el número de horas permitido</h1>";
                i+="<br><input type='button' value='Ok' id='close'>"
                $("#msg").html(i);
                $("#bkg").show(1000);
                $("#msg").show(1000);

                $("#close").click(function(){
                $("#bkg").hide(1000);
                $("#msg").hide(1000);
                });
                //alert("error");
            }


            if($('#domini').val()<=12){
                j+="<h1 id='tex'>Salario en medio tiempo es:</h1>";
                j+=(($('#Cargo').val()*6)+($('#Cargo').val()*$('#diur').val())+(valor*0.1) + (valor2*0.2) + valor3*0.3); j+=" $"
                j+="<br><input type='button' value='Ok' id='close2'>"
                $("#msg").html(j);
                $("#bkg").show(1000);
                $("#msg").show(1000);

                $("#close2").click(function(){
                $("#bkg").hide(1000);
                $("#msg").hide(1000);
                });
                //alert(($('#Cargo').val()*6)+($('#Cargo').val()*$('#diur').val())+(valor*0.1) + (valor2*0.2) + valor3*0.3);
            }else{
                j+="<h1 id='tex'>Error: supera el número de horas permitido</h1>";
                j+="<br><input type='button' value='Ok' id='close'>"
                $("#msg").html(j);
                $("#bkg").show(1000);
                $("#msg").show(1000);

                $("#close").click(function(){
                $("#bkg").hide(1000);
                $("#msg").hide(1000);
                });
                //alert("error");
            }
        });

    });

    

});