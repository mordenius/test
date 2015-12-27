/*
 * contactable 1.2.1 - jQuery Ajax contact form
 *
 * Copyright (c) 2009 Philip Beel (http://www.theodin.co.uk/)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) 
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Revision: $Id: jquery.contactable.js 2010-01-18 $
 *
 */
	$.validator.addMethod("regex", function(value, element, regexpr) {          
     return regexpr.test(value);
   }, "Введите корректный номер телефона"); 
			//validate the form 
			$("#contactForm").validate({
				//set the rules for the fild names
				rules: {
					fname: {
						required: true,
						minlength: 2
					},
					lname: {
						required: true,
						minlength: 2
					},
					email: {
						required: true,
						email: true
					},
					phone: {
						required: true,
						regex: /^\+{1}([^a-z][0-9]{10,13})$/,
						minlength: 10,
						maxlength: 13
					},
					//budget: {
					//	required: true
					//},
					message: {
						required: true,
						minlength: 16,
					}
				},
				//set messages to appear inline
					messages: {
						fname: "Обязательное поле",
						lname: "Обязательное поле",
						email: "Введите действительный почтовый адрес",
						phone: "Обязательное поле",
						budget: "Обязательное поле",
						message: "Обязательное поле"
					},			

				submitHandler: function() {
					$('.holder').hide();
					$('#preload').show();
$.ajax({
  type: 'POST',
  url: 'http://kvinto.com.ua/try/modules/mail.php',
  data: {fname:$('#contactForm .field[name=fname]').val(), lname:$('#contactForm .field[name=lname]').val(),email:$('#contactForm .field[name=email]').val(), phone:$('#contactForm .field[name=phone]').val(), company:$('#contactForm .field[name=company]').val(), position:$('#contactForm .field[name=position]').val(), message:$('#contactForm .field[name=message]').val()},
  success: function(data){
						$('#preload').css({display:'none'}); 
						$("html,body").animate({"scrollTop":0},500);
						if( data == 'success') {
							$('#callback').show().append('<h2>Ваше письмо успешно отправлено.</h2>');

						} else {
							$('#callback').show().append('<h2>Произошла ошибка, попробуйте снова.</h2>');
							setTimeout(function(){
								$('.holder').show();
								$('#callback').hide().empty();
							},2000);
						}
					},
  error:function(){
						$('#preload').css({display:'none'}); 
						$('#callback').show().append('<h2>Произошла ошибка, попробуйте позднее.</h2>');
                                        }
});		
				}
 
})(jQuery);
