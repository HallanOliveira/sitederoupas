<template>
 <q-page>
    <div class="row q-pa-xl">
      <div class="col-md-6 col-sm-12">
        <q-form
          @submit.prevent="simulateSubmit"
          @submit="onSubmit"
          class="row q-col-gutter-lg q-px-lg"
          :for="url_form">
            <p class="row text-h4">Fale conosco:</p>
            <q-input
              name="Nome"
              color="black"
              bg-color="grey-4"
              label-color=""
              class="col-12"
              label="Digite seu nome:"
              maxlength="100"
              :rules="[(val) => (val && val.length > 0) || 'Nome é obrigatório!']"
              v-model="nome_contato"
              outlined
              :dense="dense">
            <template v-slot:append>
              <q-icon name="person" color="black" align="right" />
            </template>
          </q-input>

          <q-input
            color="black"
            bg-color="grey-4"
            label-color="grey-7"
            class="col-md-6 col-sm-12 col-xs-12"
            label="Digite seu email:"
            v-model="email_contato"
            :rules="[(val) => (val && val.length > 0) || 'Email é obrigatório!']"
            maxlength="100"
            outlined
            :dense="dense">
            <template v-slot:append>
              <q-icon name="mail" color="black" align="right" />
            </template>
          </q-input>

          <q-input
            mask="(##) ##### - ####"
            fill-mask
            color="black"
            bg-color="grey-4"
            label-color="grey-7"
            class="col-md-6 col-sm-12 col-xs-12"
            label="Digite seu telefone:"
            :rules="[(val) => (val && val.length >= 11) || 'Telefone é obrigatório!']"
            v-model="telefone_contato"
            unmasked-value
            outlined
            :dense="dense">
            <template v-slot:append>
              <q-icon name="phone" color="black" align="right" />
            </template>
          </q-input>

          <q-input
            bg-color="grey-4"
            color="black"
            label="Digite sua solicitação:"
            :rules="[(val) => (val && val.length >= 1) || 'Campo obrigatório!']"
            v-model="mensagem_contato"
            filled
            type="textarea"
            class="col-12"
          />
          <q-toggle
            color="green"
            label="Aceito receber mensagens no Whatsapp."
            v-model="Zapzap"
            val="green"
            class="label col-12"/>
          <div class="col-12">
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

      <div id="social" class="col-md-6 col-sm-12 gt-sm">
        <p class="text-h4">Redes sociais:</p>
        <div class="btn-social">
          <q-btn
            type="a"
            target="_blank"
            href="https://www.facebook.com/marlanmodas/?ref=pages_you_manage"
            class="text-h6 bg-grey-4 shadow-6"
            style="width: 50%"
          >
            <q-img
              class="q-mr-sm"
              id="logo"
              src="../img/facebook_logo_square_icon_134009.png"
            />
            Facebook</q-btn
          >
        </div>
        <div class="btn-social">
          <q-btn
            type="a"
            target="_blank"
            href="https://www.instagram.com/mh2modas/"
            class="text-h6 bg-grey-4 shadow-6"
            style="width: 50%"
          >
            <q-img
              class="q-mr-sm"
              id="logo"
              src="../img/image_preview.png"
            />Instagram</q-btn
          >
        </div>
        <div class="btn-social">
          <q-btn
            type="a"
            target="_blank"
            href="https://api.whatsapp.com/send/?phone=5541997867176&text&app_absent=0.com"
            class="text-h6 bg-grey-4 shadow-6"
            style="width: 50%"
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
    </div>
  </q-page>
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
      url_form: "https://revendamais.com.br",
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

