
window.addEventListener("load", (event) => {
    /*
    document.getElementById('fullname').value = "Marcelo Augusto";
    document.getElementById('gender_m').checked = true;
    document.getElementById('newsletter').checked = true;
    document.getElementById('contact_type').value = "comercial";
    document.getElementById('message').value = "Debug";
    */
});

document.getElementById("formulario").addEventListener("submit", function(event){
    try {
        event.preventDefault();
        document.getElementById("btnEnviar").innerHTML = '<i class="fa fa-spinner fa-pulse fa-fw"></i>"';
        document.getElementById("btnEnviar").disabled = true;
            let container = [];
            let arrItem = {};
            let json_data = (document.getElementById('json_data').value).trim();
            let fullname = document.getElementById('fullname').value;
            let gender = document.querySelector('input[name=gender]:checked').value
            let newsletter = document.querySelector('input[name=newsletter]').checked;
            let contact_type = document.getElementById('contact_type').value;
            let message = document.getElementById('message').value;
            if(json_data.length > 0) {
                container = JSON.parse(json_data);
            } 
            arrItem.fullname = fullname;
            arrItem.gender = gender;
            arrItem.newsletter = newsletter;
            arrItem.contact_type = contact_type;
            arrItem.message = message;
            container.push(arrItem);
            document.getElementById('json_data').value = JSON.stringify(container);
            document.getElementById("btnEnviar").innerHTML = 'Enviar';
            document.getElementById("btnEnviar").disabled = false;
            let table = "";
            table+= "<table width='100%' cellpadding='3' cellspaccing='2' style='border: solid 1px #cdcdcd;'>";
            table+= "<thead>";
                table+= "<tr style='background-color: #CDCDCD; font-size: 11px !important;'>";
                    table+= "<td width='40%'>Nome Completo</td>";
                    table+= "<td width='30%'>Sexo</td>";
                    table+= "<td width='30%'>Tipo de Contato</td>";
                table+= "</tr>";
            table+= "</thead>";
            for(var k in container) {
                console.log(k, container[k]);
                table+= "<tr style='font-size: 11px !important;'>";
                    table+= "<td width='40%'>"+container[k].fullname+"</td>";
                    table+= "<td width='30%'>"+container[k].gender+"</td>";
                    table+= "<td width='30%'>"+container[k].contact_type+"</td>";
                table+= "</tr>";
            }
            table+= "</table>";
            document.getElementById("container_item").innerHTML = table;
    } catch(e) {
        console.log(e);
    }  
});