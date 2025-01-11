<h1 align="center">
  Starlight Theme Template
</h1>

![Starlight theme preview](https://raw.githubusercontent.com/TheOtterlord/starlight-theme-template/refs/heads/main/assets/preview.png)

## Usage

1. Install the theme package to your project with your preferred package manager:

```sh
npm install starlight-theme-template
pnpm add starlight-theme-template
yarn add starlight-theme-template
```

2. Add the theme to your Starlight config.

```ts
import theme from "starlight-theme-template";

export default defineConfig({
  // ...
  integrations: [
    starlight({
      // ...
      plugins: [
        theme()
      ]
    })
  ]
})
```
