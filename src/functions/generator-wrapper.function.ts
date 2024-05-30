import type IGeneratorWrapper from "../interfaces/generator-wrapper.interface";
export default function generatorWrapper<
	T = unknown,
	TReturn = any,
	TNext = unknown
>(generator: Generator): IGeneratorWrapper<T, TReturn, TNext> {
	generator[Symbol.iterator] = () => generator;
	return generator as IGeneratorWrapper<T, TReturn, TNext>;
}
