<template>
<q-layout>
 <q-page-container>
    <div class="row q-mt-lgs">
      <div class="col" style="width: 50%">
        <q-form
          @submit.prevent="simulateSubmit"
          @submit="onSubmit"
          class="row justify-around q-col-gutter-lg q-px-lg"
        >
          <p class="row text-h4">Fale conosco:</p>
          <q-input
            name="Nome"
            color="black"
            bg-color="grey-4"
            label-color=""
            class="col-md-12 col-xl-12 col-sm-12"
            label="Digite seu nome:"
            maxlength="100"
            :rules="[(val) => (val && val.length > 0) || 'Nome é obrigatório!']"
            v-model="nome_contato"
            outlined
            :dense="dense"
          >
            <template v-slot:append>
              <q-icon name="person" color="black" align="right" />
            </template>
          </q-input>

          <div class="row" style="width: 50%">
            <q-input
              color="black"
              bg-color="grey-4"
              label-color="grey-7"
              class="col-md-12 col-xl-12 col-sm-12"
              label="Digite seu email:"
              v-model="email_contato"
              :rules="[
                (val) => (val && val.length > 0) || 'Email é obrigatório!',
              ]"
              maxlength="100"
              outlined
              :dense="dense"
            >
              <template v-slot:append>
                <q-icon name="mail" color="black" align="right" />
              </template>
            </q-input>
          </div>

          <div class="row" style="width: 50%">
            <q-input
              mask="(##) ##### - ####"
              fill-mask
              color="black"
              bg-color="grey-4"
              label-color="grey-7"
              class="col-md-12 col-xl-12 col-sm-12"
              label="Digite seu telefone:"
              :rules="[
                (val) => (val && val.length >= 11) || 'Telefone é obrigatório!',
              ]"
              v-model="telefone_contato"
              unmasked-value
              outlined
              :dense="dense"
            >
              <template v-slot:append>
                <q-icon name="phone" color="black" align="right" />
              </template>
            </q-input>
          </div>

          <q-input
            style="width: 100%"
            bg-color="grey-4"
            color="black"
            label="Digite sua solicitação:"
            :rules="[(val) => (val && val.length >= 1) || 'Campo obrigatório!']"
            v-model="mensagem_contato"
            filled
            type="textarea"
          />
          <q-toggle
            color="green"
            label="Aceito receber mensagens no Whatsapp."
            v-model="Zapzap"
            val="green"
          />
          <div class="row justify-end">
            <q-btn
              type="submit"
              :loading="submitting"
              label="Enviar"
              icon="send"
              class="q-mt-md"
              color="blue-5"
            >
              <template v-slot:loading>
                <q-spinner-facebook />
              </template>
            </q-btn>
          </div>
        </q-form>
      </div>

      <div id="social" style="width: 49%" align="center" class="col q-px-lg">
        <p class="text-h4">Redes sociais:</p>
        <q-separator color="black" />
        <div>
          <q-btn
            type="a"
            target="_blank"
            href="https://facebook.com"
            class="text-h6 bg-blue-4 shadow-20 q-mt-xl"
            style="width: 300px"
          >
            <q-img
              class="q-mr-sm"
              id="logo"
              src="../img/facebook_logo_square_icon_134009.png"
            />
            Facebook</q-btn
          >
        </div>
        <q-separator class="q-mt-xl" />
        <div>
          <q-btn
            type="a"
            target="_blank"
            href="https://instagram.com"
            class="text-h6 bg-red-5 shadow-20 q-mt-xl"
            style="width: 300px"
          >
            <q-img
              class="q-mr-sm"
              id="logo"
              src="../img/image_preview.png"
            />Instagram</q-btn
          >
        </div>
        <q-separator class="q-mt-xl" />
        <div>
          <q-btn
            type="a"
            target="_blank"
            href="https://api.whatsapp.com/send/?phone=5541997867176&text&app_absent=0.com"
            class="text-h6 bg-green-3 shadow-20 q-mt-xl"
            style="width: 300px"
          >
            <q-img
              class="q-mr-sm"
              id="logo"
              src="../img/whatsapp_logo_icon_134017.png"
            />Whatsapp</q-btn
          >
        </div>
      </div>
    </div>
    <div>
      <a
        href="https://google.com"
        target="_blank"
        class="absolute-bottom text-grey-7 q-mb-sm"
        align="center"
        >Termos de política e privacidade</a
      >
    </div>
  </q-page-container>
</q-layout>
</template>

<script>
export default {
  name: 'Contato',
  data() {
    return {
      text: "",
      ph: "",
      nome_contato: "",
      email_contato: "",
      telefone_contato: "",
      mensagem_contato: "",
      dense: false,
      submitting: false,
      test: "",
      Zapzap: false,
    };
  },

  methods: {
    simulateSubmit() {
      this.submitting = true;

      // Simulating a delay here.
      // When we are done, we reset "submitting"
      // Boolean to false to restore the
      // initial state.
      setTimeout(() => {
        // delay simulated, we are done,
        // now restoring submit to its initial state
        this.submitting = false;
      }, 500);
    },
    onSubmit() {
      this.$q.notify({
        color: "green-4",
        textColor: "white",
        icon: "cloud_done",
        message: "Contato enviado com suscesso!",
      });
    },
  },
};
</script>

