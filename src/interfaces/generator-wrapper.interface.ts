export default interface IGeneratorWrapper<
	T = unknown,
	TReturn = any,
	TNext = unknown
> extends Generator {
	[Symbol.iterator]: () => Generator;
}
