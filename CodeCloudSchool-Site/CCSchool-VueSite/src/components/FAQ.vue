<script></script>

<template>
  <div class="accordion-inner-cont">
    <h1>Frequently Asked Questions. *</h1>
    <div class="faq-wrapper">
      <div class="faqsection">
        <div class="faq">
          <div class="question">
            <i class="do-i-need">Do I need any prior experience to join a course?</i>
          </div>
          <div class="answer">
            <div class="not-at-all">
              Not at all! Our programs are beginner-friendly and start with the fundamentals. You’ll
              be guided every step of the way.
            </div>
          </div>
        </div>
        <div class="faq1">
          <div class="question">
            <i class="do-i-need">Are the courses live or recorded?</i>
          </div>
          <div class="answer">
            <div class="each-course-includes">
              Each course includes recorded lessons, live sessions, and mentor check-ins to help
              reinforce your learning. You can learn at your own pace, but still get real-time
              support when you need it.
            </div>
          </div>
        </div>
        <div class="faq2">
          <div class="question">
            <i class="do-i-need">Do I get a certificate when I complete the course?</i>
          </div>
          <div class="answer2">
            <div class="not-at-all">
              Yes! All our courses prepare you for globally recognized certifications such as AWS,
              CompTIA, Oracle, Webflow, and more. You'll also receive a Code & Cloud Academy
              Certificate of Completion.
            </div>
          </div>
        </div>
        <div class="faq">
          <div class="question">
            <i class="do-i-need">Will I get help with my CV or job placement?</i>
          </div>
          <div class="answer">
            <div class="not-at-all">
              Yes! All students receive career support, including help with your CV, LinkedIn 
              profile, mock interviews, and job search strategies.
            </div>
          </div>
        </div>
        <div class="faq1">
          <div class="question">
            <i class="do-i-need">How do I pay and is there a payment plan?</i>
          </div>
          <div class="answer">
            <div class="not-at-all">
              We offer secure online payments via card, EFT, and PayFast. Flexible monthly payment
              plans are available for most courses — just ask us during registration!
            </div>
          </div>
        </div>
        <div class="faq2">
          <div class="question">
            <i class="do-i-need">How much time should I set aside weekly?</i>
          </div>
          <div class="answer2">
            <div class="not-at-all">
              We recommend setting aside 6–10 hours per week to keep up with content, projects, and
              mentor sessions. You can move faster if you have more time.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Quicksand:wght@300..700&display=swap');

.faqsection {
  width: 100%;
}

.faq-wrapper {
  width: 100%; /* Change from 100% to fit-content */
  position: relative;
  margin: 0 auto; /* This works with mx-auto in the class */
  display: flex; /* Add flex to help with centering */
  justify-content: center; /* Center the content horizontally */
}
.accordion-inner-cont {
  background-color: #212121;
  padding: 50px;
  height: auto;
  border-radius: 50px;
}
h1 {
  font-size: 60px;
  color: white;
  text-align: center;
  font-family: 'Josefin Sans', sans-serif;
}
.do-i-need {
  position: relative;
  font-weight: 300;
}
.question {
  align-self: stretch;
  border-radius: 18.51px;
  background-color: #fff;
  height: 46.6px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 3.7px 10.4px;
  box-sizing: border-box;
}
.not-at-all {
  width: 502px;
  position: relative;
  display: inline-block;
  flex-shrink: 0;
}
.answer {
  align-self: stretch;
  height: 82.9px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 4.4px 12.6px;
  box-sizing: border-box;
  font-family: Quicksand;
}
.faq {
  width: 668.6px;
  border-radius: 18.51px;
  background-color: #d8dfe9;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.each-course-includes {
  width: 502px;
  position: relative;
  white-space: pre-wrap;
  display: inline-block;
  flex-shrink: 0;
}
.faq1 {
  width: 668.6px;
  border-radius: 18.51px;
  background-color: #f0f1a5;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.answer2 {
  align-self: stretch;
  height: 82.9px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 4.4px 12.6px;
  box-sizing: border-box;
  color: #fff;
  font-family: Quicksand;
}
.faq2 {
  width: 668.6px;
  border-radius: 18.51px;
  border: 1.5px solid #fff;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.faqsection {
  width: fit-content;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 36px 37px;
  text-align: left;
  font-size: 14.81px;
  color: #000;
  font-family: 'Josefin Sans';
}
</style>
