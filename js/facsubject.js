$(document).ready(function () {
var f;
    
   $(document).on('change','#fac-subjectselect',function () {
        $('#facsubselect').removeClass('hidden');
        var t = $('#fac-subjectselect').val();
        $.ajax({
          type: "POST",
          url: "http://localhost/Intranet/php/get_subject.php",
          data:'sem_id='+t,
          success: function(data){
            var res = JSON.parse(data);
            console.log(res);
            $("#facsub-id").html("<option>Select Subject</option>");
            for(var i=0;i<res.length;++i){
                $("#facsub-id").append("<option value="+res[i].Code+">"+res[i].Code+" - "+res[i].Subject_name+"</option>");
            }
          //$("#facsub-id").html(data);
    }
    });
   });
    $(document).on('change','#facsubselect',function () {
        $('#facsubjedit').removeClass('hidden');
        
   });
    $(document).on('click', '.listicon-pencil', function () {
       var temp = $(this).parent().siblings();
        $(temp).attr('contentEditable', 'true');
        $(temp).css('background-color', '#42e8f4');
       $(this).removeClass('fa-pencil');
       $(this).addClass('fa-check');
        $(temp).addClass('listcheck');
        console.log($(this));
    });
    $(document).on('click', '.listicon-cancel', function () {
        $(this).parent().parent().remove();
    });
    $(document).on('click', '.listcheck', function () {
        $(this).removeClass('listcheck');
        var temp = $(this).parent().siblings();
        $(temp).attr('contentEditable','false');
        $(temp).css('background-color','#fff');
        $(this).addClass('fa-pencil');
        $(this).removeClass('fa-check');
    });
    $(document).off('click', '#addeditins').on('click', '#addeditins', function () {
        //$('#subjmain-list').removeClass('hidden');
        $('#addinsfilebtn').removeClass('hidden');
    });
    $(document).off('click', '#addinsbtn').on('click', '#addinsbtn', function () {
        $('#dummyli').append("<li class='list-group-item'><div class='col-md-11 listitem-div' contenteditable style='background-color:#42e8f4 '>Dapibus ac facilisis in1</div><div class='col-md-1'><i class='fa fa-check list-icons listcheck' aria-hidden='true' ></i><i class='fa fa-times list-icons listicon-cancel'></i></div></li>");
    });
    $(document).on('click', '#addinsfilebtn', function () {
        $('#dummyli').append("<li class='list-group-item'><div class='col-md-11'><div id='showoldupload2'>Upload</div></div><div class='col-md-1'><i class='fa fa-check list-icons listcheck' aria-hidden='true' ></i><i class='fa fa-times list-icons listicon-cancel'></i></div></li>");
        var temp = document.getElementById('showoldupload2');
        f = $("#facsub-id").val();
        // console.log(temp);
        $(temp).uploadFile({
            url: "http://localhost/Intranet/php/upload2.php",
            dragDrop: true,
            fileName: "myfile",
            formData: {"name":f},
            returnType: "json",
            showDelete: true,
            showDownload: true,
            statusBarWidth: 600,
            dragdropWidth: 600,
            maxFileSize: 1024 * 1024 * 20,
            showPreview: true,
            previewHeight: "100px",
            previewWidth: "100px",

            onLoad: function (obj) {
                $.ajax({
                    cache: false,
                    url: "http://localhost/Intranet/php/load.php",
                    dataType: "json",
                    success: function (data) {
                        for (var i = 0; i < data.length; i++) {
                            obj.createProgress(data[i]["name"], data[i]["path"], data[i]["size"]);
                        }
                    }
                });
            },
            deleteCallback: function (data, pd) {
                for (var i = 0; i < data.length; i++) {
                    $.post("delete.php", {op: "delete", name: data[i]},
                        function (resp, textStatus, jqXHR) {
                            //Show Message
                            alert("File Deleted");
                        });
                }
                pd.statusbar.hide(); //You choice.

            },
            downloadCallback: function (filename, pd) {
                location.href = "download.php?filename=" + filename;
            }
        });

    });

    $(document).on('click','#addeditins',function () {
        $('#subjmain-list').removeClass('hidden');
        $('#add-editmarks').addClass('hidden');
        $('#add-editlabmanual').addClass('hidden');
    });

    $(document).on('click','#addeditmarks',function () {
        $('#subjmain-list').addClass('hidden');
        $('#add-editmarks').removeClass('hidden');
        $('#add-editlabmanual').addClass('hidden');
        f = $("#facsub-id").val();
        $("#showoldupload").uploadFile({
        
        url: "http://localhost/Intranet/php/upload.php",
        dragDrop: true,
        fileName: "myfile",
        formData: {"name":f},
        returnType: "json",
        showDelete: true,
        showDownload: true,
        statusBarWidth: 600,
        dragdropWidth: 600,
        maxFileSize: 1024 * 1024 * 20,
        showPreview: true,
        previewHeight: "100px",
        previewWidth: "100px",

        /*success:function(data){
            data = JSON.parse( data );
            console.log( data[0].response );

        }*/

        onLoad: function (obj) {
            console.log(f);
            $.ajax({
                cache: false,
                url: "http://localhost/Intranet/php/load.php",
                dataType: "json",
                success: function (data) {
                    for (var i = 0; i < data.length; i++) {
                        obj.createProgress(data[i]["name"], data[i]["path"], data[i]["size"]);
                    }
                }
            });
        },
        deleteCallback: function (data, pd) {
            for (var i = 0; i < data.length; i++) {
                $.post("http://localhost/Intranet/php/delete.php", {op: "delete", name: data[i]},
                    function (resp, textStatus, jqXHR) {
                        //Show Message
                        alert("File Deleted");
                    });
            }
            pd.statusbar.hide(); //You choice.

        },
        downloadCallback: function (filename, pd) {
            location.href = "http://localhost/Intranet/php/download.php?filename=" + filename;
        }
    });

    });
    $(document).on('click', '#addeditlabmanual', function () {
        $('#subjmain-list').addClass('hidden');
        $('#add-editmarks').addClass('hidden');
        $('#add-editlabmanual').removeClass('hidden');
        f = $("#facsub-id").val();
         //alert(f);
         // var x = $(document).getElementById("ccnum");
         // $(x).html(f);
         $("#showoldupload1").uploadFile({
        url: "http://localhost/Intranet/php/upload1.php",
        dragDrop: true,
        fileName: "myfile",
        formData: {"name":f},
        returnType: "json",
        showDelete: true,
        showDownload: true,
        statusBarWidth: 600,
        dragdropWidth: 600,
        maxFileSize: 1024 * 1024 * 20,
        showPreview: true,
        previewHeight: "100px",
        previewWidth: "100px",


        onLoad: function (obj) {
            console.log(f);
            $.ajax({
                cache: false,
                url: "http://localhost/Intranet/php/load.php",
                dataType: "json",
                success: function (data) {
                    for (var i = 0; i < data.length; i++) {
                        obj.createProgress(data[i]["name"], data[i]["path"], data[i]["size"]);
                    }
                }
            });
        },
        deleteCallback: function (data, pd) {
            for (var i = 0; i < data.length; i++) {
                $.post("http://localhost/Intranet/php/delete.php", {op: "delete", name: data[i]},
                    function (resp, textStatus, jqXHR) {
                        //Show Message
                        alert("File Deleted");
                    });
            }
            pd.statusbar.hide(); //You choice.

        },
        downloadCallback: function (filename, pd) {
            location.href = "download.php?filename=" + filename;
        }

    });
         $.ajax({
          type: "POST",
          url: "http://localhost/Intranet/php/temp.php",
          data:'sub_id='+f,
      });
    });

    

    
});
