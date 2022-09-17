//music onload
window.onload=function(){
    document.getElementById("my_audio").play();
 }

 function pause() {
    document.getElementById("my_audio").pause();
 }

 //server and database
$($.getJSON('http://localhost:5000/get-bandshow', 
    function(data){
        const show = data.response.bandshow;
        const showTabElement = $('#showTab');
        for(let i=0; i<customers.length; i++) {
            const show = bandshow[i];

            const row = document.createElement('tr');

            const firstName = document.createElement('td');
            firstName.innerHTML = customer.firstname;
            row.append(firstName);

            const lastName = document.createElement('td');
            lastName.innerHTML = customer.lastname;
            row.append(lastName);

            const email = document.createElement('td');
            email.innerHTML = customer.email;
            row.append(email);

            const phone = document.createElement('td');
            phone.innerHTML = customer.phone;
            row.append(phone);

            customersTabElement.append(row);
        } 
    }));
/*------------------------------------------------------------------
Project:        Wooster - HTML onepage theme by GraphBerry.com
Version:        1.0
Last change:    04/07/2015
Author:         GraphBerry
URL:            http://graphberry.com
License:        http://graphberry.com/pages/license
-------------------------------------------------------------------*/
$(function(){
	'use strict';

/*--------------------------------------------------
    Initialize portfolio filter
    ---------------------------------------------------*/
	$('#portfolio-grid').mixItUp();

/*--------------------------------------------------
    Open video modal
    ---------------------------------------------------*/
	$('#popup-youtube').magnificPopup({
	    disableOn: 700,
	    type: 'iframe',
	    mainClass: 'mfp-fade',
	    removalDelay: 160,
	    preloader: false,
	    fixedContentPos: false
	});
	
/*--------------------------------------------------
    Page Scroll Features 
    ---------------------------------------------------*/
	smoothScroll.init({
        speed: 1000,
        updateURL: true,
        offset: 50
    });

$(window).scroll(function () {
    if ($(this).scrollTop() > 130) {
            $('#header-nav').addClass('navbar-wooster');
        } else {
            $('#header-nav').removeClass('navbar-wooster');
        }
    });

});