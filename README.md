<div align="center">
  <img src="./docs/static/header.svg" alt="SvelteKit Starter for GitHub Pages" width="100%">
</div>

# SvelteKit Starter for GitHub Pages

A production-ready SvelteKit starter template configured for deployment to GitHub Pages with TypeScript and pnpm.

**Live Demo:** [https://sunwood-ai-labs.github.io/sveltekit-starter-gh-pages/](https://sunwood-ai-labs.github.io/sveltekit-starter-gh-pages/)

## Features

- ✅ **SvelteKit** - Modern Svelte framework with SSG
- ✅ **TypeScript** - Full type safety
- ✅ **Tailwind CSS v4** - Modern utility-first CSS framework
- ✅ **Glassmorphism Design** - Modern, elegant UI with particle effects
- ✅ **pnpm** - Fast, disk space efficient package manager
- ✅ **GitHub Actions** - Automated deployment pipeline
- ✅ **Static Adapter** - Optimized for GitHub Pages
- ✅ **Base Path Configuration** - Works in subdirectories
- ✅ **Real-time Performance Monitoring** - Live FPS and render metrics
- ✅ **Interactive Components** - Engine Dashboard with sliders and toggles

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
cd docs
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
│       └── deploy.yml              # GitHub Actions workflow
├── docs/                           # SvelteKit project (served as root by GitHub Pages)
│   ├── src/
│   │   ├── lib/
│   │   │   └── components/         # Reusable components
│   │   │       ├── Counter.svelte      # Interactive counter demo
│   │   │       ├── PathDisplay.svelte  # Path configuration display
│   │   │       ├── ParticleEffect.svelte    # Canvas particle animation
│   │   │       ├── EngineDashboard.svelte   # Interactive controls
│   │   │       └── PerformanceMonitor.svelte # Real-time metrics
│   │   ├── routes/
│   │   │   ├── about/              # About page
│   │   │   │   └── +page.svelte
│   │   │   ├── demo/               # Demo page
│   │   │   │   └── +page.svelte
│   │   │   ├── +error.svelte       # 404 page
│   │   │   ├── +layout.js          # Root layout config
│   │   │   ├── +layout.svelte      # Global layout with CSS import
│   │   │   └── +page.svelte        # Home page with dashboard
│   │   ├── app.css                 # Tailwind CSS v4 config & styles
│   │   └── app.html                # HTML template
│   ├── static/
│   │   └── .nojekyll              # Bypass Jekyll processing
│   ├── .gitignore
│   ├── package.json
│   ├── pnpm-lock.yaml
│   ├── svelte.config.js           # SvelteKit configuration
│   ├── tsconfig.json              # TypeScript configuration
│   └── vite.config.ts             # Vite + Tailwind configuration
└── README.md
```

## Configuration

### Base Path

The project uses the `docs/` folder structure, which GitHub Pages automatically serves as the root directory. The base path configuration is:

- **Development:** No base path (empty string)
- **Production:** `/sveltekit-starter-gh-pages/` (repository name)

> **Note:** The `docs/` folder is a special GitHub Pages directory that gets served as the site root, so the base path only needs to include the repository name.

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

All routes are prerendered via `docs/src/routes/+layout.js`:

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
1. Ensure `.nojekyll` file exists in `docs/static/` directory
2. Verify trailing slash is set to `'always'`
3. Check that `fallback: '404.html'` is configured

## Technology Stack

- **Framework:** [SvelteKit](https://kit.svelte.dev/) with Svelte 5
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Package Manager:** [pnpm](https://pnpm.io/)
- **Deployment:** [GitHub Actions](https://github.com/features/actions) + [GitHub Pages](https://pages.github.com/)
- **Adapter:** [@sveltejs/adapter-static](https://github.com/sveltejs/kit/tree/master/packages/adapter-static)

## Performance Benchmarks

This project demonstrates Svelte's exceptional performance characteristics:

### Bundle Size (Production Build)

| Metric | Size | Compressed (gzip) |
|--------|------|-------------------|
| **Total Build Size** | 244 KB | - |
| **Largest JS Bundle** | 25.54 KB | 10.06 KB |
| **Main App Entry** | 7.01 KB | 3.21 KB |
| **CSS (Total)** | 29.81 KB | 5.68 KB |

### Runtime Performance

The application includes a **real-time performance monitor** that tracks:

- **FPS (Frames Per Second)**: Consistently maintains 60+ FPS
- **Render Time**: Sub-millisecond component updates (typically < 0.5ms)
- **State Updates**: Tracked in real-time showing Svelte's reactivity speed
- **Memory Usage**: Lightweight heap usage (visible in Chrome/Edge DevTools)

### Why Svelte is Fast

1. **No Virtual DOM**: Svelte compiles components to efficient imperative code that surgically updates the DOM
2. **Small Bundle Size**: The entire framework runtime is minimal, with most work done at compile time
3. **Reactive by Design**: Svelte 5's runes (`$state()`) provide fine-grained reactivity without overhead
4. **Optimal Code Generation**: Build output is highly optimized with minimal runtime overhead

### Comparison with Other Frameworks

| Framework | Typical Bundle Size | Runtime Overhead | Update Speed |
|-----------|---------------------|------------------|--------------|
| **Svelte** | ~10-30 KB | Minimal (compile-time) | ⚡ Sub-millisecond |
| React | ~40-130 KB | Virtual DOM diffing | ~2-5ms |
| Vue | ~25-90 KB | Virtual DOM diffing | ~1-3ms |
| Angular | ~100-500 KB | Zone.js + Change Detection | ~3-8ms |

*Note: Bundle sizes vary based on application complexity. These are typical production builds for similar applications.*

### Live Performance Demo

Visit the [live demo](https://sunwood-ai-labs.github.io/sveltekit-starter-gh-pages/) to see:
- Interactive Engine Dashboard with real-time slider updates
- Live performance metrics display
- Smooth 60 FPS particle animations
- Instant state updates with no lag

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
