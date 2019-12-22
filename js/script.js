
      
    var curr_disp = document.getElementById('current').style.display;
    var prev_disp = document.getElementById('previous').style.display;

    var curr_button = document.getElementById('toggle1');
    var prev_button = document.getElementById('toggle2');

    function show(ele) {
        if(ele = 'none') {
            ele = 'block';
        }
        else {
            ele = 'block';
        }
    }
    function hide(ele) {
        if(ele = 'block') {
            ele = 'none';
        }
        else {
            ele = 'none';
        }
    }

    function function1() {
        show(curr_disp);
        hide(prev_disp);
        curr_button.classList.add('active');
        prev_button.classList.remove('active');
    }
    function function2() {
        show(prev_disp);
        hide(curr_disp);
        curr_button.classList.remove('active');
        prev_button.classList.add('active');

    }






 