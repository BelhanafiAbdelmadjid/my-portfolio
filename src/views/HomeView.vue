<script setup lang="ts">
import Education from '@/components/education/index.vue';
import Experience from '@/components/experience/index.vue';
import Skills from '@/components/Skills.vue';
import Work from '@/components/Work.vue';

</script>

<template>
  <main>
    <section class=" w-screen flex flex-col items-center justify-center gap-[20px] min-h-[300px] h-[100vh] ">
      <div
        class="flex items-center justify-center w-[100px] h-[100px] md:w-[150px] md:h-[150px] rounded-full overflow-hidden mb-4">
        <img src="@/assets/images/Me.jpg" alt="">
      </div>
      <h1 class="text-xl md:text-4xl font-montserrat font-bold text-center">
        Belhanafi Abdelmadjid
      </h1>
      <p class="px-[20px] text-[12px] md:text-lg font-semibold font-montserrat text-center ">
        {{ $t("introduction") }}
      </p>
    </section>
    <section id="about"
      class="w-screen text-[16px] md:text-xl flex flex-col items-start justify-center gap-4 px-5 py-10  text-xl  font-montserrat bg-beige-200 text-gray-800">
      <span class=" font-bold">Hey!</span>
      <p class=" leading-[40px]">
        {{ $t("about.line1") }}
        <br>
        {{ $t("about.line2") }}
        <br>
        {{ $t("about.line3") }}
      </p>
    </section>

    <p class="w-screen p-[100px]  text-center  font-montserrat font-bold text-xl md:text-3xl ">
      <span class="font-semibold text-3xl">Portfolio</span>
    </p>

    <section id="experience" class="w-screen bg-beige-200 py-[16px] px-[10px] md:p-10">
      <Experience />
    </section>
    <section id="skills" class="w-screen  py-[16px] px-[10px] md:p-10 ">
      <Skills />
    </section>
    <section id="work" class="w-screen  ">
      <Work />
    </section>
    <section id="education" class="w-screen bg-beige-200 py-[16px] px-[10px] md:p-10 ">
      <Education />
    </section>

  </main>
</template>
