<script setup lang="ts">
// import { ref } from 'vue'
// import InputText from 'primevue/inputtext'
// import Textarea from 'primevue/textarea'
// import Button from 'primevue/button'

// const form = ref({
//   name: '',
//   email: '',
//   message: '',
// })

// const submitForm = () => {
//   console.log('Form submitted:', form.value)
// }
</script>

<template>
  <main class="contact-form container">
    <div class="form-contact mx-auto px-4 py-8 md:px-8 lg:px-12 max-w-7xl">
      <div class="form-sect">
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
          <div class="text-wrapper-3">Get In Touch*</div>
          <p class="email-hello">
            <span class="span">Email: <br /></span>
            <span class="text-wrapper-4">hello@codeandcloud.academy</span>
          </p>
          <p class="phone">
            <span class="span">Phone: <br /></span>
            <span class="text-wrapper-4">+27 60 123 4567</span>
          </p>
          <p class="whatsapp">
            <span class="span">WhatsApp: <br /></span>
            <span class="text-wrapper-4">+27 60 123 4567</span>
          </p>
          <p class="operating-hours">
            <span class="span">Operating Hours: <br /></span>
            <span class="text-wrapper-4">Monday – Friday | 9 AM – 5 PM (SAST)</span>
          </p>
          <p class="location-online">
            <span class="span">Location: <br /></span>
            <span class="text-wrapper-4"
              >100% Online | Based in South Africa, Open to the World</span
            >
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Quicksand:wght@300..700&display=swap');

.form-contact {
  width: 1522px;
  height: 835px;
  background-color: #d8dfe9;
  border-radius: 43.75px;
}

.form-contact .form-sect {
  position: relative;
  width: 1318px;
  height: 633px;
  top: 101px;
  left: 102px;
}

.form-contact .form {
  position: absolute;
  width: 594px;
  height: 635px;
  top: -1px;
  left: 725px;
  background-color: #ffffff;
  border-radius: 50px;
  box-shadow: 0px 4px 4px #00000040;
}

.form-contact .text-wrapper {
  position: absolute;
  top: 45px;
  left: 203px;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 700;
  color: #000000;
  font-size: 23.8px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
}

.form-contact .name-txt-field {
  display: flex;
  flex-direction: column;
  width: 253px;
  align-items: center;
  gap: 6.43px;
  position: absolute;
  top: 105px;
  left: 307px;
}

.form-contact .div {
  position: relative;
  align-self: stretch;
  height: 17.54px;
  margin-top: -0.58px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  color: #000000;
  font-size: 9.4px;
  letter-spacing: 0;
  line-height: normal;
}

.form-contact .text-area-details {
  position: relative;
  align-self: stretch;
  width: 100%;
  height: 52.61px;
  border-radius: 29.23px;
  border: 0.58px solid;
  border-color: #212121;
}

.form-contact .email-txt {
  display: flex;
  flex-direction: column;
  width: 253px;
  align-items: flex-start;
  gap: 6.43px;
  position: absolute;
  top: 105px;
  left: 34px;
}

.form-contact .text-area {
  position: absolute;
  width: 525px;
  height: 266px;
  top: 217px;
  left: 34px;
  border-radius: 33.05px;
  border: 0.66px solid;
  border-color: #212121;
}

.form-contact .send-BTN {
  display: flex;
  flex-direction: column;
  width: 254px;
  align-items: flex-start;
  gap: 5.61px;
  padding: 5.61px;
  position: absolute;
  top: 518px;
  left: 170px;
}

.form-contact .send-BTN-2 {
  position: relative;
  align-self: stretch;
  width: 100%;
  height: 52.75px;
  background-color: #212121;
  border-radius: 28.06px;
  border: 0.56px solid;
}

.form-contact .text-wrapper-2 {
  position: absolute;
  top: 22px;
  left: 79px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  color: #ffffff;
  font-size: 13.5px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
}

.form-contact .getintouch-cont {
  display: flex;
  flex-direction: column;
  width: 535px;
  height: 537px;
  align-items: flex-end;
  gap: 16.63px;
  padding: 50.39px 39.38px;
  position: absolute;
  top: 48px;
  left: 0;
  background-color: #d8dfe9;
  border-radius: 34.51px;
}

.form-contact .text-wrapper-3 {
  position: relative;
  width: 474.93px;
  margin-top: -0.69px;
  margin-left: -19.02px;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 700;
  color: #000000;
  font-size: 44.2px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
}

.form-contact .email-hello {
  position: absolute;
  width: 430px;
  top: 122px;
  left: 66px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 400;
  color: #000000;
  font-size: 19.3px;
  letter-spacing: 0;
  line-height: normal;
}

.form-contact .span {
  font-weight: 700;
}

.form-contact .text-wrapper-4 {
  font-family: 'Quicksand', sans-serif;
  font-weight: 300;
}

.form-contact .phone {
  position: absolute;
  width: 430px;
  top: 187px;
  left: 66px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 400;
  color: #000000;
  font-size: 19.3px;
  letter-spacing: 0;
  line-height: normal;
}

.form-contact .whatsapp {
  position: absolute;
  width: 430px;
  top: 253px;
  left: 66px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 400;
  color: #000000;
  font-size: 19.3px;
  letter-spacing: 0;
  line-height: normal;
}

.form-contact .operating-hours {
  position: absolute;
  width: 430px;
  top: 318px;
  left: 66px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 400;
  color: #000000;
  font-size: 19.3px;
  letter-spacing: 0;
  line-height: normal;
}

.form-contact .location-online {
  position: absolute;
  width: 430px;
  top: 384px;
  left: 66px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 400;
  color: #000000;
  font-size: 19.3px;
  letter-spacing: 0;
  line-height: normal;
}
</style>
