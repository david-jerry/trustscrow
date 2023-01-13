(self.webpackChunkpython_webpack_boilerplate=self.webpackChunkpython_webpack_boilerplate||[]).push([[143],{7276:function(e,t,a){"use strict";var n=a(5450),o=a.n(n),i=a(4306),s=a(4394),r=a(8174),c=a(9669),d=a.n(c);d().defaults.withCredentials=!1,d().defaults.xsrfCookieName="csrftoken",d().defaults.xsrfHeaderName="X-CSRFTOKEN",d().defaults.timeout=15e3;var l=d(),m=a(1077),p=a.n(m);function g(e){return new window.Promise((t=>setTimeout(t,e)))}var u=a(9701);function h(e){return new window.Promise((t=>setTimeout(t,e)))}var w=a(6856),y=a(5918);function f(e){return new window.Promise((t=>setTimeout(t,e)))}var b=a(2051),E=a(3631),v=a(5594),I=a.n(v),S=(a(8785),a(1768),a(3557),a(886),a(1730),a(6030)),C=a(2306),T=a.n(C),R=a(9425);function _(e){return new window.Promise((t=>setTimeout(t,e)))}const x="sk_test_708e99f60884cd1cdd9f5f39f6d4a1ee2828fd7d";function F(e){return new window.Promise((t=>setTimeout(t,e)))}var L=a(1248),$=a.n(L);window.htmx=o(),window.tinymce=I(),window.lottieweb=$(),window.anime=S.Z,window.scrollMagic=T(),window.ethers=r,window.axios=l,window.Swiper=b.ZP,window.izitoast=p(),window.Alpine=i.Z,i.Z.plugin(s.Z),i.Z.data("AccountForm",(function(){return{processing:!1,step:1,contractType:"PRODUCT",service:!1,initState(){if(this.processing=!1,this.drawer=!1,document.getElementById("navbar")){const e=document.getElementById("main"),t=document.getElementById("navbar").offsetHeight+10;e.classList.add(`pt-[${t}px]`),this.navTop=!0,this.showNav=!1}},scrollNav(){let e=window.pageYOffset;e<=0&&(this.showNav=!0,this.navTop=!0),e>this.lastScroll&&!1===this.showNav?(this.showNav=!0,this.navTop=!1):e<this.lastScroll&&!0===this.showNav&&(this.showNav=!1,this.navTop=!0),this.lastScroll=e},next(){this.validate()},async markAllRead(){await l.get("/all-read/").then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))},async markRead(e){await l.get(`/read/${e}`).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))},async submitForm(){this.processing=!0;const e=this.$refs.form,t=document.getElementById("form"),a=e.action,n=e.dataset.errorurl||e.dataset.redirect,o=e.dataset.csrf;let i=new FormData(e);e.querySelectorAll("[name]").forEach((e=>{if("textarea"===e.type){let t=e.id;console.log("textarea content: ",window.parent.tinymce.get(t).getContent()),i.append(e.name,window.parent.tinymce.get(t).getContent())}"textarea"!==e.type&&i.append(e.name,e.value)})),e.checkValidity()&&(await l.post(a,i,{headers:{"X-CSRFToken":o}}).then((function(a){return t.appendChild(e),_(4500),200!==a.status&&201!==a.status||p().success({title:a.data.title,balloon:!0,position:"topRight",animateInside:!0,message:a.data.message}),a.data.username?window.location.replace(`${window.location.origin}/users/${a.data.username}/`):n?window.location.replace(n):void 0})).catch((function(e){return e.response&&403===e.response.status?p().error({title:e.response.data.title,balloon:!0,position:"topRight",animateInside:!0,message:e.response.data.message}):p().error({title:"Form Error",balloon:!0,position:"topRight",animateInside:!0,message:`Something wrong happened: ${e}`})})),this.processing=!1)},async submitSignupForm(){this.processing=!0;const e=this.$refs.form,t=e.action,a=e.dataset.errorurl||e.dataset.redirect,n=e.dataset.csrf;let o=new FormData(e);e.querySelectorAll("[name]").forEach((e=>{if("textarea"===e.type){let t=e.id;console.log("textarea content: ",window.parent.tinymce.get(t).getContent()),o.append(e.name,window.parent.tinymce.get(t).getContent())}"textarea"!==e.type&&o.append(e.name,e.value)})),e.checkValidity()&&(await l.post(t,o,{headers:{"X-CSRFToken":n}}).then((function(e){return p().success({title:"SINGUP SUCCESSFUL",balloon:!0,position:"topRight",animateInside:!0,message:"You have successfully registered a new account"+e}),_(7500),window.location.replace(a)})).catch((function(e){return p().error({title:"SIGNUP FORM ERROR",balloon:!0,position:"topRight",animateInside:!0,message:`Something wrong happened: ${e}`})})),this.processing=!1)},async submitCodeForm(){const e=this.$refs.form,t=e.action,a=document.getElementById("code"),n=e.dataset.redirect,o=e.dataset.csrf;let i=new FormData(e);e.querySelectorAll("[name]").forEach((e=>{if("textarea"===e.type){let t=e.id;console.log("textarea content: ",window.parent.tinymce.get(t).getContent()),i.append(e.name,window.parent.tinymce.get(t).getContent())}"textarea"!==e.type&&i.append(e.name,e.value)})),e.checkValidity()&&await l.get(t,i,{headers:{"X-CSRFToken":o}}).then((function(e){if(200===e.status)return p().success({title:e.data.title,balloon:!0,position:"topRight",animateInside:!0,message:e.data.message}),a.classList.add("hidden"),_(7500),window.location.replace(n)})).catch((function(e){return p().error({title:e.response.data.title,balloon:!0,position:"topRight",animateInside:!0,message:e.response.data.message})}))},async deleteForm(){this.processing=!0;const e=this.$refs.form,t=e.dataset.csrf,a=e.action,n=e.dataset.redirect;let o=new FormData(e);e.querySelectorAll("[name]").forEach((e=>{if("textarea"===e.type){let t=e.id;console.log("textarea content: ",window.parent.tinymce.get(t).getContent()),o.append(e.name,window.parent.tinymce.get(t).getContent())}"textarea"!==e.type&&o.append(e.name,e.value)})),e.checkValidity()&&await l.post(a,o,{headers:{"X-CSRFToken":t}}).then((function(e){if(200===e.status)return p().success({title:e.data.title,balloon:!0,position:"topRight",animateInside:!0,message:e.data.message}),_(7500),location.replace(n)})).catch((function(e){return p().error({title:e.response.data.title,balloon:!0,position:"topRight",animateInside:!0,message:e.response.data.message})})),this.processing=!0},async switchForm(){this.processing=!0;const e=this.$refs.form,t=e.dataset.csrf,a=e.dataset.redirect,n=e.action;let o=new FormData(e);e.querySelectorAll("[name]").forEach((e=>{if("textarea"===e.type){let t=e.id;console.log("textarea content: ",window.parent.tinymce.get(t).getContent()),o.append(e.name,window.parent.tinymce.get(t).getContent())}"textarea"!==e.type&&o.append(e.name,e.value)})),e.checkValidity()&&await l.get(n,o,{headers:{"X-CSRFToken":t}}).then((function(e){if(200===e.status)return p().success({title:e.data.title,balloon:!0,position:"topRight",animateInside:!0,message:e.data.message}),_(7500),location.replace(a)})).catch((function(e){return p().error({title:e.response.data.title,balloon:!0,position:"topRight",animateInside:!0,message:e.response.data.message})})),this.processing=!0},async submitUpdateForm(){this.processing=!0;const e=this.$refs.form,t=e.action,a=e.dataset.redirect,n=e.dataset.csrf;let i=new FormData(e);e.querySelectorAll("[name]").forEach((e=>{if("textarea"===e.type){let t=e.id;console.log("textarea content: ",window.parent.tinymce.get(t).getContent()),i.append(e.name,window.parent.tinymce.get(t).getContent())}"textarea"!==e.type&&i.append(e.name,e.value)})),e.checkValidity()&&await l.post(t,i,{headers:{"X-CSRFToken":n,"Content-Type":"multipart/form-data"}}).then((function(e){if(200===e.status||201==e.status)return p().success({title:e.data.title,balloon:!0,position:"topRight",animateInside:!0,message:e.data.message}),_(7500),o().ajax("GET",a,{target:"body",swap:"outerHTML"})})).catch((function(e){return p().error({title:e.response.data.title,balloon:!0,position:"topRight",animateInside:!0,message:e.response.data.message})})),this.processing=!0},async submitEmailConfirmForm(){this.processing=!0;const e=this.$refs.form,t=e.action,a=e.dataset.redirect,n=e.dataset.csrf;let o=new FormData(e);e.querySelectorAll("[name]").forEach((e=>{if("textarea"===e.type){let t=e.id;console.log("textarea content: ",window.parent.tinymce.get(t).getContent()),o.append(e.name,window.parent.tinymce.get(t).getContent())}"textarea"!==e.type&&o.append(e.name,e.value)})),e.checkValidity()&&(await l.post(t,o,{headers:{"X-CSRFToken":n}}).then((function(e){if(p().success({title:"EMAIL CONFIRMATION  SUCCESSFUL",balloon:!0,position:"topRight",animateInside:!0,message:"You have successfully confirmed your email address"+e.data.message}),_(7500),e.data.redirect)return window.location.replace(e.data.redirect);window.location.replace(a)})).catch((function(e){return p().error({title:"EMAIL CONFIRMATION ERROR",balloon:!0,position:"topRight",animateInside:!0,message:`Something wrong happened: ${e}`})})),this.processing=!1)},async submitLoginForm(){this.processing=!0;const e=this.$refs.form,t=e.action,a=e.dataset.errorurl||e.dataset.redirect,n=e.dataset.csrf;let o=new FormData(e);e.querySelectorAll("[name]").forEach((e=>{if("textarea"===e.type){let t=e.id;console.log("textarea content: ",window.parent.tinymce.get(t).getContent()),o.append(e.name,window.parent.tinymce.get(t).getContent())}"textarea"!==e.type&&o.append(e.name,e.value)})),e.checkValidity()&&(await l.post(t,o,{headers:{"X-CSRFToken":n}}).then((function(e){return p().success({title:"LOGIN SUCCESSFUL",balloon:!0,position:"topRight",animateInside:!0,message:"You have successfully logged into your account"+e}),_(7500),window.location.replace(a)})).catch((function(e){return p().error({title:"LOGIN FORM ERROR",balloon:!0,position:"topRight",animateInside:!0,message:`Something wrong happened: ${e}`})})),this.processing=!1)},async submitPasswordForm(){this.processing=!0;const e=this.$refs.form,t=e.action,a=e.dataset.redirect,n=e.dataset.csrf;let o=new FormData(e);e.querySelectorAll("[name]").forEach((e=>{if("textarea"===e.type){let t=e.id;console.log("textarea content: ",window.parent.tinymce.get(t).getContent()),o.append(e.name,window.parent.tinymce.get(t).getContent())}"textarea"!==e.type&&o.append(e.name,e.value)})),e.checkValidity()&&(await l.post(t,o,{headers:{"X-CSRFToken":n}}).then((function(e){return p().success({title:"PASSWORD SUCCESSFULLY UPDATED",balloon:!0,position:"topRight",animateInside:!0,message:e}),_(7500),window.location.replace(a)})).catch((function(e){return p().error({title:"PASSWORD FORM ERROR",balloon:!0,position:"topRight",animateInside:!0,message:`Something wrong happened: ${e}`})})),this.processing=!1)},async showPassword(){var e=document.getElementById("id_password");"password"===e.type?e.type="text":e.type="password"},async submitContract(){this.step="complete",this.processing=!0},async showSingupPassword(){var e=document.getElementById("id_password1"),t=document.getElementById("id_password2");"password"===e.type&&"password"===t.type?(e.type="text",t.type="text"):(e.type="password",t.type="password")},async submitFileForm(){this.processing=!0;const e=this.$refs.form,t=document.getElementById("form"),a=e.action||window.location,n=e.dataset.redirect,i=e.dataset.csrf;let s=new FormData(e);e.querySelectorAll("[name]").forEach((e=>{if("textarea"===e.type){let t=e.id;console.log("textarea content: ",window.parent.tinymce.get(t).getContent()),s.append(e.name,window.parent.tinymce.get(t).getContent())}"textarea"!==e.type&&s.append(e.name,e.value)})),e.checkValidity()?(await l.post(a,s,{headers:{"X-CSRFToken":i,"Content-Type":"multipart/form-data"}}).then((function(a){if(t.appendChild(e),200===a.status||201===a.status)return p().success({title:a.data.title,balloon:!0,position:"topRight",animateInside:!0,message:a.data.message}),_(4500),n?o().ajax("GET",n,{target:"body",swap:"outerHTML"}):void 0})).catch((function(e){e.response&&403===e.response.status&&p().error({title:e.response.data.title,balloon:!0,position:"topRight",animateInside:!0,message:e.response.data.message}),p().error({title:"Form Error",balloon:!0,position:"topRight",animateInside:!0,message:`Something wrong happened: ${e}`})})),this.processing=!1):(p().error({title:"Form Sending Incomplete",balloon:!0,position:"topRight",animateInside:!0,message:`Form data is not valid. Ensure you have filled all fields accurately! ${e.reportValidity()}`}),_(5500),this.processing=!1,o().ajax("GET",n,{target:"body",swap:"outerHTML"}))},validate(){this.processing=!0,this.$refs.form.querySelectorAll("[name]").forEach((e=>{"gender"==e.name&&""===e.value?(this.step,this.step):this.step=this.step+1})),this.service=this.contractType,this.processing=!1},checkValidity(){const e=this.$refs.form;e.querySelectorAll("[name]").forEach((t=>{t.addEventListener("change",(a=>{console.log(a),function(e,t){let a=new FormData(e);if(a.append("__field_name__",t.name),document.getElementById("id_card_provider")){var n=document.getElementById("id_card_provider");n.readOnly=!0}l.post(e.action,a).then((function(e){let a=e.data.errors,o=document.getElementById(`error-wrapper-${t.name}`);if(0===a.length)document.getElementById("submitForm")&&document.getElementById("submitForm").classList.remove("hidden"),document.getElementById("subscribeDriver")&&document.getElementById("subscribeDriver").classList.remove("hidden"),document.getElementById("subscribeCompany")&&document.getElementById("subscribeCompany").classList.remove("hidden"),o.classList.add("hidden"),o&&(o.innerHTML="");else if(document.getElementById("submitForm")&&document.getElementById("submitForm").classList.add("hidden"),document.getElementById("subscribeDriver")&&document.getElementById("subscribeDriver").classList.add("hidden"),document.getElementById("subscribeCompany")&&document.getElementById("subscribeCompany").classList.add("hidden"),o.classList.remove("hidden"),o.classList.add("flex"),o){let e="";for(let t=0;t<a.length;t++)e+=`${a[t]}`;o.innerHTML=e}if(document.getElementById("id_card_exp_month")||document.getElementById("id_card_exp_year")||document.getElementById("id_card_no")){var i=document.getElementById("id_card_exp_month"),s=document.getElementById("id_card_exp_year"),r=document.getElementById("id_card_no"),c=document.getElementById("error-wrapper-card_exp_year"),d=document.getElementById("error-wrapper-card_no"),l=document.getElementById("provider");console.log(r.value),console.log(s.value);var m=(0,R.isExpirationDateValid)(`${i.value}`,`${s.value}`),p=(0,R.getCreditCardNameByNumber)(`${r.value}`),g=(0,R.isValid)(`${r.value}`);1==m?(c.classList.remove("hidden","bg-red-200","text-red-600"),c.classList.add("flex","bg-green-200","text-green-600"),c.innerHTML="Not yet expired",document.getElementById("submitForm")&&document.getElementById("submitForm").classList.remove("hidden")):(c.classList.add("hidden","bg-red-200","text-red-600"),c.classList.remove("flex","bg-green-200","text-green-600"),c.innerHTML="Card has expired",document.getElementById("submitForm")&&document.getElementById("submitForm").classList.add("hidden")),1==g?(d.classList.remove("hidden","bg-red-200","text-red-600"),d.classList.add("flex","bg-green-200","text-green-600"),d.innerHTML="Valid Card Number",document.getElementById("submitForm")&&document.getElementById("submitForm").classList.remove("hidden")):(d.classList.add("hidden","bg-red-200","text-red-600"),d.classList.remove("flex","bg-green-200","text-green-600"),d.innerHTML="Not A Valid Card Number",document.getElementById("submitForm")&&document.getElementById("submitForm").classList.add("hidden")),"Visa"===p?l.src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/800px-Visa_Inc._logo.svg.png?20170118154621":"Mastercard"===p&&(l.src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/772px-Mastercard-logo.svg.png?20210817144358"),n.value=p}e.data.avatar&&(document.getElementById("avatar").src=e.data.avatar)}))}(e,t)}))}))},async toggleDrawer(){return this.drawer=!this.drawer},getBtnText(){return this.processing?"Processing...":"Submit"},contractText(){return this.processing?"Processing...":"Generate"},stageTwo(){return"SERVICE"===this.service?"Service":"Products"}}})),i.Z.data("ContractForm",(function(){return{loading:!1,redirect:null,emailText:null,autocomplete:!0,butocomplete:!0,step:1,formError:!0,service:null,formData:{creator:"",contract_title:"",contract_type:"",amount:0,localization:"",vendor:"",vendor_phone:"",vendor_email:"",vendor_address:"",buyer:"",buyer_phone:"",buyer_email:"",buyer_address:"",terms_agreement:"",terms_for_termination:""},next(){this.service?this.formData.creator.length>1&&this.formData.localization.length>1&&this.formData.contract_title.length>1&&this.formData.contract_type.length>1&&this.formData.amount>100&&this.step++:this.formData.creator.length>1&&this.formData.localization.length>1&&this.formData.contract_type.length>1&&this.formData.amount>100?this.step++:p().error({title:"Form Error",balloon:!0,position:"topRight",animateInside:!0,message:"Fill all fields here accurately."})},next2(){this.formData.vendor.length>1&&this.formData.vendor_phone.length>1&&this.formData.vendor_email.length>1&&this.step++},next3(){this.formData.buyer.length>1&&this.formData.buyer_phone.length>1&&this.formData.buyer_email.length>1&&this.formData.buyer_address.length>1?this.step++:p().error({title:"Form Error",balloon:!0,position:"topRight",animateInside:!0,message:"Fill all fields here accurately."})},next4(){let e=window.parent.tinymce.get("id_terms_agreement").getContent();console.log(e),console.log(window.parent.tinymce.get("id_terms_agreement").getContent()),e.length>1?this.step++:p().error({title:"Form Error",balloon:!0,position:"topRight",animateInside:!0,message:"You need to add the agreement you had entered with the seller/buyer."})},back(){this.step--},async validateField(e,t,a){let n=new FormData(e);if("textarea"===t.type){let e=t.id;n.append("__field_name__",window.parent.tinymce.get(e).getContent())}else n.append("__field_name__",t.name);await l.post(e.action,n).then((async function(e){let n=e.data.errors,o=document.getElementById(`error-wrapper-${t.name}`);if(0===n.length)a=!1,console.log(a),o.classList.add("hidden"),o&&(o.innerHTML="");else if(a=!0,console.log(a),o.classList.remove("hidden"),o.classList.add("flex"),o){let e="";for(let t=0;t<n.length;t++)e+=`${n[t]}`;o.innerHTML=e}})),this.formError=a,console.log(a)},async vendor_payout(e,t,a,n,o,i,s){await l.post("https://api.paystack.co/transferrecipient/",{type:"nuban",name:i,account_number:n,bank_code:o,currency:"NGN"},{headers:{Authorization:`Bearer ${x}`,"Content-Type":"application/json"}}).then((async n=>{console.log(n.data.data.recipient_code),await l.post("https://api.paystack.co/transfer",{source:"balance",amount:100*parseInt(t),reference:`${s}`,recipient:`${n.data.data.recipient_code}`,reason:`Trustscrow Payout for Contract ID: <a href="https://trustscrow.com/escrow/contract/${a}/${e}/">${a}</a>`},{headers:{Authorization:`Bearer ${x}`,"Content-Type":"application/json"}}).then((async t=>{if(console.log(t),"success"!==t.data.status)return await p().error({title:"[PAYOUT UNSUCCESSFUL]",message:t.data.data.message}),await F(5e3),window.location.reload();await l.get(`/escrow/contract/detail/${a}/${e}/payment_sent/${t.data.data.transfer_code}/`).then((async t=>(await p().info({title:"[PAYOUT SUCCESSFUL]",message:t.data.message}),await F(5e3),window.location.replace(`${window.location.origin}/users/${e}/`))))})).catch((async e=>{console.log(e),await p().error({title:"[PAYOUT UNSUCCESSFUL]",message:e.response.data.message})}))})).catch((async e=>{await p().error({title:"[PAYOUT UNSUCCESSFUL]",message:e.response.data.message}),console.log(e)}))},async updateData(){this.loading=!0;const e=this.$refs.form,t=e.action,a=e.dataset.csrf;let n=new FormData(e);e.querySelectorAll("[name]").forEach((e=>{"textarea"!==e.type&&"checkbox"!==e.type&&n.append(e.name,e.value),"checkbox"===e.type&&"active"===e.name&&n.append("active",!0)})),await l.post(t,n,{headers:{"X-CSRFToken":a}}).then((async function(e){if(console.log(e),200===e.status||201===e.status)return p().success({title:"[ACCOUNT DETAILS UPDATED]",balloon:!0,position:"topRight",animateInside:!0,message:e.data.message}),await F(5e3),window.location.replace(e.data.redirect)})).catch((e=>{console.log(e)}))},async submitContract(){{this.loading=!0;const e=this.$refs.form,t=e.action,a=e.dataset.csrf;let n=new FormData(e);e.querySelectorAll("[name]").forEach((e=>{if("textarea"!==e.type&&"radio"!==e.type&&n.append(e.name,e.value),"textarea"===e.type){let t=e.id;console.log("textarea content: ",window.parent.tinymce.get(t).getContent()),n.append(e.name,window.parent.tinymce.get(t).getContent())}"radio"===e.type&&("creator"===e.name&&(console.log(this.formData.creator),n.append("creator",this.formData.creator)),"contract_type"===e.name&&(console.log(this.formData.contract_type),n.append("contract_type",this.formData.contract_type)))})),console.dir(n),await l.post(t,n,{headers:{"X-CSRFToken":a}}).then((async function(e){if(200!==e.status&&201!==e.status||p().success({title:e.data.title,balloon:!0,position:"topRight",animateInside:!0,message:e.data.message}),e.data.amount&&e.data.pk&&e.data.email&&e.data.ref){let t=100*e.data.amount;const a=new u.Z;await a.newTransaction({key:e.data.pk,email:e.data.email,amount:t,currency:"NGN",ref:e.data.ref,onSuccess:async e=>{console.dir(e);const t=`${window.location.origin}/escrow/transaction/verify/${e.reference}/${e.status}/`;await l.get(t).then((async t=>{if(await p().info({title:t.data.title,balloon:!0,position:"topRight",animateInside:!0,message:t.data.message}),await F(3500),t.data.slug&&"Approved"===e.message)return window.location.replace(`${window.location.origin}/escrow/contract/detail/${t.data.slug}/`)}))},onCancle:async function(){return await p().info({title:"TRANSACTION FAILED",balloon:!0,position:"topRight",animateInside:!0,message:"This transaction could not be completed at the moment. Please try again!"}),window.location.reload()}})}else if(e.data.slug)return window.location.replace(`${window.location.origin}/escrow/contract/detail/${e.data.slug}/`)})).catch((async function(e){e.response&&403===e.response.status&&await p().error({title:e.response.data.title,balloon:!0,position:"topRight",animateInside:!0,message:e.response.data.message}),await p().error({title:"Form Error",balloon:!0,position:"topRight",animateInside:!0,message:e.message}),await F(3500)})),this.loading=!1}},async vendor_approve(e){await l.get(e).then((async e=>(p().info({title:"[CONTRACT APPROVED]",message:e.data.message}),await F(5e3),window.location.reload()))).catch((async e=>{p().error({title:"[CONTRACT APPROVED FAILED]",message:e.data.message})}))},async retryPayment(e){this.loading=!0,await l.get(`${window.location.origin}/escrow/transaction/retry/${e}/`).then((async e=>{if(await F(2500),e.data.amount&&e.data.pk&&e.data.email&&e.data.ref){let t=100*e.data.amount;const a=new u.Z;await a.newTransaction({key:e.data.pk,email:e.data.email,amount:t,currency:"NGN",ref:e.data.ref,onSuccess:async e=>{console.dir(e),await l.get(`${window.location.origin}/escrow/transaction/verify/${e.reference}/${e.status}/`).then((async e=>(await p().info({title:e.data.title,balloon:!0,position:"topRight",animateInside:!0,message:e.data.message}),await F(3500),e.data.slug?await window.location.replace(`${window.location.origin}/escrow/contract/detail/${e.data.slug}/`):window.location.reload())))},onCancle:async function(){return await p().info({title:"TRANSACTION FAILED",balloon:!0,position:"topRight",animateInside:!0,message:"This transaction could not be completed at the moment. Please try again!"}),window.location.reload()}})}this.loading=!1})).catch((async e=>(e.response&&403===e.response.status&&await p().error({title:e.response.data.title,balloon:!0,position:"topRight",animateInside:!0,message:e.response.data.message}),await p().error({title:"Form Error",balloon:!0,position:"topRight",animateInside:!0,message:e.message}),this.loading=!1,await F(3500),window.location.reload()))),this.loading=!1},async refresh(){window.location.reload()},isEmail(e){return/\S+@\S+\.\S+/.test(e)},isEmpty(e){return e.length<2},validate(){if(this.loading=!0,F(2500),this.step++,document.getElementById("contract_type")){const e=document.getElementById("contract_type").value;this.service=e}this.loading=!1},checkValidity(){this.formError=!0,this.loading=!1;const e=this.$refs.form;console.log("Initializing Contract Form"),e.querySelectorAll("[name]").forEach((t=>{t.addEventListener("change",(a=>{console.log(a),this.validateField(e,t,this.formError)}))})),console.log("Initialized Contract Form")},contractText(){return this.loading?"Processing...":"Submit"},stageTwo(){return"SERVICE"===this.service?"Service":"Products"},vautofill(){const e=this.$refs.item;this.autocomplete=!this.autocomplete,console.log(e),document.getElementById("id_vendor").value=this.$refs.vendor.innerText,document.getElementById("id_vendor_email").value=this.$refs.email.innerText,document.getElementById("id_vendor_phone").value=this.$refs.phone.innerText,document.getElementById("id_vendor_address").value=this.$refs.address.innerText},bautofill(){const e=this.$refs.item;this.butocomplete=!this.butocomplete,console.log(e),document.getElementById("id_buyer").value=this.$refs.buyer.innerText,document.getElementById("id_buyer_email").value=this.$refs.email.innerText,document.getElementById("id_buyer_phone").value=this.$refs.phone.innerText,document.getElementById("id_buyer_address").value=this.$refs.address.innerText}}})),i.Z.data("ContactForm",(function(){return{processing:!1,async submitForm(){this.processing=!0;const e=this.$refs.contactForm,t=e.action,a=e.dataset.redirect,n=e.dataset.csrf;let o=new FormData(e);e.querySelectorAll("[name]").forEach((e=>{if("textarea"===e.type){let t=e.id;console.log("textarea content: ",window.parent.tinymce.get(t).getContent()),o.append(e.name,window.parent.tinymce.get(t).getContent())}else o.append(e.name,e.value)})),console.log(o),e.checkValidity()?(await l.post(t,o,{headers:{"X-CSRFToken":n}}).then((async function(e){201===e.status&&(p().success({title:"Email Sent Successful",balloon:!0,position:"topRight",animateInside:!0,message:e.data.message}),await g(3500),window.location.replace(a)),console.log(e)})).catch((function(e){console.log(e),p().error({title:"Email Sending Incomplete",balloon:!0,position:"topRight",animateInside:!0,message:`Something wrong happened: ${e}`})})),this.processing=!1):(p().error({title:"Sending Email Incomplete",balloon:!0,position:"topRight",animateInside:!0,message:`Form data is not valid. Ensure you have filled all fields accurately! ${e.reportValidity()}`}),g(2500),this.processing=!1)},async checkValidity(){const e=this.$refs.contactForm;e.querySelectorAll("[name]").forEach((t=>{t.addEventListener("change",(a=>{console.log(a),function(e,t){let a=new FormData(e);a.append("__field_name__",t.name),l.post(e.action,a).then((function(e){let a=e.data.errors,n=document.getElementById(`error-wrapper-${t.name}`);if(0===a.length)document.getElementById("submit").classList.remove("hidden"),n.classList.add("hidden"),n&&(n.innerHTML="");else if(document.getElementById("submit").classList.add("hidden"),n.classList.remove("hidden"),n.classList.add("flex"),n){let e="";for(let t=0;t<a.length;t++)e+=`${a[t]}`;n.innerHTML=e}}))}(e,t)}))}))},getBtnText(){return this.processing?"Processing...":"Submit"}}})),i.Z.data("StickyNav",(function(){return{drawer:!1,showNav:!0,navTop:!1,lastScroll:0,initState(){if(this.drawer=!1,document.getElementById("navbar")){const e=document.getElementById("main"),t=document.getElementById("navbar").offsetHeight+10;e.classList.add(`pt-[${t}px]`),this.navTop=!0,this.showNav=!1}},scrollNav(){let e=window.pageYOffset;e<=0&&(this.showNav=!0,this.navTop=!0),e>this.lastScroll&&!1===this.showNav?(this.showNav=!0,this.navTop=!1):e<this.lastScroll&&!0===this.showNav&&(this.showNav=!1,this.navTop=!0),this.lastScroll=e},toggleDrawer(){return this.drawer=!this.drawer}}})),i.Z.data("ContractDetailForm",(function(){return{loading:!1,showTooltip:!1,showTooltip2:!1,openServiceModal:!1,openMilestoneModal:!1,openProductModal:!1,async retryPayment(e){this.loading=!0,await l.get(`${window.location.origin}/escrow/transaction/retry/${e}/`).then((async e=>{if(await h(2500),e.data.amount&&e.data.pk&&e.data.email&&e.data.ref){const t=new u.Z;await t.newTransaction({key:e.data.pk,email:e.data.email,amount:100*e.data.amount,currency:"NGN",ref:e.data.ref,onSuccess:async e=>{console.dir(e),await l.get(```${window.location.origin}/escrow/transaction/verify/${e.reference}/${e.status}/```).then((async t=>{if(await p().info({title:t.data.title,balloon:!0,position:"topRight",animateInside:!0,message:t.data.message}),this.loading=!1,await h(3500),t.data.slug&&"Approved"===e.message)return window.location.replace(`${window.location.origin}/escrow/contract/detail/${t.data.slug}/`)}))},onCancle:async function(){return await p().info({title:"TRANSACTION FAILED",balloon:!0,position:"topRight",animateInside:!0,message:"This transaction could not be completed at the moment. Please try again!"}),window.location.reload()}}),this.loading=!1}})).catch((async e=>(e.response&&403===e.response.status&&await p().error({title:e.response.data.title,balloon:!0,position:"topRight",animateInside:!0,message:e.response.data.message}),await p().error({title:"Form Error",balloon:!0,position:"topRight",animateInside:!0,message:e.message}),this.loading=!1,await h(3500),window.location.reload()))),this.loading=!1},printInvoice(){var e=this.$refs.printTemplate.innerHTML,t=document.body.innerHTML;document.body.innerHTML=e,window.print(),document.body.innerHTML=t}}})),i.Z.data("ChartJs",(function(){return{processing:!1,dataX:null,dataY:null,dataZ:null,async getData(){await l.get(`${window.location.origin}/escrow/transaction/data/`).then((async e=>{await f(2500),console.dir(e),this.dataX=e.data.dataX,this.dataY=e.data.dataY,this.dataZ=e.data.dataZ;const t=new w.Z(document.getElementById("user-chart").getContext("2d"),{type:"bar",data:{labels:this.dataX,datasets:[{label:"Yearly Earning",backgroundColor:"orange",barPercentage:.5,barThicness:6,maxBarThickness:10,minBarLength:8,data:this.dataY},{label:"Yearly Expenses",backgroundColor:"red",barPercentage:.5,barThicness:6,maxBarThickness:10,minBarLength:8,data:this.dataZ}]},options:{responsive:!0,legend:{position:"top"},title:{display:!0,text:"Annual Transaction Chart"},onClick:e=>{const a=(0,y.Xt)(e,t);this.dataX=t.scales.x.getValueForPixel(a.x),this.dataY=t.scales.y.getValueForPixel(a.y)}}});return t})).catch((async e=>(await f(2500),e)))}}})),i.Z.start();const B=(0,E.qY)(),{APPLICATION_SERVER_KEY:k,CREATE_WP_DEVICE:N,SEND_NOTIFICATION:A}=window.WEB_PUSH_CFG;function D(e){for(var t=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),a=window.atob(t),n=new Uint8Array(a.length),o=0;o<a.length;++o)n[o]=a.charCodeAt(o);return n}function P(e){const t=e.toJSON(),a=t.endpoint.split("/"),n=a[a.length-1],o={status_type:"subscribe",subscription:t,browser:B.name.toLowerCase(),p256dh:t.keys.p256dh,auth:t.keys.auth,user_agent:navigator.getUserAgent,registration_id:n,group:"users"},i=JSON.stringify(o);l.post(N,i,{headers:{"Content-Type":"application/json"}}).then((function(e){})).catch((function(e){}))}if(window.document.addEventListener("DOMContentLoaded",(function(){window.console.log("dom ready 1")})),document.getElementById("shareUrl")){const e=document.getElementById("shareUrl"),t=e.dataset.url,a=document.title;e.addEventListener("click",(()=>{navigator.share&&navigator.share({title:a,text:`Check out ${a.toUpperCase()}.`,url:t}).then((()=>p().success({title:"[SHARE PAGE]",balloon:!0,position:"topRight",animateInside:!0,message:`Successfully share ${t}`}))).catch((e=>p().error({title:"[SHARE PAGE ERROR]",balloon:!0,position:"topRight",animateInside:!0,message:e})))}))}"serviceWorker"in navigator&&window.addEventListener("load",(()=>{navigator.serviceWorker.register("/sw.js",{scope:"/"}).then((e=>{navigator.serviceWorker.ready.then((function(e){O(e)}))})).catch((e=>{p().error({title:"[SERVICE WORKER]",balloon:!0,position:"topRight",animateInside:!0,message:"Service Worker Failed to Register"})}))}));const O=e=>{e.showNotification?"denied"!==Notification.permission?"PushManager"in window?e.pushManager.getSubscription().then((t=>{console.log("Registration Object",e),t&&null!==t?null!==t&&(console.log("Subscribe Already Done"),p().info({title:"[SERVICE WORKER]",balloon:!0,position:"topRight",animateInside:!0,message:"Push notification has already been subscribed to"})):function(e){if(document.getElementById("subscribeNotificationButton")){const t=document.getElementById("subscribeNotificationButton");t.classList.toggle("hidden",!1),t.addEventListener("click",(()=>{(function(e){e.pushManager.getSubscription().then((function(e){if(e)return console.log("subscription exists"),P(e),void function(e){const t=e.toJSON(),a=t.endpoint.split("/"),n={registration_id:a[a.length-1],auth:t.keys.auth,head:"Welcome to Trustscrow",body:"This is how our push notifications shall be appearing on your device."},o=JSON.stringify(n);l.post(A,o,{headers:{"Content-Type":"application/json"}}).then((function(e){p().info({title:"[PUSH NOTIFICATION TEST SUCCESSFUL]",balloon:!0,position:"topRight",animateInside:!0,message:e.data.message})})).catch((function(e){p().error({title:"[PUSH NOTIFICATION TEST ERROR]",balloon:!0,position:"topRight",animateInside:!0,message:e.response.data.detail})}))}(e)}));const t={userVisibleOnly:!0,applicationServerKey:D(k)};e.pushManager.subscribe(t).then((function(e){P(e)}),(function(e){}))})(e),console.log("Subscribe Button Set")}))}}(e)})):p().info({title:"[PUSH BROWSER UNAVAILBALE]",balloon:!0,position:"topRight",animateInside:!0,message:"Push notification is not allowed in your browser."}):p().warning({title:"[PUSH DENIED]",balloon:!0,position:"topRight",animateInside:!0,message:"You prevented us from shwoing notifications. Manually check if you have prevented push notifcation from us."}):p().error({title:"[PUSH UNSUPPORTED]",balloon:!0,position:"topRight",animateInside:!0,message:"Showing <strong>PUSH NOTIFICATIONS</strong> is unsupported"})};if(document.getElementById("installButton")){const e=document.getElementById("installButton");window.addEventListener("beforeinstallprompt",(t=>{window.deferredPrompt=t,e.classList.toggle("hidden",!1)})),e.addEventListener("click",(()=>{const t=window.deferredPrompt;t&&(t.prompt(),t.userChoice.then((t=>{window.deferredPrompt=null,e.classList.toggle("hidden",!0)})))}))}window.addEventListener("appinstalled",(e=>{p().info({title:"[SERVICE WORKER]",balloon:!0,position:"topRight",animateInside:!0,message:"Trustscrow Appreciates Your Support."})})),["htmx:onLoad","htmx:load","load","htmx:afterSwap","htmx:afterOnLoad","htmx:afterRequest"].forEach((e=>{window.addEventListener(e,(function(){}))}))},6601:function(){}},function(e){e.O(0,[13],(function(){return 7276,e(e.s=7276)})),e.O()}]);
//# sourceMappingURL=app.0396a77a.js.map