<!-- components/landingpage/FAQ.vue -->
<script setup lang="ts">
import { onMounted } from 'vue'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'What is Kastor?',
    answer: `<p>Kastor is an AI-powered content marketing platform that helps you create authentic, on-brand content—fast. It’s built for marketers, solopreneurs, and teams who want to generate LinkedIn posts, tweets, emails, blog posts, and full campaigns without starting from scratch.</p>
  <p>With Kastor, you define your voice once and generate high-quality content in seconds across all your channels. It’s like having a content team that already knows your tone, goals, and messaging style—available on demand.</p>`
  },
  {
    question: 'What type of content can Kastor create?',
    answer: `<p>Kastor supports LinkedIn posts, tweets, blog posts, marketing emails, and full campaigns.</p><p>You can generate content in seconds for one channel or orchestrate multi-asset campaigns across several.</p>`
  },
  {
    question: 'Can Kastor repurpose existing content into new formats?',
    answer: `<p>Yes. Kastor can take a blog post, whitepaper, LinkedIn Post, webinar or interview transcript, etc, and turn it into fresh content for other platforms.</p><p>Just choose "repurpose content" when creating your brief, and Kastor will adapt your content to match the tone and format of each channel.</p>`
  },
  {
    question: 'Can I use Kastor on mobile?',
    answer: `<p>Yes. Kastor is fully responsive and accessible via modern mobile browsers. You can use it on your phone or tablet without installing an app.</p><p>The full platform is available on mobile for content creation on the go.</p>`
  },
  {
    question: 'Does Kastor support different writing styles (e.g., casual vs. professional)?',
    answer: `<p>Absolutely. You can create multiple "voices" to match different tones—whether it’s casual, formal, or promotional.</p>
      <p>Each voice also includes both general settings and channel-specific configurations (like separate examples and guidelines for Twitter, LinkedIn, email, and blog). That means your brand can adapt its tone across platforms while staying consistent overall.</p>
      <p>And if needed, you can still adjust the tone or provide specific guidance for any individual piece of content—so you stay in control without starting from scratch.</p>`
  },
  {
    question: 'Which AI models does Kastor use for content generation?',
    answer: `<p>Kastor uses advanced language models (LLMs) from OpenAI, Anthropic, selecting the best engine for each type of content request.</p><p>This ensures high-quality, relevant, and human-sounding results across formats—from short tweets to long-form blog posts.</p>`
  },
  {
    question: 'How is Kastor different from ChatGPT or other AI writing tools?',
    answer: `<p>Unlike general-purpose AI tools, Kastor is purpose-built for content marketing. It lets you define and manage brand voices, generate multi-channel campaigns, repurpose existing content, and maintain tone consistency—without needing to prompt engineer or start from scratch each time.</p>
      <p>Because Kastor is designed around real content workflows, you’ll find it much faster and easier to get to the result you want. Once your voice and campaign setup are in place, Kastor does the heavy lifting—saving you countless iterations and helping you stay on brand at scale.</p>`
  },
  // {
  //   question: 'Will my content be used to train AI models?',
  //   answer: `<p>Kastor does not use your content to train its own AI models.</p><p>However, because your content is processed through third-party providers (like OpenAI and Anthropic), we cannot guarantee how those providers use or retain that data.</p><p>To protect your privacy, we strongly advise against uploading confidential or sensitive information to the platform.</p>`
  // },
  // {
  //   question: 'Is my content shared with third parties?',
  //   answer: `<p>Your content is not shared publicly or with other Kastor users. It is only shared with our AI technology partners as needed to generate the content you request.</p><p>Because these providers operate independently, we recommend treating all inputs as potentially visible to third-party systems, and avoiding submission of private or proprietary data.</p>`
  // }
]

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer.replace(/<[^>]+>/g, '') // Strip HTML for SEO
          }
        }))
      })
    }
  ]
})

</script>

<template>
  <v-container
    fluid
    class="faq-section py-16"
  >
    <div class="main-container">
      <h2 class="text-h3 text-center font-weight-black mb-12">Frequently Asked Questions</h2>
      <v-row justify="center">
        <v-col
          cols="12"
          lg="10"
        >
          <v-expansion-panels variant="accordion">
            <v-expansion-panel
              v-for="(faq, i) in faqs"
              :key="i"
              elevation="0"
              class="mb-4 faq-panel"
              rounded="lg"
            >
              <v-expansion-panel-title class="font-weight-bold text-body-1">
                {{ faq.question }}
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <div
                  class="text-body-1"
                  v-html="faq.answer"
                ></div>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<style scoped>
.faq-section {
  background-color: rgba(var(--v-theme-primary), 0.03);
}

.faq-panel {
  border: 1px solid rgba(var(--v-theme-primary), 0.15);
  transition: all 0.3s ease;
}

.faq-panel:hover {
  border-color: rgba(var(--v-theme-primary), 0.3);
}

:deep(.v-expansion-panel-title) {
  color: rgb(0, 66, 77);
}

:deep(.v-expansion-panel-title__icon) {
  color: rgb(var(--v-theme-primary));
}

@media (max-width: 600px) {
  :deep(.v-expansion-panel-title) {
    font-size: 1rem;
  }
}
</style>
