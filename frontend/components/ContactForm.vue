<template>
  <!-- Contact form -->
  <div class="w-full md:w-1/2">
    <div class="leading-loose">
      <form
        @submit="createContact"
        class="
          max-w-xl
          m-4
          p-6
          sm:p-10
          bg-secondary-light
          dark:bg-secondary-dark
          rounded-lg
          shadow-xl
          text-left
        "
      >
        <p
          class="
            text-primary-dark
            dark:text-primary-light
            text-2xl
            font-semibold
            mb-8
          "
        >
          Formulario de contacto
        </p>
        <div class="">
          <label
            class="block text-lg text-primary-dark dark:text-primary-light mb-2"
            for="name"
            >Nombre completo</label
          >
          <input
            class="
              w-full
              px-5
              py-2
              border-0
              text-primary-dark
              dark:text-secondary-light
              bg-ternary-light
              dark:bg-ternary-dark
              rounded-md
              shadow-sm
              text-md
              dark:font-medium
            "
            id="name"
            name="name"
            v-model="form.name"
            type="text"
            required=""
            placeholder="Tu nombre"
            aria-label="Name"
          />
        </div>
        <div class="mt-6">
          <label
            class="block text-lg text-primary-dark dark:text-primary-light mb-2"
            for="email"
            >Correo</label
          >
          <input
            class="
              w-full
              px-5
              py-2
              border-0
              text-primary-dark
              dark:text-secondary-light
              bg-ternary-light
              dark:bg-ternary-dark
              rounded-md
              shadow-sm
              text-md
              dark:font-medium
            "
            id="email"
            name="email"
            v-model="form.mail"
            type="text"
            required=""
            placeholder="Tu Correo"
            aria-label="Email"
          />
        </div>
        <div class="mt-6">
          <label
            class="block text-lg text-primary-dark dark:text-primary-light mb-2"
            for="subject"
            >Asunto</label
          >
          <input
            class="
              w-full
              px-5
              py-2
              border-0
              text-primary-dark
              dark:text-secondary-light
              bg-ternary-light
              dark:bg-ternary-dark
              rounded-md
              shadow-sm
              text-md
              dark:font-medium
            "
            id="subject"
            name="subject"
            v-model="form.subject"
            type="text"
            required=""
            placeholder="Asunto"
            aria-label="Asunto"
          />
        </div>

        <div class="mt-6">
          <label
            class="block text-lg text-primary-dark dark:text-primary-light mb-2"
            for="message"
            >Mensaje</label
          >
          <textarea
            class="
              w-full
              px-5
              py-2
              border-0
              text-primary-dark
              dark:text-secondary-light
              bg-ternary-light
              dark:bg-ternary-dark
              rounded-md
              shadow-sm
              text-md
              dark:font-medium
            "
            id="message"
            name="message"
            v-model="form.message"
            cols="14"
            rows="6"
            aria-label="Mensaje"
          ></textarea>
        </div>

        <div class="mt-6">
          <button
            class="
              px-4
              py-2.5
              text-white
              font-medium
              tracking-wider
              bg-indigo-500
              hover:bg-indigo-600
              focus:ring-1 focus:ring-indigo-900
              rounded-lg
            "
            type="submit"
            aria-label="Enviar Mensaje"
          >
            Enviar Mensaje
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { PortfolioService } from "../services/index"
export default {
  data() {
     return {
      form:{
        name:"",
        mail:"",
        subject:"",
        message:""
      }
     }
  },
  methods:{
   async createContact(e){
       e.preventDefault();

       try {
        const res=await PortfolioService.createContact(this.form);
        if(res.data.code==1){
            this.form.name="";
            this.form.mail="";
            this.form.message="";
            this.form.subject="";
        }
        this.$swal({
              icon: (res.data.code!=1)?'warning':"success",
              timer: 5000,
              timerProgressBar: true,
              text: res.data.message
        });
        return;
       } catch (error) {

       }
          this.$swal({
              icon: 'warning',
              timer: 5000,
              timerProgressBar: true,
              text: "Intente nuevamente."
          });
          return;

    }
  }
};
</script>

<style lang="scss" scoped></style>
