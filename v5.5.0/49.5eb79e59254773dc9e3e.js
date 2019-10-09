(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{BHAy:function(n,s){n.exports='<span class="hljs-keyword">import</span> { NgModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { ReactiveFormsModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n<span class="hljs-keyword">import</span> { FormlyBootstrapModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/bootstrap\'</span>;\n\n<span class="hljs-keyword">import</span> { AppComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./app.component\'</span>;\n<span class="hljs-meta">@NgModule</span>({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot(),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppModule { }\n'},CEGK:function(n,s){n.exports="import { Component } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  model: any = {};\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: 'text',\n      type: 'input',\n      templateOptions: {\n        label: 'Some awesome text',\n        placeholder: 'Some sweet text',\n        required: true,\n      },\n    },\n    {\n      key: 'candy',\n      type: 'select',\n      templateOptions: {\n        label: 'Multiple Options',\n        options: [\n          { label: 'Snickers', value: 'snickers' },\n          { label: 'Baby Ruth', value: 'baby_ruth' },\n          { label: 'Milky Way', value: 'milky_way' },\n        ],\n      },\n    },\n  ];\n\n  submit() {\n    alert(JSON.stringify(this.model));\n  }\n}\n"},Jl8s:function(n,s){n.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\n\nimport { AppComponent } from './app.component';\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot(),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\nexport class AppModule { }\n"},R8DO:function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FormGroup } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyFormOptions, FormlyFieldConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-app-example\'</span>,\n  templateUrl: <span class="hljs-string">\'./app.component.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppComponent {\n  form = <span class="hljs-keyword">new</span> FormGroup({});\n  model: <span class="hljs-built_in">any</span> = {};\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: <span class="hljs-string">\'text\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Some awesome text\'</span>,\n        placeholder: <span class="hljs-string">\'Some sweet text\'</span>,\n        required: <span class="hljs-literal">true</span>,\n      },\n    },\n    {\n      key: <span class="hljs-string">\'candy\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'select\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Multiple Options\'</span>,\n        options: [\n          { label: <span class="hljs-string">\'Snickers\'</span>, value: <span class="hljs-string">\'snickers\'</span> },\n          { label: <span class="hljs-string">\'Baby Ruth\'</span>, value: <span class="hljs-string">\'baby_ruth\'</span> },\n          { label: <span class="hljs-string">\'Milky Way\'</span>, value: <span class="hljs-string">\'milky_way\'</span> },\n        ],\n      },\n    },\n  ];\n\n  submit() {\n    alert(<span class="hljs-built_in">JSON</span>.stringify(<span class="hljs-keyword">this</span>.model));\n  }\n}\n'},Y6ia:function(n,s,l){"use strict";l.r(s);var a=l("CcnG"),o=l("gIcY"),t=function(){function n(){this.form=new o.FormGroup({}),this.model={},this.options={},this.fields=[{key:"text",type:"input",templateOptions:{label:"Some awesome text",placeholder:"Some sweet text",required:!0}},{key:"candy",type:"select",templateOptions:{label:"Multiple Options",options:[{label:"Snickers",value:"snickers"},{label:"Baby Ruth",value:"baby_ruth"},{label:"Milky Way",value:"milky_way"}]}}]}return n.prototype.submit=function(){alert(JSON.stringify(this.model))},n}(),p={examples:[{title:"Reset Model",description:'\n              <h3>Reset and Update Initial Values</h3>\n              <div>\n                Just try this:\n                <ol>\n                  <li>Fill out some fields</li>\n                  <li>Click "Reset"</li>\n                  <li>Fill out fields again</li>\n                  <li>Click "Update Initial Values"</li>\n                  <li>Click "Reset"</li>\n                  <li>Change some fields</li>\n                  <li>Click "Reset"</li>\n                </ol>\n              </div>\n            ',component:t,files:[{file:"app.component.html",content:l("t7Wt"),filecontent:l("xMph")},{file:"app.component.ts",content:l("R8DO"),filecontent:l("CEGK")},{file:"app.module.ts",content:l("BHAy"),filecontent:l("Jl8s")}]}]},e=function(){return function(){}}(),r=l("NcP4"),m=l("AcC/"),i=l("htty"),c=l("LgGJ"),u=l("MT1c"),d=l("1Q/V"),f=l("9+aI"),h=l("haId"),g=l("LJsP"),y=l("yR2A"),b=l("UFMs"),j=l("pMnS"),k=l("4o01"),w=l("Dl9q"),F=l("UcnZ"),v=l("DAbo"),C=l("9Glx"),M=a["\u0275crt"]({encapsulation:2,styles:[],data:{}});function x(n){return a["\u0275vid"](0,[(n()(),a["\u0275eld"](0,0,null,null,13,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,s,l){var o=!0,t=n.component;return"submit"===s&&(o=!1!==a["\u0275nov"](n,2).onSubmit(l)&&o),"reset"===s&&(o=!1!==a["\u0275nov"](n,2).onReset()&&o),"ngSubmit"===s&&(o=!1!==t.submit()&&o),o},null,null)),a["\u0275did"](1,16384,null,0,o["\u0275angular_packages_forms_forms_bh"],[],null,null),a["\u0275did"](2,540672,null,0,o.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),a["\u0275prd"](2048,null,o.ControlContainer,null,[o.FormGroupDirective]),a["\u0275did"](4,16384,null,0,o.NgControlStatusGroup,[[4,o.ControlContainer]],null,null),(n()(),a["\u0275eld"](5,0,null,null,2,"formly-form",[],null,null,null,w.b,w.a)),a["\u0275prd"](512,null,F.a,F.a,[v.b,a.ComponentFactoryResolver,a.Injector]),a["\u0275did"](7,966656,null,0,C.a,[F.a,v.b,[8,null],[2,o.FormGroupDirective]],{form:[0,"form"],model:[1,"model"],fields:[2,"fields"],options:[3,"options"]},null),(n()(),a["\u0275eld"](8,0,null,null,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],null,null,null,null,null)),(n()(),a["\u0275ted"](-1,null,["Submit"])),(n()(),a["\u0275eld"](10,0,null,null,1,"button",[["class","btn btn-default"],["type","button"]],null,[[null,"click"]],function(n,s,l){var a=!0;return"click"===s&&(a=!1!==n.component.options.resetModel()&&a),a},null,null)),(n()(),a["\u0275ted"](-1,null,["Reset"])),(n()(),a["\u0275eld"](12,0,null,null,1,"button",[["class","btn btn-default"],["type","button"]],null,[[null,"click"]],function(n,s,l){var a=!0;return"click"===s&&(a=!1!==n.component.options.updateInitialValue()&&a),a},null,null)),(n()(),a["\u0275ted"](-1,null,["Update Intial Values"]))],function(n,s){var l=s.component;n(s,2,0,l.form),n(s,7,0,l.form,l.model,l.fields,l.options)},function(n,s){n(s,0,0,a["\u0275nov"](s,4).ngClassUntouched,a["\u0275nov"](s,4).ngClassTouched,a["\u0275nov"](s,4).ngClassPristine,a["\u0275nov"](s,4).ngClassDirty,a["\u0275nov"](s,4).ngClassValid,a["\u0275nov"](s,4).ngClassInvalid,a["\u0275nov"](s,4).ngClassPending)})}function _(n){return a["\u0275vid"](0,[(n()(),a["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,x,M)),a["\u0275did"](1,49152,null,0,t,[],null,null)],null,null)}var R=a["\u0275ccf"]("formly-app-example",t,_,{},{},[]),S=l("Ip0R"),O=l("M2Lx"),G=l("eDkP"),I=l("Fzqc"),A=l("v9Dh"),N=l("ZYjt"),B=l("Wf4p"),D=l("mVsa"),L=l("6LlJ"),U=l("F6kA"),V=l("dWZg"),J=l("lLAP"),W=l("4c35"),q=l("qAlS"),P=l("La40"),Y=l("SMsm"),Z=l("UodH"),E=l("5QwG"),T=l("qkla"),z=l("iZhS"),H=l("me7w"),Q=l("N3PW"),K=l("l4pn"),X=l("Fv2i"),$=l("wBYW"),nn=l("IE48"),sn=l("Q4Tx"),ln=l("XR12"),an=l("Nsh5"),on=l("8mMr"),tn=l("mqvi"),pn=l("lYui"),en=l("VGFS"),rn=l("1ey0"),mn=function(){return function(){}}(),cn=l("ZYCi"),un=l("cIcG");l.d(s,"ConfigModuleNgFactory",function(){return dn});var dn=a["\u0275cmf"](e,[],function(n){return a["\u0275mod"]([a["\u0275mpd"](512,a.ComponentFactoryResolver,a["\u0275CodegenComponentFactoryResolver"],[[8,[r.a,m.a,i.a,c.a,u.a,d.a,f.a,h.a,g.a,y.a,b.a,j.a,k.a,R]],[3,a.ComponentFactoryResolver],a.NgModuleRef]),a["\u0275mpd"](4608,S.NgLocalization,S.NgLocaleLocalization,[a.LOCALE_ID,[2,S["\u0275angular_packages_common_common_a"]]]),a["\u0275mpd"](4608,O.c,O.c,[]),a["\u0275mpd"](4608,G.c,G.c,[G.i,G.e,a.ComponentFactoryResolver,G.h,G.f,a.Injector,a.NgZone,S.DOCUMENT,I.b,[2,S.Location]]),a["\u0275mpd"](5120,G.j,G.k,[G.c]),a["\u0275mpd"](5120,A.b,A.c,[G.c]),a["\u0275mpd"](4608,N.f,B.c,[[2,B.g],[2,B.l]]),a["\u0275mpd"](5120,D.b,D.g,[G.c]),a["\u0275mpd"](4608,L.a,L.a,[]),a["\u0275mpd"](4608,U.a,U.a,[]),a["\u0275mpd"](4608,o.FormBuilder,o.FormBuilder,[]),a["\u0275mpd"](4608,o["\u0275angular_packages_forms_forms_j"],o["\u0275angular_packages_forms_forms_j"],[]),a["\u0275mpd"](4608,F.a,F.a,[v.b,a.ComponentFactoryResolver,a.Injector]),a["\u0275mpd"](1073742336,S.CommonModule,S.CommonModule,[]),a["\u0275mpd"](1073742336,V.b,V.b,[]),a["\u0275mpd"](1073742336,O.d,O.d,[]),a["\u0275mpd"](1073742336,J.a,J.a,[]),a["\u0275mpd"](1073742336,I.a,I.a,[]),a["\u0275mpd"](1073742336,W.g,W.g,[]),a["\u0275mpd"](1073742336,q.ScrollingModule,q.ScrollingModule,[]),a["\u0275mpd"](1073742336,G.g,G.g,[]),a["\u0275mpd"](1073742336,B.l,B.l,[[2,B.d],[2,N.g]]),a["\u0275mpd"](1073742336,A.e,A.e,[]),a["\u0275mpd"](1073742336,B.v,B.v,[]),a["\u0275mpd"](1073742336,P.j,P.j,[]),a["\u0275mpd"](1073742336,D.e,D.e,[]),a["\u0275mpd"](1073742336,Y.c,Y.c,[]),a["\u0275mpd"](1073742336,Z.c,Z.c,[]),a["\u0275mpd"](1073742336,E.b,E.b,[]),a["\u0275mpd"](512,v.b,v.b,[]),a["\u0275mpd"](1024,v.a,function(n){return[{wrappers:[{name:"addons",component:T.a}],extensions:[{name:"addons",extension:{postPopulate:z.a}}]},{types:[{name:"input",component:H.a,wrappers:["form-field"]},{name:"checkbox",component:Q.a,wrappers:["form-field"]},{name:"radio",component:K.a,wrappers:["form-field"]},{name:"select",component:X.a,wrappers:["form-field"]},{name:"textarea",component:$.a,wrappers:["form-field"]},{name:"multicheckbox",component:nn.a,wrappers:["form-field"]}],wrappers:[{name:"form-field",component:sn.a}]},ln.b(n),{}]},[v.b]),a["\u0275mpd"](1073742336,ln.a,ln.a,[v.b,[2,v.a]]),a["\u0275mpd"](1073742336,an.h,an.h,[]),a["\u0275mpd"](1073742336,on.b,on.b,[]),a["\u0275mpd"](1073742336,tn.a,tn.a,[]),a["\u0275mpd"](1073742336,o["\u0275angular_packages_forms_forms_bc"],o["\u0275angular_packages_forms_forms_bc"],[]),a["\u0275mpd"](1073742336,o.ReactiveFormsModule,o.ReactiveFormsModule,[]),a["\u0275mpd"](1073742336,pn.a,pn.a,[]),a["\u0275mpd"](1073742336,en.a,en.a,[]),a["\u0275mpd"](1073742336,rn.a,rn.a,[]),a["\u0275mpd"](1073742336,mn,mn,[]),a["\u0275mpd"](1073742336,cn.s,cn.s,[[2,cn.y],[2,cn.p]]),a["\u0275mpd"](1073742336,e,e,[]),a["\u0275mpd"](1024,cn.n,function(){return[[{path:"",component:un.a,data:p}]]},[])])})},t7Wt:function(n,s){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">form</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">"form"</span> (<span class="hljs-attr">ngSubmit</span>)=<span class="hljs-string">"submit()"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">formly-form</span> [<span class="hljs-attr">model</span>]=<span class="hljs-string">"model"</span> [<span class="hljs-attr">fields</span>]=<span class="hljs-string">"fields"</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">"options"</span> [<span class="hljs-attr">form</span>]=<span class="hljs-string">"form"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">formly-form</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary submit-button"</span>&gt;</span>Submit<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-default"</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"options.resetModel()"</span>&gt;</span>Reset<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-default"</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"options.updateInitialValue()"</span>&gt;</span>Update Intial Values<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>\n'},xMph:function(n,s){n.exports='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"></formly-form>\n  <button type="submit" class="btn btn-primary submit-button">Submit</button>\n  <button type="button" class="btn btn-default" (click)="options.resetModel()">Reset</button>\n  <button type="button" class="btn btn-default" (click)="options.updateInitialValue()">Update Intial Values</button>\n</form>\n'}}]);