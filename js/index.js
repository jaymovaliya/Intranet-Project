$(document).ready(function () {
    // Routing using SAMMY.JS
    var app = $.sammy(function() {

        this.get('/Intranet/', function() {
            $('#Homeli').parent().addClass('active');
            $('#Homeli').parent().siblings().removeClass("active");

            $.get('php/homepage.html', function (data) {
                var template=Handlebars.compile(data);
                $('#main-content').html(template({}));
            }, 'html');
        });
        this.get('/Intranet/#About_Department', function() {
            $('#About_Departmentli').parent().addClass('active');
            $('#About_Departmentli').parent().siblings().removeClass("active");

            $.get('php/aboutdepartment.html', function (data) {
                var template=Handlebars.compile(data);
                $('#main-content').html(template({}));
            }, 'html');
        });
        this.get('/Intranet/#Course', function() {
            $('#Courseli').parent().addClass('active');
            $('#Courseli').parent().siblings().removeClass("active");

            $.get('php/syllabus.html', function (data) {
                var template=Handlebars.compile(data);
                $('#main-content').html(template({}));
            }, 'html');
        });
        this.get('/Intranet/#Projects', function() {
            $('#Projectsli').parent().addClass('active');
            $('#Projectsli').parent().siblings().removeClass("active");

            $.get('php/projects.html', function (data) {
                var template=Handlebars.compile(data);
                $('#main-content').html(template({}));
            }, 'html');
        });
        this.get('/Intranet/#Notice_Board', function() {
            $('#Notice_Boardli').parent().addClass('active');
            $('#Notice_Boardli').parent().siblings().removeClass("active");

            $.get('php/noticeboard.html', function (data) {
                var template=Handlebars.compile(data);
                $('#main-content').html(template({}));
            }, 'html');
            bringNotices();
        });
        this.get('/Intranet/#Events', function() {
            $('#Eventsli').parent().addClass('active');
            $('#Eventsli').parent().siblings().removeClass("active");

            $.get('php/events.html', function (data) {
                var template=Handlebars.compile(data);
                $('#main-content').html(template({}));
            }, 'html');
            fetchEvent();
        });
        this.get('/Intranet/#Login', function() {
            $('#Loginli').parent().addClass('active');
            $('#Loginli').parent().siblings().removeClass("active");

            $.get('php/login.html', function (data) {
                var template=Handlebars.compile(data);
                $('#main-content').html(template({}));
            }, 'html');
        });
    });
    app.run();


});

function fetchEvent()
{
    
    $.ajax({
        type: 'POST',
        url: 'php/allevent.php',
        data: "",
        dataType: 'json',
        success: function(data)
        {
            
            
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
};

function bringNotices(){


     //alert('Call');
    $.ajax({
        type: 'POST',
        url: 'php/notice_fetch.php',
        data: "",
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