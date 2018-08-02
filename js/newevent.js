$(document).ready(function(){
    $('.datepicker').datepicker();
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

    $("#submitbtn").on("click",function(){
        var flag = 0;
        var ename = $("#ename").val();
        var desc = $("#desc").val();
        var datefrom = $("#datefrom").val();
        var dateto = $("#dateto").val();
        var timefrom = $("#timefrom").val();
        var timeto = $("#timeto").val();

        var loc = $("#loc").val();

        
        var ename = $("#ename").val();
        
        if(ename.length < 3)
        {
            alert('Please Enter Event Name');
            flag = 1;
        }

        var desc = $("#desc").val();
        
        if(desc.length < 10)
        {
            alert('Please Enter Event Description');
            flag = 1;
        }
        
        var datefrom = $("#datefrom").val();
        
        if(datefrom.length == 0)
        {
            alert('Please Enter Date of Event');
            flag = 1;
        }
        
        var dateto = $("#dateto").val();
        
        if(dateto.length == 0)
        {
            alert('Please Enter Date of Event');
            flag = 1;
        }
        
        var timefrom = $("#timefrom").val();
        
        if(timefrom.length == 0)
        {
            alert('Please Enter Time of Event');
            flag = 1;
        }
        
        var timeto = $("#timeto").val();
        
        if(timeto.length == 0)
        {
            alert('Please Enter Time of Event');
            flag = 1;
        }
        
        var loc = $("#loc").val();
        
        if(loc.length < 3)
        {
            alert('Please Enter Event Location');
            flag = 1;
        }

        var exname = $("#exname").val();

        if(exname.length < 3)
        {
            alert('Please Enter Expert Name');
            flag = 1;
        }
        
        var exdesc = $("#exdesc").val();
    
        if(exdesc.length < 10)
        {
            alert('Please Enter Expert Description');
            flag = 1;
        }
    
        var sponsor = $("#sponsor").val();
        
        if(sponsor.length < 3)
        {
            alert('Please Enter Sponsors');
            flag = 1;
        }
        
        var benifit = $("#benifit").val();
        if(benifit.length < 3)
        {
            alert('Please Enter Benificiaries');
            flag = 1;
        }
        
        var coordinator = $("#coordinators").val();
        if(coordinator.length < 3)
        {
            alert('Please Enter Coordinators');
            flag = 1;
        }
        
        var exname = $("#exname").val();
        var exdesc = $("#exdesc").val();
        var sponsor = $("#sponsor").val();
        var benifit = $("#benifit").val();
        var coordinator = $("#coordinators").val();
        
        if(flag == 0)
        {        
            var fdata = {ename: ename, desc: desc, datefrom: datefrom, dateto: dateto, timefrom: timefrom, timeto: timeto, loc: loc, exname: exname, exdesc: exdesc, sponsor: sponsor, benifit: benifit, coordinator: coordinator};
            $.post('../php/temp.php',fdata,function(data){
                gid = JSON.parse(data);
                gid = parseInt(gid);
                fileEntry();
            });
        }       
    });

    function fileEntry(){
        var newfname = JSON.stringify(fname);
        var obj = {fid: gid, fname: newfname}
        $.post("../php/efilename.php", obj, function(data){
        });
    }
});