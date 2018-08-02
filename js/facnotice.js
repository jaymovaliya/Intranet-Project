$(document).ready(function () {
 
    var fname = [];
    var gid;
    var temp = document.getElementById('showoldupload');
    $(temp).uploadFile({
        url: "../php/upload_notice_event.php",
        dragDrop: true,
        fileName: "myfile",
        returnType: "json",
        showDelete: true,
        showDownload:true,
        statusBarWidth:600,
        dragdropWidth:600,
        maxFileSize:200*1024,
        showPreview:true,
        previewHeight: "100px",
        previewWidth: "100px",
        onSuccess:function(file, data, xhr)
        {
            fname.push(""+data);
            alert(fname);
        },
        onLoad:function(obj)
        {
            $.ajax({
                cache: false,
                url: "../php/load_notice_event.php",
                dataType: "json",
                success: function(data)
                {
                    for(var i=0;i<data.length;i++)
                    {
                        obj.createProgress(data[i]["name"],data[i]["path"],data[i]["size"]);
                    }
                    alert(""+obj);
                }
                
            });
        },
        deleteCallback: function (data, pd) {
            for (var i = 0; i < data.length; i++) {
                $.post("../php/delete_notice_event.php", {op: "delete",name: data[i]},
                    function (resp,textStatus, jqXHR) {
                        //Show Message
                        alert("File Deleted");
                    });
            }
            pd.statusbar.hide(); //You choice.

        },
        downloadCallback:function(filename,pd)
        {
            location.href="download.php?filename="+filename;
        }
    });

        $("#submit").on("click",function(){
        var  noticeName=$("#notice_name").val();
        var noticeDesc=$("#notice_desc").val();
        var semSelect=$("#sem-select").val();
        var noticeDate=$("#notice_date").val();
        if(noticeName!=""&&noticeDesc!=""&&noticeDate!=""&&semSelect!=""){
        var obj= { noticeName:noticeName , noticeDesc:noticeDesc , noticeDate:noticeDate , semSelect:semSelect };

            $.post('../php/submitnotice.php',obj,function(msg){
                gid=JSON.parse(msg);
                gid = gid[0].id;
                 fileEntry();
            });
        }else{
            alert("Please Fill The Form completely");
        }

    });
        function fileEntry(){
        var newfname = JSON.stringify(fname);
        var obj = {fid: gid, fname: newfname}
        $.post("../php/insertNoticeImage.php", obj, function(data){
            alert(data)
        });
    }
});