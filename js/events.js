$(document).ready(function(){
    $('.datepicker').datepicker({
    	endDate: "12/31/2015",
    	startDate: "01/01/2015",

    });
    
    $('#eventexportbtn').click(function () {
        $('#eventexportdiv').removeClass('hidden');
    });

   $("#filterbtn").on("click", function(){
   		var datefrom = $("#datefrom").val();
   		var dateto = $("#dateto").val();

   		$.ajax({
    		type: 'POST',
    		url: '../Intranet/php/filter.php',
    		data: { datefrom: datefrom, dateto: dateto }, 
    		dataType: 'json',
    		success: function(data)
    		{
    			//alert('success');
    			var obj = $.parseJSON(JSON.stringify(data));
                var count = 0;
                var len = Math.ceil(obj.length / 4);
               

    			$("#event-main1").empty();
                for(var i = 0; i < len; i++)
                {
                    $("#event-main1").append("<div id='event-main1-container'><div class='row' id = 'row"+(i+1)+"'>");
                    for(var j = 0; j < 4; j++,count++)
                    {
                        $("#row"+(i+1)).append("<div class='col-md-3'><div class='event-info-card-container' id = 'webevent'><div class='card event-info-card' id = "+obj[count].Id+"><div class='card-block event-info-card-block'><h5 class='card-title event-info-card-title'>"+obj[count].ename+"</h5></div></div></div></div>"); 
                    }
                    $("#event-main1").append("</div></div>");    
                }
   				
    		
    		}
    		
    	});
	}); 
    
    $("#event-main1").on("click", "#webevent", function(event){
    	var id = parseInt($(this).children().attr("id"));
    	//alert(id);
    	
    	//$("#webModal .modal-body").empty();
    	$.ajax({
    		type: 'POST',
    		url: '../Intranet/php/getevent.php',
    		data: { id: id }, 
    		dataType: 'json',
    		success: function(data)
    		{
                var obj = $.parseJSON(JSON.stringify(data));
                //alert(""+obj.edata[0].ename);

                //alert(" images ="+obj.fdata.length);
    			$("#ename").html(obj.edata[0].ename);
                $("#edesc").html(obj.edata[0].edesc);
                $("#date_from").html(obj.edata[0].date_from);
                $("#date_to").html(obj.edata[0].date_to);
                $("#timefrom").html(obj.edata[0].time_from);
                $("#timeto").html(obj.edata[0].time_to);
                $("#location").html(obj.edata[0].location);
                $("#exname").html(obj.edata[0].exname);
                $("#exdesc").html(obj.edata[0].exdesc);
                $("#sponsor").html(obj.edata[0].sponsor);
                $("#benificiaries").html(obj.edata[0].benifits);
                $("#coordinator").html(obj.edata[0].coordinator);
                $("#imgdisplay").empty();
                for(var i = 0; i < obj.fdata.length; i++)
                {
                    $("#imgdisplay").append("<div class='col-lg-6 col-md-6 event-image-container'><img src='../Intranet/php/photos/"+obj.fdata[i].fname+"'></div>");
                }
                /*$.each(data, function(index, value)
    			{
    				$("#webModal .modal-body").append("<p>"+index+": "+value+"</p>");
    			});*/
    		}	
    	});
    	$("#webModal").modal();
    });
});