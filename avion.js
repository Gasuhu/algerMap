function addAvion(id,Debut)
{
    let station=document.getElementById(Debut)
    let posY=station.cy.baseVal.value-5
    let posX=station.cx.baseVal.value-10.5
    d3.select('svg')
    .append("image")
    .attr('xlink:href', 'airplane.png')
    .attr('width', 15)
    .attr('height', 15)
    .attr('id',id)
    .attr("posx",posX)
    .attr("posy",posY)
    .attr('x',0)
    .attr('y',0)
    .attr('style', "transform: translate("+posX+"px, "+posY+"px) rotate(-45deg)")

    document.getElementsByTagName("g")[0].appendChild(document.getElementById(id))
}
function drawAvion(id,x,y)
{
   
    
    let posX=proj([x,y])[0]-10.5
    let posY=proj([x,y])[1]-5
    d3.select('svg')
    .append("image")
    .attr('xlink:href', 'airplane.png')
    .attr('width', 15)
    .attr('height', 15)
    .attr('id',id)
    .attr("posx",posX)
    .attr("posy",posY)
    .attr('x',0)
    .attr('y',0)
    .attr('style', "transform: translate("+posX+"px, "+posY+"px) rotate(-45deg)")

    document.getElementsByTagName("g")[0].appendChild(document.getElementById(id))
}
function avionEnDanger(id)
{
    document.getElementById(id).setAttribute('href','airplaneDanger.png')
}
function avionSave(id)
{
    document.getElementById(id).setAttribute('href','airplane.png')
}
function avionLowFuel(id)
{
    document.getElementById(id).setAttribute('href','airplaneCarboranetLow.png')
}
function avionDead(id)
{
    document.getElementById(id).setAttribute('href','airplaneDead.png')
}
function kill(id)
{
    document.getElementById(id).remove()
}

function move(id,x,y)
{
    let posx=parseFloat(document.getElementById(id).getAttribute("posx"))+x;
    let posy=document.getElementById(id).getAttribute("posy")-y;
    
    document.getElementById(id).style.transform="translate("+posx+"px, "+(posy)+"px) rotate(-45deg)"
    document.getElementById(id).setAttribute("posx",posx)
    document.getElementById(id).setAttribute("posy",posy)
}
function moveAvion(id,x,y)
{
    let posX=proj([x,y])[0]-10.5
    let posY=proj([x,y])[1]-5
    document.getElementById(id).style.transform="translate("+posX+"px, "+(posY)+"px) rotate(-45deg)"
}