$(document).ready(function(){
    


    let screen = document.getElementsByClassName("screen")[0];
    let data = [
        {
            "name": "YouTube",
            "img": "https://findicons.com/files/icons/2088/extreme_grunge_garments/128/youtube.png",
            "link": "https://www.youtube.com"
        },
        {
            "name": "Twitch",
            "img": "http://blog.logicalincrements.com/wp-content/uploads/2016/01/twitchlogo.jpg",
            "link": "https://www.twitch.tv"
        },
        {
            "name": "Discord",
            "img": "https://clipartcraft.com/images/discord-logo-transparent-circle-4.png",
            "link": "https://www.discord.com"
        }
    ];



    function createDial(n,i,l){
        let dialText = "";
        let dial = document.createElement('div');
        dial.classList = "dial";  
        dialText+= "<a href='"+ l +"'><img src='"+ i +"'></a>";
        dial.innerHTML = dialText;

        screen.append(dial);
    }


    function init(){
        let name,image,link;
        for(let j=0; j < data.length; j++){
            let d = data[j];
            name = d.name;
            image = d.img;
            link = d.link;
            createDial(name,image,link);
        }
    }

init();


});
