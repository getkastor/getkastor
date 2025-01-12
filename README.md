# Nuxt Minimal Starter


## Setup

Make sure to install dependencies:

```bash
# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# yarn
yarn dev
```

## Production

Build the application for production:

```bash
# yarn
yarn build
```

Locally preview production build:

```bash
# yarn
yarn preview
```

# Various tibits learned

## how to resize a video

this will resize the video to 800px wide and keep the aspect ratio

```bash
[clairebesset:~/kastor-lp] draftLP(+1/-1) ± ffmpeg -i ./public/kastor-demo.mp4 -filter:v scale=800:-1 -c:a copy ./public/kastor-demo-800.mp4
```

