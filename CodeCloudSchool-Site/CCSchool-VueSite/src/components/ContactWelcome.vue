<template>
  <div class="intro-block-contact mx-auto px-4 py-8 md:px-8 lg:px-12 max-w-7xl">
    <img class="contact-us-banner" src="../assets/ContactUsBanner.png" />
    <div class="info-cont-contact">
      <div class="copy-contact">
        <p class="text-wrapper">
          Have a question about our programs, enrolment, or certifications? Need help choosing the
          right course for your goals? Our team is here to help every step of the way.
        </p>
        <p class="div">Reach out to us and we’ll get back to you within 24–48 hours.</p>
      </div>
      <div class="contact-title"><p class="p">We’d Love to Hear From You</p></div>
    </div>
  </div>
</template>

<style scoped>
.intro-block-contact {
  display: flex;
  flex-direction: column;
  width: 1514px;
  align-items: flex-end;
  gap: 42px;
  position: relative;
  margin-top: 150px;
}

.intro-block-contact .contact-us-banner {
  position: relative;
  align-self: stretch;
  width: 100%;
  height: 422px;
  object-fit: cover;
}

.intro-block-contact .info-cont-contact {
  position: relative;
  align-self: stretch;
  width: 100%;
  flex: 0 0 auto;
}

.intro-block-contact .copy-contact {
  display: flex;
  flex-direction: column;
  width: 787px;
  height: 237px;
  align-items: flex-start;
  gap: 37px;
  padding: 58px 29.57px 27.93px;
  position: absolute;
  top: 29px;
  left: 727px;
  background-color: #f0f1a5;
  border-radius: 41.07px;
}

.intro-block-contact .text-wrapper {
  position: relative;
  width: 716.34px;
  height: 66.54px;
  margin-top: -0.82px;
  font-family: 'Quicksand-Regular', Helvetica;
  font-weight: 400;
  color: #000000;
  font-size: 19.7px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
}

.intro-block-contact .div {
  position: relative;
  width: 716.34px;
  height: 41.9px;
  font-family: 'Quicksand-SemiBold', Helvetica;
  font-weight: 600;
  color: #000000;
  font-size: 19.7px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
}

.intro-block-contact .contact-title {
  display: inline-flex;
  height: 295px;
  align-items: center;
  justify-content: center;
  gap: 8.21px;
  padding: 8.21px;
  position: absolute;
  top: 0;
  left: 0;
}

.intro-block-contact .p {
  position: relative;
  width: 677.73px;
  font-family: 'Josefin Sans-Regular', Helvetica;
  font-weight: 400;
  color: #000000;
  font-size: 78px;
  letter-spacing: 0;
  line-height: normal;
}
</style>
