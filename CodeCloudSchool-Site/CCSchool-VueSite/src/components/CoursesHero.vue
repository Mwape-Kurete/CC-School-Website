<script setup>
const emit = defineEmits(['toggle-view'])
</script>

<template>
  <div class="hero-wrapper-courses">
    <div class="courses-container">
      <div class="hero-courses">
        <div class="coursebox">
          <img class="coursesheroimg-icon" alt="" src="../assets/coursesHeroImg.png" />
          <div class="coursestitlesection">
            <i class="course-s">[ COURSE_S ]</i>
          </div>
          <div class="coursestitlebody">
            <b class="transform-your-future">Transform Your Future in Just 9 Months</b>
            <div class="at-code">
              At Code & Cloud Academy, we don’t just teach tech — we launch tech careers. Our
              9-month certification-driven programs combine practical learning with global
              industry-recognized certifications. Whether you’re a marketer, developer, creative, or
              aspiring cloud architect — we have a course designed just for you.
            </div>
          </div>
        </div>
      </div>

      <div class="btngroupjump">
        <div class="viewcoursebtn" @click="emit('toggle-view', 'courses')">
          <a class="btnLinktoSections">
            <i class="view-courses">{ View Courses }</i>
          </a>
        </div>
        <div class="viewcoursebtn" @click="emit('toggle-view', 'journey')">
          <a class="btnLinktoSections">
            <i class="view-courses">{ View Journey’s }</i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Quicksand:wght@300..700&display=swap');

.hero-wrapper-courses {
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
a.btnLinktoSections {
  text-decoration: none;
  color: #000;
}

.viewcoursebtn:hover {
  cursor: pointer;
  text-decoration: none;
  background-color: #f0f1a5;
  color: #000;
  transition: all 0.5s ease-in-out;
}

.coursesheroimg-icon {
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 38.83px;
  width: 703.1px;
  height: 511px;
  object-fit: cover;
}
.course-s {
  position: relative;
  font-weight: 300;
}
.coursestitlesection {
  position: absolute;
  top: 0px;
  left: 718.47px;
  border-radius: 38.83px;
  background-color: #1e1e1e;
  width: 703.1px;
  height: 237.3px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px 48px;
  box-sizing: border-box;
}
.transform-your-future {
  width: 638.8px;
  position: relative;
  display: inline-block;
  height: 28.8px;
  flex-shrink: 0;
}
.at-code {
  width: 638.8px;
  position: relative;
  font-size: 19.21px;
  font-weight: 300;
  display: inline-block;
  height: 131.6px;
  flex-shrink: 0;
}
.coursestitlebody {
  position: absolute;
  top: 254.54px;
  left: 718.47px;
  border-radius: 38.83px;
  background-color: #f0f1a5;
  width: 703.1px;
  height: 256.5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 18.3px 30.7px;
  box-sizing: border-box;
  gap: 15.4px;
  font-size: 23.05px;
  color: #212121;
  font-family: Quicksand;
}
.coursebox {
  width: 100%;
  max-width: 1421px;
  height: 511px;
  position: relative;
}

.hero-courses {
  width: 100%;
  max-width: 1440px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 2rem;
  box-sizing: border-box;
  text-align: center;
  font-size: 92.21px;
  color: #fff;
  font-family: 'Josefin Sans';
  margin-top: 100px;
}

.view-courses {
  position: relative;
  font-weight: 300;
}
.viewcoursebtn {
  width: 753px;
  margin-bottom: 5rem;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
  border-radius: 50px;
  background-color: #fff;
  height: 65px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 24px 50px;
  box-sizing: border-box;
}
.btngroupjump {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  width: 90%;
  flex-direction: row;
  align-items: center;
  gap: 17px;
  text-align: center;
  font-size: 32px;
  color: #000;
  font-family: 'Josefin Sans';
}
</style>
