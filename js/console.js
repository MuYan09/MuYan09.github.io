var now1 = new Date();

function createtime1() {
    var grt = new Date("03/10/2025 00:00:00"); //此处修改你的建站时间或者网站上线时间
    now1.setTime(now1.getTime() + 250);
    var days = (now1 - grt) / 1000 / 60 / 60 / 24;
    var dnum = Math.floor(days);

    var ascll = [
        `欢迎来到ZeroLatencyの小站!`,
        `Future is now 🍭🍭🍭`,
        `


        ▒███████▓█████ ██▀███  ▒█████  ██▓   ▄▄▄    ▄▄▄█████▓█████ ███▄    █ ▄████▓██   ██▓
        ▒ ▒ ▒ ▄▀▓█   ▀▓██ ▒ ██▒██▒  ██▓██▒  ▒████▄  ▓  ██▒ ▓▓█   ▀ ██ ▀█   █▒██▀ ▀█▒██  ██▒
        ░ ▒ ▄▀▒░▒███  ▓██ ░▄█ ▒██░  ██▒██░  ▒██  ▀█▄▒ ▓██░ ▒▒███  ▓██  ▀█ ██▒▓█    ▄▒██ ██░
          ▄▀▒   ▒▓█  ▄▒██▀▀█▄ ▒██   ██▒██░  ░██▄▄▄▄█░ ▓██▓ ░▒▓█  ▄▓██▒  ▐▌██▒▓▓▄ ▄██░ ▐██▓░
        ▒███████░▒████░██▓ ▒██░ ████▓▒░██████▓█   ▓██▒▒██▒ ░░▒████▒██░   ▓██▒ ▓███▀ ░ ██▒▓░
        ░▒▒ ▓░▒░░░ ▒░ ░ ▒▓ ░▒▓░ ▒░▒░▒░░ ▒░▓  ▒▒   ▓▒█░▒ ░░  ░░ ▒░ ░ ▒░   ▒ ▒░ ░▒ ▒  ░██▒▒▒ 
        ░░▒ ▒ ░ ▒░ ░  ░ ░▒ ░ ▒░ ░ ▒ ▒░░ ░ ▒  ░▒   ▒▒ ░  ░    ░ ░  ░ ░░   ░ ▒░ ░  ▒ ▓██ ░▒░ 
        ░ ░ ░ ░ ░  ░    ░░   ░░ ░ ░ ▒   ░ ░   ░   ▒   ░        ░     ░   ░ ░░      ▒ ▒ ░░  
          ░ ░      ░  ░  ░        ░ ░     ░  ░    ░  ░         ░  ░        ░░ ░    ░ ░     
        ░                                                                   ░      ░ ░     
                                                                                                                          
               
`,
        "小站已经苟活",
        dnum,
        "天啦!",
        "©2025 By ZeroLatency",
    ];

    setTimeout(
        console.log.bind(
            console,
            `\n%c${ascll[0]} %c ${ascll[1]} %c ${ascll[2]} %c${ascll[3]}%c ${ascll[4]}%c ${ascll[5]}\n\n%c ${ascll[6]}\n`,
            "color:#39c5bb",
            "",
            "color:#39c5bb",
            "color:#39c5bb",
            "",
            "color:#39c5bb",
            ""
        )
    );
}

createtime1();



// 重写console方法
console.log = function () { };
console.error = function () { };
console.warn = function () { };