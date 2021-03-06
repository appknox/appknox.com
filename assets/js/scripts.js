$(document).ready(function(){

    "use strict";

    // Nav Sticky

    $(window).scroll(function(){
        if(window.scrollY > 500 && !$('.mobile-toggle').is(":visible")){
            $('.top-bar').addClass('nav-sticky');
        }else{
            $('.top-bar').removeClass('nav-sticky');
        }
    });

    // Offscreen Nav
    $('.offscreen-toggle').click(function(){
        $('.main-container').toggleClass('reveal-nav');
        $('.offscreen-container').toggleClass('reveal-nav');
        $('.offscreen-menu .container').toggleClass('reveal-nav');
    });

    $('.main-container').click(function(){
        if($(this).hasClass('reveal-nav')){
            $('.main-container').toggleClass('reveal-nav');
            $('.offscreen-container').toggleClass('reveal-nav');
            $('.offscreen-menu .container').toggleClass('reveal-nav');
        }
    });

    // Detect logo dimensions and add correct class

    var logoImage = $('.top-bar .logo:first-of-type');

    var theImage = new Image();
    theImage.src = logoImage.attr("src");

    var logoWidth = theImage.width;
    var logoHeight = theImage.height;
    var logoRatio = logoWidth / logoHeight;

    if(logoRatio > 2.8){
        $('.top-bar .logo').addClass('logo-wide');
    }

    if(logoRatio < 2){
        $('.top-bar .logo').addClass('logo-square');
    }

    // Smooth scroll

    $('.inner-link').smoothScroll({offset: -96, speed: 800});

    // Mobile Toggle

    $('.mobile-toggle').click(function(){
        $('nav').toggleClass('open-nav');
    });

    // Margin first section for top bar

    if(!$('nav').hasClass('overlay-bar')){
        $('.main-container').first().css('margin-top', $('nav').outerHeight());
    }

    $(window).resize(function(){
        if(!$('nav').hasClass('overlay-bar')){
            $('.main-container').first().css('margin-top', $('nav').outerHeight());
        }
    });

    // Pad first section for overlay bar

    if($('nav').hasClass('overlay-bar')){
        var currentPad = parseInt($('.main-container').find(':first-child').css('padding-top'));
        var newPad = currentPad + $('.overlay-bar').outerHeight() - 48;
        if(currentPad > 0){
            $('.main-container').children(':first').css('padding-top', newPad);
        }else if($('.main-container').find(':first').hasClass('hero-slider')){
            var height = parseInt($('.hero-slider .slides li:first-child').outerHeight());
            var newHeight = height + $('.overlay-bar').outerHeight();
            $('.hero-slider .slides li').css('height', newHeight);
        }
    }


    // Fullwidth Subnavs

    // Position Fullwidth Subnavs fullwidth correctly

    $('.subnav-fullwidth').each(function () {
        $(this).css('width', $('.container').width());
        var offset = $(this).closest('.has-dropdown').offset();
        offset = offset.left;
        var containerOffset = $(window).width() - $('.container').outerWidth();
        containerOffset = containerOffset /2;
        offset = offset - containerOffset - 15;
        $(this).css('left', -offset);
    });

    $(window).resize(function () {
        $('.subnav-fullwidth').each(function () {
            $(this).css('width', $('.container').width());
            var offset = $(this).closest('.has-dropdown').offset();
            offset = offset.left;
            var containerOffset = $(window).width() - $('.container').outerWidth();
            containerOffset = containerOffset /2;
            offset = offset - containerOffset - 15;
            $(this).css('left', -offset);
        });
    });

    // Scroll Reveal

    if (!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
       window.scrollReveal = new scrollReveal({reset: true});
    }else{
        $('body').addClass('pointer');
    }

    // Slider Initializations

    $('.hero-slider').flexslider({});
    $('.image-slider').flexslider({ animation: "slide"});
    $('.testimonials-slider').flexslider({ directionNav: false });

    // Slide Sizes

    $('.slider-fullscreen .slides li').each(function(){
        $(this).css('height', $(window).height());
    });

    $('.fullscreen-element').each(function(){
        $(this).css('height', $(window).height());
    });


    // Feature Selector

    $('.selector-tabs li').click(function(){
        $(this).parent('.selector-tabs').children('li').removeClass('active');
        $(this).addClass('active');

        var activeTab = $(this).index() + 1;

        $(this).closest('.feature-selector').find('.selector-content').children('li').removeClass('active');
        $(this).closest('.feature-selector').find('.selector-content').children('li:nth-child('+activeTab+')').addClass('active');
    });

    // Append .background-image-holder <img>'s as CSS backgrounds

    $('.background-image-holder').each(function(){
        var imgSrc= $(this).children('img').attr('src');
        $(this).css('background', 'url("' + imgSrc + '")');
        $(this).children('img').hide();
        $(this).css('background-position', '50% 0%');
    });

    // Accordion

    $('.accordion li').click(function(){
        $(this).parent('.accordion').children('li').removeClass('active');
        $(this).addClass('active');
    });

    /************** Parallax Scripts **************/

    var isFirefox = typeof InstallTrigger !== 'undefined';
    var isIE = /*@cc_on!@*/ false || !!document.documentMode;
    var isChrome = !!window.chrome;
    var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
    var prefix;

    if (isFirefox) {
        prefix = '-moz-';
    } else if (isIE) {

    } else if (isChrome || isSafari) {
        prefix = '-webkit-';
    }

    $('.main-container section:first-child').addClass('first-child');

    $('.parallax-background').each(function () {

        if ($(this).closest('section').hasClass('first-child') && !$(this).closest('section').hasClass('slider-fullscreen')) {
            $(this).attr('data-top', prefix + 'transform: translate3d(0px,0px, 0px)');
            $(this).attr('data-top-bottom', prefix + 'transform: translate3d(0px,200px, 0px)');

        } else {

            $(this).attr('data-bottom-top', prefix + 'transform: translate3d(0px,-100px, 0px)');
            $(this).attr('data-center', prefix + 'transform: translate3d(0px,0px, 0px)');
            $(this).attr('data-top-bottom', prefix + 'transform: translate3d(0px,100px, 0px)');

        }

    });

    if (!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
        skrollr.init({
            forceHeight: false
        });
    }

    // Map Holder Overlay

    $('.map-holder').click(function(){
        $(this).addClass('on');
    });

    $(window).scroll(function(){
        if($('.map-holder').hasClass('on')){
            $('.map-holder').removeClass('on');
        }
    });

    // Map Details Holder

    $('.details-holder').each(function(){
        $(this).css('height', $(this).width());
    });

    $('.details-holder').mouseenter(function(){
        $(this).closest('.map-overlay').addClass('fade-overlay');
    }).mouseleave(function(){$(this).closest('.map-overlay').removeClass('fade-overlay');});

    // Countdown

    $('.countdown').each(function(){
        $(this).countdown({until: new Date($(this).attr('data-date'))});
    });

    // Twitter Feed

    if($('#tweets').length){
        twitterFetcher.fetch($('#tweets').attr('data-widget-id'), '', 5, true, true, true, '', false, handleTweets);

    }

    $('form.mail-list-signup').submit(function (e) {
        trackEvent("email-homepage-signup", "submit-start");

        if(e.preventDefault) e.preventDefault(); else e.returnValue = false;

        var thisForm        = $(this).closest('.mail-list-signup'),
            error           = 0;

        thisForm.find('.submit-button-field').each(function(){
            this.disabled = true;
        })

        $(thisForm).find('.validate-required').each(function(){
            if($(this).val() === ''){
                error = 1;
            }
        });
        $(thisForm).find('.validate-email').each(function(){
            if(!(/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val()))){
                $(this).addClass('field-error');
                error = 1;
            }
        });
        if (error === 1){
            thisForm.find('.submit-button-field').each(function(){
                this.disabled = false;
            })
            console.log("Error");
        } else {
            trackEvent("email-homepage-signup", "submit-sent");

            jQuery.ajax({
                type: "POST",
                url: "https://beta.appknox.com/webfrontend/homepage",
                crossDomain: true,
                data: thisForm.serialize(),
                complete: function (res, status) {
                    // Swiftmailer always sends back a number representing numner of emails sent.
                    // If this is numeric (not Swift Mailer error text) AND greater than 0 then show success message.
                    var response = JSON.parse(res.responseText)
                    if(response['status'] == 'success'){
                            trackEvent("email-homepage-signup", "success");

                            thisForm.find('.signup-appstore-field').fadeOut(500);
                            thisForm.find('.signup-email-field').fadeOut(500);
                            thisForm.find('.submit-button-field').fadeOut(500);
                            thisForm.find('.form-error').fadeOut(500);
                            thisForm.find('.signup-done').fadeIn(1000);
                    } else {
                        trackEvent("email-homepage-signup", "error", response['message']);

                        thisForm.find('.form-error').prepend(response['message']).fadeIn(1000);
                        setTimeout(function(){ window.location.reload() }, 4000);
                    }
                }
            });
        }
        return false;
    });

    $('form.mail-list-subscribe').submit(function (e) {
        trackEvent("email-list-subscribe", "submit-start");

        if(e.preventDefault) e.preventDefault(); else e.returnValue = false;

        var thisForm        = $(this).closest('.mail-list-subscribe'),
            error           = 0;

        thisForm.find('.submit-button-field').each(function(){
            this.disabled = true;
        })
        $(thisForm).find('.validate-required').each(function(){
            if($(this).val() === ''){
                error = 1;
            }
        });
        $(thisForm).find('.validate-email').each(function(){
            if(!(/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val()))){
                $(this).addClass('field-error');
                error = 1;
            }
        });
        if (error === 1){
            thisForm.find('.submit-button-field').each(function(){
                this.disabled = false;
            })
            console.log("Error");
        } else {
            trackEvent("email-list-subscribe", "submit-sent");
            jQuery.ajax({
                type: "POST",
                url: "https://beta.appknox.com/webfrontend/subscribe",
                data: thisForm.serialize(),
                complete: function (res, status) {
                    // Swiftmailer always sends back a number representing numner of emails sent.
                    // If this is numeric (not Swift Mailer error text) AND greater than 0 then show success message.
                    var response = JSON.parse(res.responseText)
                    if(response['status'] == 'success'){
                        trackEvent("email-list-subscribe", "success");

                        thisForm.find('.subscribe-email-field').attr("disabled", true) ;
                        thisForm.find('.subscribe-email-field').val("Thank you for subscribing !");
                    } else {
                        trackEvent("email-list-subscribe", "error", response['message']);

                        thisForm.find('.submit-button-field').each(function(){
                            this.disabled = false;
                        })
                        thisForm.find('.subscribe-email-field').val(response['message']);
                    }
                }
            });
        }
        return false;
    });



    // Contact form
    $('form.vemail-form').submit(function (e) {
        trackEvent("email-contact", "submit-start");

        // return false so form submits through jQuery rather than reloading page.
        if(e.preventDefault) e.preventDefault(); else e.returnValue = false;

        var thisForm        = $(this).closest('.vemail-form'),
            error           = 0,
            originalError   = thisForm.attr('original-error');

            if (typeof originalError !== typeof undefined && originalError !== false) {
                thisForm.find('.form-error').text(originalError);
            }


        $(thisForm).find('.validate-required').each(function(){
            if($(this).val() === ''){
                $(this).addClass('field-error');
                error = 1;
            }
            else{
                $(this).removeClass('field-error');
            }
        });

        $(thisForm).find('.validate-email').each(function(){
            if(!(/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val()))){
                $(this).addClass('field-error');
                error = 1;
            }
            else{
                $(this).removeClass('field-error');
            }
        });

        if (error === 1){
            $(this).closest('.vemail-form').find('.form-error').fadeIn(200);
        }
        else{
            trackEvent("email-contact", "submit-sent");

            jQuery.ajax({
                type: "POST",
                url: "https://beta.appknox.com/webfrontend/contact_us",
                crossDomain: true,
                data: thisForm.serialize(),
                complete: function (result, status) {
                    // Swiftmailer always sends back a number representing numner of emails sent.
                    // If this is numeric (not Swift Mailer error text) AND greater than 0 then show success message.
                    var response = JSON.parse(result.responseText)
                    console.log(response)
                    if(response['status'] == 'success'){
                            trackEvent("email-contact", "success");

                            thisForm.find('.form-success').fadeIn(1000);
                            thisForm.find('.form-error').fadeOut(500);
                            thisForm.find('.form-name').fadeOut(500);
                            thisForm.find('.form-email').fadeOut(500);
                            thisForm.find('.form-message').fadeOut(500);
                            thisForm.find('.send-form').fadeOut(500);
                            thisForm.find('.form-done').fadeIn(1000);
                            setTimeout(function(){ thisForm.find('.form-success').fadeOut(500); }, 5000);
                    }
                    // If error text was returned, put the text in the .form-error div and show it.
                    else{
                        trackEvent("email-contact", "error", response['message']);

                        // Keep the current error text in a data attribute on the form
                        thisForm.find('.form-error').attr('original-error', thisForm.find('.form-error').text());
                        // Show the error with the returned error text.
                        thisForm.find('.form-error').text(response['message']).fadeIn(1000);
                        thisForm.find('.form-success').fadeOut(1000);
                    }
                }
            });
        }
        return false;
    });
    var hideEl = $("#event-hide"),
        secretEl = $("#event-secret"),
        urlEl = $("#event-url"),
        emailEl = $("#event-email"),
        nameEl = $("#event-name"),
        textEl = $("#event-text"),
        websiteEl = $("#event-website"),
        phoneEl = $("#event-phone");
    hideEl.click(function(){
        hideEl.hide();
        secretEl.hide();
    })
    $("#event-submit").click(function(){
        var data = {
            text: textEl.val() + "; " + websiteEl.val() + "; " + phoneEl.val(),
            email: emailEl.val(),
            name: nameEl.val(),
            uuid: secretEl.val()
        }
        $.ajax({
            type: "POST",
            url: "https://beta.appknox.com/event",
            crossDomain: true,
            data: data,
            complete: function (result, status) {
              try {
                var response = JSON.parse(result.responseText)
                console.log(response)
                if(response.status == "success"){
                    textEl.val("");
                    emailEl.val("");
                    nameEl.val("");
                    websiteEl.val("");
                    phoneEl.val("");
                    alert("SUCCESS " + response.message);
                }
                else{
                    alert("ERROR: " + response.message);
                }
              } catch (e) {
                alert("ERROR: Please check your secret!")
              }
            }
        });
    });

    //Insert Latest Post For Home Page
    
    var appknoxBlogRSSLink = "https://blog.appknox.com/feed/";
    var blogPostSections = $(".blog-post-block"); 
    var pubDatePrefix = "Published on "
    
    if(blogPostSections.length > 0){
      insertBlogPosts();
    }

    function insertBlogPosts(){
        $.get(appknoxBlogRSSLink, function(data) {
            var $XML = $(data);
            var blogPosts = $XML.find("item");
            var iterationLimit = Math.min(blogPosts.length,3);
            
            if(blogPosts.length > 0){
                $(".latest-post-block").removeClass("an-none");
            }

            for(var i = 0;i < iterationLimit; i++){
                
                var  newBlogTile = $("#dummy-an-blog-tile").clone();
                var blog = $(blogPosts[i]);

                var item = {
                    title:       blog.find("title").text(),
                    link:        blog.find("link").text(),
                    description: blog.find("description").text(),
                    pubDate:     blog.find("pubDate").text(),
                    author:      blog.find("author").text()
                };

                var pubDate = item.pubDate.substr(0,item.pubDate.length - 15);
                
                var descHTML = $(blog.find("description").text()).find("img");
                var src = "";
                try{    
                    src = $.parseHTML(blog.find("description").text())[0].src;
                }catch(ex){
                    //do nothing
                }

                newBlogTile.find(".an-blog-title").html(item.title);
                newBlogTile.find(".an-blog-publish-date").html(pubDatePrefix + pubDate);
                newBlogTile.find(".an-blog-description").html(item.description);
                newBlogTile.find(".an-blog-link").attr("href",item.link);
                newBlogTile.find(".an-blog-post-img").attr("src",src);

                newBlogTile.find(".an-blog-description img").remove();
                newBlogTile.removeClass("an-none");
                blogPostSections.append(newBlogTile);

            }
        });
    }

});

$(window).load(function(){

  "use strict";

    // Align Elements Vertically

    alignVertical();
    alignBottom();

    $(window).resize(function(){
        alignVertical();
        alignBottom();
    });

    // Isotope Projects

    $('.projects-container').isotope({
      itemSelector: '.project',
      layoutMode: 'fitRows'
    });

    $('.filters li').click(function() {
      var current = $(this);

      current.siblings('li').removeClass('active');
      current.addClass('active');

      var filterValue = current.attr('data-filter');
      var container = current.closest('.projects-wrapper').find('.projects-container');
      container.isotope({ filter: filterValue });
    });

    // Isotope contained feature boxes

    $('.contained-features-wrapper').isotope({
      itemSelector: '.no-pad',
      layoutMode: 'masonry',
      masonry: {
          gutter: 0
        }
    });

    // Instagram Feed

    if($('.instafeed').length){
        jQuery.fn.spectragram.accessData = {
            accessToken: '1406933036.fedaafa.feec3d50f5194ce5b705a1f11a107e0b',
            clientID: 'fedaafacf224447e8aef74872d3820a1'
        };

        $('.instafeed').each(function () {
            $(this).children('ul').spectragram('getUserFeed', {
                query: $(this).attr('data-user-name')
            });

        });

    }

    if($('#tweets').length){
        $('#tweets').flexslider({ directionNav: false, controlNav: false });
    }

    // Remove Loader

    $('.loader').css('opacity', 0);
    setTimeout(function(){$('.loader').hide();}, 600);

    // Mailchimp/Campaign Monitor Mail List Form Scripts
    $('form.mail-list-signup').on('submit', function(){

        var iFrame = $(this).closest('section, header').find('iframe.mail-list-form'),
        thisForm        = $(this).closest('.mail-list-signup'),
        userEmail       = $(this).find('.signup-email-field').val(),
        userFullName    = $(this).find('.signup-name-field').val(),
        userFirstName   = $(this).find('.signup-first-name-field').val(),
        userLastName    = $(this).find('.signup-last-name-field').val(),
        error           = 0;

        $(thisForm).find('.validate-required').each(function(){
            if($(this).val() === ''){
                $(this).addClass('field-error');
                error = 1;
            }
            else{
                $(this).removeClass('field-error');
            }
        });

        $(thisForm).find('.validate-email').each(function(){
            if(!(/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val()))){
                $(this).addClass('field-error');
                error = 1;
            }
            else{
                $(this).removeClass('field-error');
            }
        });

        if(error === 0){
            iFrame.contents().find('#mce-EMAIL, #fieldEmail').val(userEmail);
            iFrame.contents().find('#mce-LNAME, #fieldLastName').val(userLastName);
            iFrame.contents().find('#mce-FNAME, #fieldFirstName').val(userFirstName);
            iFrame.contents().find('#mce-FNAME, #fieldName').val(userFullName);
            iFrame.contents().find('form').attr('target', '_blank').submit();
        }
        return false;
    });

    // Blog Masonry

    $('.blog-masonry-container').isotope({
      itemSelector: '.blog-masonry-item',
      layoutMode: 'masonry'
    });

    $('.blog-filters li').click(function() {
      var current = $(this);

      current.siblings('li').removeClass('active');
      current.addClass('active');

      var filterValue = current.attr('data-filter');
      var container = current.closest('.blog-masonry').find('.blog-masonry-container');
      container.isotope({ filter: filterValue });
    });



});

var _gaq = _gaq || [];

function trackEvent(category, action, opt_label, opt_value, opt_noninteraction) {
    _gaq.push(['_trackEvent', category, action, opt_label, opt_value, opt_noninteraction]);
}

function handleTweets(tweets){
          var x = tweets.length;
          var n = 0;
          var element = document.getElementById('tweets');
          var html = '<ul class="slides">';
          while(n < x) {
            html += '<li>' + tweets[n] + '</li>';
            n++;
          }
          html += '</ul>';
          element.innerHTML = html;
    }

function alignVertical(){

        $('.align-vertical').each(function(){
            var that = $(this);
            var height = that.height();
            var parentHeight = that.parent().height();
            var padAmount = (parentHeight / 2) - (height/2);
            that.css('padding-top', padAmount);
        });

}

function alignBottom(){
    $('.align-bottom').each(function(){
        var that = $(this);
        var height = that.height();
        var parentHeight = that.parent().height();
        var padAmount = (parentHeight) - (height) - 32;
        that.css('padding-top', padAmount);
    });
}
