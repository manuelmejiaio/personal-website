declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"blog": {
"2017/06/about-me-and-why-im-bloggingagain.md": {
	id: "2017/06/about-me-and-why-im-bloggingagain.md";
  slug: "2017/06/about-me-and-why-im-bloggingagain";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2017/06/logging-from-aspnet-core-with-elmahio.md": {
	id: "2017/06/logging-from-aspnet-core-with-elmahio.md";
  slug: "2017/06/logging-from-aspnet-core-with-elmahio";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2017/07/books-you-must-read-as-developer.md": {
	id: "2017/07/books-you-must-read-as-developer.md";
  slug: "2017/07/books-you-must-read-as-developer";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2017/08/webconfig-no-longer-exist-in-net-core.md": {
	id: "2017/08/webconfig-no-longer-exist-in-net-core.md";
  slug: "2017/08/webconfig-no-longer-exist-in-net-core";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2017/09/improve-your-skills-as-developer-with.md": {
	id: "2017/09/improve-your-skills-as-developer-with.md";
  slug: "2017/09/improve-your-skills-as-developer-with";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2017/10/letting-net-core-handle-client-routes.md": {
	id: "2017/10/letting-net-core-handle-client-routes.md";
  slug: "2017/10/letting-net-core-handle-client-routes";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2018/01/material-design-guidelinesthe-lighthouse.md": {
	id: "2018/01/material-design-guidelinesthe-lighthouse.md";
  slug: "2018/01/material-design-guidelinesthe-lighthouse";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2018/06/my-experience-adopting-vuejs-with-my.md": {
	id: "2018/06/my-experience-adopting-vuejs-with-my.md";
  slug: "2018/06/my-experience-adopting-vuejs-with-my";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2018/07/boilerplate-vuejs-aspnet-mvc-5.md": {
	id: "2018/07/boilerplate-vuejs-aspnet-mvc-5.md";
  slug: "2018/07/boilerplate-vuejs-aspnet-mvc-5";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2018/07/clean-code-even-under-pressure.md": {
	id: "2018/07/clean-code-even-under-pressure.md";
  slug: "2018/07/clean-code-even-under-pressure";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2018/11/vuejs-google-sign-in-button.md": {
	id: "2018/11/vuejs-google-sign-in-button.md";
  slug: "2018/11/vuejs-google-sign-in-button";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2019/01/get-comfortable-with-being_4.md": {
	id: "2019/01/get-comfortable-with-being_4.md";
  slug: "2019/01/get-comfortable-with-being_4";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2019/10/github-pages-vue-cli-3.md": {
	id: "2019/10/github-pages-vue-cli-3.md";
  slug: "2019/10/github-pages-vue-cli-3";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2019/11/vueconf-toronto-2019-my-experience.md": {
	id: "2019/11/vueconf-toronto-2019-my-experience.md";
  slug: "2019/11/vueconf-toronto-2019-my-experience";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2020/01/key-people-to-follow-in-vue-world.md": {
	id: "2020/01/key-people-to-follow-in-vue-world.md";
  slug: "2020/01/key-people-to-follow-in-vue-world";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2020/03/tailwind-vue.md": {
	id: "2020/03/tailwind-vue.md";
  slug: "2020/03/tailwind-vue";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2020/08/lets-talk-about-web-accessibility.md": {
	id: "2020/08/lets-talk-about-web-accessibility.md";
  slug: "2020/08/lets-talk-about-web-accessibility";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2021/06/a-closer-look-at-pair-programming.md": {
	id: "2021/06/a-closer-look-at-pair-programming.md";
  slug: "2021/06/a-closer-look-at-pair-programming";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2024/07/the-micro-frontend-orchestrator-single.md": {
	id: "2024/07/the-micro-frontend-orchestrator-single.md";
  slug: "2024/07/the-micro-frontend-orchestrator-single";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2025/10/my-productivity-stack-in-age-of-ai.md": {
	id: "2025/10/my-productivity-stack-in-age-of-ai.md";
  slug: "2025/10/my-productivity-stack-in-age-of-ai";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2026/02/whats-actually-happening-inside-llm.md": {
	id: "2026/02/whats-actually-happening-inside-llm.md";
  slug: "2026/02/whats-actually-happening-inside-llm";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("./../../src/content/config.js");
}
