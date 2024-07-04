import { Screenshot as TScreenshot } from "../api/screenshot/Screenshot";

export const SCREENSHOT_TITLE_FIELD = "screenshotUrl";

export const ScreenshotTitle = (record: TScreenshot): string => {
  return record.screenshotUrl?.toString() || String(record.id);
};
