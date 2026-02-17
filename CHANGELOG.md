# Changelog

## 2026-02-17 — Full Content Migration from WordPress

### Summary
Migrated all content from the old WordPress site (74.208.236.117) to the new static GitHub Pages site. Replaced AI-generated summaries with full original article text.

### Articles
- **85 articles** now available (up from 33)
- **53 new articles** added from the old WordPress archive
- **32 existing articles** replaced with full original text (previously AI-generated summaries at 30-60% of original length)
- 1 post skipped: "Featured Photographs" (gallery post, not an article)
- All articles now contain 100% original text from WordPress
- Categories assigned from WordPress taxonomy: Gujarat Violence, Farm Crisis, Environment, Human Rights, Climate Change, Globalization, Mumbai, People

### Pages Updated
- **About**: Restored full biography with complete Awards & Fellowships section (academic and journalism awards with links)
- **Book (Scarred)**: Restored full description with all critical reviews (Arundhati Roy, The Hindu, India Today, Tehelka, NDTV)
- **Contact**: Simplified to match old site (name, email, social links)

### Images
- **150+ new images** downloaded from the old WordPress site
- Images saved to ./images/ with original filenames
- Inline image references in articles updated to point to local ./images/ path

### Technical Changes
- Updated ARTICLES manifest in js/site.js (36 entries -> 85 entries)
- Article markdown files use frontmatter: title, date, categories, publication, description
- Old site archive preserved in ./old_site_archive/ for reference

### Slug Mappings (Old WordPress -> New Site)
- authors-note-for-the-book-scarred-experiments-with-violence-in-gujarat -> authors-note-scarred
- hounded-by-an-image-qutubuddin-ansari -> hounded-by-an-image
- i-want-the-case-to-be-reopened-zaheera -> zaheera-interview
- red-carpet-for-lions-red-card-for-people -> red-carpet-for-lions
- Various "-2" suffix slugs cleaned (e.g., cotton-aflame-2 -> cotton-aflame)
