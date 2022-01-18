<template>
  <div
    class="
      container
      mx-auto
      flex flex-col-reverse
      md:flex-row md:py-10 md:mt-20
    "
  >
    <!-- Contact form -->
    <ContactForm />

    <!-- Contact details -->
    <ContactDetails :contacts="contacts" />
  </div>
</template>

<script>
import feather from "feather-icons";

export default {
  scrollToTop: true,
  data: () => {
    return {
      contacts: [
        {
          id: 1,
          name: "Chile Mz 24 lt 2, Cartagena de indias, Colombia",
          icon: "map-pin",
        },
        {
          id: 2,
          name: "emiliocaraballo9810@gmail.com",
          icon: "mail",
        },
        {
          id: 3,
          name: "+57 304 2334893",
          icon: "phone",
        },
      ],
    };
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>
