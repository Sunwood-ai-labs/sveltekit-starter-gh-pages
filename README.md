# SvelteKit Starter for GitHub Pages

A production-ready SvelteKit starter template configured for deployment to GitHub Pages with TypeScript and pnpm.

**Live Demo:** [https://sunwood-ai-labs.github.io/sveltekit-starter-gh-pages/](https://sunwood-ai-labs.github.io/sveltekit-starter-gh-pages/)

## Features

- ✅ **SvelteKit** - Modern Svelte framework with SSG
- ✅ **TypeScript** - Full type safety
- ✅ **pnpm** - Fast, disk space efficient package manager
- ✅ **GitHub Actions** - Automated deployment pipeline
- ✅ **Static Adapter** - Optimized for GitHub Pages
- ✅ **Base Path Configuration** - Works in subdirectories
- ✅ **Demo Content** - Example pages and components

## Getting Started

### Prerequisites

- Node.js 18 or higher
- pnpm 10 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/Sunwood-ai-labs/sveltekit-starter-gh-pages.git
cd sveltekit-starter-gh-pages

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Development

```bash
# Start dev server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Type checking
pnpm check

# Type checking with watch mode
pnpm check:watch
```

## Deployment

This project is configured for automatic deployment to GitHub Pages via GitHub Actions.

### Initial Setup

1. **Enable GitHub Pages:**
   - Go to repository Settings > Pages
   - Source: Select "GitHub Actions"

2. **Push to main branch:**
   ```bash
   git push origin main
   ```

The GitHub Actions workflow will automatically build and deploy your site.

### Custom Repository

If you fork or clone this template for your own repository:

1. **Update `svelte.config.js`:**
   ```javascript
   paths: {
     base: process.env.NODE_ENV === 'production' ? '/your-repo-name' : ''
   }
   ```

2. **Update links in README and demo content**

## Project Structure

```
sveltekit-starter-gh-pages/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── src/
│   ├── lib/
│   │   └── components/         # Reusable components
│   │       ├── Counter.svelte
│   │       └── PathDisplay.svelte
│   └── routes/
│       ├── about/              # About page
│       │   └── +page.svelte
│       ├── demo/               # Demo page
│       │   └── +page.svelte
│       ├── +error.svelte       # 404 page
│       ├── +layout.js          # Root layout config
│       └── +page.svelte        # Home page
├── static/
│   └── .nojekyll              # Bypass Jekyll processing
├── .gitignore
├── package.json
├── pnpm-lock.yaml
├── svelte.config.js           # SvelteKit configuration
├── tsconfig.json              # TypeScript configuration
└── vite.config.js             # Vite configuration
```

## Configuration

### Base Path

The project is configured to work in a subdirectory (`/sveltekit-starter-gh-pages/`) on GitHub Pages:

- **Development:** No base path (empty string)
- **Production:** `/sveltekit-starter-gh-pages/`

All internal links use the `base` import from `$app/paths`:

```svelte
<script>
  import { base } from '$app/paths';
</script>

<a href="{base}/about/">About</a>
```

### Adapter Configuration

Uses `@sveltejs/adapter-static` with:
- `fallback: '404.html'` - SPA routing support
- `precompress: false` - No precompression
- `strict: true` - All routes must be prerenderable

### Prerendering

All routes are prerendered via `src/routes/+layout.js`:

```javascript
export const prerender = true;
export const trailingSlash = 'always';
```

## Troubleshooting

### Base Path Issues

If links don't work after deployment:
1. Verify `paths.base` in `svelte.config.js` matches your repository name
2. Ensure all links use `{base}` prefix
3. Check GitHub Pages settings use "GitHub Actions" as source

### Build Failures

If the GitHub Actions workflow fails:
1. Check the workflow logs in the Actions tab
2. Verify all routes are prerenderable
3. Test locally with `pnpm build`

### 404 Errors

If you get 404 errors on GitHub Pages:
1. Ensure `.nojekyll` file exists in `static/` directory
2. Verify trailing slash is set to `'always'`
3. Check that `fallback: '404.html'` is configured

## Technology Stack

- **Framework:** [SvelteKit](https://kit.svelte.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Package Manager:** [pnpm](https://pnpm.io/)
- **Deployment:** [GitHub Actions](https://github.com/features/actions) + [GitHub Pages](https://pages.github.com/)
- **Adapter:** [@sveltejs/adapter-static](https://github.com/sveltejs/kit/tree/master/packages/adapter-static)

## Resources

- [SvelteKit Documentation](https://kit.svelte.dev/docs)
- [Adapter Static Documentation](https://svelte.dev/docs/kit/adapter-static)
- [GitHub Pages Documentation](https://docs.github.com/pages)
- [pnpm Documentation](https://pnpm.io/)

## License

MIT

## Contributing

Contributions welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ using SvelteKit and deployed on GitHub Pages
