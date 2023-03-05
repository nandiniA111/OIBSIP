let result = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let ValueOnScreen = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        let textButton = e.target.innerText;
        console.log('Button text is ', textButton);
        if (textButton == 'C') {
            ValueOnScreen = "";
            result.value = ValueOnScreen;
        }
        else if (textButton == '=') {
            result.value = eval(ValueOnScreen);
        }
        else {
            ValueOnScreen += textButton;
            result.value = ValueOnScreen;
        }
    })
}

