<template>
  <div class="courses-container px-4 py-8 md:px-8 lg:px-12 max-w-7xl">
    <div class="hero-courses">
      <div class="coursebox">
        <img class="coursesheroimg-icon" alt="" src="../assets/coursesHeroImg.png" />
        <div class="coursestitlesection">
          <i class="course-s">[ COURSE_S ]</i>
        </div>
        <div class="coursestitlebody">
          <b class="transform-your-future">Transform Your Future in Just 9 Months</b>
          <div class="at-code">
            At Code & Cloud Academy, we don’t just teach tech — we launch tech careers. Our 9-month
            certification-driven programs combine practical learning with global industry-recognized
            certifications. Whether you’re a marketer, developer, creative, or aspiring cloud
            architect — we have a course designed just for you.
          </div>
        </div>
      </div>
    </div>

    <div class="btngroupjump mx-auto">
      <div class="viewcoursebtn">
        <a class="btnLinktoSections" href="#course">
          <i class="view-courses">{ View Courses }</i></a
        >
      </div>
      <div class="viewcoursebtn">
        <a class="btnLinktoSections" href="#journey">
          <i class="view-courses">{ View Journey’s }</i></a
        >
      </div>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Quicksand:wght@300..700&display=swap');

a.btnLinktoSections {
  text-decoration: none;
  color: #000;
}

.coursesheroimg-icon {
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 41.59px;
  width: 753.1px;
  height: 547.3px;
  object-fit: cover;
}
.course-s {
  position: relative;
  font-weight: 300;
}
.coursestitlesection {
  position: absolute;
  top: 0px;
  left: 769.57px;
  border-radius: 41.59px;
  background-color: #1e1e1e;
  width: 753.1px;
  height: 254.1px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px 51.4px;
  box-sizing: border-box;
}
.transform-your-future {
  width: 684.2px;
  position: relative;
  display: inline-block;
  height: 30.9px;
  flex-shrink: 0;
}
.at-code {
  width: 684.2px;
  position: relative;
  font-size: 20.58px;
  font-weight: 300;
  display: inline-block;
  height: 141px;
  flex-shrink: 0;
}
.coursestitlebody {
  position: absolute;
  top: 272.64px;
  left: 769.57px;
  border-radius: 41.59px;
  background-color: #f0f1a5;
  width: 753.1px;
  height: 274.7px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 19.5px 32.9px;
  box-sizing: border-box;
  gap: 16.5px;
  font-size: 24.69px;
  color: #212121;
  font-family: 'Quicksand', sans-serif;
}
.coursebox {
  width: 1522.7px;
  position: absolute;
  margin: 0 !important;
  top: 57.61px;
  left: 77.16px;
  height: 547.3px;
  z-index: 0;
}
.hero-courses {
  width: 100%;
  position: relative;
  height: 662.6px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-content: flex-start;
  padding: 36px;
  box-sizing: border-box;
  text-align: center;
  font-size: 98.77px;
  color: #fff;
  font-family: 'Josefin Sans', sans-serif;
}

.explore-courses {
  position: relative;
  font-weight: 300;
}
.marquesselement {
  width: 100%;
  position: relative;
  box-sizing: border-box;
  height: 105px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 27px 775px;
  text-align: center;
  font-size: 40px;
  color: #000;
  font-family: 'Josefin Sans', sans-serif;
}

.view-courses {
  position: relative;
  font-weight: 300;
}
.viewcoursebtn {
  width: 753px;
  border-radius: 50px;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
  background-color: #fff;
  height: 65px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 24px 50px;
  box-sizing: border-box;
}

.viewcoursebtn:hover {
  background-color: #f0f1a5;
  transition: all 0.4s ease-in-out;
}
.btngroupjump {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 17px;
  text-align: center;
  font-size: 32px;
  color: #000;
  font-family: 'Josefin Sans', sans-serif;
}
</style>
