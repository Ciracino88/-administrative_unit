async function load_text(url) {
    text = await fetch(url);
    read_text(await text.text());
}

function read_text(text) {
    check_account(text);
}

function check_account(t) {
    enter_s = t.split('\n');
    for (var i = 0; i < enter_s.length; i++) {
        target = enter_s[i];
        s = target.split(',');
        
        target_id = s[0];
        target_pw = s[1];
		target_nickname = s[2];

        input_id = document.getElementById('id');
        input_pw = document.getElementById('pw');

        if (target_id == input_id.value) {
			console.log("아이디 일치");
            if (target_pw == input_pw.value) {
                location.replace("index.html");
				return;
            }
        }
    }
}