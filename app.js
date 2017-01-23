$(function() {
    var headerHeight = $("#header").outerHeight();
    
    var sidebarHeight = $("#sidebar").outerHeight(); 

    var footerHeight = $("#footer").outerHeight();
        var ftOffset = $("#footer").offset();
       var topFooter = ftOffset.top;

    var lastScrollTop = 0;

    $(window).scroll(function() 
    {
        var st = $(this).scrollTop();
        var windowHeight = $(window).height(); 
        console.log("windowHeight : "+windowHeight);

        // when user scrolls DOWN
        if (st > lastScrollTop)
        {
            // if window's height LESS than header's height plus sidebar's height
            if(windowHeight <= (sidebarHeight + headerHeight + 15) ) // 710 + 18 + 15 742 
            {
                console.log("A 1");
                // if scroll passed the sidebar
                if ( ($(window).scrollTop() + $(window).height()) > (sidebarHeight + 33) )  
                {
                    console.log("A 1.1");
                    // if scroll passed the footer
                    if( ($(window).scrollTop() + $(window).height()) > (topFooter+15) ) 
                    {
                        console.log("A 1.1.1");
                        $("#sidebar").css({
                            "position": "fixed",
                            "top": $(window).height() - (sidebarHeight+footerHeight+15)
                        });
                    }
                    else // if scroll passed the header but NOT the footer yet
                    {
                        console.log("A 1.1.2");
                        $("#sidebar").css({
                            "position": "fixed",
                            "top": ($(window).height()) - (sidebarHeight+headerHeight)
                        });
                    }
                }
                else // if scroll DOESN'T pass the sidebar yet
                {
                    console.log("A 1.2");
                    $("#sidebar").css("position","static");
                }
            }
            else // if window's height HIGHER than header's height plus sidebar's height
            {
                console.log("A 2");
                // if scroll passed the sidebar
                if ( ($(window).scrollTop() + $(window).height()) > (sidebarHeight + 33) )  
                {
                    console.log("A 2.1");
                    // if scroll passed the footer
                    if( ($(window).scrollTop() + $(window).height()) > (topFooter+15) ) 
                    {
                        console.log("A 2.1.1");
                        // $("#sidebar").css({
                        //     "position": "fixed",
                        //     "top": $(window).height() - (sidebarHeight+footerHeight+15)
                        // });

                        if(windowHeight >= 927)
                        {
                            $("#sidebar").css({
                                "position": "fixed",
                                "top": "5px"
                            });
                        }
                        else 
                        {
                            $("#sidebar").css({
                                "position": "fixed",
                                "top": $(window).height() - (sidebarHeight+footerHeight+15)
                            });
                        }
                       
                    }
                    else
                    {
                        console.log("A 2.1.2");
                        $("#sidebar").css({
                            "position": "fixed",
                            "top": "5px"
                        });
                    }
                }
                else // if scroll DOESN'T pass the sidebar yet
                {
                    console.log("A 2.2");
                    $("#sidebar").css("position","static");
                }

            }

        }
        else //when user scroll UP
        {
            // if window's height LESS than footer's height plus sidebar's height
            if(windowHeight <= (sidebarHeight + footerHeight + 15) ) // 710 + 18 + 15 742 
            {
                console.log("B 1");
                // if doc's height minus window's scrollTop HEIGHER or EQUAL with sidebar plus footer heights plus 15
                if( ( $(document).height() - $(window).scrollTop() ) >= (sidebarHeight + footerHeight + 15) )
                {
                    console.log("B 1.1");
                    if($(window).scrollTop() <= (headerHeight+15) )
                    {
                        console.log("B 1.1.1");
                        $("#sidebar").css({
                            "position": "fixed",
                            "top": headerHeight+15
                        });
                        var n =  headerHeight+15
                        console.log("headerHeight+ "+n);
                    }
                    else
                    {
                        console.log("B 1.1.2");
                        $("#sidebar").css({
                            "position": "fixed",
                            "top": "10px"
                        });
                    }
                }
                else
                {
                    console.log("B 1.2");
                    // console.log("(doc's height - scrollTop) < (sidebarHeight + footerHeight + 15)");
                    $("#sidebar").css({
                        "position": "absolute",
                        "top": ( $(document).height() - footerHeight ) - (sidebarHeight + 15)
                    });
                    // var top = ( $(document).height() - footerHeight ) - sidebarHeight; 
                    // console.log("top : "+top);
                }
            }
            else
            {
                console.log("B 2");
                //console.log("SCROLL UP: your window is higher than sidebar plus footer");
                if( ( $(document).height() - $(window).scrollTop() ) >= (sidebarHeight + footerHeight + 15) )
                {
                    console.log("B 2.1");
                    if($(window).scrollTop() <= (headerHeight+15) )
                    {
                        console.log("B 2.1.1");
                        $("#sidebar").css({
                            "position": "fixed",
                            "top": headerHeight+15
                        });
                    }
                    else
                    {
                        console.log("B 2.1.2");
                        $("#sidebar").css({
                            "position": "fixed",
                            "top": "5px"
                        });
                    }
                }
                else 
                {
                    console.log("B 2.2");
                    $("#sidebar").css({
                        "position": "fixed",
                        "top": $(document).height() - (15+headerHeight+sidebarHeight)
                    });
                }
            }
        }

        lastScrollTop = st;
    });

});