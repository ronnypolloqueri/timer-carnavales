(function(){
    var stateTimer4 = "resume";
    var hasTimer = false;
    var durationTimer1 = "5s";
    // pasado este tiempo el timer se pone color naranja
    var durationTimer2 = "1s";
    // pasado este tiempo el timer se pone color rojo
    var durationTimer3 = "3s";

    // Finalizando timer 1 empieza a contar otro timer
    var durationTimer4 = "5s";

    $('.pause').on('click', function(e) {

        console.log(">> click");
        if( stateTimer4 === "stop" || stateTimer4 === "pause" ){
            $('#timer4').timer('resume');
            stateTimer4 = "resume";
            console.log(">> resume");
        } else {
            $('#timer4').timer('pause');
            stateTimer4 = "pause";
            console.log(">> pause");
        }
    });


    $('.pause').on('dblclick', function(e) {
        console.log(">> dbl");
        $("#timer4").addClass('hidden');
        $('#timer4').timer('remove');
        $("#btn-inicio").removeClass('hidden');
    });

    $('.item_grupo').on('click', function(e) {
        console.log(e.target.text);
        $('#grupo').text(e.target.text); 
    });

	  // Init timer start
	  $('.start-timer-btn').on('click', function() {
        console.log("iniciar");
        $('#timer').removeClass('hidden');
        $("#timer-message div#msg").html('<div id="timer"></div>');
        $("#timer-message").removeClass();

	  	  hasTimer = true;

        $('#timer').timer({
            countdown: true,
            duration: durationTimer1,
            format: '%M:%S', // Display time as 00:00:00
            callback: function(){ 
                document.getElementById('timer').style.visibility = 'hidden';
                $("#timer-message div#msg").html("FINALIZADO");
                console.log("Termino timer1")
                $('#timer4').removeClass('hidden');
                $('#timer4').timer({
                    duration: durationTimer4,
                    format: '%M:%S', // Display time as 00:00:00
                    callback: function(){ 
                        $("#timer-message").addClass("color-warning");
                        console.log("Termino timer4")
                        $('#timer4').timer('remove');
                    }
                });

            }
        });

        $('#timer2').timer({
            countdown: true,
            duration: durationTimer2,
            format: '%M:%S', // Display time as 00:00:00
            callback: function(){ 
                $("#timer-message").addClass("color-warning");
                console.log("Termino timer2")
                $('#timer2').timer('remove');
            }
        });

        $('#timer3').timer({
            countdown: true,
            duration: durationTimer3,
            format: '%M:%S', // Display time as 00:00:00
            callback: function(){ 
                $("#timer-message").addClass("color-danger");
                console.log("Termino timer3")
                $('#timer3').timer('remove');
            }
        });


        $("#timer-message").addClass("text-success");
        document.getElementById('timer2').style.visibility = 'hidden';
        document.getElementById('timer3').style.visibility = 'hidden';

        $("#btn-inicio").addClass('hidden');
	  	  $('.pause-timer-btn, .remove-timer-btn').removeClass('hidden');

	  });


	  // Init timer resume
	  $('.resume-timer-btn').on('click', function() {
	  	  $('.timer').timer('resume');
	  	  $(this).addClass('hidden');
	  	  $('.pause-timer-btn, .remove-timer-btn').removeClass('hidden');
	  });


	  // Init timer pause
	  $('.pause-timer-btn').on('click', function() {
	  	  $('.timer').timer('pause');
	  	  $(this).addClass('hidden');
	  	  $('.resume-timer-btn').removeClass('hidden');
	  });

	  // Remove timer
	  $('.remove-timer-btn').on('click', function() {
	  	  hasTimer = false;
	  	  $('.timer').timer('remove');
	  	  $(this).addClass('hidden');
	  	  $('.start-timer-btn').removeClass('hidden');
	  	  $('.pause-timer-btn, .resume-timer-btn').addClass('hidden');
	  });

	  // Additional focus event for this demo
	  $('.timer').on('focus', function() {
	  	  if(hasTimer) {
	  	  	  $('.pause-timer-btn').addClass('hidden');
	  	  	  $('.resume-timer-btn').removeClass('hidden');
	  	  }
	  });

	  // Additional blur event for this demo
	  $('.timer').on('blur', function() {
	  	  if(hasTimer) {
	  	  	  $('.pause-timer-btn').removeClass('hidden');
	  	  	  $('.resume-timer-btn').addClass('hidden');
	  	  }
	  });
})();
