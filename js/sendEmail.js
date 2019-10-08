document.getElementById('send').addEventListener('click', restCall);

function restCall() {
    var email = document.getElementById("formGroupExampleInput2").value;
    var nombreEntidad = document.getElementById("formGroupExampleInput").value;

    let Data =
    {
        "toEmails": [
            "cts.prescriptiva@carvajal.com"],
        "subject": "Aqui.work - Contacto",
        "message": " Somos " + nombreEntidad + " " + "Deseo que se contacte con nosotros por favor,  mi email es el siguiente " + email
    }




    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(Data)
    }

    if (email == "") {
        location.reload();
    } else {
        fetch('https://0gqxxhb0wb.execute-api.us-east-1.amazonaws.com/Prod/send/', options)
            .then(function (response) {

                $("#exampleModal1").modal('hide')
                document.getElementById("form1").reset();

                $("#exampleModal2").modal('toggle')
            })
    }




}