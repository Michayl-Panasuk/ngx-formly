(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{"3+KY":function(n,s){n.exports='<span class="hljs-keyword">import</span> { NgModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { ReactiveFormsModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n<span class="hljs-keyword">import</span> { FormlyBootstrapModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/bootstrap\'</span>;\n<span class="hljs-keyword">import</span> { AppComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./app.component\'</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">minlengthValidationMessage</span>(<span class="hljs-params">err, field</span>) </span>{\n  <span class="hljs-keyword">return</span> <span class="hljs-string">`Should have atleast <span class="hljs-subst">${field.templateOptions.minLength}</span> characters`</span>;\n}\n\n<span class="hljs-keyword">export</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">maxlengthValidationMessage</span>(<span class="hljs-params">err, field</span>) </span>{\n  <span class="hljs-keyword">return</span> <span class="hljs-string">`This value should be less than <span class="hljs-subst">${field.templateOptions.maxLength}</span> characters`</span>;\n}\n\n<span class="hljs-keyword">export</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">minValidationMessage</span>(<span class="hljs-params">err, field</span>) </span>{\n  <span class="hljs-keyword">return</span> <span class="hljs-string">`This value should be more than <span class="hljs-subst">${field.templateOptions.min}</span>`</span>;\n}\n\n<span class="hljs-keyword">export</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">maxValidationMessage</span>(<span class="hljs-params">err, field</span>) </span>{\n  <span class="hljs-keyword">return</span> <span class="hljs-string">`This value should be less than <span class="hljs-subst">${field.templateOptions.max}</span>`</span>;\n}\n\n<span class="hljs-meta">@NgModule</span>({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      validationMessages: [\n        { name: <span class="hljs-string">\'required\'</span>, message: <span class="hljs-string">\'This field is required\'</span> },\n        { name: <span class="hljs-string">\'minlength\'</span>, message: minlengthValidationMessage },\n        { name: <span class="hljs-string">\'maxlength\'</span>, message: maxlengthValidationMessage },\n        { name: <span class="hljs-string">\'min\'</span>, message: minValidationMessage },\n        { name: <span class="hljs-string">\'max\'</span>, message: maxValidationMessage },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppModule { }\n'},"LM/a":function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FormGroup } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyFormOptions, FormlyFieldConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-app-example\'</span>,\n  templateUrl: <span class="hljs-string">\'./app.component.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppComponent {\n  form = <span class="hljs-keyword">new</span> FormGroup({});\n  model: <span class="hljs-built_in">any</span> = {};\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: <span class="hljs-string">\'name\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Name (required)\'</span>,\n        required: <span class="hljs-literal">true</span>,\n      },\n    },\n    {\n      key: <span class="hljs-string">\'age\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Age (min= 18, max= 40)\'</span>,\n        <span class="hljs-keyword">type</span>: <span class="hljs-string">\'number\'</span>,\n        min: <span class="hljs-number">18</span>,\n        max: <span class="hljs-number">40</span>,\n        required: <span class="hljs-literal">true</span>,\n      },\n    },\n    {\n      key: <span class="hljs-string">\'password\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Password (minLength = 6)\'</span>,\n        <span class="hljs-keyword">type</span>: <span class="hljs-string">\'password\'</span>,\n        required: <span class="hljs-literal">true</span>,\n        minLength: <span class="hljs-number">6</span>,\n      },\n    },\n    {\n      key: <span class="hljs-string">\'comment\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'textarea\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Comment (maxLength = 100)\'</span>,\n        required: <span class="hljs-literal">true</span>,\n        maxLength: <span class="hljs-number">100</span>,\n        rows: <span class="hljs-number">5</span>,\n      },\n    },\n    {\n      key: <span class="hljs-string">\'ip\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'IP Address (pattern = /(\\d{1,3}\\.){3}\\d{1,3}/)\'</span>,\n        pattern: <span class="hljs-regexp">/(\\d{1,3}\\.){3}\\d{1,3}/</span>,\n        required: <span class="hljs-literal">true</span>,\n      },\n      validation: {\n        messages: {\n          pattern: <span class="hljs-function">(<span class="hljs-params">error, field: FormlyFieldConfig</span>) =&gt;</span> <span class="hljs-string">`"<span class="hljs-subst">${field.formControl.value}</span>" is not a valid IP Address`</span>,\n        },\n      },\n    },\n  ];\n\n  submit() {\n    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.form.valid) {\n      alert(<span class="hljs-built_in">JSON</span>.stringify(<span class="hljs-keyword">this</span>.model));\n    }\n  }\n}\n'},NKs5:function(n,s){n.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\nimport { AppComponent } from './app.component';\n\nexport function minlengthValidationMessage(err, field) {\n  return `Should have atleast ${field.templateOptions.minLength} characters`;\n}\n\nexport function maxlengthValidationMessage(err, field) {\n  return `This value should be less than ${field.templateOptions.maxLength} characters`;\n}\n\nexport function minValidationMessage(err, field) {\n  return `This value should be more than ${field.templateOptions.min}`;\n}\n\nexport function maxValidationMessage(err, field) {\n  return `This value should be less than ${field.templateOptions.max}`;\n}\n\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      validationMessages: [\n        { name: 'required', message: 'This field is required' },\n        { name: 'minlength', message: minlengthValidationMessage },\n        { name: 'maxlength', message: maxlengthValidationMessage },\n        { name: 'min', message: minValidationMessage },\n        { name: 'max', message: maxValidationMessage },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\nexport class AppModule { }\n"},Qnvc:function(n,s){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">form</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">"form"</span> (<span class="hljs-attr">ngSubmit</span>)=<span class="hljs-string">"submit()"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">formly-form</span> [<span class="hljs-attr">model</span>]=<span class="hljs-string">"model"</span> [<span class="hljs-attr">fields</span>]=<span class="hljs-string">"fields"</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">"options"</span> [<span class="hljs-attr">form</span>]=<span class="hljs-string">"form"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">formly-form</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary submit-button"</span>&gt;</span>Submit<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>\n'},aNq4:function(n,s,a){"use strict";a.r(s);var l=a("CcnG"),e=a("gIcY"),t=function(){function n(){this.form=new e.FormGroup({}),this.model={},this.options={},this.fields=[{key:"name",type:"input",templateOptions:{label:"Name (required)",required:!0}},{key:"age",type:"input",templateOptions:{label:"Age (min= 18, max= 40)",type:"number",min:18,max:40,required:!0}},{key:"password",type:"input",templateOptions:{label:"Password (minLength = 6)",type:"password",required:!0,minLength:6}},{key:"comment",type:"textarea",templateOptions:{label:"Comment (maxLength = 100)",required:!0,maxLength:100,rows:5}},{key:"ip",type:"input",templateOptions:{label:"IP Address (pattern = /(d{1,3}.){3}d{1,3}/)",pattern:/(\d{1,3}\.){3}\d{1,3}/,required:!0},validation:{messages:{pattern:function(n,s){return'"'+s.formControl.value+'" is not a valid IP Address'}}}}]}return n.prototype.submit=function(){this.form.valid&&alert(JSON.stringify(this.model))},n}(),p={examples:[{title:"List of default / built-in validations",component:t,files:[{file:"app.component.html",content:a("Qnvc"),filecontent:a("wVgT")},{file:"app.component.ts",content:a("LM/a"),filecontent:a("aRec")},{file:"app.module.ts",content:a("3+KY"),filecontent:a("NKs5")}]}]},o=function(){return function(){}}(),r=a("NcP4"),m=a("AcC/"),i=a("htty"),d=a("LgGJ"),c=a("MT1c"),u=a("1Q/V"),h=a("9+aI"),g=a("haId"),f=a("LJsP"),j=a("yR2A"),y=a("UFMs"),b=a("pMnS"),w=a("4o01"),k=a("Dl9q"),x=a("UcnZ"),v=a("DAbo"),M=a("9Glx"),F=l["\u0275crt"]({encapsulation:2,styles:[],data:{}});function C(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,9,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,s,a){var e=!0,t=n.component;return"submit"===s&&(e=!1!==l["\u0275nov"](n,2).onSubmit(a)&&e),"reset"===s&&(e=!1!==l["\u0275nov"](n,2).onReset()&&e),"ngSubmit"===s&&(e=!1!==t.submit()&&e),e},null,null)),l["\u0275did"](1,16384,null,0,e["\u0275angular_packages_forms_forms_bh"],[],null,null),l["\u0275did"](2,540672,null,0,e.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),l["\u0275prd"](2048,null,e.ControlContainer,null,[e.FormGroupDirective]),l["\u0275did"](4,16384,null,0,e.NgControlStatusGroup,[[4,e.ControlContainer]],null,null),(n()(),l["\u0275eld"](5,0,null,null,2,"formly-form",[],null,null,null,k.b,k.a)),l["\u0275prd"](512,null,x.a,x.a,[v.b,l.ComponentFactoryResolver,l.Injector]),l["\u0275did"](7,966656,null,0,M.a,[x.a,v.b,[8,null],[2,e.FormGroupDirective]],{form:[0,"form"],model:[1,"model"],fields:[2,"fields"],options:[3,"options"]},null),(n()(),l["\u0275eld"](8,0,null,null,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["Submit"]))],function(n,s){var a=s.component;n(s,2,0,a.form),n(s,7,0,a.form,a.model,a.fields,a.options)},function(n,s){n(s,0,0,l["\u0275nov"](s,4).ngClassUntouched,l["\u0275nov"](s,4).ngClassTouched,l["\u0275nov"](s,4).ngClassPristine,l["\u0275nov"](s,4).ngClassDirty,l["\u0275nov"](s,4).ngClassValid,l["\u0275nov"](s,4).ngClassInvalid,l["\u0275nov"](s,4).ngClassPending)})}function O(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,C,F)),l["\u0275did"](1,49152,null,0,t,[],null,null)],null,null)}var L=l["\u0275ccf"]("formly-app-example",t,O,{},{},[]),q=a("Ip0R"),_=a("M2Lx"),A=a("eDkP"),S=a("Fzqc"),N=a("v9Dh"),V=a("ZYjt"),R=a("Wf4p"),T=a("mVsa"),G=a("6LlJ"),I=a("F6kA"),P=a("dWZg"),D=a("lLAP"),$=a("4c35"),J=a("qAlS"),B=a("La40"),U=a("SMsm"),Y=a("UodH"),Z=a("5QwG"),Q=a("qkla"),K=a("iZhS"),W=a("me7w"),z=a("N3PW"),E=a("l4pn"),H=a("Fv2i"),X=a("wBYW"),nn=a("IE48"),sn=a("Q4Tx"),an=a("XR12");function ln(n,s){return"Should have atleast "+s.templateOptions.minLength+" characters"}function en(n,s){return"This value should be less than "+s.templateOptions.maxLength+" characters"}function tn(n,s){return"This value should be more than "+s.templateOptions.min}function pn(n,s){return"This value should be less than "+s.templateOptions.max}var on=function(){return function(){}}(),rn=a("Nsh5"),mn=a("8mMr"),dn=a("mqvi"),cn=a("lYui"),un=a("VGFS"),hn=a("1ey0"),gn=a("ZYCi"),fn=a("cIcG");a.d(s,"ConfigModuleNgFactory",function(){return jn});var jn=l["\u0275cmf"](o,[],function(n){return l["\u0275mod"]([l["\u0275mpd"](512,l.ComponentFactoryResolver,l["\u0275CodegenComponentFactoryResolver"],[[8,[r.a,m.a,i.a,d.a,c.a,u.a,h.a,g.a,f.a,j.a,y.a,b.a,w.a,L]],[3,l.ComponentFactoryResolver],l.NgModuleRef]),l["\u0275mpd"](4608,q.NgLocalization,q.NgLocaleLocalization,[l.LOCALE_ID,[2,q["\u0275angular_packages_common_common_a"]]]),l["\u0275mpd"](4608,_.c,_.c,[]),l["\u0275mpd"](4608,A.c,A.c,[A.i,A.e,l.ComponentFactoryResolver,A.h,A.f,l.Injector,l.NgZone,q.DOCUMENT,S.b,[2,q.Location]]),l["\u0275mpd"](5120,A.j,A.k,[A.c]),l["\u0275mpd"](5120,N.b,N.c,[A.c]),l["\u0275mpd"](4608,V.f,R.c,[[2,R.g],[2,R.l]]),l["\u0275mpd"](5120,T.b,T.g,[A.c]),l["\u0275mpd"](4608,G.a,G.a,[]),l["\u0275mpd"](4608,I.a,I.a,[]),l["\u0275mpd"](4608,e.FormBuilder,e.FormBuilder,[]),l["\u0275mpd"](4608,e["\u0275angular_packages_forms_forms_j"],e["\u0275angular_packages_forms_forms_j"],[]),l["\u0275mpd"](4608,x.a,x.a,[v.b,l.ComponentFactoryResolver,l.Injector]),l["\u0275mpd"](1073742336,q.CommonModule,q.CommonModule,[]),l["\u0275mpd"](1073742336,P.b,P.b,[]),l["\u0275mpd"](1073742336,_.d,_.d,[]),l["\u0275mpd"](1073742336,D.a,D.a,[]),l["\u0275mpd"](1073742336,S.a,S.a,[]),l["\u0275mpd"](1073742336,$.g,$.g,[]),l["\u0275mpd"](1073742336,J.ScrollingModule,J.ScrollingModule,[]),l["\u0275mpd"](1073742336,A.g,A.g,[]),l["\u0275mpd"](1073742336,R.l,R.l,[[2,R.d],[2,V.g]]),l["\u0275mpd"](1073742336,N.e,N.e,[]),l["\u0275mpd"](1073742336,R.v,R.v,[]),l["\u0275mpd"](1073742336,B.j,B.j,[]),l["\u0275mpd"](1073742336,T.e,T.e,[]),l["\u0275mpd"](1073742336,U.c,U.c,[]),l["\u0275mpd"](1073742336,Y.c,Y.c,[]),l["\u0275mpd"](1073742336,Z.b,Z.b,[]),l["\u0275mpd"](512,v.b,v.b,[]),l["\u0275mpd"](1024,v.a,function(n){return[{wrappers:[{name:"addons",component:Q.a}],extensions:[{name:"addons",extension:{postPopulate:K.a}}]},{types:[{name:"input",component:W.a,wrappers:["form-field"]},{name:"checkbox",component:z.a,wrappers:["form-field"]},{name:"radio",component:E.a,wrappers:["form-field"]},{name:"select",component:H.a,wrappers:["form-field"]},{name:"textarea",component:X.a,wrappers:["form-field"]},{name:"multicheckbox",component:nn.a,wrappers:["form-field"]}],wrappers:[{name:"form-field",component:sn.a}]},an.b(n),{validationMessages:[{name:"required",message:"This field is required"},{name:"minlength",message:ln},{name:"maxlength",message:en},{name:"min",message:tn},{name:"max",message:pn}]}]},[v.b]),l["\u0275mpd"](1073742336,an.a,an.a,[v.b,[2,v.a]]),l["\u0275mpd"](1073742336,rn.h,rn.h,[]),l["\u0275mpd"](1073742336,mn.b,mn.b,[]),l["\u0275mpd"](1073742336,dn.a,dn.a,[]),l["\u0275mpd"](1073742336,e["\u0275angular_packages_forms_forms_bc"],e["\u0275angular_packages_forms_forms_bc"],[]),l["\u0275mpd"](1073742336,e.ReactiveFormsModule,e.ReactiveFormsModule,[]),l["\u0275mpd"](1073742336,cn.a,cn.a,[]),l["\u0275mpd"](1073742336,un.a,un.a,[]),l["\u0275mpd"](1073742336,hn.a,hn.a,[]),l["\u0275mpd"](1073742336,on,on,[]),l["\u0275mpd"](1073742336,gn.s,gn.s,[[2,gn.y],[2,gn.p]]),l["\u0275mpd"](1073742336,o,o,[]),l["\u0275mpd"](1024,gn.n,function(){return[[{path:"",component:fn.a,data:p}]]},[])])})},aRec:function(n,s){n.exports="import { Component } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  model: any = {};\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: 'name',\n      type: 'input',\n      templateOptions: {\n        label: 'Name (required)',\n        required: true,\n      },\n    },\n    {\n      key: 'age',\n      type: 'input',\n      templateOptions: {\n        label: 'Age (min= 18, max= 40)',\n        type: 'number',\n        min: 18,\n        max: 40,\n        required: true,\n      },\n    },\n    {\n      key: 'password',\n      type: 'input',\n      templateOptions: {\n        label: 'Password (minLength = 6)',\n        type: 'password',\n        required: true,\n        minLength: 6,\n      },\n    },\n    {\n      key: 'comment',\n      type: 'textarea',\n      templateOptions: {\n        label: 'Comment (maxLength = 100)',\n        required: true,\n        maxLength: 100,\n        rows: 5,\n      },\n    },\n    {\n      key: 'ip',\n      type: 'input',\n      templateOptions: {\n        label: 'IP Address (pattern = /(\\d{1,3}\\.){3}\\d{1,3}/)',\n        pattern: /(\\d{1,3}\\.){3}\\d{1,3}/,\n        required: true,\n      },\n      validation: {\n        messages: {\n          pattern: (error, field: FormlyFieldConfig) => `\"${field.formControl.value}\" is not a valid IP Address`,\n        },\n      },\n    },\n  ];\n\n  submit() {\n    if (this.form.valid) {\n      alert(JSON.stringify(this.model));\n    }\n  }\n}\n"},wVgT:function(n,s){n.exports='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"></formly-form>\n  <button type="submit" class="btn btn-primary submit-button">Submit</button>\n</form>\n'}}]);