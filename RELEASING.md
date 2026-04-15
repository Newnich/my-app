# Releasing

## Standard Flow

1. Make your code changes.
2. Run checks:

```bash
npm test
npm run coverage
```

3. Commit your changes:

```bash
git add .
git commit -m "Describe the release changes"
```

4. Bump the package version:

```bash
npm version patch
```

Use `minor` for backward-compatible features and `major` for breaking changes.

5. Publish to npm:

```bash
npm publish
```

6. Push branch and tags:

```bash
git push origin main --tags
```

## Sanity Checks

```bash
npm pack --dry-run
npm view newnich-my-app version
git status
```
