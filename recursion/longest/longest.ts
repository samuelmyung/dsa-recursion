import { LLNodeStr } from "../common/ll";

/** longest: return length of longest word in a linked list of words. */

//store length prop (5) ^
//length === highest    v

function longest(words: LLNodeStr | null): number {
  if (!words) {
    return 0;
  }

  return Math.max(words.val.length, longest(words.next));
}

export { longest };
