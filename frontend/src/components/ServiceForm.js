import axios from "./axiosFactory";
import iziToast from "izitoast/dist/js/iziToast.min.js"; // you have access to iziToast now

function sleep(ms) {
  return new window.Promise((resolve) => setTimeout(resolve, ms));
}



export default function ServiceForm() {
  return {
    loading: false,
    redirect: null,
    hasError: null,
    service: false,
    formData: {
        service_name: "",
        service_description: "",
        service_cost: "",
    },

    async validateField(formElement, fieldElement) {
      let formData = new FormData(formElement);
      formData.append("__field_name__", fieldElement.name);

      axios.post(formElement.action, formData).then(function (response) {
        let errors = response.data.errors;
        let errorsWrapperElement = document.getElementById(
          `error-wrapper-${fieldElement.name}`
        );

        if (errors.length === 0) {
          if (document.getElementById('next')) document.getElementById('next').removeAttribute('disabled');
          if (document.getElementById('submitForm')) document.getElementById('submitForm').removeAttribute('disabled');
          errorsWrapperElement.classList.add("hidden");
          if (errorsWrapperElement) {
            errorsWrapperElement.innerHTML = "";
          }
          this.hasError = false;
        } else {
          if (document.getElementById('next')) document.getElementById('next').setAttribute('disabled');
          if (document.getElementById('submitForm')) document.getElementById('submitForm').setAttribute('disabled');
          this.hasError = true;
          // if haserror is null hide the errorwrapper, but if false show green text and if true, red text
          errorsWrapperElement.classList.remove("hidden");
          errorsWrapperElement.classList.add("flex");
          if (errorsWrapperElement) {
            let errorsHtml = "";
            for (let i = 0; i < errors.length; i++) {
              errorsHtml += `${errors[i]}`;
            }
            errorsWrapperElement.innerHTML = errorsHtml;
          }
        }
      });
    },

    async submitService() {
      this.loading = true;

      const formElement = this.$refs.form;
      const action = formElement.action;
      const csrf = formElement.dataset.csrf;
      let data = new FormData(formElement);

      formElement.querySelectorAll("[name]").forEach((fieldElement) => {
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
        }

        if (fieldElement.type !== "textarea") {
            data.append(fieldElement.name, fieldElement.value);
        }
      });

      if (formElement.checkValidity()) {
        await axios
        .post(action, data, {
          headers: {
            "X-CSRFToken": csrf,
          },
        })
        .then(async function (response) {
          await sleep(4500); //wait 1 sec and then htmx redirect get
          if (response.status === 200 || response.status === 201) {
            iziToast.success({
              title: response.data.title,
              balloon: true,
              position: "topRight",
              animateInside: true,
              message: response.data.message,
            });
          }

          if (response.data.username) {
            this.redirect = window.location.replace(`${window.location.origin}/users/${response.data.username}/services/${response.data.id}/`);
          }
        })
        .catch(async function (error) {
          if (error.response && error.response.status === 403) {
            iziToast.error({
              title: error.response.data.title,
              balloon: true,
              position: "topRight",
              animateInside: true,
              message: error.response.data.message,
            });
          }

          iziToast.error({
            title: "Form Error",
            balloon: true,
            position: "topRight",
            animateInside: true,
            message: `Something wrong happened: ${error}`,
          });

          await sleep(3500); //wait 1 sec and then htmx redirect get
          this.redirect = window.location.reload();
        })
        .finally(function () {
            this.loading = false;
            return this.redirect;
        });

      }
    },

    isEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    },

    isEmpty(el) {
        if (el.length < 2) {
            return true;
        } else {
            return false;
        }
    },

    validate() {
      this.loading = true;
      sleep(2500);
      this.step ++;
      this.service = this.formData.contractType;
      console.log(this.service);
      this.loading = false;
    },

    checkValidity() {
      const formElement = this.$refs.form;
      formElement.querySelectorAll("[name]").forEach((fieldElement) => {
        fieldElement.addEventListener("change", (event) => {
          console.log(event);
          this.validateField(formElement, fieldElement);
        });
      });
    },

    contractText() {
      return this.loading ? "Processing..." : "Submit";
    },

    stageTwo() {
      return this.service === "SERVICE" ? "Service" : "Products";
    },
  };
}
