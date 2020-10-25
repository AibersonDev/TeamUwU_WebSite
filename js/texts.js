$.getJSON('', response => typeText(response.servers)).catch(o_O => typeText());

function typeText(servers = null) {
    const strings = ["Team UwU"];
    strings.push(...[
        "Te ayudamos a desarrollar tus bots.",
        "Quieres un bot? te vendemos uno!",
        "Contamos con la mejor seleccion de bots."
    ]);

    new TypeIt("#typingtext", {
        breakLines: false,
        strings,
        speed: 93,
        loop: true,
        deletespeed: 1,
        nextStringDelay: 3000,
        waitUntilVisible: true
    });
};