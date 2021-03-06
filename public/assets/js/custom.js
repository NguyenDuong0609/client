(function($) {
    "use strict";
    $(document).ready(function() {
        $().ready(function() {
            $sidebar = $('.sidebar');

            // $sidebar_img_container = $sidebar.find('.sidebar-background');

            // $full_page = $('.full-page');

            // $sidebar_responsive = $('body > .navbar-collapse');

            window_width = $(window).width();

            // fixed_plugin_open = $('.sidebar .sidebar-wrapper .nav li.active a p').html();

            // if (window_width > 767 && fixed_plugin_open == 'Dashboard') {
            // if ($('.fixed-plugin .dropdown').hasClass('show-dropdown')) {
            //     $('.fixed-plugin .dropdown').addClass('open');
            // }

            // }

            $('.fixed-plugin a').click(function(event) {
            // Alex if we click on switch, stop propagation of the event, so the dropdown will not be hide, otherwise we set the  section active
            if ($(this).hasClass('switch-trigger')) {
                if (event.stopPropagation) {
                event.stopPropagation();
                } else if (window.event) {
                window.event.cancelBubble = true;
                }
            }
            });

            $('.fixed-plugin .active-color span').click(function() {
            $full_page_background = $('.full-page-background');

            $(this).siblings().removeClass('active');
            $(this).addClass('active');

            var new_color = $(this).data('color');

            if ($sidebar.length != 0) {
                $sidebar.attr('data-color', new_color);
            }

            if ($full_page.length != 0) {
                $full_page.attr('filter-color', new_color);
            }

            if ($sidebar_responsive.length != 0) {
                $sidebar_responsive.attr('data-color', new_color);
            }
            });

            $('.fixed-plugin .background-color .badge').click(function() {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');

            var new_color = $(this).data('background-color');

            if ($sidebar.length != 0) {
                $sidebar.attr('data-background-color', new_color);
            }
            });

            $('.fixed-plugin .img-holder').click(function() {
            $full_page_background = $('.full-page-background');

            $(this).parent('li').siblings().removeClass('active');
            $(this).parent('li').addClass('active');


            var new_image = $(this).find("img").attr('src');

            if ($sidebar_img_container.length != 0 && $('.switch-sidebar-image input:checked').length != 0) {
                $sidebar_img_container.fadeOut('fast', function() {
                $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
                $sidebar_img_container.fadeIn('fast');
                });
            }

            if ($full_page_background.length != 0 && $('.switch-sidebar-image input:checked').length != 0) {
                var new_image_full_page = $('.fixed-plugin li.active .img-holder').find('img').data('src');

                $full_page_background.fadeOut('fast', function() {
                $full_page_background.css('background-image', 'url("' + new_image_full_page + '")');
                $full_page_background.fadeIn('fast');
                });
            }

            if ($('.switch-sidebar-image input:checked').length == 0) {
                var new_image = $('.fixed-plugin li.active .img-holder').find("img").attr('src');
                var new_image_full_page = $('.fixed-plugin li.active .img-holder').find('img').data('src');

                $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
                $full_page_background.css('background-image', 'url("' + new_image_full_page + '")');
            }

            if ($sidebar_responsive.length != 0) {
                $sidebar_responsive.css('background-image', 'url("' + new_image + '")');
            }
            });

            $('.switch-sidebar-image input').change(function() {
            $full_page_background = $('.full-page-background');

            $input = $(this);

            if ($input.is(':checked')) {
                if ($sidebar_img_container.length != 0) {
                $sidebar_img_container.fadeIn('fast');
                $sidebar.attr('data-image', '#');
                }

                if ($full_page_background.length != 0) {
                $full_page_background.fadeIn('fast');
                $full_page.attr('data-image', '#');
                }

                background_image = true;
            } else {
                if ($sidebar_img_container.length != 0) {
                $sidebar.removeAttr('data-image');
                $sidebar_img_container.fadeOut('fast');
                }

                if ($full_page_background.length != 0) {
                $full_page.removeAttr('data-image', '#');
                $full_page_background.fadeOut('fast');
                }

                background_image = false;
            }
            });

            $('.switch-sidebar-mini input').change(function() {
            $body = $('body');

            $input = $(this);

            if (md.misc.sidebar_mini_active == true) {
                $('body').removeClass('sidebar-mini');
                md.misc.sidebar_mini_active = false;

                if ($(".sidebar").length != 0) {
                var ps = new PerfectScrollbar('.sidebar');
                }
                if ($(".sidebar-wrapper").length != 0) {
                var ps1 = new PerfectScrollbar('.sidebar-wrapper');
                }
                if ($(".main-panel").length != 0) {
                var ps2 = new PerfectScrollbar('.main-panel');
                }
                if ($(".main").length != 0) {
                var ps3 = new PerfectScrollbar('main');
                }

            } else {

                if ($(".sidebar").length != 0) {
                var ps = new PerfectScrollbar('.sidebar');
                ps.destroy();
                }
                if ($(".sidebar-wrapper").length != 0) {
                var ps1 = new PerfectScrollbar('.sidebar-wrapper');
                ps1.destroy();
                }
                if ($(".main-panel").length != 0) {
                var ps2 = new PerfectScrollbar('.main-panel');
                ps2.destroy();
                }
                if ($(".main").length != 0) {
                var ps3 = new PerfectScrollbar('main');
                ps3.destroy();
                }


                setTimeout(function() {
                $('body').addClass('sidebar-mini');

                md.misc.sidebar_mini_active = true;
                }, 300);
            }

            // we simulate the window Resize so the charts will get updated in realtime.
            var simulateWindowResize = setInterval(function() {
                window.dispatchEvent(new Event('resize'));
            }, 180);

            // we stop the simulation of Window Resize after the animations are completed
            setTimeout(function() {
                clearInterval(simulateWindowResize);
            }, 1000);

            });
        })

        $('#facebook').sharrre({
            share: {
              facebook: true
            },
            enableHover: false,
            enableTracking: false,
            enableCounter: false,
            click: function(api, options) {
              api.simulateClick();
              api.openPopup('facebook');
            },
            template: '<i class="fab fa-facebook-f"></i> Facebook',
            url: 'https://demos.creative-tim.com/material-dashboard-pro/examples/dashboard.html'
          });
    
          $('#google').sharrre({
            share: {
              googlePlus: true
            },
            enableCounter: false,
            enableHover: false,
            enableTracking: true,
            click: function(api, options) {
              api.simulateClick();
              api.openPopup('googlePlus');
            },
            template: '<i class="fab fa-google-plus"></i> Google',
            url: 'https://demos.creative-tim.com/material-dashboard-pro/examples/dashboard.html'
          });
    
          $('#twitter').sharrre({
            share: {
              twitter: true
            },
            enableHover: false,
            enableTracking: false,
            enableCounter: false,
            buttons: {
              twitter: {
                via: 'CreativeTim'
              }
            },
            click: function(api, options) {
              api.simulateClick();
              api.openPopup('twitter');
            },
            template: '<i class="fab fa-twitter"></i> Twitter',
            url: 'https://demos.creative-tim.com/material-dashboard-pro/examples/dashboard.html'
          });
    
        // Facebook Pixel Code Don't Delete
        ! function(f, b, e, v, n, t, s) {
            if (f.fbq) return;
            n = f.fbq = function() {
            n.callMethod ?
                n.callMethod.apply(n, arguments) : n.queue.push(arguments)
            };
            if (!f._fbq) f._fbq = n;
            n.push = n;
            n.loaded = !0;
            n.version = '2.0';
            n.queue = [];
            t = b.createElement(e);
            t.async = !0;
            t.src = v;
            s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s)
        }(window,
            document, 'script', '//connect.facebook.net/en_US/fbevents.js');
    
        try {
            fbq('init', '111649226022273');
            fbq('track', "PageView");
    
        } catch (err) {
            console.log('Facebook Track Error:', err);
        }

        // Javascript method's body can be found in assets/js/demos.js
        md.initDashboardPageCharts();

        md.initVectorMap();

        md.checkFullPageBackgroundImage();
        setTimeout(function() {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700);

    });
}(jQuery));