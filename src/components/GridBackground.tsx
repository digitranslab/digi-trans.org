/**
 * GridBackground - Simplified
 *
 * Previously rendered falling animated lines and a dot pattern as a global background.
 * Now returns null because every page has its own floating gradient orbs and grid overlay
 * in the hero section, making the global background redundant and a source of visual noise.
 *
 * Retained as a component (returning null) so App.tsx doesn't need modification.
 */
export default function GridBackground() {
  return null;
}
