(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{"0J66":function(n,s){n.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\n\nimport { AppComponent } from './app.component';\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      validationMessages: [\n        { name: 'required', message: 'This field is required' },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\nexport class AppModule { }\n"},"4rjj":function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FormGroup } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyFormOptions, FormlyFieldConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-app-example\'</span>,\n  templateUrl: <span class="hljs-string">\'./app.component.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppComponent {\n  form = <span class="hljs-keyword">new</span> FormGroup({});\n  model: <span class="hljs-built_in">any</span> = {};\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: <span class="hljs-string">\'text\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Text\'</span>,\n        placeholder: <span class="hljs-string">\'This is required!\'</span>,\n        required: <span class="hljs-literal">true</span>,\n        readOnly: <span class="hljs-literal">true</span>,\n      },\n    },\n  ];\n\n  submit() {\n    alert(<span class="hljs-built_in">JSON</span>.stringify(<span class="hljs-keyword">this</span>.model));\n  }\n}\n'},QSSD:function(n,s){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">form</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">"form"</span> (<span class="hljs-attr">ngSubmit</span>)=<span class="hljs-string">"submit()"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">formly-form</span> [<span class="hljs-attr">model</span>]=<span class="hljs-string">"model"</span> [<span class="hljs-attr">fields</span>]=<span class="hljs-string">"fields"</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">"options"</span> [<span class="hljs-attr">form</span>]=<span class="hljs-string">"form"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">formly-form</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary submit-button"</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">"!form.valid"</span>&gt;</span>Submit<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>\n'},SvTB:function(n,s,a){"use strict";a.r(s);var o=a("CcnG"),l=a("gIcY"),p=function(){function n(){this.form=new l.FormGroup({}),this.model={},this.options={},this.fields=[{key:"text",type:"input",templateOptions:{label:"Text",placeholder:"This is required!",required:!0,readOnly:!0}}]}return n.prototype.submit=function(){alert(JSON.stringify(this.model))},n}(),e={examples:[{title:"Disable submit button",description:"\n              This is an example of how to disable the submit button when the form is invalid.\n            ",component:p,files:[{file:"app.component.html",content:a("QSSD"),filecontent:a("YjXT")},{file:"app.component.ts",content:a("4rjj"),filecontent:a("umqV")},{file:"app.module.ts",content:a("kp1h"),filecontent:a("0J66")}]}]},r=function(){return function(){}}(),t=a("NcP4"),m=a("AcC/"),i=a("htty"),c=a("LgGJ"),d=a("MT1c"),u=a("1Q/V"),f=a("9+aI"),g=a("haId"),h=a("LJsP"),j=a("yR2A"),y=a("UFMs"),b=a("pMnS"),F=a("4o01"),v=a("Dl9q"),w=a("UcnZ"),C=a("DAbo"),k=a("9Glx"),M=o["\u0275crt"]({encapsulation:2,styles:[],data:{}});function x(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,9,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,s,a){var l=!0,p=n.component;return"submit"===s&&(l=!1!==o["\u0275nov"](n,2).onSubmit(a)&&l),"reset"===s&&(l=!1!==o["\u0275nov"](n,2).onReset()&&l),"ngSubmit"===s&&(l=!1!==p.submit()&&l),l},null,null)),o["\u0275did"](1,16384,null,0,l["\u0275angular_packages_forms_forms_bh"],[],null,null),o["\u0275did"](2,540672,null,0,l.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),o["\u0275prd"](2048,null,l.ControlContainer,null,[l.FormGroupDirective]),o["\u0275did"](4,16384,null,0,l.NgControlStatusGroup,[[4,l.ControlContainer]],null,null),(n()(),o["\u0275eld"](5,0,null,null,2,"formly-form",[],null,null,null,v.b,v.a)),o["\u0275prd"](512,null,w.a,w.a,[C.b,o.ComponentFactoryResolver,o.Injector]),o["\u0275did"](7,966656,null,0,k.a,[w.a,C.b,[8,null],[2,l.FormGroupDirective]],{form:[0,"form"],model:[1,"model"],fields:[2,"fields"],options:[3,"options"]},null),(n()(),o["\u0275eld"](8,0,null,null,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(n()(),o["\u0275ted"](-1,null,["Submit"]))],function(n,s){var a=s.component;n(s,2,0,a.form),n(s,7,0,a.form,a.model,a.fields,a.options)},function(n,s){var a=s.component;n(s,0,0,o["\u0275nov"](s,4).ngClassUntouched,o["\u0275nov"](s,4).ngClassTouched,o["\u0275nov"](s,4).ngClassPristine,o["\u0275nov"](s,4).ngClassDirty,o["\u0275nov"](s,4).ngClassValid,o["\u0275nov"](s,4).ngClassInvalid,o["\u0275nov"](s,4).ngClassPending),n(s,8,0,!a.form.valid)})}function _(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,x,M)),o["\u0275did"](1,49152,null,0,p,[],null,null)],null,null)}var S=o["\u0275ccf"]("formly-app-example",p,_,{},{},[]),q=a("Ip0R"),R=a("M2Lx"),G=a("eDkP"),N=a("Fzqc"),T=a("v9Dh"),A=a("ZYjt"),O=a("Wf4p"),D=a("mVsa"),L=a("6LlJ"),I=a("F6kA"),J=a("dWZg"),B=a("lLAP"),P=a("4c35"),U=a("qAlS"),Y=a("La40"),V=a("SMsm"),Z=a("UodH"),Q=a("5QwG"),W=a("qkla"),z=a("iZhS"),E=a("me7w"),X=a("N3PW"),H=a("l4pn"),K=a("Fv2i"),$=a("wBYW"),nn=a("IE48"),sn=a("Q4Tx"),an=a("XR12"),on=a("Nsh5"),ln=a("8mMr"),pn=a("mqvi"),en=a("lYui"),rn=a("VGFS"),tn=a("1ey0"),mn=function(){return function(){}}(),cn=a("ZYCi"),dn=a("cIcG");a.d(s,"ConfigModuleNgFactory",function(){return un});var un=o["\u0275cmf"](r,[],function(n){return o["\u0275mod"]([o["\u0275mpd"](512,o.ComponentFactoryResolver,o["\u0275CodegenComponentFactoryResolver"],[[8,[t.a,m.a,i.a,c.a,d.a,u.a,f.a,g.a,h.a,j.a,y.a,b.a,F.a,S]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["\u0275mpd"](4608,q.NgLocalization,q.NgLocaleLocalization,[o.LOCALE_ID,[2,q["\u0275angular_packages_common_common_a"]]]),o["\u0275mpd"](4608,R.c,R.c,[]),o["\u0275mpd"](4608,G.c,G.c,[G.i,G.e,o.ComponentFactoryResolver,G.h,G.f,o.Injector,o.NgZone,q.DOCUMENT,N.b,[2,q.Location]]),o["\u0275mpd"](5120,G.j,G.k,[G.c]),o["\u0275mpd"](5120,T.b,T.c,[G.c]),o["\u0275mpd"](4608,A.f,O.c,[[2,O.g],[2,O.l]]),o["\u0275mpd"](5120,D.b,D.g,[G.c]),o["\u0275mpd"](4608,L.a,L.a,[]),o["\u0275mpd"](4608,I.a,I.a,[]),o["\u0275mpd"](4608,l.FormBuilder,l.FormBuilder,[]),o["\u0275mpd"](4608,l["\u0275angular_packages_forms_forms_j"],l["\u0275angular_packages_forms_forms_j"],[]),o["\u0275mpd"](4608,w.a,w.a,[C.b,o.ComponentFactoryResolver,o.Injector]),o["\u0275mpd"](1073742336,q.CommonModule,q.CommonModule,[]),o["\u0275mpd"](1073742336,J.b,J.b,[]),o["\u0275mpd"](1073742336,R.d,R.d,[]),o["\u0275mpd"](1073742336,B.a,B.a,[]),o["\u0275mpd"](1073742336,N.a,N.a,[]),o["\u0275mpd"](1073742336,P.g,P.g,[]),o["\u0275mpd"](1073742336,U.ScrollingModule,U.ScrollingModule,[]),o["\u0275mpd"](1073742336,G.g,G.g,[]),o["\u0275mpd"](1073742336,O.l,O.l,[[2,O.d],[2,A.g]]),o["\u0275mpd"](1073742336,T.e,T.e,[]),o["\u0275mpd"](1073742336,O.v,O.v,[]),o["\u0275mpd"](1073742336,Y.j,Y.j,[]),o["\u0275mpd"](1073742336,D.e,D.e,[]),o["\u0275mpd"](1073742336,V.c,V.c,[]),o["\u0275mpd"](1073742336,Z.c,Z.c,[]),o["\u0275mpd"](1073742336,Q.b,Q.b,[]),o["\u0275mpd"](512,C.b,C.b,[]),o["\u0275mpd"](1024,C.a,function(n){return[{wrappers:[{name:"addons",component:W.a}],extensions:[{name:"addons",extension:{postPopulate:z.a}}]},{types:[{name:"input",component:E.a,wrappers:["form-field"]},{name:"checkbox",component:X.a,wrappers:["form-field"]},{name:"radio",component:H.a,wrappers:["form-field"]},{name:"select",component:K.a,wrappers:["form-field"]},{name:"textarea",component:$.a,wrappers:["form-field"]},{name:"multicheckbox",component:nn.a,wrappers:["form-field"]}],wrappers:[{name:"form-field",component:sn.a}]},an.b(n),{validationMessages:[{name:"required",message:"This field is required"}]}]},[C.b]),o["\u0275mpd"](1073742336,an.a,an.a,[C.b,[2,C.a]]),o["\u0275mpd"](1073742336,on.h,on.h,[]),o["\u0275mpd"](1073742336,ln.b,ln.b,[]),o["\u0275mpd"](1073742336,pn.a,pn.a,[]),o["\u0275mpd"](1073742336,l["\u0275angular_packages_forms_forms_bc"],l["\u0275angular_packages_forms_forms_bc"],[]),o["\u0275mpd"](1073742336,l.ReactiveFormsModule,l.ReactiveFormsModule,[]),o["\u0275mpd"](1073742336,en.a,en.a,[]),o["\u0275mpd"](1073742336,rn.a,rn.a,[]),o["\u0275mpd"](1073742336,tn.a,tn.a,[]),o["\u0275mpd"](1073742336,mn,mn,[]),o["\u0275mpd"](1073742336,cn.s,cn.s,[[2,cn.y],[2,cn.p]]),o["\u0275mpd"](1073742336,r,r,[]),o["\u0275mpd"](1024,cn.n,function(){return[[{path:"",component:dn.a,data:e}]]},[])])})},YjXT:function(n,s){n.exports='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"></formly-form>\n  <button type="submit" class="btn btn-primary submit-button" [disabled]="!form.valid">Submit</button>\n</form>\n'},kp1h:function(n,s){n.exports='<span class="hljs-keyword">import</span> { NgModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { ReactiveFormsModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n<span class="hljs-keyword">import</span> { FormlyBootstrapModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/bootstrap\'</span>;\n\n<span class="hljs-keyword">import</span> { AppComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./app.component\'</span>;\n<span class="hljs-meta">@NgModule</span>({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      validationMessages: [\n        { name: <span class="hljs-string">\'required\'</span>, message: <span class="hljs-string">\'This field is required\'</span> },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppModule { }\n'},umqV:function(n,s){n.exports="import { Component } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  model: any = {};\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: 'text',\n      type: 'input',\n      templateOptions: {\n        label: 'Text',\n        placeholder: 'This is required!',\n        required: true,\n        readOnly: true,\n      },\n    },\n  ];\n\n  submit() {\n    alert(JSON.stringify(this.model));\n  }\n}\n"}}]);