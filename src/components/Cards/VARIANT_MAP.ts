import { Classic } from "./Classic";
import { Minimalist } from "./Minimalist";
import { Modern } from "./Modern";
import { Badge } from "./Badge";
import { Striped } from "./Striped";
import { Outline } from "./Outline";

export const VARIANT_MAP = {
  classic: Classic,
  modern: Modern,
  minimal: Minimalist,
  badge: Badge,
  striped: Striped,
  outline: Outline,
} as const;
