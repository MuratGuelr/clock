let user = prompt('Lütfen isminizi giriniz! (0 - 10) : ')
let usert = user.toUpperCase()

document.getElementById('myname').innerHTML = usert
setTimeout(showtime, 1000);

        function showtime(){
            const today = new Date();
            let h = today.getHours();
            let m = today.getMinutes();
            let s = today.getSeconds();

            m = checkTime(m);
            s = checkTime(s);

            document.getElementById('clock').innerHTML = h + ':' + m + ':' + s;
            setTimeout(showtime, 1000);
        }

        function checkTime(i) {
            if (i < 10) {i = "0" + i};
            return i;
        }
        showtime();
