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

## how to create a favicon.ico file
Apparently that's what the favicon needs to be called in nuxt. 
browsers will automatically select the most appropriate size from this file
install imagemagick

```bash
brew install imagemagick
```

take a source svg large enough (I took 280x208, it matters surprisignly) then run this command.
Remove these arguments if you don't need background transparency:
-background transparent -transparent white

"-transparent white" is important


```bash
magick "your-svg-name.svg" -background transparent -transparent white -define icon:auto-resize=256,128,64,48,32,16 "favicon.ico"
```