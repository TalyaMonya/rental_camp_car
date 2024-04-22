import{u as o,N as s,j as e,d as i}from"./index-779f6beb.js";import{b as n,C as a}from"./CamperItem-9638e0fc.js";const c=o.div`
    display: flex;
    justify-content: center;
`,l=o.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
`,p=o.p`
    font-size: 24px;
    font-weight: 600;
    line-height: 1.25;
    max-width: 700px;
    margin-top: 40px;
    text-align: center;
    color: #000000;
`,d=o(s)`
    font-size: 30px;
    font-weight: 700;
    text-decoration: none;
    color: ${t=>t.theme.colors.red};
    position: relative;

    &::before {
        content: "";
        display: block;
        position: absolute;
        bottom: -5px;
        right: 0;
        width: 0;
        height: 4px;
        border-radius: 10px;
        border-color: ${t=>t.theme.colors.red};
        transition: ${t=>t.theme.transition};
    }

    &:hover,
    :focus {
        &::before {
            width: 100%;
            left: 0;
        }
    }
`,x=()=>e.jsx(d,{to:"/catalog",children:"Back to Catalog"}),h=()=>{const t=i(n);return e.jsx(e.Fragment,{children:t.length===0?e.jsxs(l,{children:[e.jsx(p,{children:"Hi there! It seems like the list for chosen campers is empty. Could you please add them first? Thank you!"}),e.jsx(x,{})]}):e.jsx("ul",{children:t.map(r=>e.jsx(a,{value:r},r._id))})})},m=()=>e.jsx(c,{children:e.jsx(h,{})});function g(){return e.jsx("section",{children:e.jsx(m,{})})}export{g as default};
