document.addEventListener('DOMContentLoaded', function (event) {

    const GET = "GET";
    const POST = "POST";

    let registrationForm = document.getElementById("registration-form");
    let loginInput = document.getElementById("login");

    loginInput.addEventListener("change", checkLoginAvailability);

    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault();
        console.log("zatrzymałem");

        let loginInput = document.getElementById("login");
        let baseUrl = "https://pi.iem.pw.edu.pl/user/";
        let userUrl = baseUrl + loginInput.value;

        fetch(userUrl, {method: GET}).then(function (resp) {
            console.log(resp.status);
            if( resp.status == 404) {
                registrationForm.submit();
            }
            else {
                alert('Login jest już zajęty');
            }
        }).catch(function (err) {
            console.log(err);
            return err.status;
        });

        var n = event.srcElement.length;
        for (var i = 0; i < n; i++) {
            console.log(event.srcElement[i].value);
        }
    });

    function checkLoginAvailability() {
        let loginInput = document.getElementById("login");
        let baseUrl = "https://pi.iem.pw.edu.pl/user/";
        let userUrl = baseUrl + loginInput.value;

        fetch(userUrl, {method: GET}).then(function (resp) {
            console.log(resp.status);
            return resp.status;
        }).catch(function (err) {
            console.log(err);
            return err.status;
        });
    }
});

function comparePass() {
    if(document.getElementById("pass1").value != document.getElementById("pass2").value)
    {
        alert('UWAGA: podane hasła się różnią!');
        document.getElementById("pass1").value = "";
        document.getElementById("pass2").value = "";
        return false;
    } else {
        return true;
    }
}

