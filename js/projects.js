$(document).ready(function(){
    $('.datepicker').datepicker();
    $('#projectsexportbtn').click(function () {
        $('#projectsexportdiv').removeClass('hidden');
    });
    $(document).on('change','#projects-select',function () {
       $('#projects-yeardiv').removeClass('hidden');
       $('#projects-filterdiv').removeClass('hidden');
       $('#projects-main1').removeClass('hidden');
      // alert(""+$("#projects-select").val());
       fetchProject($("#projects-select").val());
    });

     $("#projects-main1").on("click", "#weproject", function(event){
    	var id = parseInt($(this).children().attr("id"));
    	alert("sdfg");
    	
    	
       
    });
});

function fetchProject(sem){


     //alert('Call');
    $.ajax({
        type: 'POST',
        url: 'php/project_fetch.php',
        data: {sem:sem},
        dataType: 'json',
        success: function(data)
        {
           // alert('success');
            
            var obj = JSON.parse(JSON.stringify(data));
            var count = 0;
            var len = Math.ceil(obj.length / 4);
           

             $("#projects-main1").empty();
            for(var i = 0; i < len; i++)
            {
                $("#projects-main1").append("<div id='event-main1-container'><div class='row' id = 'row"+(i+1)+"'>");
                for(var j = 0; j < 4; j++,count++)
                {
                    $("#row"+(i+1)).append("<div class='col-md-3'><div class='event-info-card-container' id = 'webproject'><div class='card event-info-card' id = "+obj[count].project_id+"><div class='card-block event-info-card-block'><h5 class='card-title event-info-card-title'>"+obj[count].project_title+"</h5></div></div></div></div>"); 
                }
                $("#projects-main1").append("</div></div>");    
            }     
        
        }
            
    });
};
