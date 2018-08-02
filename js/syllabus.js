$(document).ready(function () {
    $(document).on('change','#syllsem-select',function () {
       $('#syllabus-selectsubj').removeClass('hidden');
	   var t = $('#syllsem-select').val();
		  $.ajax({
	      type: "POST",
	      url: "php/get_subject.php",
	      data:'sem_id='+t,
	      success: function(data){
	      	var res = JSON.parse(data);
	      	console.log(res);
	      	$("#some-id").html("<option>Select Subject</option>");
	      	for(var i=0;i<res.length;i++){
	      		$("#some-id").append("<option value="+res[i].Code+">"+res[i].Code+" - "+res[i].Subject_name+"</option>");
	      	}
	}
	});
	  
	  
    });
	
    
    $(document).on('change','#syllabus-selectsubj',function () {
        $('#syllabus-lastsec').removeClass('hidden');
    });

    $(document).on('click','#syll-view',function () {
        $('#syllabus-materials').addClass('hidden');
        var t = $('#some-id').val();
        var location = "http://localhost/Intranet/files/syllabus/"+t+".pdf";
        window.open(location,'_blank');
    });

    $(document).on('click','#syll-mat',function () {
		$('#syllabus-marks').addClass('hidden');
		$('#syllabus-manuals').addClass('hidden');
        $('#syllabus-materials').removeClass('hidden');
        var t = $('#some-id').val();
		  $.ajax({
	      type: "POST",
	      url: "php/get_material.php",
	      data:'sub_id='+t,
	      success: function(data){
		  $("#syllmaterials-list").html(data);
	}
	});
    });

    $(document).on('click','#syll-manual',function () {
        $('#syllabus-materials').addClass('hidden');
        $('#syllabus-marks').addClass('hidden');
        $('#syllabus-manuals').removeClass('hidden');
        var t = $('#some-id').val();
		  $.ajax({
	      type: "POST",
	      url: "php/get_manual.php",
	      data:'sub_id='+t,
	      success: function(data){
		  $("#syllmanual-list").html(data);
	}
	});
    });

    $(document).on('click','#syll-marks',function () {
		$('#syllabus-materials').addClass('hidden');
		$('#syllabus-manuals').addClass('hidden');
        $('#syllabus-marks').removeClass('hidden');
        var t = $('#some-id').val();
		  $.ajax({
	      type: "POST",
	      url: "php/get_marks.php",
	      data:'sub_id='+t,
	      success: function(data){
		  $("#syllmarks-list").html(data);
	}
	});
    });
});
