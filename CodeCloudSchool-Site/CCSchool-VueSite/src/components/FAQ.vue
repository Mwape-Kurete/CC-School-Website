<script>
import Accordion from 'primevue/accordion'
import AccordionPanel from 'primevue/accordionpanel'
import AccordionHeader from 'primevue/accordionheader'
import AccordionContent from 'primevue/accordioncontent'

import { ref } from 'vue'

const active = ref('0')
</script>

<template>
  <div class="card">
    <div class="flex mb-4 gap-2 justify-end">
      <Button
        @click="active = '0'"
        rounded
        label="1"
        class="w-8 h-8 p-0"
        :outlined="active !== '0'"
      />
      <Button
        @click="active = '1'"
        rounded
        label="2"
        class="w-8 h-8 p-0"
        :outlined="active !== '1'"
      />
      <Button
        @click="active = '2'"
        rounded
        label="3"
        class="w-8 h-8 p-0"
        :outlined="active !== '2'"
      />
      <Button
        @click="active = '3'"
        rounded
        label="4"
        class="w-8 h-8 p-0"
        :outlined="active !== '3'"
      />
      <Button
        @click="active = '4'"
        rounded
        label="5"
        class="w-8 h-8 p-0"
        :outlined="active !== '4'"
      />
      <Button
        @click="active = '5'"
        rounded
        label="6"
        class="w-8 h-8 p-0"
        :outlined="active !== '5'"
      />
    </div>

    <Accordion v-model:value="active">
      <AccordionPanel value="0">
        <AccordionHeader>Do I need any prior experience to join a course?</AccordionHeader>
        <AccordionContent>
          <p class="m-0">
            Not at all! Our programs are beginner-friendly and start with the fundamentals. You’ll
            be guided every step of the way.
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel value="1">
        <AccordionHeader>Are the courses live or recorded?</AccordionHeader>
        <AccordionContent>
          <p class="m-0">
            Each course includes recorded lessons, live sessions, and mentor check-ins to help
            reinforce your learning. You can learn at your own pace, but still get real-time support
            when you need it.
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel value="2">
        <AccordionHeader>Do I get a certificate when I complete the course?</AccordionHeader>
        <AccordionContent>
          <p class="m-0">
            Yes! All our courses prepare you for globally recognized certifications such as AWS,
            CompTIA, Oracle, Webflow, and more. You'll also receive a Code & Cloud Academy
            Certificate of Completion.
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel value="3">
        <AccordionHeader>Will I get help with my CV or job placement?</AccordionHeader>
        <AccordionContent>
          <p class="m-0">
            Yes! All students receive career support, including help with your CV, LinkedIn profile,
            mock interviews, and job search strategies.
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel value="4">
        <AccordionHeader>How do I pay and is there a payment plan?</AccordionHeader>
        <AccordionContent>
          <p class="m-0">
            We offer secure online payments via card, EFT, and PayFast. Flexible monthly payment
            plans are available for most courses — just ask us during registration!
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel value="5">
        <AccordionHeader>How much time should I set aside weekly?</AccordionHeader>
        <AccordionContent>
          <p class="m-0">
            We recommend setting aside 6–10 hours per week to keep up with content, projects, and
            mentor sessions. You can move faster if you have more time.
          </p>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  </div>
</template>

<style scoped></style>
