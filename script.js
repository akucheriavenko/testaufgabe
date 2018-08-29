$(function() {

    $.validator.addMethod("alpha", function(value, element) {
        return this.optional(element) || value.match(/[A-Z]/);

    });
    $.validator.addMethod("numeric", function(value, element) {
        return this.optional(element) || value.match(/[0-9]/);

    });


    $("#register-form").validate({
        rules: {
        	name: {
                required: true,
                minlength: 2
            },
     		email: {
      			required: true,
      			email: true
      		},	
      		username: {
                required: true,
                minlength: 3
            },
            password: {
                required: true,
                alpha: true,
                numeric: true,
                minlength: 8
            },
            confirm: {
                required: true,
                equalTo: "#password"
            }
        },

        messages: {
            "password": {
                alpha: "The password must contain at least one capital letter",
                numeric: "The password must contain at least one digit"
            }
        },
        errorElement: 'span',
        errorPlacement: function(error, element) {
            if (element.parent('.input-group').length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        },
        highlight: function(element) {
            $(element).closest('.form-group').addClass('has-error');

        },
        unhighlight: function(element) {
            $(element).closest('.form-group').removeClass('has-error');
        },

        focusCleanup: true,
        focusInvalid: false

    });

	   $('#register-form input').bind('keyup blur click', function() { 
	      if ($('#register-form').validate().checkForm()) { 
	          $('#send-form').prop('disabled', false); // enables button
	      } else {
	          $('#send-form').prop('disabled', true); // disables button
	      }
	  });
	    $("#send-form").bind('click', function() {
        if ($('#register-form').valid()) {
            $('#register-form').submit();
        }
    });
})