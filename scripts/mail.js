function hgsubmit()  { 
	if (/\S+/.test(document.hgmailer.firstname.value) == false || /\S+/.test(document.hgmailer.lastname.value) == false || /^\S+@[a-z0-9_.-]+\.[a-z]{2,6}$/i.test(document.hgmailer.email.value) == false || /\S+/.test(document.hgmailer.subject.value) == false || /\S+/.test(document.hgmailer.comment.value) == false) {
		removeHidden('.text.--error.--oops');
		if (/\S+/.test(document.hgmailer.firstname.value) == false || /\S+/.test(document.hgmailer.lastname.value) == false) {
			removeHidden('.text.--error.--name');		
		}
		else { $('.text.--error.--name').addClass('--hidden'); }
		if (/^\S+@[a-z0-9_.-]+\.[a-z]{2,6}$/i.test(document.hgmailer.email.value) == false) {
			removeHidden('.text.--error.--mail');
		}
		else { $('.text.--error.--mail').addClass('--hidden'); }
		if (/\S+/.test(document.hgmailer.subject.value) == false) {
			removeHidden('.text.--error.--subject');
 		}
		else { $('.text.--error.--subject').addClass('--hidden'); } 		
		if (/\S+/.test(document.hgmailer.comment.value) == false) {
			removeHidden('.text.--error.--content');
 		}
 		else { $('.text.--error.--content').addClass('--hidden'); }
	}
  else { 
    document.hgmailer.submit(); 
    removeHidden('.text.--thanks');
  } 
} 

function removeHidden(classname){
	if ($(classname).hasClass('--hidden')) {
			$(classname).removeClass('--hidden');
	}
}

function resetHiddenError() {
	$('.text.--error').each(function() {
		if (!$(this).hasClass('--hidden')){
			$(this).addClass('--hidden');
		}
	})
}