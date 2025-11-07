export interface PixelfedEntry {
  id: string[];
  title: string[];
  updated: string[];
  author: {
    name: string[];
    uri: string[];
  }[];
  content: {
    _: string;
    $: {
      type: string;
    };
  }[];
  link: {
    $: {
      rel: string;
      href: string;
    };
  }[];
  summary: {
    _: string;
    $: {
      type: string;
    };
  }[];
  "media:content": {
    $: {
      url: string;
      type: string;
      medium: string;
    };
  }[];
}
