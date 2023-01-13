import axios from "./axiosFactory";
import iziToast from "izitoast/dist/js/iziToast.min.js"; // you have access to iziToast now
import PaystackPop from "@paystack/inline-js";
import {PAYSTACK_TEST_SK} from "../../enviroments.js";

function sleep(ms) {
  return new window.Promise((resolve) => setTimeout(resolve, ms));
}



export default function ContractForm() {
  return {
    loading: false,
    redirect: null,
    emailText: null,
    autocomplete: true,
    butocomplete: true,
    step: 1,
    formError: true,
    service: null,
    formData: {
        creator: "",
        contract_title: "",
        contract_type: "",
        amount: 0,
        localization: "",

        vendor: "",
        vendor_phone: "",
        vendor_email: "",
        vendor_address: "",

        buyer: "",
        buyer_phone: "",
        buyer_email: "",
        buyer_address: "",

        terms_agreement: "",
        terms_for_termination: "",
    },

    next() {
      if (this.service) {
        if(this.formData.creator.length > 1 && this.formData.localization.length > 1 && this.formData.contract_title.length > 1 && this.formData.contract_type.length > 1 && this.formData.amount > 100){
          this.step++;
        }
      } else {
        if(this.formData.creator.length > 1 && this.formData.localization.length > 1 && this.formData.contract_type.length > 1 && this.formData.amount > 100){
          this.step++;
        } else {
          iziToast.error({
            title: "Form Error",
            balloon: true,
            position: "topRight",
            animateInside: true,
            message: "Fill all fields here accurately.",
          });
        }
      }
    },

    next2() {
      if(this.formData.vendor.length > 1 &&  this.formData.vendor_phone.length > 1 && this.formData.vendor_email.length > 1){
        this.step++;
      }
      return;
    },

    next3() {
      if(this.formData.buyer.length > 1 &&  this.formData.buyer_phone.length > 1 && this.formData.buyer_email.length > 1 && this.formData.buyer_address.length > 1){
        this.step++;
      } else {
        iziToast.error({
          title: "Form Error",
          balloon: true,
          position: "topRight",
          animateInside: true,
          message: "Fill all fields here accurately.",
        });
      }
    },

    next4() {
      let agreement = window.parent.tinymce.get("id_terms_agreement").getContent();
      console.log(agreement);
      console.log(window.parent.tinymce.get("id_terms_agreement").getContent());
      if(agreement.length > 1){
        this.step++;
      } else {
        iziToast.error({
          title: "Form Error",
          balloon: true,
          position: "topRight",
          animateInside: true,
          message: "You need to add the agreement you had entered with the seller/buyer.",
        });
      }
    },


    back() {
      this.step--;
    },


    async validateField(formElement, fieldElement, el) {
      let data = new FormData(formElement);
      if (fieldElement.type === "textarea") {
        let textarea = fieldElement.id;
        data.append(
            "__field_name__",
          window.parent.tinymce.get(textarea).getContent()
        );
      } else {
          data.append("__field_name__", fieldElement.name);
      }


      await axios.post(formElement.action, data)
      .then(async function (response) {
        let errors = response.data.errors;
        let errorsWrapperElement = document.getElementById(
          `error-wrapper-${fieldElement.name}`
        );


        if (errors.length === 0) {
          el = false;
          console.log(el);
          errorsWrapperElement.classList.add("hidden");
          if (errorsWrapperElement) {
            errorsWrapperElement.innerHTML = "";
          }
        } else {
          el = true;
          console.log(el);
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
      this.formError = el;
      console.log(el);
    },

    // eslint-disable-next-line no-unused-vars
    async vendor_payout(username, amount, id, bank_account, bank_code, name, ref) {
      // get vendor account details to trasnfer to
      await axios.post(`https://api.paystack.co/transferrecipient/`,
      {
        "type": "nuban",
        "name": name,
        "account_number": bank_account,
        "bank_code": bank_code,
        "currency": "NGN"
      },
      {
        headers: {
          Authorization: `Bearer ${PAYSTACK_TEST_SK}`,
          'Content-Type': "application/json"
        }
      }).then(async (response) => {
        // initiate transfer to vendor
        await axios.post("https://api.paystack.co/transfer",
          {
            "source": "balance",
            "amount": parseInt(amount),
            "reference": `${ref}`,
            "recipient": `${response.data.data.recipient_code}`,
            "reason":  `Trustscrow Payout for Contract ID: ${id}`
          },
          {
            headers: {
              Authorization: `Bearer ${PAYSTACK_TEST_SK}`,
              'Content-Type': "application/json"
            }
          }
        // eslint-disable-next-line no-unused-vars
        ).then(async (response) => {
              console.log(response);
              if(response.data.status !== "success") {
                await iziToast.error({
                  title: "[PAYOUT UNSUCCESSFUL]",
                  message: response.data.data.status
                });
                await sleep(5000);
                return window.location.reload();
              }
              await axios.get(`/escrow/contract/detail/${id}/${username}/payment_sent/${response.data.data.transfer_code}/`).then(async (res) => {
                await iziToast.info({
                  title: "[PAYOUT SUCCESSFUL]",
                  message: res.data.message
                });
                await sleep(5000);
                return window.location.replace(`${window.location.origin}/users/${username}/`);
              });
        }).catch(async (error) => {
          console.log(error);
          await iziToast.error({
            title: "[PAYOUT UNSUCCESSFUL]",
            message: error.data.message
          });
          console.log(error);
        });
      }).catch(async (error) => {
        await iziToast.error({
          title: "[PAYOUT UNSUCCESSFUL]",
          message: error.message
        });
        console.log(error);
      });
    },

    // async approve_transfer(slug, username, transfer_code) {
    //   await axios.post("https://api.paystack.co/transfer/finalize_transfer/",
    //   {
    //     // "reference": `${ref}`,
    //     "otp": "",
    //     "transfer_code": `${transfer_code}`,
    //   },
    //   {
    //     headers: {
    //       Authorization: `Bearer ${PAYSTACK_TEST_SK}`,
    //       'Content-Type': "application/json"
    //     }
    //   }
    // // eslint-disable-next-line no-unused-vars
    // ).then(async (response) => {
    //   console.log(response);
    //   await axios.get(`/escrow/contract/detail/${slug}/${username}/payment_sent/${response.data.data.transfer_code}/completed/`).then(async (res) => {
    //     await iziToast.info({
    //       title: "[PAYOUT SUCCESSFUL]",
    //       message: res.data.message
    //     });
    //     await sleep(5000);
    //     return window.location.replace(`${window.location.origin}/escrow/contract/list/`);
    //   });
    // });
    // },

    async updateData() {
      this.loading = true;

      const formElement = this.$refs.form;
      const action = formElement.action;
      const csrf = formElement.dataset.csrf;
      let data = new FormData(formElement);


      formElement.querySelectorAll("[name]").forEach((fieldElement) => {
        if (fieldElement.type !== "textarea" && fieldElement.type !== 'checkbox') {
            data.append(fieldElement.name, fieldElement.value);
        }

        if (fieldElement.type === 'checkbox') {
          if(fieldElement.name === 'active'){
            data.append('active', true);
          }
        }
      });

      await axios
        .post(action, data, {
          headers: {
            "X-CSRFToken": csrf,
          },
        })
        .then(async function (response) {
          console.log(response);
          if (response.status === 200 || response.status === 201) {
            iziToast.success({
              title: "[ACCOUNT DETAILS UPDATED]",
              balloon: true,
              position: "topRight",
              animateInside: true,
              message: response.data.message,
            });
            await sleep(5000);
            return window.location.replace(response.data.redirect);
          }
          return;
        }).catch((error) => {
          console.log(error);
        });
    },


    async submitContract() {
      let agreement = true;
      // let agreement = window.parent.tinymce.get("id_terms_for_termination").getContent();
      if(agreement){
        this.loading = true;

        const formElement = this.$refs.form;
        const action = formElement.action;
        const csrf = formElement.dataset.csrf;
        let data = new FormData(formElement);


        formElement.querySelectorAll("[name]").forEach((fieldElement) => {
          if (fieldElement.type !== "textarea" && fieldElement.type !== 'radio') {
              data.append(fieldElement.name, fieldElement.value);
          }

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

          if (fieldElement.type === 'radio') {
            if(fieldElement.name === 'creator'){
              console.log(this.formData.creator);
              data.append('creator', this.formData.creator);
            }
            if(fieldElement.name === 'contract_type'){
              console.log(this.formData.contract_type);
              data.append('contract_type', this.formData.contract_type);
            }
          }
        });

        console.dir(data);

        await axios
        .post(action, data, {
          headers: {
            "X-CSRFToken": csrf,
          },
        })
        .then(async function (response) {
          if (response.status === 200 || response.status === 201) {
            iziToast.success({
              title: response.data.title,
              balloon: true,
              position: "topRight",
              animateInside: true,
              message: response.data.message,
            });
          }
          if (response.data.amount && response.data.pk && response.data.email && response.data.ref) {
            let amount = response.data.amount * 100;
            const handler = new PaystackPop();
            await handler.newTransaction({
              key: response.data.pk,
              // key: "pk_test_e3d5e0bcf09cb129ba34480db85b925826242eb8",
              email: response.data.email,
              amount: amount,
              currency: "NGN",
              ref: response.data.ref,
              onSuccess: async (res) => {
                console.dir(res);
                const loc = `${window.location.origin}/escrow/transaction/verify/${res.reference}/${res.status}/`;
                await axios.get(loc)
                .then(async (response) => {
                  await iziToast.info({
                    title: response.data.title,
                    balloon: true,
                    position: "topRight",
                    animateInside: true,
                    message: response.data.message,
                  });
                  await sleep(3500);
                  if (response.data.slug && res.message === "Approved") {
                    return window.location.replace(`${window.location.origin}/escrow/contract/detail/${response.data.slug}/`);
                  }
                });
              },
              onCancle: async function() {
                await iziToast.info({
                  title: "TRANSACTION FAILED",
                  balloon: true,
                  position: "topRight",
                  animateInside: true,
                  message: "This transaction could not be completed at the moment. Please try again!",
                });
                return window.location.reload();
              }
            });
          } else if (response.data.slug) {
              return window.location.replace(`${window.location.origin}/escrow/contract/detail/${response.data.slug}/`);
          }
        })
        .catch(async function (error) {
          if (error.response && error.response.status === 403) {
            await iziToast.error({
              title: error.response.data.title,
              balloon: true,
              position: "topRight",
              animateInside: true,
              message: error.response.data.message,
            });
          }

          await iziToast.error({
            title: "Form Error",
            balloon: true,
            position: "topRight",
            animateInside: true,
            message: error.message,
          });
          await sleep(3500); //wait 1 sec and then htmx redirect get
          return; // window.location.reload();
        });

        this.loading = false;

      } else {
        await iziToast.error({
          title: "Form Error",
          balloon: true,
          position: "topRight",
          animateInside: true,
          message: "You need to input a reason for termination.",
        });
      }

    },

    async vendor_approve(link) {
      await axios.get(link).then(async (response) => {
        iziToast.info({
          title: "[CONTRACT APPROVED]",
          message: response.data.message
        });
        await sleep(5000);
        return window.location.reload();
      }).catch(async (error) => {
        iziToast.error({
          title: "[CONTRACT APPROVED FAILED]",
          message: error.data.message
        });
      });
    },

    async retryPayment(ref) {
      this.loading = true;
      await axios.get(`${window.location.origin}/escrow/transaction/retry/${ref}/`).then(async (response) => {
        await sleep(2500); //wait 1 sec and then htmx redirect get
        if (response.data.amount && response.data.pk && response.data.email && response.data.ref) {
          let amount = response.data.amount * 100;
          const handler = new PaystackPop();
          await handler.newTransaction({
            key: response.data.pk,
            // key: "pk_test_e3d5e0bcf09cb129ba34480db85b925826242eb8",
            email: response.data.email,
            amount: amount,
            currency: "NGN",
            ref: response.data.ref,
            onSuccess: async (res) => {
              console.dir(res);

              await axios.get(`${window.location.origin}/escrow/transaction/verify/${res.reference}/${res.status}/`)
              .then(async (response) => {
                await iziToast.info({
                  title: response.data.title,
                  balloon: true,
                  position: "topRight",
                  animateInside: true,
                  message: response.data.message,
                });
                await sleep(3500);
                if (response.data.slug) {
                  return await window.location.replace(`${window.location.origin}/escrow/contract/detail/${response.data.slug}/`);
                }
                return window.location.reload();
              });
            },
            onCancle: async function() {
              await iziToast.info({
                title: "TRANSACTION FAILED",
                balloon: true,
                position: "topRight",
                animateInside: true,
                message: "This transaction could not be completed at the moment. Please try again!",
              });
              return window.location.reload();
            }
          });
        }

        this.loading = false;
      }).catch(async (error) => {
        if (error.response && error.response.status === 403) {
          await iziToast.error({
            title: error.response.data.title,
            balloon: true,
            position: "topRight",
            animateInside: true,
            message: error.response.data.message,
          });
        }

        await iziToast.error({
          title: "Form Error",
          balloon: true,
          position: "topRight",
          animateInside: true,
          message: error.message,
        });
        this.loading = false;
        await sleep(3500);
        return window.location.reload();
      });

      this.loading = false;
    },

    async refresh() {
      window.location.reload();
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
      if (document.getElementById('contract_type')) {
        const contract = document.getElementById('contract_type').value;
        this.service = contract;
      }
      this.loading = false;
    },

    checkValidity() {
      this.formError = true;
      this.loading = false;
      const formElement = this.$refs.form;
      console.log("Initializing Contract Form");
      formElement.querySelectorAll("[name]").forEach((fieldElement) => {
        fieldElement.addEventListener("change", (event) => {
          console.log(event);
          this.validateField(formElement, fieldElement, this.formError);
        });
      });
      console.log("Initialized Contract Form");
    },

    contractText() {
      return this.loading ? "Processing..." : "Submit";
    },

    stageTwo() {
      return this.service === "SERVICE" ? "Service" : "Products";
    },

    vautofill() {
      const item = this.$refs.item;
      this.autocomplete = !this.autocomplete;
      console.log(item);
      document.getElementById('id_vendor').value = this.$refs.vendor.innerText;
      document.getElementById('id_vendor_email').value = this.$refs.email.innerText;
      document.getElementById('id_vendor_phone').value = this.$refs.phone.innerText;
      document.getElementById('id_vendor_address').value = this.$refs.address.innerText;
    },

    bautofill() {
      const item = this.$refs.item;
      this.butocomplete = !this.butocomplete;
      console.log(item);
      document.getElementById('id_buyer').value = this.$refs.buyer.innerText;
      document.getElementById('id_buyer_email').value = this.$refs.email.innerText;
      document.getElementById('id_buyer_phone').value = this.$refs.phone.innerText;
      document.getElementById('id_buyer_address').value = this.$refs.address.innerText;
    },

  };
}
