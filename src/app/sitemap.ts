import { behandlingar } from "../data/behandlingar"; // go up one level

export default function sitemap() {
    const baseUrl = "https://helochstark.se";

    // Static pages
    const staticPages = [
        "",
        "/ovrigt",
        "/aktuellt",
        "/om-helochstark",
        "/behandlingar",
    ];

    const staticEntries = staticPages.map((page) => ({
        url: `${baseUrl}${page}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: page === "" ? 1 : 0.7,
    }));

    // Dynamic treatment pages
    const behandlingEntries = behandlingar.map((b) => ({
        url: `${baseUrl}/behandlingar/${b.slug}`,
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 0.8,
    }));

    return [...staticEntries, ...behandlingEntries];
}
