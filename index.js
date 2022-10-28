var bkt=0,passcount=0,load=0,truckload=0,n;
var i=1;
function display()
{
    var target = document.getElementById('target').value;
    if(target==0) target=400;
    let result = document.querySelector("#result");
    result.innerHTML =
    `Target Weight : <span>${target}</span>`
        for(;bkt<=50;)
        {
            bkt+=6;
            if(bkt>=40)
            {
                passcount++;
                activate_store();
                break;
            }

        }
}
function activate_store()
{
    document.getElementById('store').disabled = false;
    document.getElementById('sub').disabled = true;
}

function deactivate_store()
{
    document.getElementById('store').disabled = true;
}

function jane()
{
    var tar = document.getElementById('target').value;
    if(tar==0)
    {
        tar = 400;
    } 
    truckload += bkt;
    if(truckload>tar)
    {
        deactivate_store();
        bkt = truckload-tar;
        truckload=tar;
        document.getElementById('Pass_count_value').innerHTML = passcount;
        document.getElementById('Bucket_weight_value').innerHTML = bkt;
        document.getElementById('Truck_payload_value').innerHTML = truckload;
        window.alert("The Bucket has some residue of "+bkt+"Kgs");
        exit(0);
    }
    
    else
    {
        bkt=0;
    }    
    var table = document.getElementById("tbd");
    var row = table.insertRow(i);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = i;
    cell2.innerHTML = passcount;
    cell3.innerHTML = truckload;
    i++;  
    document.getElementById('Pass_count_value').innerHTML = passcount;
    document.getElementById('Bucket_weight_value').innerHTML = bkt;
    document.getElementById('Truck_payload_value').innerHTML = truckload;
    display();
} 