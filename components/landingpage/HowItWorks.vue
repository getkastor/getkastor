<!-- components/HowItWorks.vue -->
<script setup lang="ts">

interface Steps {
  overline: string;
  title: string;
  details: string[];
  image: string;
}

// How it works
const steps: Steps[] = [
  {
    overline: '5-minute, one-time setup',
    title: 'Describe your style',
    details: [
      'Create a voice (or several) to illustrate your or your brand\'s style',
      'Share example content',
      'Tell Kastor your do\'s and don\'ts'
    ],
    image: '/voice-creation.png'
  },
  {
    overline: 'Any content, any time',
    title: 'Create a brief',
    details: [
      'Choose your content type and voice',
      'Pick your goal: new topics, product promotion, content recycling...',
      'Add as much guidance as you want (or keep it minimal)'
    ],
    image: '/content-brief.png'
  },
  {
    overline: 'Instant results',
    title: 'Get your content in seconds',
    details: [
      'Choose from multiple options',
      'Fine-tune to perfection or publish instantly',
      'Get more content whenever you want'
    ],
    image: '/tweet-creation.png'
  },
  {
    overline: 'One idea, endless content',
    title: 'Orchestrate full campaigns',
    details: [
      'Set the campaign goal and description',
      'Let Kastor suggest ideas and briefs for each asset',
      'Tweak if needed, and generate all assets at once',
    ],
    image: '/campaign-creation.png'
  }
];
</script>

<template>

  <v-container
    fluid
    class="py-16"
  >
    <div class="main-container">
      <h2 class="text-h3 text-center font-weight-black mb-12">How it Works</h2>
      <div
        v-for="(type, index) in steps"
        :key="type.title"
        class="content-row"
      >
        <div class="content-text">
          <h4 class="font-weight-bold text-overline mb-2 text-secondary-darken-1">{{ type.overline }}</h4>
          <h3 class="text-h4 font-weight-bold mb-4">{{ type.title }}</h3>
          <div class="checklist">
            <div
              v-for="(detail, i) in type.details"
              :key="i"
              class="checklist-item"
            >
              <v-icon
                color="tertiary"
                size="small"
                class="checklist-icon"
              >mdi-check-circle</v-icon>
              <span class="checklist-text">{{ detail }}</span>
            </div>
          </div>
        </div>
        <div class="content-image">
          <v-img
            :src="type.image"
            cover
            class="rounded-lg"
          ></v-img>
        </div>
      </div>
    </div>
  </v-container>

</template>

<style scoped>
/* Content card styles */
.content-row {
  display: flex;
  gap: 3rem;
  margin-bottom: 6rem;
  align-items: center;
}

.content-row:nth-child(even) {
  flex-direction: row-reverse;
}

/* no bottom margin for last content-row */
.content-row:last-child {
  margin-bottom: 0;
}

.text-overline {
  font-size: 0.875rem !important;
}

.content-text {
  flex: 0 0 30%;
}

.content-image {
  flex: 0 0 70%;
  max-width: 70%;
  /* This ensures the image container doesn't overflow */
}

.checklist {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.checklist-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.checklist-icon {
  margin-top: 4px;
  /* Aligns icon with first line of text */
}

.checklist-text {
  line-height: 1.4;
  flex: 1;
}

@media (max-width: 959px) {
  .content-row {
    flex-direction: column !important;
    margin-bottom: 4rem;
    gap: 1rem;
  }

  .content-text {
    flex: 0 0 auto;
    width: 100%;
    order: -1;
    padding: 1rem;
  }

  .content-image {
    flex: 0 0 auto;
    width: 100%;
    max-width: 100%;
  }
}
</style>
