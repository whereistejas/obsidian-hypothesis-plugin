import matter from "gray-matter"
import type { Article } from '~/models';

type FrontMatterContent = {
    title?: string;
    author?: string;
    url?: string;
}

export const frontMatterDocType = "hypothesis-highlights"

export const addFrontMatter = (markdownContent: string, article: Article) => {
    const frontMatter: FrontMatterContent = {
        title: article.metadata.title,
        author: article.metadata.author,
        url: article.metadata.url,
    };
    return matter.stringify(markdownContent, frontMatter);
}
