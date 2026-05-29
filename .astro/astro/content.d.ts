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
		"articles": {
"a-practical-cable-machines-gift-guide.md": {
	id: "a-practical-cable-machines-gift-guide.md";
  slug: "a-practical-cable-machines-gift-guide";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"a-practical-cardio-machines-gift-guide-3.md": {
	id: "a-practical-cardio-machines-gift-guide-3.md";
  slug: "a-practical-cardio-machines-gift-guide-3";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"a-practical-resistance-bands-gift-guide-2.md": {
	id: "a-practical-resistance-bands-gift-guide-2.md";
  slug: "a-practical-resistance-bands-gift-guide-2";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"barbells-buying-mistakes-to-avoid.md": {
	id: "barbells-buying-mistakes-to-avoid.md";
  slug: "barbells-buying-mistakes-to-avoid";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"best-adjustable-dumbbells-for-home-gym.md": {
	id: "best-adjustable-dumbbells-for-home-gym.md";
  slug: "best-adjustable-dumbbells-for-home-gym";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"best-dumbbells-upgrades-for-small-spaces.md": {
	id: "best-dumbbells-upgrades-for-small-spaces.md";
  slug: "best-dumbbells-upgrades-for-small-spaces";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"best-gym-flooring-upgrades-for-small-spaces-3.md": {
	id: "best-gym-flooring-upgrades-for-small-spaces-3.md";
  slug: "best-gym-flooring-upgrades-for-small-spaces-3";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"best-pull-up-bars-upgrades-for-small-spaces-2.md": {
	id: "best-pull-up-bars-upgrades-for-small-spaces-2.md";
  slug: "best-pull-up-bars-upgrades-for-small-spaces-2";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"budget-versus-premium-barbells-what-actually-matters-2.md": {
	id: "budget-versus-premium-barbells-what-actually-matters-2.md";
  slug: "budget-versus-premium-barbells-what-actually-matters-2";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"budget-versus-premium-benches-what-actually-matters.md": {
	id: "budget-versus-premium-benches-what-actually-matters.md";
  slug: "budget-versus-premium-benches-what-actually-matters";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"budget-versus-premium-gym-accessories-what-actually-matters-3.md": {
	id: "budget-versus-premium-gym-accessories-what-actually-matters-3.md";
  slug: "budget-versus-premium-gym-accessories-what-actually-matters-3";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"cable-machines-buying-mistakes-to-avoid-3.md": {
	id: "cable-machines-buying-mistakes-to-avoid-3.md";
  slug: "cable-machines-buying-mistakes-to-avoid-3";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"dumbbells-setup-checklist-for-beginners-3.md": {
	id: "dumbbells-setup-checklist-for-beginners-3.md";
  slug: "dumbbells-setup-checklist-for-beginners-3";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"gym-accessories-buying-mistakes-to-avoid-2.md": {
	id: "gym-accessories-buying-mistakes-to-avoid-2.md";
  slug: "gym-accessories-buying-mistakes-to-avoid-2";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"gym-flooring-essentials-for-weekend-projects.md": {
	id: "gym-flooring-essentials-for-weekend-projects.md";
  slug: "gym-flooring-essentials-for-weekend-projects";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"how-to-compare-dumbbells-before-you-buy-2.md": {
	id: "how-to-compare-dumbbells-before-you-buy-2.md";
  slug: "how-to-compare-dumbbells-before-you-buy-2";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"how-to-compare-power-racks-before-you-buy.md": {
	id: "how-to-compare-power-racks-before-you-buy.md";
  slug: "how-to-compare-power-racks-before-you-buy";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"how-to-compare-pull-up-bars-before-you-buy-3.md": {
	id: "how-to-compare-pull-up-bars-before-you-buy-3.md";
  slug: "how-to-compare-pull-up-bars-before-you-buy-3";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"kettlebells-essentials-for-weekend-projects-3.md": {
	id: "kettlebells-essentials-for-weekend-projects-3.md";
  slug: "kettlebells-essentials-for-weekend-projects-3";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"kettlebells-setup-checklist-for-beginners.md": {
	id: "kettlebells-setup-checklist-for-beginners.md";
  slug: "kettlebells-setup-checklist-for-beginners";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"power-racks-setup-checklist-for-beginners-2.md": {
	id: "power-racks-setup-checklist-for-beginners-2.md";
  slug: "power-racks-setup-checklist-for-beginners-2";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"storage-and-maintenance-tips-for-benches-3.md": {
	id: "storage-and-maintenance-tips-for-benches-3.md";
  slug: "storage-and-maintenance-tips-for-benches-3";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"storage-and-maintenance-tips-for-cardio-machines-2.md": {
	id: "storage-and-maintenance-tips-for-cardio-machines-2.md";
  slug: "storage-and-maintenance-tips-for-cardio-machines-2";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"storage-and-maintenance-tips-for-resistance-bands.md": {
	id: "storage-and-maintenance-tips-for-resistance-bands.md";
  slug: "storage-and-maintenance-tips-for-resistance-bands";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"the-quiet-features-that-make-barbells-easier-to-use-3.md": {
	id: "the-quiet-features-that-make-barbells-easier-to-use-3.md";
  slug: "the-quiet-features-that-make-barbells-easier-to-use-3";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"the-quiet-features-that-make-benches-easier-to-use-2.md": {
	id: "the-quiet-features-that-make-benches-easier-to-use-2.md";
  slug: "the-quiet-features-that-make-benches-easier-to-use-2";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"the-quiet-features-that-make-cardio-machines-easier-to-use.md": {
	id: "the-quiet-features-that-make-cardio-machines-easier-to-use.md";
  slug: "the-quiet-features-that-make-cardio-machines-easier-to-use";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"weight-plates-essentials-for-weekend-projects-2.md": {
	id: "weight-plates-essentials-for-weekend-projects-2.md";
  slug: "weight-plates-essentials-for-weekend-projects-2";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"when-to-replace-your-kettlebells-gear-2.md": {
	id: "when-to-replace-your-kettlebells-gear-2.md";
  slug: "when-to-replace-your-kettlebells-gear-2";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"when-to-replace-your-power-racks-gear-3.md": {
	id: "when-to-replace-your-power-racks-gear-3.md";
  slug: "when-to-replace-your-power-racks-gear-3";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"when-to-replace-your-weight-plates-gear.md": {
	id: "when-to-replace-your-weight-plates-gear.md";
  slug: "when-to-replace-your-weight-plates-gear";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
};
"authors": {
"dana-wolff.md": {
	id: "dana-wolff.md";
  slug: "dana-wolff";
  body: string;
  collection: "authors";
  data: InferEntrySchema<"authors">
} & { render(): Render[".md"] };
"eli-rowe.md": {
	id: "eli-rowe.md";
  slug: "eli-rowe";
  body: string;
  collection: "authors";
  data: InferEntrySchema<"authors">
} & { render(): Render[".md"] };
"marcus-chen.md": {
	id: "marcus-chen.md";
  slug: "marcus-chen";
  body: string;
  collection: "authors";
  data: InferEntrySchema<"authors">
} & { render(): Render[".md"] };
"marcus-webb.md": {
	id: "marcus-webb.md";
  slug: "marcus-webb";
  body: string;
  collection: "authors";
  data: InferEntrySchema<"authors">
} & { render(): Render[".md"] };
"nate-brennan.md": {
	id: "nate-brennan.md";
  slug: "nate-brennan";
  body: string;
  collection: "authors";
  data: InferEntrySchema<"authors">
} & { render(): Render[".md"] };
"rosa-linden.md": {
	id: "rosa-linden.md";
  slug: "rosa-linden";
  body: string;
  collection: "authors";
  data: InferEntrySchema<"authors">
} & { render(): Render[".md"] };
};
"pillars": {
"cardio-equipment-buyers-guide.md": {
	id: "cardio-equipment-buyers-guide.md";
  slug: "cardio-equipment-buyers-guide";
  body: string;
  collection: "pillars";
  data: InferEntrySchema<"pillars">
} & { render(): Render[".md"] };
"home-gym-setup-guide.md": {
	id: "home-gym-setup-guide.md";
  slug: "home-gym-setup-guide";
  body: string;
  collection: "pillars";
  data: InferEntrySchema<"pillars">
} & { render(): Render[".md"] };
"progressive-overload-tracking-guide.md": {
	id: "progressive-overload-tracking-guide.md";
  slug: "progressive-overload-tracking-guide";
  body: string;
  collection: "pillars";
  data: InferEntrySchema<"pillars">
} & { render(): Render[".md"] };
};
"products": {
"b00h1xjmj4-resistance-bands-set-5-levels.md": {
	id: "b00h1xjmj4-resistance-bands-set-5-levels.md";
  slug: "b00h1xjmj4-resistance-bands-set-5-levels";
  body: string;
  collection: "products";
  data: InferEntrySchema<"products">
} & { render(): Render[".md"] };
"b00y5hjruy-trx-all-in-one-suspension-trainer.md": {
	id: "b00y5hjruy-trx-all-in-one-suspension-trainer.md";
  slug: "b00y5hjruy-trx-all-in-one-suspension-trainer";
  body: string;
  collection: "products";
  data: InferEntrySchema<"products">
} & { render(): Render[".md"] };
"b01n7f38j4-manduka-pro-yoga-mat-6mm.md": {
	id: "b01n7f38j4-manduka-pro-yoga-mat-6mm.md";
  slug: "b01n7f38j4-manduka-pro-yoga-mat-6mm";
  body: string;
  collection: "products";
  data: InferEntrySchema<"products">
} & { render(): Render[".md"] };
"b07flzfzz9-garmin-forerunner-245-gps.md": {
	id: "b07flzfzz9-garmin-forerunner-245-gps.md";
  slug: "b07flzfzz9-garmin-forerunner-245-gps";
  body: string;
  collection: "products";
  data: InferEntrySchema<"products">
} & { render(): Render[".md"] };
"b0863xm3rq-bowflex-selecttech-552-dumbbells.md": {
	id: "b0863xm3rq-bowflex-selecttech-552-dumbbells.md";
  slug: "b0863xm3rq-bowflex-selecttech-552-dumbbells";
  body: string;
  collection: "products";
  data: InferEntrySchema<"products">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
