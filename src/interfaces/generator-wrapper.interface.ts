export default interface IGeneratorWrapper<
	T = unknown,
	TReturn = any,
	TNext = unknown
> extends Generator<T, TReturn, TNext> {
	[Symbol.iterator]: () => Generator<T, TReturn, TNext>;
}
