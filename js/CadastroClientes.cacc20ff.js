(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["CadastroClientes"],{"4b7e":function(e,l,t){"use strict";var a=t("7a23"),o=t("906a"),c=t("050a"),s=t("cdf5");l["a"]=Object(c["a"])({name:"QCardActions",props:{...o["b"],vertical:Boolean},setup(e,{slots:l}){const t=Object(o["a"])(e),c=Object(a["f"])(()=>"q-card__actions "+t.value+" q-card__actions--"+(!0===e.vertical?"vert column":"horiz row"));return()=>Object(a["p"])("div",{class:c.value},Object(s["d"])(l.default))}})},"6a67":function(e,l,t){"use strict";var a=t("7a23"),o=t("9c40"),c=t("e7a9"),s=t("050a"),n=t("1d8e"),i=t("cdf5");l["a"]=Object(s["a"])({name:"QBtnToggle",props:{...n["d"],modelValue:{required:!0},options:{type:Array,required:!0,validator:e=>e.every(e=>("label"in e||"icon"in e||"slot"in e)&&"value"in e)},color:String,textColor:String,toggleColor:{type:String,default:"primary"},toggleTextColor:String,outline:Boolean,flat:Boolean,unelevated:Boolean,rounded:Boolean,push:Boolean,glossy:Boolean,size:String,padding:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,readonly:Boolean,disable:Boolean,stack:Boolean,stretch:Boolean,spread:Boolean,clearable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","clear","click"],setup(e,{slots:l,emit:t}){const s=Object(a["f"])(()=>void 0!==e.options.find(l=>l.value===e.modelValue)),d=Object(a["f"])(()=>({type:"hidden",name:e.name,value:e.modelValue})),r=Object(n["b"])(d),u=Object(a["f"])(()=>e.options.map((l,t)=>{const{attrs:a,value:o,slot:c,...s}=l;return{slot:c,props:{key:t,onClick(e){m(o,l,e)},"aria-pressed":o===e.modelValue?"true":"false",...a,...s,outline:e.outline,flat:e.flat,rounded:e.rounded,push:e.push,unelevated:e.unelevated,dense:e.dense,disable:!0===e.disable||!0===s.disable,color:o===e.modelValue?b(s,"toggleColor"):b(s,"color"),textColor:o===e.modelValue?b(s,"toggleTextColor"):b(s,"textColor"),noCaps:!0===b(s,"noCaps"),noWrap:!0===b(s,"noWrap"),size:b(s,"size"),padding:b(s,"padding"),ripple:b(s,"ripple"),stack:!0===b(s,"stack"),stretch:!0===b(s,"stretch")}}}));function m(l,a,o){!0!==e.readonly&&(e.modelValue===l?!0===e.clearable&&(t("update:modelValue",null,null),t("clear")):t("update:modelValue",l,a),t("click",o))}function b(l,t){return void 0===l[t]?e[t]:l[t]}function p(){const t=u.value.map(e=>Object(a["p"])(o["a"],e.props,void 0!==e.slot?l[e.slot]:void 0));return void 0!==e.name&&!0!==e.disable&&!0===s.value&&r(t,"push"),Object(i["b"])(l.default,t)}return()=>Object(a["p"])(c["a"],{class:"q-btn-toggle",outline:e.outline,flat:e.flat,rounded:e.rounded,push:e.push,stretch:e.stretch,unelevated:e.unelevated,glossy:e.glossy,spread:e.spread},p)}})},"74f7":function(e,l,t){"use strict";var a=t("7a23"),o=t("0d59"),c=t("050a"),s=t("3da5"),n=t("a3ef");l["a"]=Object(c["a"])({name:"QInnerLoading",props:{...s["b"],...n["b"],showing:Boolean,color:String,size:{type:[String,Number],default:42},label:String,labelClass:String,labelStyle:[String,Array,Object]},setup(e,{slots:l}){const t=Object(a["o"])(),c=Object(s["a"])(e,t.proxy.$q),{transition:i,transitionStyle:d}=Object(n["a"])(e,Object(a["f"])(()=>e.showing)),r=Object(a["f"])(()=>"q-inner-loading absolute-full column flex-center"+(!0===c.value?" q-inner-loading--dark":"")),u=Object(a["f"])(()=>"q-inner-loading__label"+(void 0!==e.labelClass?" "+e.labelClass:""));function m(){const l=[Object(a["p"])(o["a"],{size:e.size,color:e.color})];return void 0!==e.label&&l.push(Object(a["p"])("div",{class:u.value,style:e.labelStyle},[e.label])),l}function b(){return!0===e.showing?Object(a["p"])("div",{class:r.value,style:d.value},void 0!==l.default?l.default():m()):null}return()=>Object(a["p"])(a["d"],{name:i.value,appear:!0},b)}})},b3fe:function(e,l,t){"use strict";t.d(l,"a",(function(){return c}));var a=t("7a23"),o=t("e22d");function c(){return Object(a["q"])(o["d"])}},ca13:function(e,l,t){"use strict";t.r(l);var a=t("7a23");const o=Object(a["l"])(" Você perdeu a conexão com a internet. Este aplicativo está off-line. "),c={class:"row justify-center"},s={class:"col-xs-12 col-sm-12 col-md-10 col-lg-8"},n={class:"q-pa-md"},i={class:"text-h6 text-primary"},d={class:"col-xs-12 col-sm-12 col-md-12 col-lg-12"},r={class:"col-xs-12 col-sm-12 col-md-12 col-lg-12"},u={class:"col-xs-12 col-sm-12 col-md-6 col-lg-6"},m={class:"col-xs-12 col-sm-12 col-md-6 col-lg-6"},b={class:"col-xs-12 col-sm-12 col-md-6 col-lg-6"},p={class:"col-xs-12 col-sm-12 col-md-6 col-lg-6"},O={class:"col-xs-9 col-sm-9 col-md-6 col-lg-6"},g={class:"col-xs-3 col-sm-3 col-md-2 col-lg-2"},j={class:"col-xs-12 col-sm-12 col-md-4 col-lg-4"},h={class:"col-xs-12 col-sm-12 col-md-4 col-lg-4"},f={class:"col-xs-12 col-sm-12 col-md-4 col-lg-4"},v={class:"col-xs-12 col-sm-12 col-md-4 col-lg-4"},V={class:"col-xs-12 col-sm-12 col-md-12 col-lg-12 text-primary"},y={class:"col-xs-12 col-sm-12 col-md-6 col-lg-6"},k={class:"col-xs-12 col-sm-12 col-md-6 col-lg-6"};function x(e,l,t,x,q,w){const C=Object(a["L"])("Header"),U=Object(a["L"])("q-btn"),_=Object(a["L"])("q-banner"),B=Object(a["L"])("q-card-section"),S=Object(a["L"])("q-input"),z=Object(a["L"])("q-btn-toggle"),L=Object(a["L"])("q-inner-loading"),Q=Object(a["L"])("q-card-actions"),T=Object(a["L"])("q-card"),P=Object(a["L"])("q-page"),E=Object(a["L"])("q-page-container"),N=Object(a["L"])("q-layout");return Object(a["E"])(),Object(a["h"])(N,{class:"bg-grey-4",view:"lHh Lpr lFf"},{default:Object(a["U"])(()=>[Object(a["m"])(C,{cmail:e.cmail,labelDashboard:e.labelDashboard},null,8,["cmail","labelDashboard"]),Object(a["m"])(E,null,{default:Object(a["U"])(()=>[Object(a["m"])(P,null,{default:Object(a["U"])(()=>[Object(a["m"])(_,{"inline-actions":"",class:"text-white bg-red",style:{display:"none"}},{action:Object(a["U"])(()=>[Object(a["m"])(U,{flat:"",color:"white",label:"Ativar Wi-Fi"})]),default:Object(a["U"])(()=>[o]),_:1}),Object(a["k"])("div",c,[Object(a["k"])("div",s,[Object(a["k"])("div",n,[Object(a["m"])(T,{flat:"",bordered:"",class:"bg-white"},{default:Object(a["U"])(()=>[Object(a["k"])("form",{id:"client-form",onSubmit:l[15]||(l[15]=Object(a["X"])((...e)=>w.createclient&&w.createclient(...e),["prevent"]))},[Object(a["m"])(B,{class:"bg-grey-1"},{default:Object(a["U"])(()=>[Object(a["k"])("div",i,Object(a["P"])(x.pageTitle),1)]),_:1}),Object(a["m"])(B,{class:"row q-col-gutter-md"},{default:Object(a["U"])(()=>[Object(a["k"])("div",d,[Object(a["m"])(S,{outlined:"",modelValue:q.name,"onUpdate:modelValue":l[0]||(l[0]=e=>q.name=e),label:"Nome do tutor*",rules:[e=>!!e||"Esse campo é obrigatório!"]},null,8,["modelValue","rules"])]),Object(a["k"])("div",r,[Object(a["m"])(S,{outlined:"",type:"email",modelValue:q.email,"onUpdate:modelValue":l[1]||(l[1]=e=>q.email=e),label:"E-mail do tutor*",rules:[e=>!!e||"Esse campo é obrigatório!"]},null,8,["modelValue","rules"])]),Object(a["k"])("div",u,[Object(a["m"])(S,{outlined:"",modelValue:q.cpf,"onUpdate:modelValue":l[2]||(l[2]=e=>q.cpf=e),label:"CPF*",mask:"###.###.###-##","fill-mask":"_",rules:[e=>!!e||"Esse campo é obrigatório!"]},null,8,["modelValue","rules"])]),Object(a["k"])("div",m,[Object(a["m"])(S,{outlined:"",modelValue:q.rg,"onUpdate:modelValue":l[3]||(l[3]=e=>q.rg=e),label:"RG",mask:"###.###.###-#","fill-mask":"_"},null,8,["modelValue"])])]),_:1}),Object(a["m"])(B,{class:"row q-col-gutter-md"},{default:Object(a["U"])(()=>[Object(a["k"])("div",b,[Object(a["m"])(S,{outlined:"",modelValue:q.phone,"onUpdate:modelValue":l[4]||(l[4]=e=>q.phone=e),label:"Telefone*",mask:"(##) # ####-####","fill-mask":"_",rules:[e=>!!e||"Esse campo é obrigatório!"]},null,8,["modelValue","rules"])]),Object(a["k"])("div",p,[Object(a["m"])(S,{outlined:"",modelValue:q.phone2,"onUpdate:modelValue":l[5]||(l[5]=e=>q.phone2=e),label:"Outro Telefone",mask:"(##) ####-####","fill-mask":"_"},null,8,["modelValue"])])]),_:1}),Object(a["m"])(B,{class:"row q-col-gutter-md"},{default:Object(a["U"])(()=>[Object(a["k"])("div",O,[Object(a["m"])(S,{outlined:"",modelValue:q.address,"onUpdate:modelValue":l[6]||(l[6]=e=>q.address=e),label:"Endereço"},null,8,["modelValue"])]),Object(a["k"])("div",g,[Object(a["m"])(S,{outlined:"",type:"number",modelValue:q.number,"onUpdate:modelValue":l[7]||(l[7]=e=>q.number=e),label:"Número"},null,8,["modelValue"])]),Object(a["k"])("div",j,[Object(a["m"])(S,{outlined:"",modelValue:q.complement,"onUpdate:modelValue":l[8]||(l[8]=e=>q.complement=e),label:"Complemento"},null,8,["modelValue"])]),Object(a["k"])("div",h,[Object(a["m"])(S,{outlined:"",modelValue:q.district,"onUpdate:modelValue":l[9]||(l[9]=e=>q.district=e),label:"Bairro"},null,8,["modelValue"])]),Object(a["k"])("div",f,[Object(a["m"])(S,{outlined:"",modelValue:q.city,"onUpdate:modelValue":l[10]||(l[10]=e=>q.city=e),label:"Cidade"},null,8,["modelValue"])]),Object(a["k"])("div",v,[Object(a["m"])(S,{outlined:"",modelValue:q.zipcode,"onUpdate:modelValue":l[11]||(l[11]=e=>q.zipcode=e),label:"CEP",mask:"#####-###","fill-mask":"_"},null,8,["modelValue"])])]),_:1}),Object(a["m"])(B,{class:"row q-col-gutter-md"},{default:Object(a["U"])(()=>[Object(a["m"])(z,{modelValue:q.status,"onUpdate:modelValue":l[12]||(l[12]=e=>q.status=e),spread:"","no-caps":"",unelevated:"","toggle-color":"primary",color:"grey-2","text-color":"primary",options:[{label:"Ativar",value:"active"},{label:"Inativar",value:"inactive"},{label:"Bloquear",value:"blocked"},{label:"Deletar",value:"deleted"}]},null,8,["modelValue"])]),_:1}),Object(a["m"])(B,{class:"row q-col-gutter-md"},{default:Object(a["U"])(()=>[Object(a["k"])("div",V,Object(a["P"])(x.pageSubTitle),1),Object(a["k"])("div",y,[Object(a["m"])(S,{outlined:"",modelValue:q.othername,"onUpdate:modelValue":l[13]||(l[13]=e=>q.othername=e),label:"Nome do Contato"},null,8,["modelValue"])]),Object(a["k"])("div",k,[Object(a["m"])(S,{outlined:"",modelValue:q.otherphone,"onUpdate:modelValue":l[14]||(l[14]=e=>q.otherphone=e),label:"Celular",mask:"(##) # ####-####","fill-mask":"_"},null,8,["modelValue"])])]),_:1}),Object(a["m"])(Q,{vertical:"",align:"around"},{default:Object(a["U"])(()=>[Object(a["m"])(U,{type:"submit",loading:x.submitting,size:"14px",icon:"las la-cloud-upload-alt",label:"Cadastrar cliente",color:"primary text-uppercase q-ma-lg"},{loading:Object(a["U"])(()=>[Object(a["m"])(L,{showing:e.visible,label:"Aguarde...","label-class":"text-teal","label-style":"font-size: 1.1em"},null,8,["showing"])]),_:1},8,["loading"])]),_:1})],32)]),_:1})])])])]),_:1})]),_:1})]),_:1})}var q=t("b3fe"),w=t("0418");const C={origin:"agpublick.com.br",url:"https://agpublick.com.br/invet/api/clients"};var U={name:"Home",search:"Pesquisar",components:{Header:w["a"]},setup(){const e=Object(q["a"])(),l=Object(a["J"])(!1);return{setup:C,submitting:l,pageTitle:"Cadastro de Clientes",pageSubTitle:"Pessoa autorizada",showNotif(l,t,a){e.notify({message:l,color:t,icon:a})}}},data(){return{name:null,email:null,cpf:null,rg:null,phone:null,phone2:null,address:null,number:null,complement:null,district:null,city:null,zipcode:null,othername:null,otherphone:null,status:"active"}},methods:{async createclient(){this.submitting=!0,console.log("salvo");const e={name:this.name,email:this.email,cpf:this.cpf,rg:this.rg,phone:this.phone,phone2:this.phone2,address:this.address,number:this.number,complement:this.complement,district:this.district,city:this.city,zipcode:this.zipcode,othername:this.othername,otherphone:this.otherphone,status:this.status},l=JSON.stringify(e);if(console.log(l),e.name&&e.cpf&&e.email&&e.phone){const e=await fetch(this.setup.url,{method:"POST",mode:"cors",headers:{Origin:this.setup.origin,Accept:"application/json, text/javascript, */*; q=0.01","Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},body:l}),t=await e.json();"success"===t.status?(this.name="",this.email="",this.cpf="",this.rg="",this.phone="",this.phone2="",this.address="",this.number="",this.complement="",this.district="",this.city="",this.zipcode="",this.othername="",this.otherphone="",this.status="",this.showNotif(t.data,"green","las la-thumbs-up"),this.$router.go(-1)):this.showNotif(t.data,"red","las la-bomb")}else this.showNotif("Por favor. Os campos com * são obrigatórios.","red","las la-exclamation-triangle");this.submitting=!1}},mounted(){}},_=t("6b0d"),B=t.n(_),S=t("4d5a"),z=t("09e3"),L=t("9989"),Q=t("54e1"),T=t("9c40"),P=t("f09f"),E=t("a370"),N=t("27f9"),A=t("6a67"),D=t("4b7e"),F=t("74f7"),H=t("93dc"),I=t.n(H);const J=B()(U,[["render",x]]);l["default"]=J;I()(U,"components",{QLayout:S["a"],QPageContainer:z["a"],QPage:L["a"],QBanner:Q["a"],QBtn:T["a"],QCard:P["a"],QCardSection:E["a"],QInput:N["a"],QBtnToggle:A["a"],QCardActions:D["a"],QInnerLoading:F["a"]})}}]);
//# sourceMappingURL=CadastroClientes.cacc20ff.js.map