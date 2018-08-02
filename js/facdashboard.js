$(document).ready(function(){


  // $(".submenu > a").click(function(e) {
  //   e.preventDefault();
  //   var $li = $(this).parent("li");
  //   var $ul = $(this).next("ul");
  //
  //   if($li.hasClass("open")) {
  //     $ul.slideUp(350);
  //     $li.removeClass("open");
  //   } else {
  //     $(".nav > li > ul").slideUp(350);
  //     $(".nav > li").removeClass("open");
  //     $ul.slideDown(350);
  //     $li.addClass("open");
  //     $li.addClass("current");
  //   }
  // });

    var app = $.sammy(function () {

        this.get('/Intranet/faculty-dashboard/', function () {
            $('#facdashboard-main').html('  ');
            $('#navhome').addClass('current');
            $('#navhome').siblings().removeClass("current");
        });
        this.get('/Intranet/faculty-dashboard/#Profile', function () {
            $('#navprofile').addClass('current');
            $('#navprofile').siblings().removeClass("current");

            $.get('../php/editprofile.html', function (data) {
                var template=Handlebars.compile(data);
                $('#facdashboard-main').html(template({}));
            }, 'html');
        });
        this.get('/Intranet/faculty-dashboard/#Subjects', function () {
            $('#navsubj').addClass('current');
            $('#navsubj').siblings().removeClass("current");

            $.get('../php/facsubject.html', function (data) {
                var template=Handlebars.compile(data);
                $('#facdashboard-main').html(template({}));
            }, 'html');
        });
        this.get('/Intranet/faculty-dashboard/#Notice', function () {
            $('#navnotice').addClass('current');
            $('#navnotice').siblings().removeClass("current");

            $.get('../php/facnotice.html', function (data) {
                var template=Handlebars.compile(data);
                $('#facdashboard-main').html(template({}));
            }, 'html');
        });
        this.get('/Intranet/faculty-dashboard/#Event', function () {
            $('#navevents').addClass('current');
            $('#navevents').siblings().removeClass("current");

            $.get('../php/newevent.html', function (data) {
                var template=Handlebars.compile(data);
                $('#facdashboard-main').html(template({}));
            }, 'html');
        });

    });
    app.run();
  
});