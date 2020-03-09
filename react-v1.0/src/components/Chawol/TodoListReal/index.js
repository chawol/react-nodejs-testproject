import React from "react";
import Main from "./js/main.jsx"
import css from "./stylesheet/index.css"

let cssId = 'myCss';  // you could encode the css path itself to generate id..
let cssFA ='FontAwsome';
if (!document.getElementById(cssId)) {
    let head = document.getElementsByTagName('head')[0];
    let link = document.createElement('link');
    link.id = cssId;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = css;
    link.media = 'all';
    head.appendChild(link);
}
if (!document.getElementById(cssFA)) {
    let head = document.getElementsByTagName('head')[0];
    let link = document.createElement('link');
    link.id = cssFA;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = "https://use.fontawesome.com/releases/v5.4.1/css/all.css";
    link.integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz";
    link.crossOrigin="anonymous"
    // link.media = 'all';
    head.appendChild(link);
}



class Index extends React.Component {
    render() {
        return <Main></Main>
    }
}

export default Index;