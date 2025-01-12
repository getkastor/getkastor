<script setup lang="ts">
import { ref, onMounted } from 'vue';
import DemoVideo from '~/components/DemoVideo.vue';

// Interfaces

interface Benefit {
  title: string;
  description: string[];
  icon: string;
}

interface UserType {
  title: string;
  benefits: string[];
}

// Hero section rotating content
const rotatingContent = ['Tweets', 'LinkedIn Posts', 'Blog Posts', 'Marketing Emails'];
const currentTypeIndex = ref(0);

// User types data
const userTypes: UserType[] = [
  {
    title: 'Creators & Solopreneurs',
    benefits: [
      'Create content for social, email, and blog without the time sink',
      'Keep your authentic voice while growing your following',
      'Get real marketing results without hiring a team'
    ]
  },
  {
    title: 'Marketing Teams',
    benefits: [
      'Get everyone writing in your brand\'s voice from day one',
      'Keep quality high even during product launches and events',
      'Scale content creation without scaling your team'
    ]
  }
];

// Rotate through content types
onMounted(() => {
  setInterval(() => {
    currentTypeIndex.value = (currentTypeIndex.value + 1) % rotatingContent.length;
  }, 3000);
});
</script>

<template>
  <div>
    <!-- Hero Section -->
    <v-container
      fluid
      class="hero-section"
    >
      <div class="hero-background"></div>
      <div class="hero-content main-container text-center">
        <h1 class="hero-title">
          <div class="rotating-container">
            <transition
              name="fade-slide"
              mode="out-in"
            >
              <div
                :key="currentTypeIndex"
                class="gradient-text rotating-text text-secondary"
              >
                {{ rotatingContent[currentTypeIndex] }}
              </div>
            </transition>
          </div>
          <div class="text-center mt-2">That Sound Like You</div>
        </h1>
        <h2 class="text-h4 font-weight-regular white--text mt-12 mb-16 hero-subtitle">
          From idea to authentic content in seconds.
        </h2>
        <div class="d-flex justify-center ga-4 hero-cta">
          <v-btn
            size="x-large"
            color="rgb(236, 64, 122)"
            elevation="4"
            class="text-button-large"
            :ripple="false"
            min-width="200"
          >
            <v-icon start>mdi-rocket-launch</v-icon>
            Join the Beta
          </v-btn>
          <v-btn
            size="x-large"
            variant="outlined"
            color="white"
            class="text-button-large white--text"
            :ripple="false"
            min-width="200"
          >
            <v-icon start>mdi-email-outline</v-icon>
            Join Waitlist
          </v-btn>
        </div>
      </div>
    </v-container>

    <!-- Benefits Section -->
    <Benefits />
    <DemoVideo />
    <ContentTypes2 />
    

    <HowItWorks/>
    

    <!-- Who Uses Kastor -->
    <v-container
      fluid
      class="py-16"
    >
      <div class="main-container">
        <h2 class="text-h3 text-center font-weight-black mb-12">Who Uses Kastor</h2>
        <v-row>
          <v-col
            v-for="user in userTypes"
            :key="user.title"
            cols="12"
            md="6"
          >
            <v-card class="h-100">
              <v-card-item>
                <h3 class="text-h5 font-weight-bold mb-4">{{ user.title }}</h3>
                <v-list>
                  <v-list-item
                    v-for="(benefit, index) in user.benefits"
                    :key="index"
                    :title="benefit"
                    density="comfortable"
                  >
                    <template v-slot:prepend>
                      <v-icon
                        color="secondary"
                        size="small"
                      >mdi-check-circle</v-icon>
                    </template>
                  </v-list-item>
                </v-list>
              </v-card-item>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>

    <!-- CTA Section -->
    <v-container
      fluid
      class="bg-primary py-16"
    >
      <div class="main-container">
        <h2 class="text-h3 white--text text-center mb-12">Join Kastor Early</h2>
        <v-row>
          <v-col
            cols="12"
            sm="6"
          >
            <v-card class="h-100">
              <v-card-item>
                <h3 class="text-h5 font-weight-bold mb-4">Get Beta Access</h3>
                <v-list>
                  <v-list-item title="Help shape the product"></v-list-item>
                  <v-list-item title="Early access to all features"></v-list-item>
                  <v-list-item title="Special beta pricing"></v-list-item>
                </v-list>
                <v-btn
                  color="primary"
                  block
                  class="mt-4 text-button-large"
                >
                  Apply for Beta Access
                </v-btn>
              </v-card-item>
            </v-card>
          </v-col>
          <v-col
            cols="12"
            sm="6"
          >
            <v-card class="h-100">
              <v-card-item>
                <h3 class="text-h5 font-weight-bold mb-4">Join the Waitlist</h3>
                <v-list>
                  <v-list-item title="Be first to know when we launch"></v-list-item>
                  <v-list-item title="Get exclusive early-bird pricing"></v-list-item>
                  <v-list-item title="Stay updated on our progress"></v-list-item>
                </v-list>
                <v-btn
                  color="secondary"
                  block
                  class="mt-4 text-button-large"
                >
                  Join Waitlist
                </v-btn>
              </v-card-item>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<style scoped>
.hero-section {
  position: relative;
  padding: 200px 0 120px 0;
    background: linear-gradient(135deg,
    rgb(138, 220, 235),
    rgb(178, 242, 245)  
    );
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* Softer overlays with very light colors */
  background-image:
    radial-gradient(circle at 20% 20%, rgba(224, 247, 250, 0.7) 0%, transparent 50%),
    radial-gradient(circle at 90% 90%, rgba(247, 253, 254, 0.7) 0%, transparent 50%);
  z-index: 1;
}


.hero-content {
  position: relative;
  z-index: 2;
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  line-height: 1.3;
  letter-spacing: -0.02em;
  color: rgb(0, 66, 77);
}


.hero-title-wrapper {
  position: relative;
  height: 1.2em;
  margin-bottom: 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-title-line {
  margin-top: 0.2em;
}

.fixed-text {
  position: absolute;
  left: 50%;
  transform: translateX(calc(-50% - 140px));
  /* Half of rotating-text-container width */
}

.hero-cta .v-btn.v-btn--outlined {
  border-color: rgb(0, 179, 197);
  /* primary */
  color: rgb(0, 179, 197);
  /* primary */
}

.hero-subtitle {
  font-size: clamp(1.25rem, 2vw, 1.5rem);
  opacity: 0.9;
  color: rgb(0, 93, 107);
}

.text-button-large {
  font-size: 1.1rem;
  letter-spacing: 0.5px;
  text-transform: none;
  padding: 0 32px;
}

/* Rotating text animations */
.rotating-container {
  height: 1.3em;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.2em 0;
}

.rotating-text {
  font-weight: 700;
  white-space: nowrap;
}


/* Smooth fade-slide transition */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.5s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

/* Video */

.video-container {
  position: relative;
  z-index: 2;
  line-height: 0;
  font-size: 0;
}

.video-sheet {
  padding: 0 !important;
  line-height: 0;
  font-size: 0;
  overflow: hidden;
}

.demo-video {
  display: block;
  width: 100%;
  height: auto;
  line-height: 0;
  margin: 0;
  padding: 0;
}

/* Benefits */
.benefit-card {
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.12);
}

.benefit-card.on-hover {
  transform: translateY(-8px);
}

.benefit-icon-wrapper {
  width: 64px;
  height: 64px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(247, 253, 254);
  transition: all 0.3s ease;
}

.benefit-card.on-hover .benefit-icon-wrapper {
  background: rgb(0, 179, 197);
}

.benefit-list-item {
  padding-left: 0;
}


@keyframes float {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-10px);
  }

  100% {
    transform: translateY(0px);
  }
}

/* Responsive adjustments */
@media (max-width: 600px) {
  .rotating-text-container {
    min-width: 200px;
  }

  .hero-title {
    font-size: clamp(2rem, 4vw, 3rem);
  }

  .hero-subtitle {
    font-size: clamp(1rem, 1.5vw, 1.25rem);
  }

}

/* Mobile adjustments */
@media (max-width: 768px) {
  .hero-title-wrapper {
    height: 2.4em;
    /* Double height for stacked layout */
  }

  .fixed-text {
    top: 0;
    transform: translateX(-50%);
    /* Center align */
  }

  .rotating-text-container {
    top: 1.2em;
    transform: translateX(-50%);
    /* Center align */
    text-align: center;
  }
}
</style>