import axios from "./axiosFactory";
// import htmx from "htmx.org/dist/htmx";
import iziToast from 'izitoast/dist/js/iziToast.min.js';  // you have access to iziToast now

function sleep(ms) {
    return new window.Promise(resolve => setTimeout(resolve, ms));
}

function validateField(formElement, fieldElement) {
    let formData = new FormData(formElement);
    formData.append("__field_name__", fieldElement.name);

    axios.post(formElement.action, formData).then(function (response) {
      let errors = response.data.errors;
      let errorsWrapperElement = document.getElementById(`error-wrapper-${fieldElement.name}`);
      if (errors.length === 0) {
        document.getElementById('submit').classList.remove('hidden');
        errorsWrapperElement.classList.add('hidden');
        if (errorsWrapperElement) {
          errorsWrapperElement.innerHTML = "";
        }
      } else {
        document.getElementById('submit').classList.add('hidden');
        errorsWrapperElement.classList.remove('hidden');
        errorsWrapperElement.classList.add('flex');
        if (errorsWrapperElement) {
          let errorsHtml = '';
          for (let i = 0; i < errors.length; i++) {
            errorsHtml += `${errors[i]}`;
          }
          errorsWrapperElement.innerHTML = errorsHtml;
        }
      }
    });
  }


export default function ContactForm() {
    return {
        processing: false,

        async submitForm() {
            this.processing = true;

            const formElement = this.$refs.contactForm;
            // const div = document.getElementById('contact');
            const action = formElement.action;
            const redirect = formElement.dataset.redirect;
            const csrf = formElement.dataset.csrf;
            let data = new FormData(formElement);
            formElement.querySelectorAll("[name]").forEach(fieldElement => {
                if (fieldElement.type === "textarea") {
                    let textarea = fieldElement.id;
                    console.log(
                      "textarea content: ",
                      window.parent.tinymce.get(textarea).getContent()
                    );
                    data.append(
                      fieldElement.name,
                      window.parent.tinymce.get(textarea).getContent()
                    );
                } else {
                    data.append(fieldElement.name, fieldElement.value);
                }
            });

            console.log(data);

            if (formElement.checkValidity()) {
                await axios.post(action, data, {
                    headers: {
                      'X-CSRFToken': csrf
                    }})
                    .then(async function (response) {
                        // console.info("RESPONSE DATA: ", response);

                        if (response.status === 201) {
                            // div.innerHTML = `
                            // <div class="w-full text-green-300 space-y-8 flex flex-col justify-center py-24">
                            //     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="block w-14 h-14 block mx-auto animate-bounce text-green-300">
                            //         <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            //     </svg>
                            //     <div class="w-full md:w-3/5 text-center space-y-3 mx-auto">
                            //         <h4 class="text-green-500 font-semibold text-2xl md:text-4xl">Mail Sent Successfully</h4>
                            //         <p>${response.data.message}</p>
                            //     </div>
                            // </div>
                            // `;
                            iziToast.success({
                                title: "Email Sent Successful",
                                balloon: true,
                                position: "topRight",
                                animateInside: true,
                                message: response.data.message
                            });
                            await sleep(3500); //wait 1 sec and then htmx redirect get
                            // htmx.ajax('GET', redirect, {target:'main', swap:'outerHTML'});
                            window.location.replace(redirect);
                            // sleep(3500); //wait 1 sec and then htmx redirect get
                            // location.reload();
                        }

                        console.log(response);
                    }).catch(function (error) {
                        console.log(error);
                        iziToast.error({
                            title: "Email Sending Incomplete",
                            balloon: true,
                            position: "topRight",
                            animateInside: true,
                            message: `Something wrong happened: ${error}`
                        });
                    });
                this.processing = false;
            } else {
                iziToast.error({
                    title: "Sending Email Incomplete",
                    balloon: true,
                    position: "topRight",
                    animateInside: true,
                    message: `Form data is not valid. Ensure you have filled all fields accurately! ${formElement.reportValidity()}`
                });
                sleep(2500); //wait 2.5 sec and then htmx redirect get
                this.processing = false;
                // htmx.ajax('GET', redirect, {target:'main', swap:'outerHTML'});
            }

        },

        async checkValidity() {
            const formElement = this.$refs.contactForm;
            formElement.querySelectorAll('[name]').forEach(fieldElement => {
                fieldElement.addEventListener('change', event => {
                    console.log(event);
                    validateField(formElement, fieldElement);
                });
            });
        },

        getBtnText() {
            return this.processing ? 'Processing...' : 'Submit';
        }
    };
}
