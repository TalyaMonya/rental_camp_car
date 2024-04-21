import{u as t,N as r,j as e}from"./index-24962ecc.js";const n="/rental_camp_car/assets/background-0a7006a3.jpeg",a=t.div`
    position: absolute;
    top: 50px;
    height: 100vh;
    width: 100%;
    background-image: url(${n});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    padding-top: 50px;
`,i=t.h1`
    font-size: 35px;
    max-width: 660px;
    text-align: center;
    color: #000000;
    margin-bottom: 125px;
`,c=t.div`
display: flex;
    width: 400px;
    padding: 5px 15px;
    background-color: ${o=>o.theme.colors.lightgrey};
    border-radius: 33px;
    margin-bottom: 70px;
`,s=t.p`
    font-size: 22px;
    text-align: center;
    color: ${o=>o.theme.colors.black};
    
`,d=t(r)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    font-weight: 400;
    font-size: 28px;
    line-height: 1.5;
    border-radius: 150px;
    padding: 18px 20px;
    text-align: center;

    margin-left: auto;
    margin-right: auto;

    text-decoration: none;
    color: #fff7ed;
    background-color: ${o=>o.theme.colors.red};

    &:hover,
    :focus {
        background-color: ${o=>o.theme.colors.hoverRed};
    }
`,l=()=>e.jsx(e.Fragment,{children:e.jsxs(a,{children:[e.jsx(i,{children:"Our company UkrCampers will help you choose Campers for active recreation and travel"}),e.jsx(c,{children:e.jsx(s,{children:"“The world is a book, and those who do not travel have time to read only the first page” - Art. Augustine."})}),e.jsx(d,{to:"/catalog",children:"Find your camper"})]})});function g(){return e.jsx("section",{children:e.jsx(l,{})})}export{g as default};
