<script setup lang="ts">
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Button from 'primevue/button'

const form = ref({
  name: '',
  email: '',
  message: '',
})

const submitForm = () => {
  console.log('Form submitted:', form.value)
}
</script>

<template>
  <main class="contact-form container">
    <div class="form-sect mx-auto px-4 py-8 md:px-8 lg:px-12 max-w-7xl">
      <div class="form">
        <div class="text-wrapper">Send A Message</div>
        <div class="name-txt-field">
          <div class="div">Your Name</div>
          <div class="text-area-details"></div>
        </div>
        <div class="email-txt">
          <div class="div">Your Email</div>
          <div class="text-area-details"></div>
        </div>
        <div class="text-area"></div>
        <div class="send-BTN">
          <div class="send-BTN-2"></div>
          <div class="text-wrapper-2">Send Message!</div>
        </div>
      </div>
      <div class="getintouch-cont">
        <div class="text-wrapper-3">Get In Touch</div>

        <p class="p">
          <span class="span">Email: <br /></span>
          <span class="text-wrapper-4">hello@codeandcloud.academy</span>
        </p>
        <p class="p">
          <span class="span">Phone: <br /></span>
          <span class="text-wrapper-4">+27 60 123 4567</span>
        </p>
        <p class="p">
          <span class="span">WhatsApp: <br /></span>
          <span class="text-wrapper-4">+27 60 123 4567</span>
        </p>
        <p class="p">
          <span class="span">Operating Hours: <br /></span>
          <span class="text-wrapper-4">Monday – Friday | 9 AM – 5 PM (SAST)</span>
        </p>
        <p class="p">
          <span class="span">Location: <br /></span>
          <span class="text-wrapper-4">100% Online | Based in South Africa, Open to the World</span>
        </p>

        <!-- PrimeVue Contact Form -->
        <form @submit.prevent="submitForm" class="mt-6 space-y-4">
          <div>
            <label for="name" class="span">Name:</label>
            <InputText id="name" v-model="form.name" class="w-full" />
          </div>

          <div>
            <label for="email" class="span">Email:</label>
            <InputText id="email" v-model="form.email" type="email" class="w-full" />
          </div>

          <div>
            <label for="message" class="span">Message:</label>
            <Textarea id="message" v-model="form.message" rows="5" class="w-full" />
          </div>

          <Button type="submit" label="Send Message" class="mt-2" />
        </form>
      </div>
    </div>
  </main>
</template>

<style>
.form-sect {
  margin-top: 20%;
  position: relative;
  width: 1507px;
  height: 723px;
}

.form-sect .form {
  position: absolute;
  width: 678px;
  height: 726px;
  top: -1px;
  left: 828px;
}

.form-sect .text-wrapper {
  position: absolute;
  top: -1px;
  left: 232px;
  font-family: 'Josefin Sans-Bold', Helvetica;
  font-weight: 700;
  color: #000000;
  font-size: 27.2px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
}

.form-sect .name-txt-field {
  display: flex;
  flex-direction: column;
  width: 326px;
  align-items: center;
  gap: 8.31px;
  position: absolute;
  top: 60px;
  left: 352px;
}

.form-sect .div {
  position: relative;
  align-self: stretch;
  height: 22.66px;
  margin-top: -0.76px;
  font-family: 'Quicksand-Medium', Helvetica;
  font-weight: 500;
  color: #000000;
  font-size: 12.1px;
  letter-spacing: 0;
  line-height: normal;
}

.form-sect .text-area-details {
  position: relative;
  align-self: stretch;
  width: 100%;
  height: 67.99px;
  border-radius: 37.77px;
  border: 0.76px solid;
  border-color: #212121;
}

.form-sect .email-txt {
  display: flex;
  flex-direction: column;
  width: 326px;
  align-items: flex-start;
  gap: 8.31px;
  position: absolute;
  top: 60px;
  left: 0;
}

.form-sect .text-area {
  position: absolute;
  width: 678px;
  height: 344px;
  top: 227px;
  left: 0;
  border-radius: 37.77px;
  border: 0.76px solid;
  border-color: #212121;
}

.form-sect .send-BTN {
  display: flex;
  flex-direction: column;
  width: 341px;
  align-items: flex-start;
  gap: 7.55px;
  padding: 7.55px;
  position: absolute;
  top: 592px;
  left: 168px;
}

.form-sect .send-BTN-2 {
  position: relative;
  align-self: stretch;
  width: 100%;
  height: 71.01px;
  background-color: #212121;
  border-radius: 37.77px;
  border: 0.76px solid;
}

.form-sect .text-wrapper-2 {
  position: absolute;
  top: 30px;
  left: 106px;
  font-family: 'Quicksand-Bold', Helvetica;
  font-weight: 700;
  color: #ffffff;
  font-size: 18.1px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
}

.form-sect .getintouch-cont {
  display: flex;
  flex-direction: column;
  width: 611px;
  height: 723px;
  align-items: flex-end;
  gap: 35.5px;
  padding: 57.59px 26.82px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #d8dfe9;
  border-radius: 39.44px;
}

.form-sect .text-wrapper-3 {
  position: relative;
  width: 542.73px;
  height: 63.11px;
  margin-top: -0.79px;
  font-family: 'Josefin Sans-Bold', Helvetica;
  font-weight: 700;
  color: #000000;
  font-size: 50.5px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
}

.form-sect .p {
  position: relative;
  width: 551.41px;
  font-family: 'Quicksand-Bold', Helvetica;
  font-weight: 400;
  color: #000000;
  font-size: 22.1px;
  letter-spacing: 0;
  line-height: normal;
}

.form-sect .span {
  font-weight: 700;
}

.form-sect .text-wrapper-4 {
  font-family: 'Quicksand-Light', Helvetica;
  font-weight: 300;
}
</style>
