<template>
  <transition name="fade">
    <div v-show="modal" class="fixed inset-0 z-30">
      <!-- Modal body background as backdrop -->
      <div
        v-show="modal"
        @click="showModal()"
        class="
          bg-filter bg-black bg-opacity-50
          fixed
          inset-0
          w-full
          h-full
          z-20
        "
      ></div>
      <!-- Modal contents -->
      <main class="flex flex-col items-center justify-center h-full w-full">
        <transition name="fade-up-down">
          <div v-show="modal" class="modal-wrapper flex items-center z-30">
            <div
              class="
                modal
                max-w-md
                mx-5
                xl:max-w-xl
                lg:max-w-xl
                md:max-w-xl
                bg-secondary-light
                dark:bg-primary-dark
                max-h-screen
                shadow-lg
                flex-row
                relative
              "
            >
              <div
                class="
                  modal-header
                  flex
                  justify-between
                  gap-10
                  pt-5
                  pr-3
                  pb-5
                  pl-8
                  border-b border-ternary-light
                  dark:border-ternary-dark
                "
              >
                <h5
                  class="
                    text-primary-dark
                    dark:text-primary-light
                    text-lg
                    md:text-2xl
                  "
                >
                  ¿Qué proyecto estás buscando?
                </h5>
                <button
                  class="
                    pr-2
                    font-bold
                    text-primary-dark
                    dark:text-primary-light
                  "
                  @click="showModal()"
                >
                  <i data-feather="x" class="w-8 sm:w-12"></i>
                </button>
              </div>
              <div class="modal-body p-5 w-full h-full">
                <form
                  @submit="createPortfolio"
                  class="max-w-xl m-4 text-left"
                >
                  <div class="">
                    <input
                      class="
                        w-full
                        px-5
                        py-2
                        border-1 border-gray-200
                        dark:border-secondary-dark
                        rounded-md
                        text-md
                        dark:font-medium
                        bg-secondary-light
                        dark:bg-ternary-dark
                        text-primary-dark
                        dark:text-ternary-light
                      "
                      id="name"
                      name="name"
                      v-model="form.name"
                      type="text"
                      required=""
                      placeholder="Nombre"
                      aria-label="Nombre"
                    />
                  </div>
                  <div class="mt-6">
                    <input
                      class="
                        w-full
                        px-5
                        py-2
                        border-1 border-gray-200
                        dark:border-secondary-dark
                        rounded-md
                        text-md
                        dark:font-medium
                        bg-secondary-light
                        dark:bg-ternary-dark
                        text-primary-dark
                        dark:text-ternary-light
                      "
                      id="email"
                      v-model="form.mail"
                      name="email"
                      type="text"
                      required=""
                      placeholder="Email"
                      aria-label="Email"
                    />
                  </div>
                  <div class="mt-6">
                    <select
                      class="
                        w-full
                        px-5
                        py-2
                        border-1 border-gray-200
                        dark:border-secondary-dark
                        rounded-md
                        text-md
                        dark:font-medium
                        bg-secondary-light
                        dark:bg-ternary-dark
                        text-primary-dark
                        dark:text-ternary-light
                      "
                      id="subject"
                      name="subject"
                      v-model="form.subject"
                      type="text"
                      required=""
                      aria-label="Categoría de proyecto"
                    >
                      <option
                        v-for="category in categories"
                        :key="category.id"
                        :value="category.value"
                      >
                        {{ category.name }}
                      </option>
                    </select>
                  </div>

                  <div class="mt-6">
                    <textarea
                      class="
                        w-full
                        px-5
                        py-2
                        border-1 border-gray-200
                        dark:border-secondary-dark
                        rounded-md
                        text-md
                        dark:font-medium
                        bg-secondary-light
                        dark:bg-ternary-dark
                        text-primary-dark
                        dark:text-ternary-light
                      "
                      id="message"
                      name="message"
                      v-model="form.message"
                      cols="14"
                      rows="6"
                      aria-label="Details"
                      placeholder="Descripción del Proyecto"
                    ></textarea>
                  </div>

                  <div class="mt-6 pb-4 sm:pb-1">
                    <button
                      class="
                        px-4
                        sm:px-6
                        py-2
                        sm:py-2.5
                        text-white
                        font-normal
                        sm:font-medium
                        bg-indigo-500
                        hover:bg-indigo-600
                        rounded-md
                        focus:ring-1 focus:ring-indigo-900
                      "
                      type="submit"
                      aria-label="Submit Request"
                    >
                      Enviar
                    </button>
                  </div>
                </form>
              </div>
              <div
                class="modal-footer mt-2 sm:mt-0 py-5 px-8 border0-t text-right"
              >

              </div>
            </div>
          </div>
        </transition>
      </main>
    </div>
  </transition>
</template>

<script>
import feather from "feather-icons";
import { PortfolioService } from "../services/index"
export default {
  props: ["showModal", "modal", "categories"],
  data() {
     return {
      form:{
        name:"",
        mail:"",
        subject:"web",
        message:""
      }
     }
  },
  mounted() {
    feather.replace();
  },
  methods: {
     async createPortfolio(e){
       e.preventDefault();
       try {
          const res=await PortfolioService.createPortfolio(this.form);
          if(res.data.code==1){
            this.form.name="";
            this.form.mail="";
            this.form.message="";
            this.form.subject="web";
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
     }
  },
};
</script>

<style>
.modal-body {
  max-height: 500px;
}
.bg-gray-800-opacity {
  background-color: #2d374850;
}
@media screen and (max-width: 768px) {
  .modal-body {
    max-height: 400px;
  }
}
.fade-up-down-enter-active {
  transition: all 0.3s ease;
}
.fade-up-down-leave-active {
  transition: all 0.3s ease;
}
.fade-up-down-enter {
  transform: translateY(10%);
  opacity: 0;
}
.fade-up-down-leave-to {
  transform: translateY(10%);
  opacity: 0;
}

.fade-enter-active {
  -webkit-transition: opacity 2s;
  transition: opacity 0.3s;
}
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
