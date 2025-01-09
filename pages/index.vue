<script setup lang="ts">
import { ref, onMounted } from 'vue';

// Interfaces
interface Stat {
  value: string;
  label: string;
}

interface Benefit {
  title: string;
  description: string[];
  icon: string;
}

interface ContentType {
  title: string;
  description: string;
  image: string;
}

interface UserType {
  title: string;
  benefits: string[];
}

// Hero section rotating content
const rotatingContent = ['Tweets', 'LinkedIn Posts', 'Blog Posts', 'Marketing Emails'];
const currentTypeIndex = ref(0);

// Stats data
const stats: Stat[] = [
  { value: '10K+', label: 'Beta Users' },
  { value: '1M+', label: 'Posts Generated' },
  { value: '98%', label: 'Satisfaction Rate' }
];

// Benefits data
const benefits: Benefit[] = [
  {
    title: 'Instant Content That Works',
    description: [
      'Get perfect posts in seconds',
      'Multiple options to choose from',
      'Ready for all your channels'
    ],
    icon: 'mdi-rocket-launch'
  },
  {
    title: 'Sounds Just Like You',
    description: [
      'Show your AI how you write and talk',
      'Keep your personality in every post',
      'No more generic AI content'
    ],
    icon: 'mdi-account-voice'
  },
  {
    title: 'Surprisingly Simple',
    description: [
      'Pick a topic, get content',
      'No technical skills needed',
      'Set up once, use forever'
    ],
    icon: 'mdi-lightning-bolt'
  }
];

// Content types data
const contentTypes: ContentType[] = [
  {
    title: 'Social Posts',
    description: 'that capture your style',
    image: '/placeholder-social.jpg'
  },
  {
    title: 'Blog Articles',
    description: 'that sound natural',
    image: '/placeholder-blog.jpg'
  },
  {
    title: 'Marketing Emails',
    description: 'that connect',
    image: '/placeholder-email.jpg'
  }
];

// Steps
const steps = [
  {
    title: 'Quick Setup',
    subtitle: 'One-time, 5 minutes',
    details: [
      'Define your "Voice"',
      'Share a few content examples you love',
      'Tell us your do\'s and don\'ts'
    ]
  },
  {
    title: 'Create Content',
    subtitle: 'In seconds',
    details: [
      'Pick what you want to create',
      'Choose your topic',
      'Get instant results'
    ]
  },
  {
    title: 'Share & Scale',
    subtitle: 'Grow consistently',
    details: [
      'Post with confidence',
      'Create more in seconds',
      'Stay consistent everywhere'
    ]
  }
];

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
      <v-row
        align="center"
        justify="center"
        class="text-center"
      >
        <v-col
          cols="12"
          md="8"
        >
          <div class="hero-content">
            <div class="hero-badge mb-4">
              <v-chip
                color="secondary"
                class="text-uppercase font-weight-bold"
              >
                Now in Beta
              </v-chip>
            </div>
            <h1 class="text-h2 font-weight-black white--text mb-6 hero-title">
              Instant AI
              <span class="rotating-text-container d-inline-block">
                <transition
                  name="slide-fade"
                  mode="out-in"
                >
                  <span
                    :key="currentTypeIndex"
                    class="rotating-text gradient-text"
                  >
                    {{ rotatingContent[currentTypeIndex] }}
                  </span>
                </transition>
              </span>
              <br>That Sound Like You
            </h1>
            <h2 class="text-h5 font-weight-regular white--text mb-8 hero-subtitle">
              From idea to final version in seconds.
              <span class="d-block">No prompt engineering needed.</span>
            </h2>
            <div class="d-flex justify-center gap-4 hero-cta">
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
            <div class="mt-16 stats-section">
              <v-row justify="center">
                <v-col
                  cols="auto"
                  v-for="(stat, index) in stats"
                  :key="index"
                  class="text-center mx-4"
                >
                  <div class="text-h3 font-weight-black white--text">{{ stat.value }}</div>
                  <div class="text-subtitle-1 text-grey-lighten-2">{{ stat.label }}</div>
                </v-col>
              </v-row>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <!-- Benefits Section -->
    <v-container class="benefits-section py-16">
      <v-row
        justify="center"
        class="mb-12"
      >
        <v-col
          cols="12"
          md="8"
          class="text-center"
        >
          <h2 class="text-h3 font-weight-black mb-4">Why Choose Kastor?</h2>
          <p class="text-subtitle-1 text-grey-darken-1">
            Create authentic content at scale without compromising your unique voice
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          v-for="(benefit, index) in benefits"
          :key="benefit.title"
          cols="12"
          md="4"
        >
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              v-bind="props"
              :elevation="isHovering ? 8 : 2"
              :class="['h-100', 'benefit-card', { 'on-hover': isHovering }]"
              rounded="lg"
            >
              <v-card-item>
                <div class="benefit-icon-wrapper mb-6">
                  <v-icon
                    size="36"
                    :color="isHovering ? 'white' : 'primary'"
                    class="benefit-icon"
                  >
                    {{ benefit.icon }}
                  </v-icon>
                </div>
                <h3 class="text-h5 font-weight-bold mb-4">{{ benefit.title }}</h3>
                <v-list>
                  <v-list-item
                    v-for="(item, i) in benefit.description"
                    :key="i"
                    :title="item"
                    density="comfortable"
                    class="benefit-list-item"
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
          </v-hover>
        </v-col>
      </v-row>
    </v-container>

    <!-- Content Types Section -->
    <v-container
      fluid
      class="bg-surface-light py-16"
    >
      <v-container>
        <h2 class="text-h3 text-center font-weight-black mb-12">Create What You Need</h2>
        <v-row>
          <v-col
            v-for="type in contentTypes"
            :key="type.title"
            cols="12"
            md="4"
          >
            <v-hover v-slot="{ isHovering, props }">
              <v-card
                v-bind="props"
                :elevation="isHovering ? 8 : 2"
                class="h-100 content-card"
              >
                <v-img
                  :src="type.image"
                  height="200"
                  cover
                ></v-img>
                <v-card-item>
                  <h3 class="text-h5 font-weight-bold mb-2">{{ type.title }}</h3>
                  <p class="text-subtitle-1">{{ type.description }}</p>
                </v-card-item>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-container>
    </v-container>

    <!-- How It Works -->
    <v-container
      fluid
      class="bg-surface-light py-16"
    >
      <v-container>
        <h2 class="text-h3 text-center font-weight-black mb-12">How It Works</h2>
        <v-row justify="center">
          <v-col
            cols="12"
            md="10"
          >
            <v-timeline align="start">
              <v-timeline-item
                v-for="(step, index) in steps"
                :key="index"
                dot-color="primary"
                size="large"
              >
                <template v-slot:opposite>
                  <div class="text-h5 font-weight-bold mb-1">{{ step.title }}</div>
                  <div class="text-subtitle-2 text-primary">{{ step.subtitle }}</div>
                </template>
                <v-card>
                  <v-card-text>
                    <v-list>
                      <v-list-item
                        v-for="(detail, dIndex) in step.details"
                        :key="dIndex"
                        :title="detail"
                      >
                        <template v-slot:prepend>
                          <v-icon
                            color="secondary"
                            size="small"
                          >mdi-check-circle</v-icon>
                        </template>
                      </v-list-item>
                    </v-list>
                  </v-card-text>
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </v-col>
        </v-row>
      </v-container>
    </v-container>

    <!-- Who Uses Kastor -->
    <v-container class="py-16">
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
    </v-container>

    <!-- CTA Section -->
    <v-container
      fluid
      class="bg-primary py-16"
    >
      <v-row justify="center">
        <v-col
          cols="12"
          md="8"
          class="text-center"
        >
          <h2 class="text-h3 white--text mb-12">Join Kastor Early</h2>
          <v-row justify="center">
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
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.hero-section {
  position: relative;
  min-height: 100vh;
  padding: 120px 0;
  background: linear-gradient(135deg, rgb(0, 179, 197), rgb(0, 93, 107));
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image:
    radial-gradient(circle at 20% 20%, rgba(224, 247, 250, 0.1) 0%, transparent 40%),
    radial-gradient(circle at 80% 80%, rgba(224, 247, 250, 0.1) 0%, transparent 40%);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.gradient-text {
  background: linear-gradient(135deg, rgb(236, 64, 122), rgb(255, 164, 193));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: clamp(1.25rem, 2vw, 1.5rem);
  opacity: 0.9;
}

.text-button-large {
  font-size: 1.1rem;
  letter-spacing: 0.5px;
  text-transform: none;
  padding: 0 32px;
}

/* Rotating text animations */
.rotating-text-container {
  min-width: 280px;
  text-align: left;
}

.rotating-text {
  display: inline-block;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-in;
}

.slide-fade-enter-from {
  transform: translateY(-20px);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

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

/* Content card styles */
.content-card {
  transition: all 0.3s ease;
}

.content-card:hover {
  transform: translateY(-8px);
}

/* Timeline styles */
.v-timeline {
  max-width: 1200px;
  margin: 0 auto;
}

/* Utility classes */
.gap-4 {
  gap: 1rem;
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

  .stats-section {
    margin-top: 3rem;
  }
}
</style>