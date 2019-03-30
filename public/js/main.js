$(document).ready(function() {
				var extended=true;
				var onclicked;
		
				/*check mobile*/
				if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
						$('.welcome').css("display","none");
						$('.page').css("display","initial");
				}

				/*video player*/
				$( ".video" ).click(function() {
					onclicked= $(this).attr("value");
					$("."+onclicked).css("display","flex");
				});
				
				$(".close").click(function(){
					$(".video-player").css("display","none");
						stopVideo();					
				});
				
				$(".video-player").click(function(){
					$(".video-player").css("display","none");
						stopVideo();
				});
				
				/*menu*/
				$( ".menu_button" ).click(function() {
					if(extended){
						$(".drop-down-menu").css("visibility",'visible');
						document.getElementById("drop-down").style.top = "50px";
						extended=false;
					} else {
						$(".drop-down-menu").css("visibility",'hidden');
						extended=true;
					}
				});
				
				
				/*email send*/
				$("#sendbutton").click(function(){
					var name = document.getElementsByName("name")[0].value;
					var mail = document.getElementsByName("mail")[0].value;
					var phone = document.getElementsByName("phone")[0].value;
					var message = document.getElementsByName("message")[0].value;
					
					var data;
				        if (name==null || name=="",mail==null || mail=="",phone==null || phone=="",message==null || message==""){
							$('.allthefields').html("All fields are required. <div class=\"error-box-close\">X</div>");
							$('.errorwrapper').css("visibility","visible");
							close();
							data = {
								access_token: "m94q97i0wfajms14r8pxh722",
								name: name,
								mail: mail,
								phone: phone,
								message: message
							};
						} else {
								$.post('https://postmail.invotes.com/send',
								data
								,
								function(data, status){
									if(data==="sent"){
										$('.contact-subsection-left-wrapper').css("color","white");
										$('.contact-subsection-left-wrapper').css("display","flex");
										$('.contact-subsection-left-wrapper').css("align-items","center");
										$('.contact-subsection-left-wrapper').css("justify-content","center");
										$('.contact-subsection-left-wrapper').html("E-mail sent.");
									}
								});
							}
						});
						
						$(".clicking").click(function(){
							$('.welcome').css("display","none");
							$('.page').css("display","initial");
							$(".clicking").remove();
							
						});
			
						/*scroll menu*/			
						var prevScrollpos = window.pageYOffset;
							window.onscroll = function() {
							  var currentScrollPos = window.pageYOffset;
							  if (prevScrollpos > currentScrollPos) {
								document.getElementById("drop-down").style.top = "50px";
							  } else {
								document.getElementById("drop-down").style.top = "-160px";
														$(".drop-down-menu").css("visibility",'hidden');
							  }
							  prevScrollpos = currentScrollPos;
							}
						});
			
			
						/*pop up box close*/
						function close(){
								$(".error-box-close").click(function(){			
								$('.errorwrapper').css("visibility","hidden");
							});	
						}
					
						/*stop video hack*/
						function stopVideo(){		
							$('#budapest').remove();
							$('#ocean').remove();
							$('#travel').remove();
							
							
							$('.youtube-budapest').html("<iframe class=\"youtube\" id=\"budapest\" width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/WE_K6TNUaY0\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>");	
							$('.youtube-ocean').html("<iframe class=\"youtube\" id=\"ocean\" width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/lTyW7WqHkFY\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>");	
							$('.youtube-travel').html("<iframe class=\"youtube\" id=\"travel\" width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/d_z4PtvkWV0\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>");	

						}