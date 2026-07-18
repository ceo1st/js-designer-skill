'use strict';

const path = require('path');

const referencesRoot = path.resolve(__dirname, '..', 'references');

const referencePaths = {
  root: referencesRoot,
  readme: path.join(referencesRoot, 'README.md'),
  aipoch: {
    dir: path.join(referencesRoot, 'aipoch'),
    designSystem: path.join(referencesRoot, 'aipoch', 'AIPOCH-DESIGN-SYSTEM.md'),
    css1: path.join(referencesRoot, 'aipoch', 'aipoch-css1.css'),
    css2: path.join(referencesRoot, 'aipoch', 'aipoch-css2.css'),
  },
  cyberTaoist: {
    dir: path.join(referencesRoot, 'cyber-taoist'),
    real: path.join(referencesRoot, 'cyber-taoist', 'cyber-taoist-real.md'),
    characterPrompt: path.join(referencesRoot, 'cyber-taoist', 'cyber-taoist-character-prompt.md'),
  },
  openDesign: {
    dir: path.join(referencesRoot, 'open-design'),
    editorialMonocle: path.join(referencesRoot, 'open-design', 'open-design-editorial-monocle.md'),
  },
  youtubeThumbnail: {
    dir: path.join(referencesRoot, 'youtube-thumbnail'),
    system: path.join(referencesRoot, 'youtube-thumbnail', 'youtube-thumbnail-system.md'),
  },
  sketchnoteEditorial: {
    dir: path.join(referencesRoot, 'sketchnote-editorial'),
    design: path.join(referencesRoot, 'sketchnote-editorial', 'design.md'),
    samplesDir: path.join(referencesRoot, 'sketchnote-editorial', 'samples'),
    refOriginCover: path.join(
      referencesRoot,
      'sketchnote-editorial',
      'samples',
      'ref-origin-cover-kopadze-agents.jpg',
    ),
    refOriginInlineTable: path.join(
      referencesRoot,
      'sketchnote-editorial',
      'samples',
      'ref-origin-inline-spectrum-table.jpg',
    ),
  },
};

function resolveReference(...segments) {
  return path.join(referencesRoot, ...segments);
}

module.exports = {
  referencePaths,
  resolveReference,
  referencesRoot,
};
