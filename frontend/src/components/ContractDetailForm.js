import axios from "./axiosFactory";
import iziToast from "izitoast/dist/js/iziToast.min.js"; // you have access to iziToast now
import PaystackPop from "@paystack/inline-js";

function sleep(ms) {
  return new window.Promise((resolve) => setTimeout(resolve, ms));
}

export default function ContractDetailForm() {
  return {
    loading: false,
    showTooltip: false,
    showTooltip2: false,
    openServiceModal: false,
    openMilestoneModal: false,
    openProductModal: false,

    async retryPayment(slug) {
      this.loading = true;
      await axios
        .get(`${window.location.origin}/escrow/transaction/retry/${slug}/`)
        .then(async (response) => {
          await sleep(2500); //wait 1 sec and then htmx redirect get
          if (
            response.data.amount &&
            response.data.pk &&
            response.data.email &&
            response.data.ref
          ) {
            const handler = new PaystackPop();
            await handler.newTransaction({
              key: response.data.pk,
              // key: "pk_test_e3d5e0bcf09cb129ba34480db85b925826242eb8",
              email: response.data.email,
              amount: response.data.amount * 100,
              currency: "NGN",
              ref: response.data.ref,
              onSuccess: async (res) => {
                console.dir(res);

                await axios
                  .get(
                    ```${window.location.origin}/escrow/transaction/verify/${res.reference}/${res.status}/```
                  )
                  .then(async (response) => {
                    await iziToast.info({
                      title: response.data.title,
                      balloon: true,
                      position: "topRight",
                      animateInside: true,
                      message: response.data.message,
                    });
                    this.loading = false;
                    await sleep(3500);
                    if (response.data.slug && res.message === "Approved") {
                      return window.location.replace(
                        `${window.location.origin}/escrow/contract/detail/${response.data.slug}/`
                      );
                    }
                  });
              },
              onCancle: async function () {
                await iziToast.info({
                  title: "TRANSACTION FAILED",
                  balloon: true,
                  position: "topRight",
                  animateInside: true,
                  message:
                    "This transaction could not be completed at the moment. Please try again!",
                });
                return window.location.reload();
              },
            });
            this.loading = false;
          }
        })
        .catch(async (error) => {
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

    printInvoice() {
      var printContents = this.$refs.printTemplate.innerHTML;
      var originalContents = document.body.innerHTML;

      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;
    },
  };
}
