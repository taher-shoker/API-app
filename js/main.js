/***function to check if the input is non Arabic Language-****/
function checkinputlanguage(inputboxselector){
    var english = /^[a-z][a-z\d]*$/i;
    var textval = inputboxselector.val();
    var textlength=textval.length;
    var curEntkey = textval.substring(textlength-1,textlength)
    if(english.test(curEntkey)){
        //alert("عفوا... يرجى تغير لغة الاكتابة الى العربية ،، اللغة الانجليزية غير مدعمة حاليا!");
        title="خطأ"
        content=  '<p>عفوا... يرجى تغير لغة الاكتابة الى العربية ،، اللغة الانجليزية غير مدعمة حاليا!</p>',

    /* 	body="عفوا... يرجى تغير لغة الاكتابة الى العربية ،، اللغة الانجليزية غير مدعمة حاليا!"; */
        validationerror_alert(title,content);
        inputboxselector.val(inputboxselector.val().replace(curEntkey,""))
    return false;
    }
}



/****alert msg****/
function validationerror_alert(title,body){
	$.confirm({
		title: title,
		content: body,
		type: 'red',
		buttons: {
			somethingElse: {
            text: 'اغلاق',
            btnClass: 'btn-blue',
            keys: ['enter', 'shift'],
            action: function(){
					
				}
			}
		}
	});
}