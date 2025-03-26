<!-- components/landingpage/FAQ.vue -->
<script setup lang="ts">
interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'What content types can Kastor create?',
    answer: 'Kastor supports LinkedIn posts, tweets, blog posts, marketing emails, and full campaigns. You can generate content in seconds for one channel or orchestrate multi-asset campaigns across several.'
  },
  {
    question: 'Can I use Kastor to repurpose existing content?',
    answer: 'Yes. Kastor can take a blog post, tweet, or announcement and turn it into fresh content for other platforms. Just choose "repurpose content" when creating your brief.'
  },
  {
    question: 'Can I use Kastor on mobile?',
    answer: 'Yes. Kastor is fully responsive and works in any modern mobile browser. You can access the full platform from your phone or tablet.'
  },
  {
    question: 'Does Kastor support different tones of voice (e.g., casual vs. professional)?',
    answer: `Absolutely. You can create multiple "voices" to match different tones—whether it’s casual, formal, or promotional.<br>

Each voice also includes both general settings and channel-specific configurations (like separate examples and guidelines for Twitter, LinkedIn, email, and blog). That means your brand can adapt its tone across platforms while staying consistent overall.<br>

And if needed, you can still adjust the tone or provide specific guidance for any individual piece of content—so you stay in control without starting from scratch.`
  },
  {
    question: 'What AI does Kastor use?',
    answer: 'Kastor uses advanced language models (LLMs) from OpenAI, Anthropic, and other top providers. We choose the best model for the task, so you get high-quality, relevant content every time.'
  },
  {
    question: 'How is Kastor different from ChatGPT or other AI writing tools?',
    answer: `Unlike general-purpose AI tools, Kastor is purpose-built for content marketing. It lets you define and manage brand voices, generate multi-channel campaigns, repurpose existing content, and maintain tone consistency—without needing to prompt engineer or start from scratch each time.<br>
    Because Kastor is designed around real content workflows, you’ll find it much faster and easier to get to the result you want. Once your voice and campaign setup are in place, Kastor does the heavy lifting—saving you countless iterations and helping you stay on brand at scale.`
  },
  {
    question: 'Will my content be used to train AI models?',
    answer: 'Kastor does not use your content to train its own models. However, your content is processed through third-party AI providers (such as OpenAI and Anthropic), and we cannot fully control how those providers handle training. For this reason, we strongly recommend not uploading confidential, sensitive, or proprietary information to Kastor.'
  },
  {
    question: 'Is my content shared with third parties?',
    answer: 'Your content is shared only with our AI technology providers for the sole purpose of generating content. It is not shared publicly or with other users. However, because your content is processed by external providers, we advise caution and recommend avoiding the submission of sensitive or private information.'
  }
];
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
                <p
                  class="text-body-1"
                  v-html="faq.answer"
                ></p>
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
