
"use client";

/**
 * Browser-based assessment anti-cheat utility.
 * Note: Browser restrictions are deterrents, not foolproof security.
 */

export function setupAssessmentAntiCheat({
  onWarning = (message) => window.alert(message),
  onViolation = (message) => window.alert(message),
  maxFullscreenExits = 3,
  warnOnTabSwitch = true,
} = {}) {
  if (typeof window === "undefined") {
    return {
      startFullscreen: async () => false,
      cleanup: () => {},
    };
  }

  let fullscreenExits = 0;
  let tabSwitches = 0;
  let disposed = false;
  let violationReported = false;

  const isMac = /Mac|iPhone|iPad/i.test(navigator.platform);

  // Attempt fullscreen. Must normally be called from a user gesture.
  const startFullscreen = async () => {
    try {
      if (document.fullscreenElement) return true;

      const element = document.documentElement;

      if (element.requestFullscreen) {
        await element.requestFullscreen();
        return true;
      }

      onWarning("Fullscreen is not supported by this browser.");
      return false;
    } catch (error) {
      console.warn("Unable to enter fullscreen:", error);
      onWarning("Please click the Resume Fullscreen button to continue.");
      return false;
    }
  };

  // Warn whenever fullscreen is exited.
  const handleFullscreenChange = () => {
    if (disposed || document.fullscreenElement) return;

    fullscreenExits += 1;

    if (fullscreenExits < maxFullscreenExits) {
      onWarning(
        `Fullscreen exited! Warning ${fullscreenExits}/${maxFullscreenExits}. ` +
          "Please return to fullscreen."
      );
    } else {
      onViolation(
        `You exited fullscreen ${fullscreenExits} times. ` +
          "The assessment has reached its fullscreen violation limit."
      );
    }
  };

  // Block common developer-tools, copy and screenshot-related shortcuts.
  const handleKeyDown = (event) => {
    const key = event.key.toLowerCase();
    const ctrlOrCmd = isMac ? event.metaKey : event.ctrlKey;

    const devToolsShortcut =
      event.key === "F12" ||
      (ctrlOrCmd && event.shiftKey &&
        ["i", "j", "c"].includes(key)) ||
      (ctrlOrCmd && key === "u");

    const copyPasteShortcut =
      ctrlOrCmd && ["c", "x", "v", "a", "p", "s"].includes(key);

    const screenshotShortcut =
      event.key === "PrintScreen" ||
      (isMac && event.metaKey && event.shiftKey &&
        ["3", "4", "5"].includes(key)) ||
      (event.shiftKey && event.metaKey && key === "s");

    if (devToolsShortcut || copyPasteShortcut || screenshotShortcut) {
      event.preventDefault();
      event.stopPropagation();

      if (screenshotShortcut) {
        onWarning(
          "Screenshot shortcuts are restricted where detectable. " +
            "Operating-system screenshots cannot be reliably blocked."
        );
      }
    }
  };

  // Disable context menu.
  const handleContextMenu = (event) => {
    event.preventDefault();
  };

  // Disable clipboard actions on the assessment page.
  const handleCopy = (event) => event.preventDefault();
  const handleCut = (event) => event.preventDefault();
  const handlePaste = (event) => event.preventDefault();

  // Prevent dragging assessment content.
  const handleDragStart = (event) => event.preventDefault();

  // Detect switching to another tab or minimizing the window.
  const handleVisibilityChange = () => {
    if (disposed || !warnOnTabSwitch) return;

    if (document.hidden) {
      tabSwitches += 1;
      onWarning(
        `Tab switching detected (${tabSwitches}). Please remain on the assessment page.`
      );
    }
  };

  // Reduce accidental text selection on the assessment page.
  const handleSelectStart = (event) => {
    if (event.target.closest("button")) return;
    event.preventDefault();
  };

  document.addEventListener("fullscreenchange", handleFullscreenChange);
  document.addEventListener("keydown", handleKeyDown, true);
  document.addEventListener("contextmenu", handleContextMenu);
  document.addEventListener("copy", handleCopy);
  document.addEventListener("cut", handleCut);
  document.addEventListener("paste", handlePaste);
  document.addEventListener("dragstart", handleDragStart);
  document.addEventListener("visibilitychange", handleVisibilityChange);
  document.addEventListener("selectstart", handleSelectStart);

  const cleanup = () => {
    disposed = true;

    document.removeEventListener("fullscreenchange", handleFullscreenChange);
    document.removeEventListener("keydown", handleKeyDown, true);
    document.removeEventListener("contextmenu", handleContextMenu);
    document.removeEventListener("copy", handleCopy);
    document.removeEventListener("cut", handleCut);
    document.removeEventListener("paste", handlePaste);
    document.removeEventListener("dragstart", handleDragStart);
    document.removeEventListener("visibilitychange", handleVisibilityChange);
    document.removeEventListener("selectstart", handleSelectStart);
  };

  return {
    startFullscreen,
    cleanup,
    getFullscreenExitCount: () => fullscreenExits,
    getTabSwitchCount: () => tabSwitches,
  };
}
