$(document).ready(function()
{
    $("#select_year").change(function(){
        //alert($("#select_year").val());
        bringNotices($("#select_year").val());
        
    });
    $("#noticediv").on("click", "#webnotice", function(event){
    	var id = parseInt($(this).children().attr("id"));
    	$.ajax({
            type: 'POST',
            url: 'php/getNotice.php',
            data: { id: id }, 
            dataType: 'json',
            success: function(data)
            {
                var obj = $.parseJSON(JSON.stringify(data));
               // alert(""+obj.edata[0].notice_title);
                $("#notice_title").html(obj.edata[0].notice_title);
                $("#notice_desc").html(obj.edata[0].notice_desc);
                $("#notice_date").html(obj.edata[0].notice_date);
                $("#notice_by").html(obj.edata[0].fac_name);
                if(obj.edata[0].semester>0)
                    $("#notice_sem").html(obj.edata[0].semester);
                else
                     $("#notice_sem").html("ALL");
                    $("#notice_pics").append("<div class='row'>");
                  for(var i = 0; i < obj.fdata.length; i++)
                {
                    $("#notice_pics").append("<div class='col-lg-6 col-md-6 notice-image-container'><img src='../Intranet/php/photos/"+obj.fdata[i].fname+"'></div>");
                }
                 $("#notice_pics").append("</div>");

            }   
        });
        $("#notice-Modal").modal();
    	
       
    });

});
function bringNotices(year){


     //alert('Call');
    $.ajax({
        type: 'POST',
        url: 'php/notice_filter_fetch.php',
        data: {year:year},
        dataType: 'json',
        success: function(data)
        {
           // alert('success');
            
            var obj = JSON.parse(JSON.stringify(data));
            var count = 0;
            var len = Math.ceil(obj.length / 4);
           

             $("#noticediv").empty();
            for(var i = 0; i < len; i++)
            {
                $("#noticediv").append("<div id='event-main1-container'><div class='row' id = 'row"+(i+1)+"'>");
                for(var j = 0; j < 4; j++,count++)
                {
                    $("#row"+(i+1)).append("<div class='col-md-3'><div class='event-info-card-container' id = 'webnotice'><div class='card event-info-card' id = "+obj[count].notice_id+"><div class='card-block event-info-card-block'><h5 class='card-title event-info-card-title'>"+obj[count].notice_title+"</h5></div></div></div></div>"); 
                }
                $("#noticediv").append("</div></div>");    
            }     
        
        }
            
    });
};