$(".d-flex").headroom();


function initViz() {
    var containerDiv = document.getElementById("vizContainer"),
        url = "http://dfcitableau.partners.org/#/site/POPC/views/POPCOutpatient/Overview?:iid=85";

    var viz = new tableau.Viz(containerDiv, url);
}

initViz();
//
// const tabi = document.getElementById('popc').contentWindow;
// // // // const innerdoc = iframe.contentDocument;
// // const ift = tabi.children[0];
// console.log(tabi.contentDocument);
// const test = innerdoc.getElementById('tab-container');
// test.addEventListener('click', () => {
//     alert('I see you');
// });


// tippy(document.querySelector('#tab-container'), {content: "I'm a tooltip!"});