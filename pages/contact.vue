<!-- pages/contact.vue -->
<template>
  <v-container fluid class="contact-section py-16">
    <div class="main-container">
      <v-row justify="center">
        <v-col cols="12" md="8" lg="6">

            <div class="text-center my-12">
              <h1 class="text-h3 font-weight-bold mb-4">Contact Us</h1>
              <p class="text-body-1 text-medium-emphasis">
                Have questions or need assistance? We're here to help! Whether you need technical support, have feature requests, or want to learn more about Kastor, our team is ready to assist you.
              </p>
            </div>

            <v-card
              class="contact-method-card mb-6 pa-6"
              variant="outlined"
              rounded="lg"
            >
              <div class="d-flex align-center mb-4">
                <v-icon
                  icon="mdi-email-outline"
                  color="primary"
                  size="32"
                  class="mr-4"
                ></v-icon>
                <div>
                  <h3 class="text-h6 font-weight-bold mb-1">Email Us</h3>
                  <p class="text-body-2 text-medium-emphasis mb-2">
                    For any questions, feedback, or support
                  </p>
                  <a
                    href="mailto:team@getkastor.com"
                    class="text-primary font-weight-medium text-body-1"
                  >
                    team@getkastor.com
                  </a>
                </div>
              </div>
              <v-divider class="my-4"></v-divider>
              <div class="response-time d-flex align-center">
                <v-icon
                  icon="mdi-clock-outline"
                  size="small"
                  color="success"
                  class="mr-2"
                ></v-icon>
                <span class="text-caption text-medium-emphasis">
                  We aim to respond within 24 hours
                </span>
              </div>
            </v-card>

            <div class="additional-info mt-12 text-center">
              <h3 class="text-h6 font-weight-medium mb-4">How We Can Help</h3>
              <v-row>
                <v-col
                  v-for="(topic, index) in helpTopics"
                  :key="index"
                  cols="12"
                  sm="6"
                  class="px-4"
                >
                  <div class="help-item text-center pa-4">
                    <v-icon
                      :icon="topic.icon"
                      color="primary"
                      size="32"
                      class="mb-3"
                    ></v-icon>
                    <h4 class="text-subtitle-1 font-weight-bold mb-2">
                      {{ topic.title }}
                    </h4>
                    <p class="text-body-2 text-medium-emphasis">
                      {{ topic.description }}
                    </p>
                  </div>
                </v-col>
              </v-row>
            </div>

        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script setup lang="ts">
const helpTopics = [
  {
    icon: 'mdi-help-circle',
    title: 'General Support',
    description: 'Get help with your account, features, or any general questions'
  },
  {
    icon: 'mdi-lightbulb',
    title: 'Feature Requests',
    description: 'Share your ideas on how we can make Kastor even better'
  },
  {
    icon: 'mdi-account-group',
    title: 'Business Inquiries',
    description: 'Learn more about our plans and enterprise solutions'
  },
  {
    icon: 'mdi-handshake',
    title: 'Partnerships',
    description: 'Explore collaboration opportunities with our team'
  }
]

</script>

<style scoped>
.contact-section {
  background: linear-gradient(135deg, rgb(248, 250, 252) 0%, rgb(255, 255, 255) 100%);
  min-height: 100vh;
}

.contact-card {
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1) !important;
}

.contact-method-card {
  transition: transform 0.2s ease;
}

.contact-method-card:hover {
  transform: translateY(-2px);
}

.help-item {
  height: 100%;
  transition: transform 0.2s ease;
}

.help-item:hover {
  transform: translateY(-2px);
}

@media (max-width: 600px) {
  .contact-card {
    padding: 16px !important;
  }
}
</style>