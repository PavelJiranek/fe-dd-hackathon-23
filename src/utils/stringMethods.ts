export function pathnameToArray(str: string): { original: string; modified: string }[] {
    const parts = str.split("/").filter((part) => part !== "");

    const result = parts.map((part) => {
        const modified = part.replace(/[_-]/g, " ");
        return { original: part, modified };
    });

    return result;
}

export function substringToEnd(str: string, substring: string): string {
    const index = str.indexOf(substring);

    if (index !== -1) {
        return str.slice(0, index + substring.length);
    }

    return "#"; // Return null if the substring is not found in the original string
}
