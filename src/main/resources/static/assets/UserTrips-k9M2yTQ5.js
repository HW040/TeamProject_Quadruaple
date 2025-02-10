import{R as T,f as k,r as a,g as C,a as I,j as e,B as E}from"./index-YXlYzo5D.js";import{A as m}from"./index-CniA-3ne.js";import{T as F}from"./TitleHeader-CO4TmWfs.js";import{L}from"./pic-Bp3CpqNF.js";import{F as S}from"./Footer-Dlg2Dnw3.js";import{a as $}from"./axios-upsvKRUO.js";import{j as u}from"./jwt-B7E1_7hB.js";import{F as B}from"./index-Bf5hL2Gb.js";import{F as D}from"./index-CQw5jX9G.js";import{I as P}from"./index-21tJCDdo.js";import"./collapse-BbEVqHco.js";import"./index-CETnFBLH.js";import"./index-B4chUOCm.js";import"./BaseInput-HRGnWluz.js";const U=["다가오는 여행","완료된 여행"],te=()=>{var d,f;const[h,R]=T(k),[z,j]=a.useState({}),[r,g]=a.useState({});D.useForm();const n=C("accessToken"),[N,b]=a.useState(""),[l,v]=a.useState(0);a.useEffect(()=>{},[r]),a.useEffect(()=>{},[l]);const x=async()=>{try{const t=(await u.get("/api/trip-list",{headers:{Authorization:`Bearer ${n}`}})).data,i=t.beforeTripList,K=t.afterTripList;g(t.data)}catch(s){console.log("여행 목록 불러오기:",s)}},w=async()=>{const s={inviteKey:N};try{const i=(await $.post("/api/trip/user",s,{headers:{Authorization:`Bearer ${n}`}})).data;i.code==="200 성공"&&(x(),o(`/schedule/index?tripId=${i.data}`))}catch(t){console.log("구성원 추가",t)}},y=async()=>{try{const t=(await u.get("/api/user/userInfo")).data;j(t.data)}catch(s){console.log("유저 정보",s)}};a.useEffect(()=>{h.accessToken&&(x(),y())},[]);const o=I(),A=()=>{o(-1)},p=s=>{console.log(s),o(`/schedule/index?tripId=${s.tripId}`)};a.useEffect(()=>{},[l]);const[c,H]=a.useState("Show");return a.useMemo(()=>c==="Hide"?!1:c==="Show"?!0:{pointAtCenter:!0},[c]),e.jsxs("div",{className:"flex flex-col gap-[30px]",children:[e.jsx(F,{icon:"back",title:"여행",onClick:A}),e.jsxs("div",{className:"px-[32px] flex flex-col gap-[5px]",children:[e.jsxs("div",{className:"flex items-center gap-[5px]",children:[e.jsx("p",{className:"text-slate-500 text-[18px] font-semibold",children:"여행코드"}),e.jsxs(E,{type:"Outlined",className:"group flex items-center focus:",children:[e.jsx(B,{className:"text-[18px] text-slate-300 group-hover:text-[#b8c8d1] transition-all duration-300"}),e.jsx("p",{className:"text-slate-300 w-0 group-hover:w-[350px] overflow-hidden transition-all duration-300",children:"생성된 일정에서 일정 코드를 받아 친구를 초대해보세요!"})]})]}),e.jsx(P,{placeholder:"친구와 여행을 함께하기 위해 코드를 입력해주세요",className:"px-[32px] py-[20px] h-[79px]",onChange:s=>b(s.target.value),onKeyDown:s=>{s.code==="Enter"&&w()}})]}),e.jsx("div",{className:"px-[32px]",children:e.jsx("ul",{className:"flex items-center",children:U.map((s,t)=>e.jsx("li",{className:`cursor-pointer w-full flex justify-center items-center
                            pt-[17px] pb-[16px]
                            ${l===t?"text-primary border-b-[2px] border-primary":"text-slate-400 border-b border-slate-200"}`,onClick:()=>{v(t)},children:s},t))})}),e.jsxs("div",{className:"px-[28px] mb-[40px]",children:[l===0&&e.jsx("ul",{className:"flex flex-col gap-[40px]",children:(d=r==null?void 0:r.beforeTripList)==null?void 0:d.map((s,t)=>e.jsxs("li",{className:"flex items-center justify-between",onClick:()=>{p(s)},children:[e.jsxs("div",{className:"flex items-center gap-[29px]",children:[e.jsx("div",{className:"w-[100px] h-[100px] bg-slate-100 rounded-full overflow-hidden",children:e.jsx("img",{src:`${L}${s.locationPic}`,alt:s.title,className:"w-full h-full"})}),e.jsxs("div",{className:"flex flex-col gap-[5px]",children:[e.jsx("h3",{className:"text-[24px] text-slate-700 font-semibold",children:s.title}),e.jsxs("p",{className:"text-[18px] text-slate-500",children:[e.jsx("span",{children:s.startAt}),"~",e.jsx("span",{children:s.endAt})]})]})]}),e.jsx("button",{className:"w-[36px] h-[36px] bg-slate-100 px-[10px] py-[10px] rounded-full",children:e.jsx(m,{className:"text-slate-400"})})]},t))}),l===1&&e.jsx("ul",{className:"flex flex-col gap-[40px]",children:(f=r.afterTripList)==null?void 0:f.map((s,t)=>e.jsxs("li",{className:"flex items-center justify-between",onClick:()=>{p(s)},children:[e.jsxs("div",{className:"flex items-center gap-[29px]",children:[e.jsx("div",{className:"w-[100px] h-[100px] bg-slate-100 rounded-full",children:e.jsx("img",{src:"",alt:""})}),e.jsxs("div",{className:"flex flex-col gap-[5px]",children:[e.jsx("h3",{className:"text-[24px] text-slate-700 font-semibold",children:s.title}),e.jsxs("p",{className:"text-[18px] text-slate-500",children:[e.jsx("span",{children:s.startAt}),"~",e.jsx("span",{children:s.endAt})]})]})]}),e.jsx("button",{className:"w-[36px] h-[36px] bg-slate-100 px-[10px] py-[10px] rounded-full",children:e.jsx(m,{className:"text-slate-400"})})]},t))})]}),e.jsx(S,{})]})};export{te as default};
