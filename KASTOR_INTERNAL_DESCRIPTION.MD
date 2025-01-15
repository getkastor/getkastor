# Kastor - AI-Powered Content Marketing Platform - Internal Documentation

## Overview

Kastor is an AI-powered content marketing platform designed for marketers, solopreneurs, and small companies. It streamlines the content creation process by allowing users to establish consistent brand voices across multiple content types and channels, while leveraging AI to generate high-quality content at scale.

## Target Audience
Solopreneurs, small business owners, and marketing teams that don't have time to create content for their social media channels, blog, and email marketing campaigns.
I suspect the smaller end of that target will try first but I don't want to deter larger companies from trying it out.

## Key Benefits

### Content Quality & Authenticity
- Create marketing content and social posts that sound authentically like you or your brand, not generic AI-generated content
- Maintain consistent voice and tone across all channels through carefully configured voice settings
- Scale your authentic voice across multiple content types without losing personality

### Time & Efficiency
- Turn one piece of content into multiple channel-specific formats automatically
- Generate full marketing campaigns in minutes instead of hours or days
- Create content in bulk while maintaining quality and consistency
- Skip the blank page - get high-quality first drafts instantly

### Flexibility & Control
- Maintain different voices for different purposes (corporate, executive, product-specific)
- Fine-tune content generation with specific guidelines and examples
- Get multiple options for each piece of content to choose from
- Keep full editorial control while automating the heavy lifting

### Strategic Value
- Coordinate multi-channel marketing campaigns with consistent messaging
- Ensure brand consistency across all team members creating content
- Scale content marketing efforts without scaling the team
- Maintain quality even during high-volume content needs (product launches, events, etc.)

## Core Concepts

### Voices
A voice represents a content style guide within Kastor. Users can create multiple voices for different purposes (e.g., corporate voice, executive voice).

Each voice consists of:
- General context (e.g., "I am the CEO of startup X")
- General guidelines (e.g., "never use emojis")
- Content type-specific settings for:
  - Twitter posts
  - LinkedIn posts
  - Blog posts
  - Marketing emails

For each content type, users must provide:
- At least one good example (recommended: 3 diverse examples to prevent pattern overfitting)
- Optional bad examples
- Optional additional guidelines
- Optional content type-specific context

### Content Types
Kastor currently supports four content types:
- Twitter posts
- LinkedIn posts
- Blog posts
- Marketing emails

### Company Profile
Users can optionally configure:
- Company name
- Company website
- Company description
- Products information:
  - Product name
  - Product description
  - Product pricing

## Content Creation

### Standalone Content
Users can create individual pieces of content through the following workflow:

1. Select content type
2. Choose a configured voice (must be set up for selected content type)
3. Select action:
   - Write about a topic
   - Promote content
   - Repurpose content
   - Promote product
4. Provide necessary inputs based on action:
   - Topic and additional instructions
   - Product details (select existing or enter new)
   - Content to promote/repurpose
5. Generate content
   - Twitter/LinkedIn: Generates 3 options
   - Blog posts/Marketing emails: Generates 2 options
   - Generation time: 30-60 seconds (longer for blog posts and emails)
6. Select final version (enables future repurposing/promotion)

### Campaigns
Campaigns allow users to create multiple pieces of related content around a single topic or goal.

Campaign creation workflow:

1. Create campaign brief:
   - Name
   - Action (same options as standalone content)
   - Topic/content/product details
   - Optional campaign context and guidelines

2. Set up assets:
   - Define content type and voice for each asset
   - Optional: Add asset role in campaign
   - Optional: Add additional instructions
   
3. Generate asset briefs:
   - Can generate roles and instructions for multiple assets simultaneously
   - Takes into account campaign brief
   - Can be done individually or in bulk

4. Generate content:
   - Same options as standalone content
   - Can generate multiple assets simultaneously
   - Select final versions individually

## Best Practices

### Voice Setup
- Provide 3 diverse examples for each content type to ensure variety
- Make guidelines specific and actionable
- Include both "do's" and "don'ts" when possible

### Content Generation
- Be specific with additional instructions
- Review and edit generated content before use
- Mark final versions to enable future repurposing

## Technical Notes

### Generation Times
- Short-form content (Twitter/LinkedIn): ~30 seconds
- Long-form content (Blog posts/Emails): ~60 seconds
- Times may vary based on system improvements

### Minimum Requirements
- Voice setup requires at least one good example per content type
- Campaign assets require content type and voice selection

## Future Features (Planned)

- Enhanced content calendar management
- Automatic campaign asset suggestion
- Asset scheduling capabilities
- Campaign date management
- Expanded content type support

## Usage Flow

1. Initial Setup
   - Configure company profile
   - Set up voices for required content types
   - Add product information if needed

2. Regular Usage
   - Generate standalone content as needed
   - Create campaigns for coordinated content efforts
   - Select and refine generated content
   - Mark final versions for future reference

This documentation will be expanded as new features are added and existing functionality is enhanced.