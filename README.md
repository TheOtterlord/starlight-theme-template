# Starlight Theme Template

Follow these steps to create your new Starlight theme.

- [ ] Update the package name, author, and URL in [packages/theme/package.json](packages/theme/package.json) and the [README](packages/theme/README.md), and remove `"private": true` from `package.json`.
- [ ] Update the dependency in [apps/docs/package.json](apps/docs/package.json) and [apps/docs/astro.config.ts](apps/docs/astro.config.ts) to your new theme package name.
- [ ] Update the [LICENSE](LICENSE) to include your name.
- [ ] Add your theme name/description/logos to the docs in [apps/docs/astro.config.ts](apps/docs/astro.config.ts).
- [ ] Add your custom styles to [packages/theme/styles/theme.css](packages/theme/styles/theme.css).
- [ ] Take a fancy screenshot of your theme and place it in [assets/preview.png](assets/preview.png)
- [ ] Add an `NPM_TOKEN` env variable to your GitHub repo.
- [ ] Deploy the docs to your favorite hosting provider.
- [ ] Run `pnpm changeset` and give your project a major bump for an initial release.
- [ ] Push/merge to main, and publish a release by merging the changeset PR.
- [ ] Delete this file, and run `ln -s packages/theme/README.md README2.md` to create a symlink to your package README, and share your theme with the world!
